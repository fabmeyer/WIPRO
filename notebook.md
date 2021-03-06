# WIPRO - Notebook

## TODO bis 29.09.

* BB84-Protokoll schematisch darstellen; komponentenweise darstellen und Verständnis darüber erlangen (absprechen mit Dozenten)
* Proof of work von Zusammenspiel von Backend und Frontend

Mindestanforderungen:

* Simulation:
	* BB84-Protokoll simulieren ohne Rauschen
	* Komponenten: Photonenemitter, Übertragungsmedium, Photonenemitter
* Visualisierung:
	* Start und Endbutton
	* Darstellung / Visualisierung des vereinbarten Schlüssels
* Funktionsfähiges Produkt mit Backend und Frontend, welche miteinander kommunizieren können

Optionale Anforderungen:

* Simulation:	
	* Rauschen einfügen
	* Konfigurationsmöglichkeiten der Komponenten
	* Weitere Protokolle
* Visualisierung:
	* Möglichkeit der Eingabe eines Strings (oder Inputs) am Anfang, sowie der Ausgabe eines Strings am Schluss als Output
* Überlegen, welche Sprache das Produkt haben soll (Übersetzungsfile, i18n)

## TODO bis Sonntag, 22.09.

* Bis Sonntag Abend
	* Dokument: Aufgabenstellung
	* Ziele formulieren (messbar)
	* Bewertungskriterien (messbar)
	* Konkretisierung
	* Fokusierung
	* Validierung
	* Dokumentieren (API)
	* Grobplanung - Meilensteine
	* Bitstream als Output
	* Architektur erklären, begründen, evaluieren
	* Usecase der Webapp / *responsive* (PC, Smartphone, Tablet etc.)
	* Arbeitsjournal / genau notieren, wer welche Arbeiten gemacht hat
	* Physikalische Komponenten, Komponentendiagramm, Flowdiagramm
	* Erklärung Top-Down
	* Auch Sketches im Bericht möglich (z.B. Designalternativen), Bilder im Bericht

## Offene Fragen

1. Verhältnis Verständnis Theorie Quantenkryptografie zu Anwendung bzw. Visualisierung?
2. ~~Kann der Technologiestack frei gewählt werden?~~ _Ja_
3. Schwerpunkte legen:
	* Verständnis von Quantenkryptografie (wissenschaftlicher Anspruch)
	* Saubere Implementation der Simulation (komponentenbasiertes Vorgehen im Backend; Wiederverwendbarkeit und Austauschbarkeit)
	* Visualisierung (ästhetische Anforderungen, Interaktivität)
	* Präsentation (didaktische Anforderungen, Usability- und Performance-Aspekte) 
4. Mächtigkeit des Backends als Standalone-software?
5. Anforderung an Komponenten für physikalische Modelle (analog Java Beans)
6. Kotlin anstatt Java sinnvoll / machbar / wünschenswert? 
7. Anbindung an bestehende Projekte: Komponente innerhalb Applikation, oder ganze Applikation als Komponente? 

## Wahl der Technologie

### Frontend

#### JavaScript-Stack: Idyll, React, D3.js

##### idyll:
* [idyll](https://idyll-lang.org) ist ein toolkit für _data driven stories_ und _explorable explanations_
* Geschrieben in JavaScript und basiert auf React
* Resultat wäre ein Webapp, das wie ein interaktives, wissenschaftliches Paper daherkommt

##### Vorteile:
* Hat eine grosse Anzahl von eigenen Komponenten zur Verfügung (von UI-Elementen bis zu LaTeX-Rendering)
* Interaktiv, ästhetisch und didaktisch
* Weitere Komponenten lassen sich einfach einbauen (entweder React-Components oder andere js-libraries, wie z.B. D3.js)
* Plattform- und OS-unabhängig, da eine WebApp

##### Nachteile:
* Performance? (client-seitig)

##### React:

##### D3.js:
* [D3.js](https://d3js.org) ist eine JavaScript-Library, um Daten im Web zu visualisieren, mithilfe von HTML, SVG und CSS
* D3 steht für _Data-Driven Documents_

##### Vorteile:
* Grosse Anzahl an Möglichkeiten, um Daten zu visualisieren
* Da es sich um eine Library handelt, kann sie einfach eingebunden werden
* Die Graphiken sind in einem nativen Webformat (SVG-Elemente) und können via CSS einfach weiterverarbeitet werden

##### Nachteile:
* Performance? (client-seitig)

### Backend

#### Server
* Tomcat

#### Applikation
* Java Webapplikation (Alternative: Kotlin)
* REST-Schnittstelle, Unterstützung von Session-Daten möglich
* Physikalische Komponenten als Java-Schnittstellen (Design by contract)
* Duale Verwendung der Applikation: 1. Webapplikation ; 2. Lokaler Aufruf als CLI-Tool für Anbindung an weitere Tools
* Optional: GUI für lokale Verwendung

## Sketches

## Roadmap

### Fabian
* Implementieren eines React-Komponenten in Idyll
* Durchlesen der Unterlagen von Herrn Bürgler

### Adrian
* Aufsetzen von Embedded Tomcat Server, REST-Schnittstelle, Dummy-Komponente
* Konfiguration Gradle: Run: Tomcat Server ; Build: CLI-Tool, JAR-File mit allen Komponenten
* Ggf. Export als WAR-File

## Notes

## Literatur
* Grant, Rober; Data visualization; CRC Press, Taylor & Francis Group; 2019

## Links

### Aufgabenstellung

### Technologie

#### idyll
* [idyll](https://idyll-lang.org)
* [idyll: A Markup Language for Authoring and Publishing Interactive Articles on the Web](https://idl.cs.washington.edu/files/2018-Idyll-UIST.pdf)
* [idyll-lang/Lobby on Gitter](https://gitter.im/idyll-lang/Lobby#)

#### D3
* [D3.js](https://d3js.org)
* [The D3.js Graph Gallery](https://www.d3-graph-gallery.com)

### Sonstige
* [Semantic Zoom](https://infovis-wiki.net/wiki/Semantic_Zoom)
* [Explorable Explanations](http://worrydream.com/ExplorableExplanations/)
* [New York Times: The Upshot](https://www.nytimes.com/interactive/2019/04/22/upshot/upshot-at-five-years.html)
