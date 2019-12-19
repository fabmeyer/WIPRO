## Realisierung

### Frontend

Das frontend wurde mithilfe von idyll und react umgesetzt. Die Grundstruktur eines idyll-Projektes besteht aus einem index.idyll file und einem Ordner mit allen Komponenten. Das index.idyll file ist vergleichbar mit einem HTML-file, welches für die Struktur des Dokumentes zuständig ist. In dieses file wird dann der gesamte Text und alle Komponenten eingebunden.

#### Verwendete Idyll-Komponenten

Idyll bringt eine Reihe von Komponenten mit, die jedoch alle ziemlich simpel sind und von welchen nicht gross Gebrauch gemacht wurde. Einzige Ausnahmen sind:

* `Header`: Der header der Webseite, mit allen wichtigen Informationen.
* `var`: Eine Input-Komponente, mit der man eine Variable definieren kann.
* `fullWidth`: Eine Komponente, welche als Wrapper benutzt wird, um den inneren Komponenten auf die ganze Seitenbreite zu rendern.
* `Equation`: Eine Komponente, welche es ermöglicht LaTeX-Syntax direkt im index.idyll-file zu schreiben.
* `Display`: Eine Komponente, welche den Wert einer Variable anzeigt, mit zusätzlichen Möglichkeiten der Formatierung.

#### Verwendete npm packages

`react-arrow`: Ein package, welches einen Komponenten ausgibt, der einen Pfeil als canvas-Element rendert.
`react-anime`: Ein package, welches einen Wrapper um die JavaScript-Bibliothek `animejs` bildet. Damit lassen sich Animationen generieren, indem man für verschiedene Keyframes Werte eines bestimmten properties eingibt.
`react-emoji-render`: Ein package, mit welchem sich einfach ein emoji darstellen läst.
`react-rough`: Ein package, welches einen Wrapper um die JavaScript-Bibliothek `roughjs` bildet, mit der man Grafiken als canvas oder svg rendern kann, die einen handgemalten Stil besitzen. Sämtliche Grafiken in der Applikation wurden mit diesem package erstellt.
`react-slider`: Ein package, mit welchem sich einfach ein Regler rendern lässt und bei dem man alle grafischen Details per css genau steuern kann. Dieses package wurde verwendet um alle Regler im Dokument zu erstellen.
`rodal`: Ein package, welches ein Modal (ein kleines Fenster, welches alles andere im Hintergrund verblasst) rendert.

#### Arten von Komponenten

* Visuelle Komponenten: Sind Komponenten, die Sachverhalte visuell darstellen, um sie so dem Benutzer veranschaulicht erklären zu können.
* Logik-Komponenten: Sind Komponenten, die für die Logik des frontends gebraucht werden, um den Ablauf des Algorithmus darstellen zu können. Sie sind entweder mit dem backend via der REST-API verbunden oder benutzen eine interne Logik, welche nur für das frontend von Bedeutung ist.
* Input-Komponenten: Sind Komponenten, die der Benutzer bedienen kann, um den Programmablauf zu steuern.

#### Erstellte Komponenten

`SystemOverview`: Eine visuelle Komponente, die dazu dient dem Benutzer schon früh im Dokument eine Übersicht über das BB84-Protokoll zu geben und ihm die Möglichkeit zu geben, wichtige Einstellungen der Simulation festlegen zu können. Sie zeigt die drei Teilnehmer des Algorithmus, Alice, Bob und Eve, sowie die zwei Übertragungskanälen samt den einstellbaren Parameter.



`ButtonAliceStart`: Eine Logik-Komponente, welche einen Button rendert, der den Algorithmus startet. Dabei wird die `strLength` zusammen mit `AliceProb` per POST-methode an das backend geschickt, um damit Alices Bitstring und ihre Base zu berechnen. Als Antwort kommt dann der Bitstring und die Base zurück.



`PhotonGridDouble`: Eine visuelle Komponente, welche zwei Strings entgegennimmt und diese rendert als zwei Raster von einzelnen Symbolen. Der Hintergrund des Rasters kann bei Bedarf gefärbt werden (was am Schluss auch gemacht wird). Diese Komponente wird benutzt um zwei Strings (Bitstring oder Base) darzustellen. Per Klick auf das Raster öffnet sich ein Modal, welches den String in einem quadratischen Fenster darstellt (Komponente `ScrollBox`).  



`ScrollBox`: Eine visuelle Komponente, welche einen String in einem quadratischen Fenster darstellt. Es besitzt einen Slider, mit dem man die Schriftgrösse des Keys anpassen kann. Wird die Schriftgrösse zu klein, wechselt die Darstellung des Schlüssels von Text zu einem Bitmuster. Es existiert eine kleine Legende, welche die Farben des Bitmusters erklärt.



`InformationBox`: Eine visuelle Komponente, welche eine Tabelle rendert, die den für das Verständnis wichtigen Zusammenhang zwischen Bitstring, Base und resultierende Polarisation veranschaulicht.



`SimpleSlider`: Eine kleine Input-Komponente, welche nur einen Regler rendert, der genau ein property beeinflusst. 



`ButtonEmitPhotons`: Eine Logik-Komponente, welche einen Button rendert, der den Algorithmus weiterführt. Damit wird aus dem Bitstring und der Base von Alice ein String von Polarisationen berechnet. Der Bitstring und die Base werden wieder per POST-methode an das backend geschickt und als Antwort kommt ein String von Polarisationen für Bob zurück.



`ShowHide`: Eine kleine Logik-Komponente, welche als Wrapper dazu dient eine innere Komponente mithilfe einer Bedingung ein- oder ausblenden zu können. So können zum Beispiel Visualisierungen oder Animationen nach Bedarf eingeblendet werden.



`AnimationEmit`: Eine visuelle Komponente, welche darstellt, dass Photonen von Alice zu Bob geschickt werden



`ButtonBobBase`: Eine Logik-Komponente, welche durch die Stringlänge und die Wahrscheinlichkeit der Basenverteilung von Bob eine Base für Bob berechnet. Die Stringlänge und die Wahrscheinlichkeitsverteilung werden per POST-methode an das backend geschickt, welches als Antwort eine Base für Bob zurückschickt. 



`AnimationPhoton1`: Eine visuelle Komponente, welche zeigt, wie ein Photon ein Filter durchdringt und nicht neu polarisiert wird, da es eine passende Polarisierung besitzt.



`AnimationPhoton2`: Eine visuelle Komponente, welche zeigt, wie ein Photon ein Filter durchdringt und neu polarisiert wird, da es eine falsche Polarisierung besitzt.



`ButtonMeasure`: Eine Logik-Komponente, mit welcher der Benutzer Bob die erhaltenen Photonen mit seiner Base messen lässt. Dabei werden Alices Photonen, Bobs Base und das Rauschen per POST-methode an das backend geschickt und als Antwort wird der gemessene Bitstring zurückgeschickt.



`ButtonShortenKey`: Eine Logik-Komponente, mit welcher die beiden Basen von Alice und Bob verglichen werden. Es werden die beiden Basen und die beiden Bitstrings per POST-methode an das backend geschickt und als Antwort wird die gekürzte Base zurückgeschickt. Zusätzlich werden auch die dadurch gekürzten Bitstrings von Alice und Bob und deren Länge zurückgeschickt.



`PhotonGridSingle`: Wie `PhotonGridDouble` (siehe weiter oben), rendert aber nur ein String anstatt zwei.



`ButtonCompareKey`: Eine Logik-Komponente, welche eine gewählte Anzahl (ein Verhältnis) von Stellen in den Bitstrings von Alice und Bob auf Übereinstimmung vergleicht. Diese nimmt als Argumente Alices Bitstring, Bobs Bitstring und das Verhältnis entgegen. Diese Argumente werden via POST-methode an das backend geschickt und dort miteinander verglichen. Alle verglichenen Stellen werden aus den Bitstrings entfernt und die so verarbeiteten Bitstrings werden an das frontend zurückgeschickt. Zusätzlich sendet das backend auch das Verhältnis der Stellen in den Strings zurück die übereinpassen.



`EmojiComponent`: Ein kleiner visueller Komponent, der ein emoji rendert, um eine Stimmung auszudrücken.