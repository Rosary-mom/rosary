# Design-Tokens „Magnifica Humanitas“

Stand der Recherche: 10. November 2026 (Europe/Berlin). Nur belegte Werte; nichts geraten. Es gibt **kein einziges kanonisches Hex-Set**: unter demselben Stilnamen stehen mehrere Paletten. Für die Think-Tank-Karten ist die in den aktuellen Blogposts wiederholt gesetzte `#mh-*`-Palette am klarsten (und stimmt fast 1:1 mit dem Stylesheet, das sich ausdrücklich „Design Magnifica Humanitas“ nennt).

## Farben

### A. Aktuelle Blogposts (`#mh-*`) — für Think Tank die belastbarste Spur

Wiederholt identisch in mindestens fünf Beiträgen:

| Rolle | CSS-Variable | Hex | Quelle |
|---|---|---|---|
| Sandfarben (Hintergrund) | `--sand` | `#efe6d6` | s. unten, jeweils Z. 6 |
| Sand 2 (Karten) | `--sand2` | `#e6d9c2` | dieselben Dateien, Z. 6 |
| Bordeaux-Rot | `--bord` | `#6b1028` | dieselben Dateien, Z. 6–7 (Überschriften in dieser Farbe) |
| Gold | `--gold` | `#b8902f` | dieselben Dateien, Z. 6 |
| Text (Tinte) | `--ink` | `#2b211c` | dieselben Dateien, Z. 6 |
| Bibel-/Kern-Hintergrund | — | `#f6efe2` | z. B. Psalm-100-Datei, Z. 12 und 15 |

Quellen (Repo `Rosary-mom/Rosary-mom.github.io`, jeweils `index.html`):

- `blog/2026-11-05-einzug-mit-dank-psalm-100/index.html` Z. 6–7 — live: https://rosary-mom.github.io/blog/2026-11-05-einzug-mit-dank-psalm-100/
- `blog/2026-11-03-gottes-schoepferkraft-heute/index.html` Z. 6–7
- `blog/2026-11-02-allerheiligen-allerseelen/index.html` Z. 6–7
- `blog/2026-10-31-petrus-wasser/index.html` Z. 6–7
- `blog/2026-10-26-habakuk-2/index.html` Z. 6–7

Dasselbe Kernset, ausdrücklich beschriftet, in:

- `Rosary-mom/rosary-musik-app/assets/theme.css` Z. 1 und Z. 7–8: Kommentar `Design „Magnifica Humanitas“: Sand, Bordeaux, Gold`; `--sand:#efe6d6; --sand2:#e8dcc4; --sand3:#dccaa5; --bord:#6b1028; --bord2:#4a0814; --gold:#b8902f; --gold2:#d9b75a`
- Abweichung zu den Blogposts: nur `--sand2` (`#e8dcc4` statt `#e6d9c2`) plus die Zusatzwerte `--sand3`, `--bord2`, `--gold2`.

### B. Paladine-Edition (ältere Vollbeiträge auf derselben Site)

Andere Hex-Werte, anderer Variablennamen; Schriftrollen gleich.

Quelle: `blog/abraham-bund-akkord-gen-13/abraham-bund-akkord-gen-13-paladine.html`

- Z. 14: `--bg: #FFFDF8;` `--heading: #4A0D12;` `--gold: #6B4A12;` `--gold-bright: #8A6218;` `--card: #FFF8EA;` `--quote: #F4E4C4;`
- Z. 31: Header-Unterkante `6px solid #C9A227`
- Die Wörter „Bordeaux“ / „Sand“ kommen in diesem Block nicht vor. `#4A0D12` ist die Überschriftenfarbe, die Sandtöne heißen `--bg` / `--card` / `--quote`.

### C. Manifest-Startseite (dunkles Tech-Theme, anderer Stil)

Quelle: https://rosary-mom.github.io/ — Datei `index.html` im selben Pages-Repo.

- Z. 37: `--gold: #c5a26f;`
- Z. 282 (eingebettetes Hermes-Cockpit im selben File): `--primary: #D4AF37; /* Rosary Gold */`
- Bordeaux-Rot und Sandfarben: **fehlend** auf dieser Startseite.

### D. Weitere, ebenfalls „Magnifica Humanitas“ genannte Paletten (nicht in den Pflichtquellen, aber belegt)

Nur zur Einordnung, nicht als einzige Wahrheit:

| Bordeaux | Sand | Gold | Quelle |
|---|---|---|---|
| `#5C0A1A` / `#800020` / `#3D0611` | `#E8D9B5` / `#F5ECD7` | `#C9A227` / `#E3C35A` | `Rosary-mom/Bio2.0/index.html` Z. 10–14; `impressum.html` Z. 6–9; `datenschutz.html` Z. 6–9 |
| `#722F37` | `#F5E8C7` | `#D4AF37` | `Bio2.0/esg-kette.html` Z. 10–13; Fußzeile Z. 203 wörtlich: „Magnifica Humanitas • Gold • Sandfarben-Beige • Bordeaux-Rot“; ebenso `entscheidungsmatrix/index.html` Z. 9 |
| `#6e1e2a` | `#e6d3a3` | `#d4af37` | `Bio2.0/protease/index.html` Z. 10 |

Ein abweichendes Set in `grok-build-sync/configs/memorized-prompts.md` (Pergament `#F8F5EB`, Petrol `#2E6B6B`, Gold `#A67C3D`) ist eine Prompt-Notiz, kein Stylesheet der Blogposts.

## Schriften

| Rolle | Familie | Beleg | Lücke |
|---|---|---|---|
| Fließtext | **Rosario** | Blog `#mh-*` Z. 4 (Google-Fonts-Link) und Z. 6 (`font-family:'Rosario','Palatino',...`); Paladine-Datei Z. 11 und 20; `theme.css` Z. 2–3 und 8 (`--f-text`) | — |
| Überschriften | **Rockwell Extra Bold**, Fallback Rockwell / Roboto Slab (Paladine zusätzlich Playfair Display) | Blog `#mh-*` Z. 7; Paladine Z. 23, 30, 35; `theme.css` Z. 8 (`--f-head`); Hinweistext Paladine Z. 91: „Rockwell Extra Bold / Paladine“ | **Webfont-Datei fehlend.** In den geprüften Repos liegt keine `.woff`/`.woff2` für Rockwell. Wix bzw. das lokale System müssen die Schnitt liefern, sonst greift der Fallback. |
| Zitate / Bibeltext | **Palatino** / Palatino Linotype / Book Antiqua | Blog `#mh-*` Z. 6, 12, 15; `theme.css` Z. 8 und 38 (`--f-quote`, Kommentar „Zitate und Karaoke in Palatino“) | **Webfont-Datei fehlend.** Nur System-Stack, kein eingebettetes Palatino. |
| „Paladine“ / „Paladin“ | kein eigenes Fontfile | „Paladine“ ist der Editions- und Klassenname (`.paladine` in der Abraham-Datei Z. 30 setzt Rockwell Extra Bold). `Rosenkranz-Rat/index.html` Z. 18 listet `'Paladin'` nur als Fallback zwischen Playfair und Rockwell Extra Bold. Bio2.0-README spricht von „Rosario/Paladin/Rockwell Extra Bold“. | **Schrift „Paladine“ bzw. „Paladin“ fehlend.** Nicht mit Palatino gleichsetzen. |

Die Manifest-Startseite nutzt **nicht** dieses Trio, sondern Playfair Display, Inter, Lato und Share Tech Mono (`index.html` Z. 29, 41, 45, 289, 303).

Im lokalen Klon `/workspace/rosary-wix` kommen Rosario, Palatino, Rockwell, Bordeaux und Sand **nicht** vor. Der Daily-Green-Rechner (`embeds/daily-green-kneipp.html` Z. 17) steht auf System-UI und Grün (`#fafdf9`), nicht auf Magnifica Humanitas.

## Logo ROSAR / ROSARY

In den vier Pflichtquellen **kein** Logo-File:

- `rosary-mom.github.io`: keine Datei `*logo*`.
- `rosary-health-answering-hub`: keines.
- `7gaben-hugel`: keines.
- `/workspace/rosary-wix`: nur `favicon.ico`, kein ROSARY-Logo.

Belegt außerhalb der Pflichtliste, byte-identisch (52 743 Bytes, gleicher ETag):

- Pfad: `Rosary-mom/Bio2.0/assets/Rosary LOGO 22.08.2025.png`
- Einbindung: `Bio2.0/index.html` Z. 97, `alt="ROSARY Logo"` (daneben Z. 98 der Schriftzug „ROSARY“ in Rockwell Extra Bold / Gold `#C9A227`)
- Öffentliche URL: https://rosary-mom.github.io/Bio2.0/assets/Rosary%20LOGO%2022.08.2025.png
- Raw: https://raw.githubusercontent.com/Rosary-mom/Bio2.0/main/assets/Rosary%20LOGO%2022.08.2025.png
- Kopien desselben Standes: `Bio2.0/blog/assets/rosary-logo.png` und `rosary-musik-app/assets/rosary-logo.png`

Ein „ROSAR“-Dateiname (ohne Y) wurde nicht gefunden.

## Lücken (fehlend)

- Ein einziges, überall gleiches Hex-Trio Bordeaux / Sand / Gold.
- Bordeaux und Sand auf der Manifest-Startseite `rosary-mom.github.io/index.html`.
- Rosario / Palatino / Rockwell Extra Bold in `/workspace/rosary-wix`.
- Webfont-Dateien für Rockwell Extra Bold und Palatino.
- Eine echte Schrift namens Paladine oder Paladin.
- Logo-Datei in den vier Pflichtquellen; der Name „ROSAR-Logo“.
- Eine Datei namens „ESG Decision Engine“ in `7gaben-hugel`.
- Fertige Kneipp- oder Rosenkranz-Texte in `rosary-health-answering-hub`.

## Repo-Notizen (ohne Formeln)

### `7gaben-hugel`

Kein Modul oder Dateiname „ESG Decision Engine“. Vorhanden ist Forschungs- und Simulationscode rund um Boden, Enzyme und die sieben Gaben:

- `readme.md` — Biosiegel-Qualität und Enzym-Simulation (AlphaFold), kein ESG-Decision-Text.
- `Readme.md` — nur xAI/Grok-Anbindung.
- `index.html` — 3D-Labyrinth „ROSARY RIDGEBED“ mit den sieben Gaben.
- `01_AlphaFold_Protease_Test.ipynb`, `01_AlphaFold_Protease_Limits.ipynb`, `protease/` — Protease-Simulation (von `Rosenkranz-Rat/engine/index.html` per Colab verlinkt).
- `03_Commercial_Validation.py` — Simulation „Rosenkranz-Q-Hebel“ mit Terra-Preta-Daten (enthält Formeln; hier nicht übernommen).
- `Golden-Age-Exodus`, `climate` — visuell/textlich Klimaneutralität und Migrationspfade, keine Decision Engine.
- Schwesterrepo `7-Gaben-Huegel` ist eine eigene Spielsimulation, ebenfalls ohne ESG-Decision-Engine.

Die unter „Magnifica Humanitas“ beschriftete ESG-Entscheidungsoberfläche liegt nicht hier, sondern in `Rosary-mom/Bio2.0` (`esg-kette.html`, `entscheidungsmatrix/index.html`, `k3/`).

### `rosary-health-answering-hub`

Gmail-Hub für Kontaktformular und Blog-Kommentare von rosary.health, plus eine Blog-Evaluations-Engine (`README.md`, `docs/BLOG-EVALUATION-ENGINE.md`, `scripts/`). Kein Kneipp-Inhalt, keine fertigen Think-Tank-Texte. In `config/blog-topics.json` Z. 56 stehen nur Schlüsselwörter der Kategorie Theologie, darunter „rosenkranz“, „rosary“, „prayer“, „gebet“. Für ein CMS-Feld nicht direkt verwendbar.

### `Rosenkranz-Rat` (zusätzlich geprüft)

Relevant für die ESG-Decision-Engine (Beschreibung, keine Formeln):

- `token-launch.html` — Seite „ESG-Spiral-Tokens Launch“; Abschnitt „Live Decision-Engine Widget“ (Z. 6, 23–30, 55).
- `fractal-resilience.html` Z. 64 und 67 — Rosenkranz-Rat als Echtzeit-Entscheidung auf Basis einer Resilienzgröße; ESG-Credits aus der Resilienz-Kurve.
- `engine/index.html` — „Emergent Freedom Engine“ (Pädagogik/Markt/AI), verlinkt die 7gaben-Colabs; nicht die ESG-Matrix aus Bio2.0.
- `EnergySpiralGovernor.sol`, `q_adam_optimizer.py`, `README.md` — Governance-/Approximations- und Optimierungscode (Formeln nicht übernommen).
- `README.md` beschreibt fraktale Governance und verweist auf Bio 3.0 / Colab, nicht auf eine Datei „ESG Decision Engine“.

## Rosenkranz als Meditationselement (für ein weiteres Think-Tank-Feld)

Geeignete, bereits formulierte Impulse:

1. **Struktur / Feldidee** — `Rosenkranz-Rat/index.html` Z. 86–93 (gleicher Text live unter https://rosary-mom.github.io/Rosenkranz-Rat/): Überschrift „Rosenkranz-Elemente“; „Der Rosenkranz als Gebet, Meditation und Waffe gegen Entmenschlichung.“ Punkte: Mysteria Gaudii, Doloris, Gloriæ, Luminis; tägliche Betrachtung und Gemeinschaft; Schutzpatronin Unsere Liebe Frau vom Rosenkranz.
2. **Wiederkehrendes Blog-Feld „Rosenkranz-Impuls“** — jeweils ein Gesätz mit konkreter Betrachtung, z. B.:
   - `blog/2026-11-05-einzug-mit-dank-psalm-100/index.html` Z. 105–107 (Glorreiche Geheimnisse)
   - `blog/2026-11-03-gottes-schoepferkraft-heute/index.html` Z. 145–147 (Freudige Geheimnisse)
   - `blog/2026-11-02-allerheiligen-allerseelen/index.html` Z. 169–171 (Schmerzhafte oder Glorreiche)
   - `blog/2026-10-31-petrus-wasser/index.html` Z. 155–157 und `blog/2026-10-26-habakuk-2/index.html` Z. 145–147 (Lichtreiche Geheimnisse)
3. **Medien** — Paladine-Beitrag Abraham, Abschnitt „Heiliger Rosenkranz“ als Video (`abraham-bund-akkord-gen-13-paladine.html` Z. 234–236).
4. **Hub** — nur Keyword, kein Fließtext (s. oben).
5. **`7gaben-hugel` / lokaler Klon** — kein ausformulierter Meditationsimpuls zum Rosenkranz; lokal nur Kneipp-Säulen in `docs/kneipp-saeulen-start.csv`.

Für das CMS liegt das optionale Textfeld `rosenkranz` nach dem Muster der Blog-Abschnitte „Rosenkranz-Impuls“ nahe, ergänzt um die vier Geheimnisgruppen aus dem Rosenkranz-Rat. Ein Beleg, dass Kneipp den Rosenkranz gebetet hat, ist in diesen Quellen **nicht** vorhanden.
