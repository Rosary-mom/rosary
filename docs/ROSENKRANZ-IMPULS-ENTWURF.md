# Rosenkranz-Impuls – Entwurf für Think Tank

Stand: 10. November 2026, Europe/Berlin  
Zweck: belegte Kurztexte für ein neues Feld „Rosenkranz-Impuls“ auf der Think-Tank-Seite (Sammlung `Import1` / Kneipp-Säulen).  
Methode: nur Aussagen mit URL oder Datei plus Zeile. Nicht Belegtes steht unter **fehlend**. Quellen bleiben in dieser Datei; die Impulstexte ohne Quellennoten stehen in `docs/kneipp-saeulen-start.csv` und `docs/kneipp-saeulen-rosenkranz-nachtrag.csv`.

Die Texte sind Gebets- und Betrachtungsimpulse, keine medizinische Beratung und kein Heilungsversprechen.

---

## 1. Quellenlage

### 1.1 rosarium-baumeister (Rosarien, nicht Rosenkranz-Meditation im engeren Sinn)

- Repo: <https://github.com/Rosary-mom/rosarium-baumeister>  
- Live: <https://rosary-mom.github.io/rosarium-baumeister/>  
- Lokale Kopie, gelesen: `/workspace/rosarium-baumeister/`

Das README beschreibt eine „statische Übersichtsseite zu den Baumeister-Visionen des Spiral-Rosariums an 40 Orten“ (`README.md`, Zeilen 1–4). Der Inhalt ist gärtnerisch-historisch (Hügelbeet, Rosenband, Quellen), nicht ein Traktat über das Rosenkranzgebet.

Belegte Anknüpfungen für Think Tank:

- Konzept der Rosarium-Spirale: Hügel mit spiraligem Pflanzband und Kies-Spiralweg (`index.html`, Zeilen 59–69; Abschnitt „Konzept der Rosarium-Spirale“).
- Mehrere Orte verbinden einen Weg mit dem Rosenkranz, unter anderem:
  - Kloster Untermarchtal, Leitidee „Rosenkranzweg zur Kapelle“, belegt: Rosenkranzkapelle und Rosenkranzkirche (`index.html`, Zeilen 271–276; `orte/kloster-untermarchtal.html`, Zeilen 21, 32, 47, 72).
  - Kapuzinerkloster Waldshut, Leitidee „Kalvarienberg-Hügel mit Rosenkranzweg“, belegt: Rosenkranz- und Kalvarienbergbewegung des 17. Jahrhunderts (`index.html`, Zeilen 211–216; `orte/kapuzinerkloster-waldshut.html`, Zeilen 21, 32, 47, 72).
  - Dominikanerkirche Bad Wimpfen: Befund „Lilienstängel, Rosenkranz, Rosenkranzaltars“ (`index.html`, Zeilen 171–178).
- 40 Ortseiten unter `orte/`, darunter das Rosarium Uetersen als eines der ältesten Rosarien Deutschlands (`index.html`, Zeilen 371–378).

**fehlend in diesem Repo:** ein Satz, dass Kneipp den Rosenkranz gebetet hat; eine Bindung der Rosarien an die fünf Kneipp-Säulen.

### 1.2 Domain-Check: rosary.center.org und Varianten

Geprüft am 10. November 2026 (Europe/Berlin) per HTTPS/HTTP. Die Schreibweise `rosary.cemter.org` ist ein Tippfehler.

| Adresse | Erreichbarkeit | Inhalt, soweit prüfbar |
|---|---|---|
| <https://www.rosary.center.org> und <https://rosary.center.org> | **Nicht zuverlässig erreichbar.** HTTPS: TLS-Abbruch (`unexpected eof`). HTTP: Status 500, leerer Body. WebFetch ebenfalls 500. | Kein verwertbarer Seiteninhalt. |
| <https://www.rosary.cemter.org> (Tippfehler) | Ebenso: TLS-Abbruch bzw. kein Inhalt. | Keine Quelle. |
| <https://www.rosary.center> | Erreichbar (HTTP 200, Wix). Weiterleitung von `rosary.center`. | Shop-Startseite (Hügelbeet-Lizenzen, „Ablass-Zertifikat“, QR-Reg). Impressum: <https://www.rosary.center/impressum-agb-sorgenlos>. **fehlend dort:** eine belegte Verbindung nach Portland, Oregon. |
| <https://www.rosarycenter.org> (ohne zweiten Punkt; `rosary-center.org` leitet dorthin weiter) | Erreichbar (HTTP 200). | Offizielles **Rosary Center & Confraternity** der Dominican Friars, Province of the Most Holy Name of Jesus (Western Dominican Province). Sitz: 1331 NE 3rd Ave, Portland, OR 97232; Postfach PO Box 3617, Portland, OR 97208. Quelle: <https://www.rosarycenter.org/>, <https://www.rosarycenter.org/the-dominicans>, Geschichte: <https://www.rosarycenter.org/blog/the-mission-and-history-of-the-rosary-center>. Zur Ordensbindung des Rosenkranzes zitiert die Seite: „We have spread devotion to the Blessed Virgin Mary through the gift of the Most Holy Rosary“ (<https://www.rosarycenter.org/the-dominicans>). Auf der Startseite außerdem: „Since the 13th century, we have been entrusted by Our Lady to promote her Most Holy Rosary.“ |

Diese letzte Site ist eine **andere Organisation** als die Wix-Seite `rosary.center`. Sie darf in Texten nicht als Sitz von rosary.center erscheinen. Eine öffentlich prüfbare Verbindung zwischen beiden wurde nicht gefunden (**fehlend**).

### 1.3 Kneipp als Beichtvater der Dominikanerinnen in Wörishofen

Mehrfach unabhängig belegt, dass Sebastian Kneipp 1855 Beichtvater und Hausgeistlicher im Dominikanerinnenkloster Wörishofen wurde und dort bis zu seinem Tod wirkte (Tod: 17. Juni 1897 im Kloster):

- Kloster der Dominikanerinnen Bad Wörishofen: „1855 kam er als Beichtvater in das Wörishofer Dominikanerinnenkloster.“ Seelsorge stand „immer im Vordergrund seines Lebens als Priester.“ Er starb am 17. Juni 1897 im Kloster. <https://www.dominikanerinnen.de/pfarrer-kneipp/>
- Dieselbe Gemeinschaft, Chronik: „1855 – Pfarrer Sebastian Kneipp wird Beichtvater und Hausgeistlicher im Kloster.“ <https://www.dominikanerinnen.de/geschichte/>
- Kneipp-Bund, Lebenslauf: „02.05.1855: Sebastian Kneipp kommt nach Wörishofen … Als Beichtvater der Dominikanerinnen im Kloster …“ <https://www.kneippbund.de/wer-wir-sind/historie-sebastian-kneipp/lebenslauf-sebastian-kneipp/>
- Stamm-Kneipp-Verein: Amtsantritt am 2. Mai 1855 als Beichtvater der Dominikanerinnen. <https://www.skv-bw.de/sebastian-kneipp/ausf%C3%BChrlicher-lebenslauf/umzug-nach-woerishofen>
- Wikipedia, Sebastian Kneipp, Abschnitt „Ankunft in Wörishofen“: „Im Mai 1855 wurde Kneipp Beichtvater und Hausgeistlicher im Kloster Wörishofen der Dominikanerinnen …“ <https://de.wikipedia.org/wiki/Sebastian_Kneipp>
- Wikipedia, Kloster Wörishofen: „Nachdem Pfarrer Sebastian Kneipp 1855 dem Kloster als Beichtvater und Hausgeistlicher zugeteilt worden war …“ <https://de.wikipedia.org/wiki/Kloster_W%C3%B6rishofen>
- Stadt Bad Wörishofen, POI-Text: Kneipp kam „im Mai 1855 als Beichtvater und Hausgeistlicher zu den Klosterfrauen“. <https://www.bad-woerishofen.de/poi/kloster-der-dominikanerinnen-bad-woerishofen>

Direkte Brücke zum Rosenkranz **am Ort seines Wirkens**, ohne Kneipps persönliches Gebet zu behaupten: In der Klosterkirche „Maria, Königin der Engel“ zeigt der rechte Seitenaltar „die Überreichung des Rosenkranzes an die Ordensheiligen Dominikus und Katharina von Siena“. Fresken in den Zwickeln des Gewölbes „veranschaulichen die Geheimnisse oder Beifügungen im Gegrüßet seist Du Maria des Rosenkranzgebets.“ Quelle: <https://de.wikipedia.org/wiki/Kloster_W%C3%B6rishofen>, Abschnitte „Altäre“ und „Stuck, Fresken und Wandbilder“.

Die Förderung des Rosenkranzes durch den Dominikanerorden ist zusätzlich beim (davon unabhängigen) Rosary Center in Portland festgehalten, siehe 1.2.

**fehlend:** ein historischer Beleg, dass Kneipp selbst den Rosenkranz gebetet hat. In den oben genannten Kneipp- und Klosterseiten kommt das Wort Rosenkranz im Zusammenhang mit Kneipps Gebetsleben nicht vor. Die kunsthistorische Ausstattung der Klosterkirche ersetzt diesen Beleg nicht.

### 1.4 Bereits vorliegende Rosenkranz-Impulse

**Rosenkranz-Rat**, lokale Datei `/workspace/3d-scan/Rosary-mom_Rosenkranz-Rat/index.html`, Zeilen 86–93 (Repo: <https://github.com/Rosary-mom/Rosenkranz-Rat>):

> Rosenkranz-Elemente  
> Der Rosenkranz als Gebet, Meditation und Waffe gegen Entmenschlichung.  
> – Mysteria Gaudii, Doloris, Gloriæ, Luminis  
> – Tägliche Betrachtung und Gemeinschaft  
> – Schutzpatronin: Unsere Liebe Frau vom Rosenkranz

**Blog „Rosenkranz-Impuls“** auf <https://rosary-mom.github.io/>, jeweils die Abschnittsüberschrift „Rosenkranz-Impuls“:

| Beitrag | Live-URL | Datei und Zeilen | Kern |
|---|---|---|---|
| Einzug mit Dank, Psalm 100 | <https://rosary-mom.github.io/blog/2026-11-05-einzug-mit-dank-psalm-100/> | `blog/2026-11-05-einzug-mit-dank-psalm-100/index.html`, Zeilen 105–107 | Ein Gesätz der glorreichen Geheimnisse; Ave-Zusatz nach Ps 100,5: „Gut ist der Herr, seine Gnade ist ewig.“ |
| Gottes Schöpferkraft heute, Psalm 139 | <https://rosary-mom.github.io/blog/2026-11-03-gottes-schoepferkraft-heute/> | `blog/2026-11-03-gottes-schoepferkraft-heute/index.html`, Zeilen 145–147 | Ein Gesätz der freudigen Geheimnisse, besonders die Menschwerdung; Ave-Zusatz: „Danke, dass du mich wunderbar gemacht hast.“ |
| Petrus auf dem Wasser | <https://rosary-mom.github.io/blog/2026-10-31-petrus-wasser/> | `blog/2026-10-31-petrus-wasser/index.html`, Zeilen 155–157 | Ein Gesätz der lichtreichen Geheimnisse: „Jesus, der uns das Reich Gottes verkündet hat.“ |
| Habakuk 2 | <https://rosary-mom.github.io/blog/2026-10-26-habakuk-2/> | `blog/2026-10-26-habakuk-2/index.html`, Zeilen 145–147 | Ebenso lichtreiche Geheimnisse; Fürbitte für Ausbeutung und Sucht. |
| Allerheiligen / Allerseelen | <https://rosary-mom.github.io/blog/2026-11-02-allerheiligen-allerseelen/> | `blog/2026-11-02-allerheiligen-allerseelen/index.html`, Zeilen 169–171 | Schmerzhafter oder glorreicher Gesätz; Namen in Gottes Hand legen. |

---

## 2. Wahl der Gliederung: eine Impuls pro Kneipp-Säule

Gewählt wird **eine Kurzimpuls pro Kneipp-Säule** (Wasser, Bewegung, Ernährung, Heilpflanzen, Lebensordnung), nicht eine eigene Fünferreihe nur nach den Mysteria.

Begründung:

- In `Import1` liegen bereits genau diese fünf Einträge; der Repeater `#kneippRepeater` zeigt sie als Karten. Ein Feld `rosenkranz` erscheint dann auf derselben Karte wie Tagesimpuls und Übung.
- Die vier Mysteria (Gaudii, Doloris, Gloriæ, Luminis) aus Rosenkranz-Rat, Zeilen 88–89, werden trotzdem abgedeckt: sie verteilen sich auf die Säulen, passend zu bereits veröffentlichten Blog-Impulsen bzw. zum Rosenkranzweg. Lebensordnung trägt die belegte Kneipp-Dominikaner-Brücke und den Alltagstakt („tägliche Betrachtung“).
- Eine reine Mysteria-Sammlung hätte nur vier Kerntexte und löste sich von den schon angelegten CMS-Zeilen.

Die Zuordnung „Säule → Geheimnis“ ist eine redaktionelle Brücke, kein historischer Satz Kneipps.

---

## 3. Fünf Entwurfsimpulse

Jeder Text hat ein bis zwei Sätze, eine Quelle und keine Heilbehauptung. Formulierungen, die über die Quelle hinaus eine Anwendung vorschlagen, sind als solche gekennzeichnet.

### 3.1 Wasser – lichtreiche Geheimnisse

**Entwurf:** Bete heute ein Gesätz der lichtreichen Geheimnisse: „Jesus, der uns das Reich Gottes verkündet hat.“ Lege bei jedem Ave eine Person in Gottes Hand, die gerade einen unsicheren Schritt tut – im Vertrauen, nicht als Kur.

**Quelle:** Blog „Petrus auf dem Wasser“, `index.html` Zeilen 155–157; <https://rosary-mom.github.io/blog/2026-10-31-petrus-wasser/>. Der Zusatz „nicht als Kur“ ist redaktionell, damit der Wasserbezug nicht als Kneipp-Anwendung gelesen wird.

### 3.2 Bewegung – Rosenkranz als Weg

**Entwurf:** Nimm den Rosenkranz als Weg: In den Rosarien-Plänen wird der Gebetsweg als Spur durch den Garten gedacht, etwa als Rosenkranzweg zur Kapelle. Geh heute ein Gesätz langsam, Schritt für Schritt, und lass die Bewegung selbst zum Gebet werden.

**Quelle:** rosarium-baumeister, `index.html` Zeilen 271–276 und `orte/kloster-untermarchtal.html` Zeilen 21, 32, 72 (Leitidee „Rosenkranzweg zur Kapelle“); ergänzend Waldshut, `orte/kapuzinerkloster-waldshut.html` Zeilen 21, 32, 72. Der zweite Satz ist die vorgeschlagene Alltagsübung, nicht ein Zitat der Ortseite.

### 3.3 Ernährung – glorreiche Geheimnisse, Dank

**Entwurf:** Bete heute ein Gesätz der glorreichen Geheimnisse – Jesus, der in die Herrlichkeit des Vaters einzieht. Bei jedem Ave: „Gut ist der Herr, seine Gnade ist ewig.“

**Quelle:** Blog zu Psalm 100, `index.html` Zeilen 105–107; <https://rosary-mom.github.io/blog/2026-11-05-einzug-mit-dank-psalm-100/>.  
**Redaktioneller Vorschlag, nicht in der Quelle:** denselben Impuls in Ruhe vor der Mahlzeit zu beten, als Dank statt als Eile. Das kann in die Übung der Säule Ernährung, muss aber nicht in das Feld `rosenkranz`.

### 3.4 Heilpflanzen – freudige Geheimnisse, Rose als Zeichen

**Entwurf:** Bete heute ein Gesätz der freudigen Geheimnisse, besonders die Menschwerdung. Bei jedem Ave: „Danke, dass du mich wunderbar gemacht hast.“ Die Rose im Rosarium ist hier Zeichen des Gebets, kein Heilmittel.

**Quelle:** Blog zu Psalm 139, `index.html` Zeilen 145–147; <https://rosary-mom.github.io/blog/2026-11-03-gottes-schoepferkraft-heute/>. Der Satz zur Rose stützt sich auf das Rosarium-Konzept (spiraliges Rosenband, `index.html` Zeilen 59–69) und stellt ausdrücklich klar, dass daraus keine pflanzliche Heilanwendung folgt.

### 3.5 Lebensordnung – tägliche Betrachtung und Wörishofen

**Entwurf:** Der Rosenkranz verbindet tägliche Betrachtung mit Gemeinschaft. Kneipp wirkte ab 1855 als Beichtvater und Hausgeistlicher der Dominikanerinnen in Wörishofen; in ihrer Klosterkirche zeigt ein Seitenaltar die Überreichung des Rosenkranzes an Dominikus und Katharina von Siena, und Fresken veranschaulichen die Geheimnisse des Rosenkranzgebets. Nimm dir heute fest eine kurze Zeit für ein Gesätz.

**Quellen:** Rosenkranz-Rat, `index.html` Zeilen 86–91 (Meditation, tägliche Betrachtung und Gemeinschaft); Kneipp als Beichtvater: <https://www.dominikanerinnen.de/pfarrer-kneipp/>, <https://www.kneippbund.de/wer-wir-sind/historie-sebastian-kneipp/lebenslauf-sebastian-kneipp/>, <https://de.wikipedia.org/wiki/Sebastian_Kneipp>; Altar und Fresken: <https://de.wikipedia.org/wiki/Kloster_W%C3%B6rishofen>, Abschnitte „Altäre“ und „Stuck, Fresken und Wandbilder“. Der letzte Satz ist die Alltagsübung.

Dieser Text behauptet nicht, Kneipp habe den Rosenkranz gebetet. Die frühere Formulierung „Der Rosenkranz gehörte zum Gebetsleben der Priester seiner Zeit“ bleibt **fehlend**, solange dafür keine eigene Quelle vorliegt.

---

## 4. CMS-Empfehlung

**Empfehlung: neues Textfeld `rosenkranz` in der bestehenden Sammlung `Import1` (Anzeigename „Kneipp-Säulen“), keine eigene Sammlung als ersten Schritt.**

Gründe für das Feld in `Import1`:

- Die fünf Impulse gehören inhaltlich zu den fünf bereits importierten Säulen; der Repeater kann sie auf derselben Karte zeigen.
- Berechtigungen bleiben wie beschlossen: Lesen für jede Person, Schreiben nur Admin; kein „Content sammeln“.
- Der Aufwand ist klein: ein Textfeld (plain, kein Rich Text), optional, plus ein Textelement `#kRosenkranz` im Repeater-Item. Der Seitencode in `src/pages/Team.bzld2.js` liest das Feld analog zu `zeugnis` und zeigt es mit dem Vorsatz „Rosenkranz-Impuls:“; ist das Feld leer, wird das Element eingeklappt, fehlt das Element, stürzt die Seite nicht ab.
- Die Sammlungs-ID `Import1` bleibt unverändert.
- Eine dynamische Seite ist weiterhin nicht nötig.

Wann eine **eigene Sammlung** sinnvoll wäre:

- wenn viele Impulse unabhängig von den fünf Säulen rotieren sollen (Kalender, weitere Mysteria-Texte, saisonale Blog-Impulse);
- wenn der Rosenkranz-Impuls eine andere Kadenz bekommen soll als der Säulen-Tagesimpuls;
- wenn später Mitglieder-only-Texte nötig wären (für die öffentliche Think-Tank-Seite derzeit nicht).

Vorgehen nach Freigabe: Feld `rosenkranz` in `Import1` anlegen, die fünf Entwürfe eintragen (Vorlage: `docs/kneipp-saeulen-rosenkranz-nachtrag.csv`), Element `#kRosenkranz` im Repeater ergänzen. Der Seitencode ist im selben Branch angebunden. Eine eigene Sammlung erst, wenn der Bestand über die fünf Karten hinauswächst.

Feldvorschlag:

| Feld-ID | Anzeige | Typ | Pflicht |
|---|---|---|---|
| `rosenkranz` | Rosenkranz-Impuls | Text (plain, kein Rich Text) | nein |

Die CSV `docs/kneipp-saeulen-start.csv` enthält die Spalte `rosenkranz`. Wenn die fünf Säulen bereits importiert sind, die Texte nicht erneut importieren, sondern aus `docs/kneipp-saeulen-rosenkranz-nachtrag.csv` von Hand ins Feld `rosenkranz` kopieren. Der HWG-Hinweis unter dem Repeater bleibt bestehen; das neue Feld darf keine Heilversprechen enthalten.

---

## 5. Offene Lücken (fehlend)

1. Beleg, dass Kneipp selbst den Rosenkranz gebetet hat.
2. Öffentlich prüfbarer Beleg für eine Verbindung zwischen der Wix-Seite `rosary.center` und dem Rosary Center der Dominikaner in Portland. `www.rosary.center.org` ist derzeit nicht auslesbar; `www.rosarycenter.org` gehört den Dominican Friars und ist nicht als Site von rosary.center belegt.
3. In rosarium-baumeister: keine ausformulierte Rosenkranz-Meditation und keine Kneipp-Bindung; nur Wege, Altäre und Rosarien als Bild.
4. Satz „Der Rosenkranz gehörte zum Gebetsleben der Priester seiner Zeit“: allgemein plausibel, hier ohne Einzelnachweis, daher nicht in den öffentlichen Impuls übernommen.

