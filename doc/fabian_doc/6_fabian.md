## Realisierung

### Frontend

Das frontend wurde mithilfe von idyll und react umgesetzt. Die Grundstruktur eines idyll-Projektes besteht aus einem index.idyll file und einem Ordner mit allen Komponenten. Das index.idyll file ist vergleichbar mit einem HTML-file, welches für die Struktur des Dokumentes zuständig ist. In dieses file wird dann der gesamte Text und alle Komponenten eingebunden.

#### Verwendete Idyll-Komponenten

Idyll bringt eine Reihe von Komponenten mit, die jedoch alle ziemlich simpel sind und von welchen nicht gross Gebrauch gemacht wurde. Einzige Ausnahmen sind:

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

`SystemOverview`: Eine visuelle Komponente, die dazu dient dem Benutzer schon früh im Dokument eine Übersicht über das BB84-Protokoll zu geben und ihm die Möglichkeit zu geben, wichtige Einstellungen der Simulation festlegen zu können. Die Systemübersicht verfügt über folgende Variabeln:

* `strLength`: Die Länge des Bitstrings, der von Alice verschickt wird. Diese Länge wird auch automatisch benutzt für die Länge der Basenfolge von Alice, sowie des Bitstrings und der Basenfolge von Bob und der Basenfolge von Eve. Die Stringlänge lässt sich mittels eines Eingabefensters mithilfe einer Tastatur eingeben.
* `noise`: Diese Variable bezeichnet das Rauschen des Übertragungskanals. Bei einem Rauschen von 0 erfolgt eine perfekte Übertragung, bei 100 wird jede Polarisation zufälligerweise neu gesetzt. Das Rauschen lässt sich mit einem Regler einstellen.
* `AliceProb`: Die Wahrscheinlichkeit der Basenverteilung von Alice. Von 0 (100% diagonale Basis) bis 100 (100% gerade Basis) lässt sich dies mithilfe eines Reglers steuern.
* `BobProb`: Wie `AliceProb`, jedoch für Bob.
* `eavesdropping`: Das Verhältnis, wie stark Eve die Übertragung abhört. Mit einem Regler lässt sich ein Wert von 0% bis 100% einstellen.



`ButtonAliceStart`: Eine Logik-Komponente, welche einen Button rendert, welcher den Algorithmus startet. Dabei wird die `strLength` per POST-methode an das backend geschickt, zusammen mit `AliceProb`, um damit Alices Bitstring und ihre Base zu berechnen. Als Antwort kommt dann der Bitstring und die Base zurück. Dieser Button besitzt folgende Variabeln:

* `strLength`: Die Länge des Bitstrings, wie oben beschrieben.
* `AliceProb`: Die Wahrscheinlichkeitsverteilung der Basen, wie oben beschrieben.
* `bitString`: Der Bitstring, der als Antwort vom backend zurückkommt.
* `baseString`: Die Base, die als Antwort vom backend zurückkommt.
* `autostart`: Ein boolean, mit welchem sich der Algorithmus automatisch ausführen lässt, wenn das Dokument fertig geladen ist.
* `dataHasLoaded`: Ein boolean, welcher auf true geschaltet wird, wenn der Bitstring und die Base fertig geladen sind.
* `text`: Der Text, welcher auf dem Button erscheint.



`PhotonGridDouble`: Eine visuelle Komponente, welcher einen String rendert als ein Raster von einzelnen Symbolen. Per Klick auf das Raster öffnet sich ein Modal, welches den String in einem quadratischen Fenster darstellt (Komponente `ScrollBox`). Diese Komponente wird benutzt um einen Bitstring und eine zugehörige Base darzustellen. Ihre Variabeln sind:

* `bitString`: Der obere String, der dargestellt werden soll.
* `baseString`: Der untere String, der dargestellt werden soll.
* `dataHasLoaded`: Ein boolean, welcher steuert, wann das Raster mit Zeichen gefüllt werden soll.
* `bitStringZoom`: Eine variable, welche den Zoomfaktor des oberen Strings steuert.
* `baseStringZoom`: Eine variable, welche den Zoomfaktor des unteren Strings steuert.



`InformationBox`: Eine visuelle Komponente, welche eine Tabelle rendert, die den wichtigen Zusammenhang zwischen Bitstring, Base und resultierende Polarisation veranschaulicht.



`SimpleSlider`: Eine kleine input-Komponente, welche nur einen Regler rendert, der genau ein property beeinflusst. Diese Komponente hat zwei Variabeln:

* `setting`: Das property, das beeinflusst werden sollte.
* `text`: Der Text, welcher neben dem Regler steht.



`ButtonEmitPhotons`: Eine Logik-Komponente, welche einen Button rendert, welcher den Algorithmus weiterführt. Damit wird aus dem Bitstring und der Base von Alice einen String von Polarisationen berechnet. Der Bitstring und die Base werden wieder per POST-methode an das backend geschickt und als Antwort kommt ein String von Polarisationen zurück.
Die Variabeln dieses Komponentes sind:

* `bitString`: Alices Bitstring, welcher für die Polarisation codiert.
* `baseString`: Alices Basestring, welcher für die Polarisation codiert.
* `rawPolarization`: Die Antwort vom backend, als ein String von Polarisationswerten (0, 45, 90 oder 135), getrennt durch ein Komma.
* `polarization`: Alices Polarisation, als Array von getrennten Polarisationen
* `noise`: Das Rauschen, welches die Übertragung beeinflusst (siehe oben bei der Systemübersicht).
* `polarizationHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn die Polarisation geladen und in das Array geschrieben wurde.
* `text`: Der Text, welcher auf dem Button erscheint.



`ShowHide`: Eine kleine Logik-Komponente, welch als Wrapper dazu dient eine innere Komponente mithilfe einer Bedingung ein- oder ausblenden zu können. Ihre Variabeln sind:

* `isVisible`: Der boolean, welcher bestimmt, ob die innere Komponente ein- oder ausgeblendet ist.
* `showButton`: Die Möglichkeit, einen Button zu rendern, der den boolean umschaltet
* `trigger`: Ein anderer boolean, welcher das Verhalten dieses Komponenten extern ansteuern kann.
* `position`: Ein CSS-Attribut, mit welchem man die Position des Wrappers festlegt



`AnimationEmit`: Eine visuelle Komponente, welche zeigt, dass Photonen von Alice zu Bob geschickt werden



`ButtonBobBase`: Eine Logik-Komponente, welche durch die Stringlänge und die Wahrscheinlichkeit der Basenverteilung von Bob eine Base für Bob berechnet. Die Stringlänge und die Wahrscheinlichkeitsverteilung werden per POST-methode an das backend geschickt, welches als Antwort eine Base für Bob zurückschickt. Ihre Variabeln sind:

* `strLength`: Die Stringlänge, welche die Länge von Bobs Base festlegt.
* `BobProb`: Die Wahrscheinlichkeitsverteilung, welche für die festlegung von Bobs Base wichtig ist.
* `baseString`: Die Variable, welche die zurückgesendete Base speichert
* `bobBaseHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn die Base gespeichert ist.
* `text`: Der Text, welcher auf dem Button erscheint.



`AnimationPhoton1`: Eine visuelle Komponente, welche zeigt, wie ein Photon ein Filter durchdringt und nicht neu polarisiert wird, da es eine passende Polarisierung besitzt.



`AnimationPhoton2`: Eine visuelle Komponente, welche zeigt, wie ein Photon ein Filter durchdringt und neu polarisiert wird, da es eine falsche Polarisierung besitzt.



`ButtonMeasure`: Eine Logik-Komponente, mit welcher der Benutzer Bob die erhaltenen Photonen mit seiner Base messen lässt. Dabei werden Alices Photonen, Bobs Base und das Rauschen per POST-methode an das backend geschickt und als Antwort wird der gemessene Bitstring zurückgeschickt. Die Variabeln dieses Komponentes sind:

* `strLength`: Die Länge des Bitstrings der für Bob berechnet werden soll.
* `rawPolarization`: Alices Polarisation, als ein einzigen String.
* `polarization`: Alices Polarisation, als Array von getrennten Polarisationen.
* `baseString`: Bobs Base, mit welcher die Photonen gemessen werden.
* `noise`: Das Rauschen, welche die Polarisationen bei der Übertragung gestört hat.
* `measuredString`: Der Rückgabewert, Bobs gemessener Bitstring.
* `bobBaseHasLoaded`: Ein boolean, ob Bobs Base geladen ist (siehe oben, bei `ButtonBobBase`)
* `bobStringHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn der Bitstring gespeichert ist.
* `bobDataHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn alle Daten von Bob gespeichert sind.
* `autostart`: Ob die Komponente automatisch gestartet werden soll oder nicht.
* `text`: Der Text, welcher auf dem Button erscheint.



`ButtonShortenKey`: Eine Logik-Komponente, mit welcher die beiden Basen von Alice und Bob verglichen werden. Es werden die beiden Basen und die beiden Bitstrings per POST-methode an das backend geschickt und als Antwort wird die gekürzte Base zurückgeschickt. Zusätzlich werden auch die dadurch gekürzten Bitstrings von Alice und Bob und deren Länge zurückgeschickt. Dieser Komponente besitzt die folgenden Variabeln:

* `baseString1`: Dies ist Alices Base, welche mitgeschickt wird.
* `baseString2`: Dies ist Bobs Base, welche mitgeschickt wird.
* `bitString1`: Dies ist Alices Bitstring, welcher mitgeschickt wird.
* `bitString2`: Dies ist Bobs Bitstring, welcher mitgeschickt wird.
* `comparedBase`: Ein Rückgabewert, die verglichene Base, welche mit "1" eine Übereinstimmung von zwei Einsen an dieser Stelle, mit "0" eine Übereinstimmung von zwei Nullen an dieser Stelle und mit "_" keine Übereinstimmung an dieser Stelle codiert.
* `comparedBaseHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn die verglichene Base gespeichert wurde
* `commonKeyAlice`: Alices gekürzter Bitstring, bei dem alle Stellen gestrichen wurden, an denen Alices und Bobs Basen nicht übereinstimmten.
* `commonKeyBob`: Bobs gekürzter Bitstring, bei dem alle Stellen gestrichen wurden, an denen Alices und Bobs Basen nicht übereinstimmten.
* `commonKeyHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn die gekürzten Bitstrings gespeichert wurden
* `commonKeyLength`: Die Länge des gekürzten Schlüssels als Ganzzahl
* `text`: Der Text, welcher auf dem Button erscheint.



`PhotonGridSingle`: Wie `PhotonGridDouble` (siehe weiter oben), rendert aber nur ein String anstatt zwei.



`ButtonCompareKey`: Eine Logik-Komponente, welche eine gewählte Anzahl (ein Verhältnis) von Stellen in den Bitstrings von Alice und Bob auf Übereinstimmung vergleicht. Diese nimmt als Argumente Alices Bitstring, Bobs Bitstring und das Verhältnis entgegen. Diese Argumente werden via POST-methode an das backend geschickt und dort miteinander verglichen. Alle verglichenen Stellen werden aus den Bitstrings entfernt und die so verarbeiteten Bitstrings werden an das frontend zurückgeschickt. Die Variabeln dieses Komponentes sind:

* `bitString1`: Dies ist Alices Bitstring, welcher mitgeschickt wird.
* `bitString2`: Dies ist Bobs Bitstring, welcher mitgeschickt wird.
* `percentage`: Die Anzahl (Verhältnis 0% bis 100%) der Stellen in den Bitstrings, die verglichen werden
* `restKeyAlice`: Alices um die verglichenen Stellen gekürzter Key
* `restKeyBob`: Bobs um die verglichenen Stellen gekürzter Key
* `match`: Das Verhältnis (0% - 100%) der Stellen, die übereingestimmt haben
* `restKeyHasLoaded`: Ein boolean, welcher auf true gesetzt wird, wenn die gekürzten Keys gespeichert wurden
* `restKeyLength`: Die Länge der beiden gekürzten Keys
* `text`: Der Text, welcher auf dem Button erscheint.



`EmojiComponent`: Ein kleiner visueller Komponent, der ein emoji rendert, um eine Stimmung auszudrücken.