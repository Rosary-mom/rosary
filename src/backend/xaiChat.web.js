// Backend-Webmodul: Grok-Chat "Daily Green" für die Think-Tank-Seite
// Ersetzt die fehlerhafte lose Datei "GROK-chat" im Repo-Root (die bleibt unverändert liegen).
//
// Warum .web.js statt .jsw: Wix hat .jsw-Webmodule abgekündigt (neue .jsw-Dateien
// lassen sich bald nicht mehr anlegen). Quelle:
// https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/web-modules/about-web-modules
//
// Secret: Der API-Schlüssel liegt NUR im Wix Secrets Manager unter dem Namen XAI_API_KEY.
// wix-secrets-backend.getSecret ist abgekündigt, daher secrets.getSecretValue (v2) mit elevate.
// Quelle: https://dev.wix.com/docs/velo/apis/wix-secrets-backend-v2/secrets/get-secret-value
//
// xAI-API: Responses-Endpunkt (laut docs.x.ai der bevorzugte Weg) mit store:false,
// damit xAI Eingaben und Antworten NICHT für spätere Abrufe speichert.
// Quelle: https://docs.x.ai/docs/guides/chat ("Disable storing previous request/response on server")
// Modell laut https://docs.x.ai/docs/models (Stand 10.11.2026): Empfehlung für Chat = grok-4.7.

import { Permissions, webMethod } from 'wix-web-module';
import { secrets } from 'wix-secrets-backend.v2';
import { elevate } from 'wix-auth';
import { fetch } from 'wix-fetch';

const XAI_MODEL = 'grok-4.7';
const XAI_URL = 'https://api.x.ai/v1/responses';
const SECRET_NAME = 'XAI_API_KEY';
const MAX_INPUT_CHARS = 1000;
const MAX_OUTPUT_TOKENS = 800;

const SYSTEM_PROMPT = [
    'Du bist "Daily Green", ein freundlicher, deutschsprachiger Berater für Umwelt und Natur im Alltag.',
    'Du orientierst dich an der Ordnungstherapie bzw. "ordentlichen Lebensführung" nach Sebastian Kneipp',
    'und ihren fünf Säulen: Wasser, Bewegung, Ernährung, Heilpflanzen und Lebensordnung (Balance).',
    'Du gibst praktische, alltagstaugliche Anregungen: Zeit im Grünen, umweltfreundliche Wege und Mobilität,',
    'saisonale und regionale Ernährung, Wasser bewusst nutzen, Tagesrhythmus und Ruhe, Pflanzen im Garten und auf dem Balkon.',
    'Antworte kurz (höchstens etwa 150 Wörter), klar und in einfacher Sprache, per du.',
    'Wichtig: Du stellst KEINE medizinischen Diagnosen und gibst KEINE Behandlungs-, Dosierungs- oder Therapieanweisungen.',
    'Kneipp-Anwendungen wie Güsse oder Heilpflanzen erwähnst du nur allgemein.',
    'Wenn jemand Beschwerden, Krankheiten, Schwangerschaft oder Medikamente erwähnt, verweise freundlich an eine Ärztin oder einen Arzt',
    'bzw. Apotheke, und bei Notfällen auf den Notruf 112.',
    'Frage nicht nach persönlichen oder gesundheitlichen Daten und bitte Nutzer, solche Daten nicht einzugeben.',
].join(' ');

const elevatedGetSecretValue = elevate(secrets.getSecretValue);

function extractText(data) {
    if (!data) return '';
    if (typeof data.output_text === 'string' && data.output_text) return data.output_text;
    const parts = [];
    (Array.isArray(data.output) ? data.output : []).forEach((item) => {
        if (item && item.type === 'message' && Array.isArray(item.content)) {
            item.content.forEach((c) => {
                if (c && c.type === 'output_text' && typeof c.text === 'string') parts.push(c.text);
            });
        }
    });
    return parts.join('\n').trim();
}

export const sendMessageToXAI = webMethod(Permissions.Anyone, async (message) => {
    const text = (typeof message === 'string' ? message : '').trim();
    if (!text) {
        return { ok: false, answer: 'Bitte gib zuerst eine Frage ein.' };
    }
    if (text.length > MAX_INPUT_CHARS) {
        return { ok: false, answer: `Deine Frage ist zu lang. Bitte höchstens ${MAX_INPUT_CHARS} Zeichen.` };
    }

    let apiKey;
    try {
        apiKey = await elevatedGetSecretValue(SECRET_NAME);
    } catch (err) {
        console.error('Daily Green: Secret fehlt oder nicht lesbar:', err && err.message);
        return { ok: false, answer: 'Der Chat ist gerade nicht eingerichtet. Bitte später noch einmal versuchen.' };
    }
    if (!apiKey) {
        return { ok: false, answer: 'Der Chat ist gerade nicht eingerichtet. Bitte später noch einmal versuchen.' };
    }

    const body = {
        model: XAI_MODEL,
        instructions: SYSTEM_PROMPT,
        input: [{ role: 'user', content: text }],
        store: false,
        max_output_tokens: MAX_OUTPUT_TOKENS,
    };

    try {
        const response = await fetch(XAI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            // Nur Statuscode loggen, niemals die Nutzereingabe oder den Schlüssel.
            console.error('Daily Green: xAI-Fehler, HTTP', response.status);
            return { ok: false, answer: 'Daily Green ist gerade nicht erreichbar. Bitte später noch einmal versuchen.' };
        }
        const data = await response.json();
        const answer = extractText(data);
        if (!answer) {
            return { ok: false, answer: 'Es kam leider keine Antwort zurück. Bitte formuliere die Frage anders.' };
        }
        return { ok: true, answer };
    } catch (err) {
        console.error('Daily Green: Netzwerkfehler:', err && err.message);
        return { ok: false, answer: 'Daily Green ist gerade nicht erreichbar. Bitte später noch einmal versuchen.' };
    }
});
