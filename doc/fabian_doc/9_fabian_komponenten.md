## Anhang

### Spezifikation der frontend-Komponenten

#### `SystemOverview`
* `strLength`: Länge des Bitstrings als Ganzzahl, der von Alice verschickt wird. Diese Länge wird auch benutzt für die Länge der Basenfolge von Alice, sowie des Bitstrings und der Basenfolge von Bob und der Basenfolge von Eve. Die Stringlänge lässt sich mittels eines Eingabefensters mithilfe der Tastatur eingeben.
* `noise`: Rauschen des Übertragungskanals. Bei einem Rauschen von 0 erfolgt eine perfekte Übertragung, bei 100 wird jede Polarisation zufälligerweise neu gesetzt. Das Rauschen lässt sich mit einem Regler einstellen.
* `AliceProb`: Wahrscheinlichkeit der Basenverteilung von Alice. Von 0 (100% diagonale Basis) bis 100 (100% gerade Basis) lässt sich dies mithilfe eines Reglers steuern.
* `BobProb`: Wie `AliceProb`, jedoch für Bob.
* `eavesdropping`: Verhältnis, wie stark Eve die Übertragung abhört. Mit einem Regler lässt sich ein Wert von 0% bis 100% einstellen.

#### `ButtonAliceStart`
* `strLength`: Länge von Alice Bitstrings, wie oben beschrieben.
* `AliceProb`: Wahrscheinlichkeitsverteilung von Alice Basen, wie oben beschrieben.
* `bitString`: Rückgabewert, Bitstring, der als Antwort vom backend zurückkommt.
* `baseString`: Rückgabewert, Base, die als Antwort vom backend zurückkommt.
* `autostart`: Boolean, mit welchem sich der Algorithmus automatisch ausführen lässt, wenn das Dokument fertig geladen ist.
* `dataHasLoaded`: Boolean, welcher auf true geschaltet wird, wenn der Bitstring und die Base fertig geladen sind.
* `text`: Text, welcher auf dem Button erscheint.

#### `PhotonGridDouble`
* `bitString`: Obere String, der dargestellt werden soll.
* `baseString`: Untere String, der dargestellt werden soll.
* `dataHasLoaded`: Boolean, welcher steuert, wann das Raster mit Zeichen gefüllt werden soll.
* `bitStringZoom`: Variable, welche den Zoomfaktor des oberen Strings steuert.
* `baseStringZoom`: Variable, welche den Zoomfaktor des unteren Strings steuert.
* `colorBackground`: Boolean, der steuert, ob der Hintergrund des Rasters eingefärbt werden soll
* `firstStringIsBit`: Boolean, der festlegt, ob der obere String ein Bitstring ist oder eine Base
* `secondStringIsBit`: Boolean, der festlegt, ob der untere String ein Bitstring ist oder eine Base

#### `InformationBox`
Hat keine Variabeln

#### `SimpleSlider`
* `setting`: Property, das beeinflusst werden sollte.
* `text`: Text, welcher neben dem Regler steht.

#### `ButtonEmitPhotons`
* `bitString`: Alices Bitstring, welcher für die Polarisation codiert.
* `baseString`: Alices Basestring, welcher für die Polarisation codiert.
* `noise`: Rauschen, welches die Übertragung beeinflusst (siehe oben bei der Systemübersicht).
* `rawPolarization`: Rückgabewert vom backend, als ein String von Polarisationswerten (0, 45, 90 oder 135), getrennt durch ein Komma.
* `polarization`: Alices Polarisation, als Array von getrennten Polarisationen
* `polarizationHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn die Polarisation geladen und in das Array geschrieben wurde.
* `text`: Text, welcher auf dem Button erscheint.

####`ShowHide`:
* `isVisible`: Boolean, welcher bestimmt, ob die innere Komponente ein- oder ausgeblendet ist.
* `showButton`: Möglichkeit, einen Button zu rendern, der den boolean umschaltet
* `trigger`: Variable, welche das Verhalten dieses Komponenten extern ansteuern kann.
* `position`: CSS-Attribut, mit welchem man die Position des Wrappers festlegt

#### `AnimationEmit`
Hat keine Variabeln

#### `ButtonBobBase`
* `strLength`: Stringlänge, welche die Länge von Bobs Base festlegt.
* `BobProb`: Wahrscheinlichkeitsverteilung, welche für die Festlegung von Bobs Base wichtig ist.
* `baseString`: Rückgabewert, welcher vom backend zurückkommt.
* `bobBaseHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn die Base gespeichert ist.
* `text`: Text, welcher auf dem Button erscheint.

#### `AnimationPhoton1`
Hat keine Variabeln

#### `AnimationPhoton2`
Hat keine Variabeln

#### `ButtonMeasure`
* `strLength`: Länge des Bitstrings der für Bob berechnet werden soll.
* `rawPolarization`: Alices Polarisation, als ein einzigen String.
* `baseString`: Bobs Base, mit welcher die Photonen gemessen werden.
* `noise`: Rauschen, welche die Polarisationen bei der Übertragung gestört hat.
* `eavesdropping`: Eavesdropping, welches die Polarisation bei der Übertragung gestört hat
* `measuredString`: Rückgabewert, Bobs gemessener Bitstring.
* `bobBaseHasLoaded`: Boolean, ob Bobs Base geladen ist (siehe oben, bei `ButtonBobBase`)
* `bobStringHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn der Bitstring gespeichert ist.
* `bobDataHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn alle Daten von Bob gespeichert sind.
* `autostart`: Boolean, ob die Komponente automatisch gestartet werden soll oder nicht.
* `text`: Text, welcher auf dem Button erscheint.

#### `ButtonShortenKey`
* `baseString1`: Alices Base, welche mitgeschickt wird.
* `baseString2`: Bobs Base, welche mitgeschickt wird.
* `bitString1`: Alices Bitstring, welcher mitgeschickt wird.
* `bitString2`: Bobs Bitstring, welcher mitgeschickt wird.
* `comparedBase`: Rückgabewert, die verglichene Base, welche mit "1" eine Übereinstimmung von zwei Einsen an dieser Stelle, mit "0" eine Übereinstimmung von zwei Nullen an dieser Stelle und mit "_" keine Übereinstimmung an dieser Stelle codiert.
* `comparedBaseHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn die verglichene Base gespeichert wurde
* `commonKeyAlice`: Rückgabewert, Alices gekürzter Bitstring, bei dem alle Stellen gestrichen wurden, an denen Alices und Bobs Basen nicht übereinstimmten.
* `commonKeyBob`: Rückgabewert, Bobs gekürzter Bitstring, bei dem alle Stellen gestrichen wurden, an denen Alices und Bobs Basen nicht übereinstimmten.
* `commonKeyHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn die gekürzten Bitstrings gespeichert wurden
* `commonKeyLength`: Länge des gekürzten Schlüssels als Ganzzahl
* `text`: Text, welcher auf dem Button erscheint.

#### `PhotonGridSingle`
* `string`: String, der dargestellt werden soll
* `dataHasLoaded`: Boolean, welcher steuert, wann das Raster mit Zeichen gefüllt werden soll.
* `stringZoom`: Variable, welche den Zoomfaktor des Strings steuert.
* `firstStringIsBit`: Boolean, der festlegt, ob der String ein Bitstring ist oder eine Base
* `colorBackground`: Boolean, der steuert, ob der Hintergrund des Rasters eingefärbt werden soll

#### `ButtonCompareKey`
* `bitString1`: Alices Bitstring, welcher mitgeschickt wird.
* `bitString2`: Bobs Bitstring, welcher mitgeschickt wird.
* `percentage`: Anzahl (Verhältnis 0% bis 100%) der Stellen in den Bitstrings, die verglichen werden
* `restKeyAlice`: Rückgabewert, Alices um die verglichenen Stellen gekürzter Key
* `restKeyBob`: Rückgabewert, Bobs um die verglichenen Stellen gekürzter Key
* `match`: Rückgabewert, Verhältnis (0% - 100%) der Stellen, die übereingestimmt haben
* `restKeyHasLoaded`: Boolean, welcher auf true gesetzt wird, wenn die gekürzten Keys gespeichert wurden
* `restKeyLength`: Länge der beiden gekürzten Keys als Ganzzahl
* `text`: Text, welcher auf dem Button erscheint.

#### `EmojiComponent`
* `emoji`: Name des emoji, mit Unicode encoding, oder anderen Enkodierung