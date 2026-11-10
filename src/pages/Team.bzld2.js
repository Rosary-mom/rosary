// Think-Tank-Seite (Seitencode). API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// CMS-Lesen über die empfohlene Data-Items-SDK: https://dev.wix.com/docs/sdk/backend-modules/data/items/setup
//
// Erwartete Element-IDs (im Wix-Editor rechts im ID-Feld vergeben):
//   #grokInput        – Texteingabe (Text Input oder Text Box) für die Frage
//   #grokSend         – Button "Fragen"
//   #grokAnswer       – Textelement für die Antwort
//   #grokHinweis      – Textelement mit dem Datenschutzhinweis
//   #kneippRepeater   – Repeater für die CMS-Sammlung KneippSaeulen
//   #kSaeule          – Text im Repeater-Item: Säule (Feld title)
//   #kImpuls          – Text im Repeater-Item: Tagesimpuls
//   #kUebung          – Text im Repeater-Item: Übung
//   #kBild            – Bild im Repeater-Item
//   #kTagesimpuls     – optional: Tagesimpuls des Tages (außerhalb des Repeaters)
// Fehlt ein Element oder die Sammlung, läuft die Seite trotzdem weiter (kein Absturz).
// Chat und Tagesrechner bleiben CMS-frei. Es werden keine Besuchereingaben gespeichert.

import { sendMessageToXAI } from 'backend/xaiChat.web';
import { items } from '@wix/data';

const MAX_INPUT_CHARS = 1000;
const KNEIPP_COLLECTION = 'KneippSaeulen';

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

function itemEl($item, id) {
    try {
        const e = $item(id);
        return e && e.type ? e : null;
    } catch (err) {
        return null;
    }
}

function setText(e, value) {
    if (e && 'text' in e) e.text = value;
}

function imageSrc(bild) {
    if (!bild) return '';
    if (typeof bild === 'string') return bild;
    if (typeof bild === 'object' && bild.src) return String(bild.src);
    return '';
}

function pickDailyItem(list) {
    if (!list.length) return null;
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayOfYear = Math.round((today - start) / 86400000);
    return list[dayOfYear % list.length];
}

function setupChat() {
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
}

async function setupKneippCms() {
    const repeater = el('#kneippRepeater');
    const tagesimpulsEl = el('#kTagesimpuls');

    if (!repeater && !tagesimpulsEl) {
        console.warn('Kneipp-CMS: Elemente fehlen (#kneippRepeater, #kTagesimpuls). Anzeige übersprungen.');
        return;
    }

    let missingItemWarned = false;
    if (repeater && typeof repeater.onItemReady === 'function') {
        repeater.onItemReady(($item, itemData) => {
            const data = itemData || {};
            const saeule = itemEl($item, '#kSaeule');
            const impuls = itemEl($item, '#kImpuls');
            const uebung = itemEl($item, '#kUebung');
            const bild = itemEl($item, '#kBild');

            if (!missingItemWarned && !saeule && !impuls && !uebung && !bild) {
                missingItemWarned = true;
                console.warn('Kneipp-CMS: Repeater-Elemente fehlen (#kSaeule, #kImpuls, #kUebung, #kBild).');
            }

            setText(saeule, data.title || '');
            setText(impuls, data.tagesimpuls || '');
            setText(uebung, data.uebung || '');

            if (bild) {
                const src = imageSrc(data.bild);
                try {
                    if (src && 'src' in bild) {
                        bild.src = src;
                        if (typeof bild.expand === 'function') bild.expand();
                    } else if (typeof bild.collapse === 'function') {
                        bild.collapse();
                    }
                } catch (err) {
                    console.warn('Kneipp-CMS: Bild im Repeater konnte nicht gesetzt werden.', err);
                }
            }
        });
    }

    let rows = [];
    try {
        const results = await items
            .query(KNEIPP_COLLECTION)
            .eq('aktiv', true)
            .ascending('reihenfolge')
            .limit(50)
            .find();
        rows = Array.isArray(results && results.items) ? results.items : [];
    } catch (err) {
        console.warn('Kneipp-CMS: Sammlung KneippSaeulen nicht lesbar oder fehlt.', err);
        return;
    }

    if (repeater && 'data' in repeater) {
        try {
            repeater.data = rows;
        } catch (err) {
            console.warn('Kneipp-CMS: Repeater #kneippRepeater konnte nicht befüllt werden.', err);
        }
    } else if (repeater) {
        console.warn('Kneipp-CMS: #kneippRepeater hat kein data-Feld und wurde nicht befüllt.');
    }

    if (tagesimpulsEl) {
        const daily = pickDailyItem(rows);
        if (daily) {
            const name = daily.title || 'Kneipp';
            const impuls = daily.tagesimpuls || '';
            setText(
                tagesimpulsEl,
                impuls
                    ? 'Tagesimpuls des Tages – ' + name + ': ' + impuls
                    : 'Tagesimpuls des Tages – ' + name
            );
        }
    }
}

$w.onReady(function () {
    setupChat();
    setupKneippCms().catch((err) => {
        console.warn('Kneipp-CMS: Initialisierung fehlgeschlagen.', err);
    });
});
