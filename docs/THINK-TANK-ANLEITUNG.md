# Think Tank: Kneipp · Daily Green · Organigramm – Schritt-für-Schritt-Anleitung

Branch: `think-tank-kneipp` · Seite im Repo: `src/pages/Team.bzld2.js` (= Seite „Think Tank“)

> **Wichtig:** Der Wix-Editor übernimmt Code nur aus dem Standard-Branch `main`
> (Quelle: [Wix – Publish a Site with Git Integration & Wix CLI](https://dev.wix.com/docs/develop-websites-sdk/code-your-site/developer-environments/ides/git-integration/publish-a-site-with-git-integration-and-wix-cli)).
> Solange dieser Branch nicht gemergt ist, sieht der Editor den neuen Code noch nicht.
> Die Elemente (Schritt 1–4) kannst du trotzdem schon anlegen – ohne Code tun sie einfach nichts.
> **Gemergt wird erst nach ausdrücklicher Freigabe des Seiteninhabers. Veröffentlicht wird erst danach.**

---

## Reihenfolge der Sektionen auf „Think Tank“ (von oben nach unten)

1. **Seelenmassage** (bestehendes Widget – bleibt oben, unverändert)
2. **Daily Green – Kneipp-Chat** (neu: Eingabe, Button, Antwort, Datenschutzhinweis)
3. **Daily-Green-Tagesrechner** (neu: HTML-Element mit `embeds/daily-green-kneipp.html`)
4. **Organigramm-Widget** (neu: HTML-Element mit der monitor-Adresse)
5. **CHIMERA – „Wartezimmer-Ecke“** (bestehendes Spiel – ganz nach unten verschieben)

Zum Verschieben: Sektion oder Element anklicken und nach unten ziehen bzw. über das
Kontextmenü (Rechtsklick) „nach unten verschieben“. CHIMERA bekommt am besten eine kurze
Überschrift, z. B. *„Wartezimmer-Ecke – spiel eine Runde, bis wir uns melden“* – wie der
Spieltisch beim Arzt im Wartezimmer.

---

## Schritt 1 · Sektion „Daily Green – Kneipp-Chat“ anlegen

Unter der Seelenmassage eine neue Sektion einfügen und darin vier Elemente anlegen
(über **Hinzufügen / „+“** links):

| Element | Typ im Editor | ID (rechts im ID-Feld eintragen) | Hinweis |
|---|---|---|---|
| Frage-Eingabe | Eingabe → Texteingabe (oder Textfeld/Text Box für mehrzeilig) | `grokInput` | Platzhaltertext optional |
| Button | Button | `grokSend` | Beschriftung z. B. „Fragen“ |
| Antwort | Text | `grokAnswer` | Beliebiger Starttext, z. B. „Hier erscheint die Antwort.“ |
| Datenschutzhinweis | Text (klein) | `grokHinweis` | Text wird vom Code automatisch gesetzt |

Die ID vergibst du, indem du das Element anklickst und im Bereich **Eigenschaften & Ereignisse**
(Velo-Panel) das Feld **ID** änderst. Ohne „#“ eintragen – nur `grokInput` usw.
Groß-/Kleinschreibung beachten.

Passende Überschrift über der Sektion, z. B.: *„Daily Green – frag nach Kneipps fünf Säulen:
Wasser · Bewegung · Ernährung · Heilpflanzen · Lebensordnung“*.

## Schritt 2 · Daily-Green-Tagesrechner einbetten

1. **Hinzufügen → Einbetten → Code einbetten / HTML-iFrame** (Name kann je nach Editor-Version abweichen).
2. Im Element **„Code“** wählen und den kompletten Inhalt der Datei
   `embeds/daily-green-kneipp.html` aus diesem Branch hineinkopieren.
   (Auf GitHub: Datei öffnen → „Raw“ → alles markieren → kopieren.)
3. Breite: volle Breite; Höhe: ca. 900 px (bei Bedarf anpassen, bis nichts abgeschnitten ist).

Der Rechner läuft komplett im Browser: keine Netzwerkaufrufe, keine Speicherung, keine Gesundheitsdaten.

## Schritt 3 · Organigramm-Widget einbetten

1. Noch ein Element **Einbetten → HTML-iFrame / Code einbetten**.
2. **„Website-Adresse“** wählen und eintragen:
   `https://monitor.rosenkranz.eu.com/rosary-atlas/organigramm-widget.html`
   *(alternativ „Code“ mit diesem Snippet:)*

   ```html
   <iframe src="https://monitor.rosenkranz.eu.com/rosary-atlas/organigramm-widget.html" title="ROSARY-ATLAS Organigramm" width="100%" height="600" style="border:0;border-radius:12px;max-width:100%;background:#020617;" loading="lazy" referrerpolicy="no-referrer" allow="fullscreen"></iframe>
   ```
3. Volle Breite, ca. 600 px hoch. Updates auf monitor erscheinen hier automatisch.

## Schritt 4 · CHIMERA als „Wartezimmer-Ecke“ nach unten

Das CHIMERA-Element bzw. seine Sektion ganz ans Seitenende ziehen (unter das Organigramm).
Kein Code nötig.

## Schritt 5 · Grok-API-Schlüssel im Secrets Manager hinterlegen

1. Im **Wix-Dashboard** der Website den **Secrets Manager** öffnen
   (bei Wix unter den Entwickler-Tools; Bezeichnung je nach Sprache/Version leicht verschieden).
2. **Neues Secret** anlegen:
   - Name: `XAI_API_KEY` (genau so)
   - Wert: dein xAI-API-Schlüssel aus der xAI-Console
3. Speichern. Der Schlüssel steht **nur** dort – nie im Code, nie im Chat, nie in GitHub.

Hinweis Kosten: Jede Chat-Frage verursacht xAI-Kosten auf deinem Schlüssel. Am besten in der
xAI-Console ein Ausgabelimit setzen.

## Schritt 6 · Testen (erst nach dem Merge möglich)

1. Freigabe des Seiteninhabers → Pull Request wird nach `main` gemergt → Wix zieht den Code (kann etwas dauern;
   im Editor im GitHub-Bereich der Code-Seitenleiste ist der neue Commit dann sichtbar).
2. Im Editor **Vorschau** bzw. **Test-Website** öffnen.
3. Prüfen:
   - Datenschutzhinweis erscheint unter dem Chat.
   - Frage eingeben → „Fragen“ → Antwort erscheint (zuerst „Daily Green denkt nach …“).
   - Frage nach Beschwerden → Antwort verweist an Ärztin/Arzt, keine Diagnose.
   - Tagesrechner: Häkchen setzen → „Auswerten“ → Punkte und Anregung.
   - Organigramm lädt.
   - CHIMERA steht ganz unten.

## Schritt 7 · Veröffentlichen

Erst wenn der Test passt: **Veröffentlichen**. Vorher nichts live schalten.

---

## Was der Code macht (Kurzüberblick)

- `src/backend/xaiChat.web.js` – Backend-Webmodul `sendMessageToXAI`: liest `XAI_API_KEY` aus dem
  Secrets Manager, schickt die Frage an xAI (`https://api.x.ai/v1/responses`, Modell `grok-4.7`,
  `store:false` = xAI speichert die Unterhaltung nicht zum späteren Abruf). Eingabe max. 1000 Zeichen.
  Systemprompt: „Daily Green“ nach Kneipps 5 Säulen, **keine Diagnosen/Behandlungen**, bei Beschwerden
  Verweis an Ärztin/Arzt bzw. Notruf 112. Wir speichern und loggen keine Eingaben.
- `src/pages/Team.bzld2.js` – verbindet `#grokInput`, `#grokSend`, `#grokAnswer`, `#grokHinweis`.
  Fehlen Elemente, läuft die Seite weiter (nur Hinweis in der Konsole).
- `embeds/daily-green-kneipp.html` – eigenständiger Tagesrechner für ein HTML-Element.
- Die alten losen Dateien im Repo-Root (`GROK-chat`, `Daily Green Exposure Estimator`, `*.html`) bleiben unverändert.
