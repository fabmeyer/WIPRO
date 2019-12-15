## 3. Stand der Forschung oder Stand der Praxis/Technik

### Frontend / Informationsvisualiserung

#### Data-driven Storytelling

In den letzten Jahren haben sich die Möglichkeiten in der Datenvisualisierung rasant verändert. Gleichzeitig findet eine Verschiebung von statischer Berichterstattung mit Text und Bild zu dynamischen, interaktiven Multimediaformen statt.

Beispielsweise hat die Onlineausgabe der *New York Times* seit dem Jahr 2014 eine neue Sparte namens "The Upshot" (https://www.nytimes.com/section/upshot), auf welcher Artikel veröffentlicht werden, welche politische, wirtschaftliche oder gesellschaftliche Themen durch den Einsatz von Techniken der Datascience und Datenvisualierung ergänzen, sogenanntes "data-driven storytelling". Diese Artikel sind dynamisch und interaktiv; der Benutzer kann die Daten manipulieren und so direkt in die Visualierung eingreifen.

Möglich macht dies Fortschritte, nicht nur in der Produktion leistungsfähigerer Computerhardware, sondern auch in der Entwicklung von immer leistungsfähigerer Browsersoftware. Dabei findet eine stetige Verschiebung von Rendering auf der Serverseite zum Rendering auf der Clientseite statt. Wo früher grosse Mengen von Daten nur auf hochspezialiserten Computer berechnet und visualisiert werden konnten, kann dies heutzutage auch auf einem personal computer im Browser realisiert werden. Daher erstaunt es nicht, dass auch spezialisierte Datenvisualierungsbibliotheken, wie D3 für die clientseitige Scriptsprache JavaScript zur Verfügung stehen.

#### Explorable Explainables

Im letzten Jahrzehnt sind einige Tools, Frameworks, Markupsprachen oder Bibliotheken erschienen, welche sich darauf spezialisieren, Techniken der Datenvisualisierung zu benutzen, um so dynamischen, interaktiven und multimedialem content zu erzeugen. Diese unterscheiden sich jedoch gross in Bezug auf die Voraussetzungen des angesprochenen Benutzers (Informatik-Hintergrund oder Autor bei einer Zeitung) oder Domäne (spezialiserte Software oder allgemein einsatzfähig).

Diese Art von Software, welche Berichterstattung mit interaktiven Techniken der Datenvisualierung kombiniert wird als *Explorable Explainables* bezeichnet. Die Abgrenzung zu anderer Software ist nicht ganz eindeutig, beispielsweise kann auch Project Jupyter verwendet werden, um Daten interaktiv zu visualisieren und dies einer grossen Audienz zugänglich zu machen. Jedoch verlangen Jupyter notebooks sehr viel Vorkentnisse in der Informatik und sind daher auf eine bestimmte Zielgruppe beschränkt.

#### Idyll

Eine dieser Markupsprachen ist Idyll (https://idyll-lang.org), welche die Erzeugung interaktiver Dokumente mit der Markupsprache Markdown verbindet. Idyll stellt eine Reihe von UI-Komponenten zur Verfügung, mit welchen sich einerseits content wie Text, Bild und Visualisierungen darstellen lässt, als auch Komponenten, wie Regler, Eingabefelder und mehr, um Daten zu manipulieren.

Idyll selbst basiert auf der UI-Bibliothek React (https://reactjs.org), welche anfänglich von Facebook entwickelt wurde und im Jahr 2013 als open-source Projekt der Öffentlichkeit zugänglich gemacht wurde. Die Philosophie von React beruht einerseits auf der Entwicklung von Komponenten mit Schnittstellen, die wiederverwendet werden können und andererseits auf der reaktiven Programmierung, ein relatives neues Programmierparadigma, welches Zustände und Änderungen einzig und allein auf Datenflüsse zurückführt. React eignet sich insbesonders um single-page Applications (SPAs) zu erzeugen. Dabei wird bei einem Seitenaufruf nur eine leere Hülle aus HTML geladen und der gesamte content wird beim client im Browser dynamisch durch JavaScript erzeugt (server-side Rendering, SSR).

Idyll verknüpft die einfache Herstellung von Komponenten von React mit dem simplen Markupsyntax von Markdown, mit welchem sich rasch einfache Dokumente schreiben lässt. Ähnlich wie bei LaTeX, wird bei Markdown Inhalt und Struktur gegenüber Layout getrennt. Das Layout kann einfach mit einer CSS-Datei gesteuert werden.

In Idyll wird also der einfache Syntax zum Schreiben von Texten mit Markdown mit dem System zur Erzeugung von Komponenten von React verknüpft. Bei der Kompilation werden gewöhnliche JavaScript-, HTML- und CSS-Dateien erzeugt, welche statisch auf einem Server abgelegt werden können.

#### Vergleichbare Projekte

Es existieren wenige Projekte, welche sich zum Ziel gemacht haben, das BB84-Protokoll oder Quantenverschlüsselung allgemein zu simulieren und visualisieren.

Eines davon ist von Fred Henle, aus dem Jahr 2008: http://fredhenle.net/bb84/demo.php, welches das BB84-Protokoll auf eine spielerische Weise erklärt. Wie man rasch erkennt, ist es schon ein bisschen in die Jahre gekommen und entspricht nicht mehr dem Verständnis und Aussehen moderner Webseiten. Trotzdem ist es auf der englischsprachigen Wikipediaseite zu "Quantum key distribution" aufgelistet (https://en.wikipedia.org/wiki/Quantum_key_distribution).

Ein nennenswertes Beispiel ist auch der "Quantum Computing Playground" (http://www.quantumplayground.net/#/home), mit welchem sich die Programmierung von Qubits mithilfe von Quantengates simulieren lässt. Obwohl sehr leistungsfähig (die Grafiken werden mit WebGL gerendert) und wissenschaftlich exakt, ist es nicht der Anspruch dieser Seite, eine solch komplexe Thematik einfach erklären zu wollen.

Eine erschöpfende Liste von Software, welche sich primär mit Quantumcomputing befasst oder diese simuliert finde man auf https://www.quantiki.org/wiki/list-qc-simulators. Quantiki ist das bekannteste Informationsportal zu allen Themen der Quanteninformationstheorie und deren Anwendungen.