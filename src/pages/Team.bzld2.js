// Think-Tank-Seite (Seitencode). API Reference: https://www.wix.com/velo/reference/api-overview/introduction
//
// Erwartete Element-IDs (im Wix-Editor rechts im ID-Feld vergeben):
//   #grokInput   – Texteingabe (Text Input oder Text Box) für die Frage
//   #grokSend    – Button "Fragen"
//   #grokAnswer  – Textelement für die Antwort
//   #grokHinweis – Textelement mit dem Datenschutzhinweis
// Fehlt ein Element, läuft die Seite trotzdem weiter (kein Absturz).

import { sendMessageToXAI } from 'backend/xaiChat.web';

const MAX_INPUT_CHARS = 1000;

const HINWEIS_TEXT =
    'Datenschutzhinweis: Deine Frage wird zur Beantwortung an den KI-Dienst xAI (Grok) übermittelt ' +
    'und von uns nicht gespeichert. Bitte gib keine persönlichen oder gesundheitlichen Daten ein. ' +
    'Daily Green ersetzt keine ärztliche Beratung. Bei Beschwerden wende dich an deine Ärztin oder deinen Arzt.';

function el(id) {
    try {
        const e = $w(id);
        // $w liefert bei fehlenden IDs ein leeres Objekt ohne Typ.
        return e && e.type ? e : null;
    } catch (err) {
        return null;
    }
}

function setText(e, value) {
    if (e && 'text' in e) e.text = value;
}

$w.onReady(function () {
    const input = el('#grokInput');
    const send = el('#grokSend');
    const answer = el('#grokAnswer');
    const hinweis = el('#grokHinweis');

    setText(hinweis, HINWEIS_TEXT);

    if (!input || !send || !answer) {
        console.warn('Daily Green: Chat-Elemente fehlen (#grokInput, #grokSend, #grokAnswer). Chat deaktiviert.');
        return;
    }

    try {
        if ('maxLength' in input) input.maxLength = MAX_INPUT_CHARS;
        if ('placeholder' in input && !input.placeholder) {
            input.placeholder = 'Frag Daily Green, z. B.: Wie bringe ich mehr Grün in meinen Alltag?';
        }
    } catch (err) {
        // Eigenschaft nicht unterstützt – ignorieren.
    }

    let busy = false;
    const ask = async () => {
        if (busy) return;
        const frage = String(input.value || '').trim();
        if (!frage) {
            setText(answer, 'Bitte gib zuerst eine Frage ein.');
            return;
        }
        busy = true;
        if (send.disable) send.disable();
        setText(answer, 'Daily Green denkt nach …');
        try {
            const res = await sendMessageToXAI(frage.slice(0, MAX_INPUT_CHARS));
            setText(answer, (res && res.answer) || 'Es kam leider keine Antwort zurück.');
        } catch (err) {
            setText(answer, 'Daily Green ist gerade nicht erreichbar. Bitte später noch einmal versuchen.');
        } finally {
            busy = false;
            if (send.enable) send.enable();
        }
    };

    send.onClick(ask);
    if (input.onKeyPress) {
        input.onKeyPress((event) => {
            if (event && event.key === 'Enter') ask();
        });
    }
});
