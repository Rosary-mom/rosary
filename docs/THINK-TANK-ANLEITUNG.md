# Think Tank: Kneipp · Daily Green · Organigramm – Schritt-für-Schritt-Anleitung

Branch: `think-tank-kneipp` · Seite im Repo: `src/pages/Team.bzld2.js` (= Seite „Think Tank“)

> **Wichtig:** Der Wix-Editor übernimmt Code nur aus dem Standard-Branch `main`
> (Quelle: [Wix – Publish a Site with Git Integration & Wix CLI](https://dev.wix.com/docs/develop-websites-sdk/code-your-site/developer-environments/ides/git-integration/publish-a-site-with-git-integration-and-wix-cli)).
> Solange dieser Branch nicht gemergt ist, sieht der Editor den neuen Code noch nicht.
> Die Elemente und die CMS-Sammlung (Schritte 1–5) kannst du trotzdem schon anlegen – ohne den gemergten Code tun Repeater und Chat einfach nichts.
> **Gemergt wird erst nach ausdrücklicher Freigabe des Seiteninhabers. Veröffentlicht wird erst danach.**

---

## Reihenfolge der Sektionen auf „Think Tank“ (von oben nach unten)

1. **Seelenmassage** (bestehendes Widget – bleibt oben, unverändert)
2. **Daily Green – Kneipp-Chat** (neu: Eingabe, Button, Antwort, Datenschutzhinweis)
3. **Kneipp-Säulen** (neu: CMS-Repeater, optionales Zeugnis, HWG-Hinweis unter dem Repeater, optional Tagesimpuls des Tages)
4. **Daily-Green-Tagesrechner** (neu: HTML-Element mit `embeds/daily-green-kneipp.html`)
5. **Organigramm-Widget** (neu: HTML-Element mit der monitor-Adresse)
6. **CHIMERA – „Wartezimmer-Ecke“** (bestehendes Spiel – ganz nach unten verschieben)

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

## Schritt 2 · CMS-Sammlung „KneippSaeulen“ und Repeater anlegen

Die fünf Säulen pflegst du im Wix-CMS. Der Seitencode **liest nur** – Chat und Tagesrechner
bleiben CMS-frei, und Besuchereingaben werden nicht gespeichert. Die Sammlung ist ausschließlich
für redaktionelle Impulse gedacht, nicht für Gesundheits-, Patienten- oder Gerätedaten.

### 2a · Sammlung anlegen

1. Im Editor oder Dashboard das **CMS** öffnen und eine **neue Sammlung** anlegen.
2. **Sammlungs-ID** (im Code verwendet): `Import1` – beim CSV-Import von Wix vergeben und nicht änderbar; Anzeigename „Kneipp-Säulen“.
3. Anzeigename beliebig, z. B. „Kneipp-Säulen“.
4. Felder exakt mit diesen IDs und Typen anlegen (die Anzeigenamen dürfen so heißen wie in der Spalte „Anzeige“):

| Feld-ID (genau so) | Anzeige | Typ im CMS | Pflicht |
|---|---|---|---|
| `title` | Säule | Text (in neuen Sammlungen oft schon als Titelfeld vorhanden – Anzeige umbenennen, ID `title` belassen) | ja |
| `tagesimpuls` | Tagesimpuls | Text (plain, kein Rich Text) | ja |
| `uebung` | Übung | Text (plain, kein Rich Text) | ja |
| `bild` | Bild | Bild | nein |
| `reihenfolge` | Reihenfolge | Zahl | ja |
| `aktiv` | Aktiv | Boolean (Ja/Nein) | ja |
| `zeugnis` | Zeugnis | Text (plain, kein Rich Text) | nein – optionales historisches Kneipp-Zeugnis pro Säule |

### 2b · Berechtigungen

In den Sammlungs-Einstellungen unter **Berechtigungen** eine benutzerdefinierte Regel setzen:

- **Lesen:** alle (Anyone / Jeder) – sonst kann die öffentliche Seite die Impulse nicht anzeigen.
- **Erstellen, Aktualisieren, Löschen:** nur Admin.

Ohne diese Leserechte bleibt der Repeater leer, und in der Browserkonsole erscheint eine Warnung.

### 2c · Startinhalte importieren

Die fünf Säulen (Wasser, Bewegung, Ernährung, Heilpflanzen, Lebensordnung) liegen als Import-Datei bereit:

`docs/kneipp-saeulen-start.csv`

1. In der Sammlung **Importieren** wählen und diese CSV hochladen.
2. Spalten den Feld-IDs zuordnen: `title`, `tagesimpuls`, `uebung`, `bild`, `reihenfolge`, `aktiv`, `zeugnis`.
3. Die Spalte `bild` ist absichtlich leer – Bilder später direkt im CMS ergänzen.
4. Die Spalte `zeugnis` ist nur bei der Säule **Wasser** vorausgefüllt (historisches Selbstzeugnis Kneipps
   aus der Einleitung zu *Meine Wasser-Kur*, 1886). Die anderen Säulen bleiben leer, solange keine
   ebenso belegte Quelle vorliegt. Nichts erfinden, keine Patientennamen, keine Heilversprechen.
5. Prüfen, dass `aktiv` bei allen fünf Einträgen auf „ja/true“ steht und `reihenfolge` 1–5 ist.

Die Texte sind kurze, allgemeine Alltagsimpulse und – wo vorhanden – historische Zeugnisse.
Sie sind **keine medizinische Beratung** und enthalten keine Heilversprechen.
Bei Unsicherheit oder Beschwerden gilt weiterhin: Ärztin oder Arzt fragen.

### 2d · Repeater und optionales Textfeld auf der Seite

Unter dem Daily-Green-Chat eine neue Sektion einfügen, z. B. mit der Überschrift
*„Kneipps fünf Säulen“*. Darin:

| Element | Typ im Editor | ID (ohne #) | Hinweis |
|---|---|---|---|
| Repeater | Repeater / Wiederholungsliste | `kneippRepeater` | Im Repeater-Item die vier Kind-Elemente unten anlegen |
| Säulenname | Text (im Repeater-Item) | `kSaeule` | Wird mit Feld `title` befüllt |
| Tagesimpuls | Text (im Repeater-Item) | `kImpuls` | Feld `tagesimpuls` |
| Übung | Text (im Repeater-Item) | `kUebung` | Feld `uebung` |
| Bild | Bild (im Repeater-Item) | `kBild` | Feld `bild`; fehlt ein Bild, wird das Element eingeklappt |
| Zeugnis | Text (im Repeater-Item, optional) | `kZeugnis` | Feld `zeugnis`; der Code setzt den Vorsatz „Zeugnis:“. Ist das Feld leer, wird das Element eingeklappt |
| HWG-Hinweis | Text (einmal unter dem Repeater, optional) | `kHinweis` | Wird vom Code gesetzt. Im Editor **klein und kursiv** setzen (z. B. Schriftgröße 12–14, Kursiv). |
| Tagesimpuls des Tages | Text (außerhalb des Repeaters, optional) | `kTagesimpuls` | Rotiert nach dem Kalenderdatum durch die aktiven Einträge |

Der fest hinterlegte Hinweis lautet:

> ** Hinweis gemäß Heilmittelwerbegesetz (HWG): Die Inhalte und Erfahrungsberichte zu Abt Sebastian Kneipp sind historische Zeugnisse und allgemeine Alltagsimpulse. Sie sind kein Heilungsversprechen und ersetzen keine ärztliche Beratung. Bei Beschwerden Arzt aufsuchen, im Notfall 112.

Der Code sortiert nach `reihenfolge` aufsteigend und zeigt nur Einträge mit `aktiv = true`.
Fehlen Sammlung oder Elemente (auch `#kHinweis` oder `#kZeugnis`), stürzt die Seite nicht ab – es erscheint nur eine Warnung in der Konsole.

### 2e · Paket `@wix/data`

Der Seitencode liest die Sammlung über die aktuelle Data-Items-SDK (`import { items } from '@wix/data'`).
Das Paket steht in `package.json`. Nach dem Merge im Editor unter **Paket-Manager / npm** prüfen,
ob `@wix/data` installiert ist. Falls nicht: `@wix/data` hinzufügen (Version mindestens 1.0.185).

## Schritt 3 · Daily-Green-Tagesrechner einbetten

1. **Hinzufügen → Einbetten → Code einbetten / HTML-iFrame** (Name kann je nach Editor-Version abweichen).
2. Im Element **„Code“** wählen und den kompletten Inhalt der Datei
   `embeds/daily-green-kneipp.html` aus diesem Branch hineinkopieren.
   (Auf GitHub: Datei öffnen → „Raw“ → alles markieren → kopieren.)
3. Breite: volle Breite; Höhe: ca. 900 px (bei Bedarf anpassen, bis nichts abgeschnitten ist).

Der Rechner läuft komplett im Browser: keine Netzwerkaufrufe, keine Speicherung, keine Gesundheitsdaten.

## Schritt 4 · Organigramm-Widget einbetten

1. Noch ein Element **Einbetten → HTML-iFrame / Code einbetten**.
2. **„Website-Adresse“** wählen und eintragen:
   `https://monitor.rosenkranz.eu.com/rosary-atlas/organigramm-widget.html`
   *(alternativ „Code“ mit diesem Snippet:)*

   ```html
   <iframe src="https://monitor.rosenkranz.eu.com/rosary-atlas/organigramm-widget.html" title="ROSARY-ATLAS Organigramm" width="100%" height="600" style="border:0;border-radius:12px;max-width:100%;background:#020617;" loading="lazy" referrerpolicy="no-referrer" allow="fullscreen"></iframe>
   ```
3. Volle Breite, ca. 600 px hoch. Updates auf monitor erscheinen hier automatisch.

## Schritt 5 · CHIMERA als „Wartezimmer-Ecke“ nach unten

Das CHIMERA-Element bzw. seine Sektion ganz ans Seitenende ziehen (unter das Organigramm).
Kein Code nötig.

## Schritt 6 · Grok-API-Schlüssel im Secrets Manager hinterlegen

1. Im **Wix-Dashboard** der Website den **Secrets Manager** öffnen
   (bei Wix unter den Entwickler-Tools; Bezeichnung je nach Sprache/Version leicht verschieden).
2. **Neues Secret** anlegen:
   - Name: `XAI_API_KEY` (genau so)
   - Wert: dein xAI-API-Schlüssel aus der xAI-Console
3. Speichern. Der Schlüssel steht **nur** dort – nie im Code, nie im Chat, nie in GitHub.

Hinweis Kosten: Jede Chat-Frage verursacht xAI-Kosten auf deinem Schlüssel. Am besten in der
xAI-Console ein Ausgabelimit setzen.

## Schritt 7 · Testen (erst nach dem Merge möglich)

1. Freigabe des Seiteninhabers → Pull Request wird nach `main` gemergt → Wix zieht den Code (kann etwas dauern;
   im Editor im GitHub-Bereich der Code-Seitenleiste ist der neue Commit dann sichtbar).
2. Im Editor **Vorschau** bzw. **Test-Website** öffnen.
3. Prüfen:
   - Datenschutzhinweis erscheint unter dem Chat.
   - Frage eingeben → „Fragen“ → Antwort erscheint (zuerst „Daily Green denkt nach …“).
   - Frage nach Beschwerden → Antwort verweist an Ärztin/Arzt, keine Diagnose.
   - Repeater zeigt die fünf aktiven Säulen in der Reihenfolge 1–5.
   - Bei Wasser erscheint unter der Übung das historische Zeugnis (Vorsatz „Zeugnis:“); bei den anderen Säulen bleibt `#kZeugnis` leer bzw. eingeklappt.
   - Unter dem Repeater erscheint `#kHinweis` klein und kursiv mit dem HWG-Text (kein Heilungsversprechen).
   - Optional: `#kTagesimpuls` zeigt den Impuls des Tages.
   - Tagesrechner: Häkchen setzen → „Auswerten“ → Punkte und Anregung.
   - Organigramm lädt.
   - CHIMERA steht ganz unten.

## Schritt 8 · Veröffentlichen

Erst wenn der Test passt: **Veröffentlichen**. Vorher nichts live schalten.

---

## Was der Code macht (Kurzüberblick)

- `src/backend/xaiChat.web.js` – Backend-Webmodul `sendMessageToXAI`: liest `XAI_API_KEY` aus dem
  Secrets Manager, schickt die Frage an xAI (`https://api.x.ai/v1/responses`, Modell `grok-4.7`,
  `store:false` = xAI speichert die Unterhaltung nicht zum späteren Abruf). Eingabe max. 1000 Zeichen.
  Systemprompt: „Daily Green“ nach Kneipps 5 Säulen, **keine Diagnosen/Behandlungen**, bei Beschwerden
  Verweis an Ärztin/Arzt bzw. Notruf 112. Wir speichern und loggen keine Eingaben.
- `src/pages/Team.bzld2.js` – verbindet `#grokInput`, `#grokSend`, `#grokAnswer`, `#grokHinweis`
  und liest die CMS-Sammlung `Import1` „Kneipp-Säulen“ (nur lesen, `@wix/data`) in `#kneippRepeater`
  (`#kSaeule`, `#kImpuls`, `#kUebung`, `#kBild`, optional `#kZeugnis` für Feld `zeugnis`)
  sowie optional `#kTagesimpuls` und `#kHinweis` (HWG-Hinweis, einmal unter dem Repeater).
  Fehlen Elemente oder die Sammlung, läuft die Seite weiter (nur Hinweis in der Konsole).
  Chat und Rechner bleiben CMS-frei; es werden keine Besuchereingaben gespeichert.
- `embeds/daily-green-kneipp.html` – eigenständiger Tagesrechner für ein HTML-Element.
- `docs/kneipp-saeulen-start.csv` – Startinhalte für den CMS-Import der fünf Säulen.
- Die alten losen Dateien im Repo-Root (`GROK-chat`, `Daily Green Exposure Estimator`, `*.html`) bleiben unverändert.
