## 8. Ausblick

### Realistischere Simulation des BB84-Protokolls

Um das BB84-Protokoll realistischer darstellen zu können, müsste man auf jeden Fall die Möglichkeit zur Verfügung stellen, dass der Photonenemitter Photonen zu viel oder zu wenig aussendet und dass der Photonendetektor Photonen zu viel oder zu wenig detektiert. Dies führt jedoch automatisch zu einer Veränderung der Länge und einer Verschiebung der jeweiligen Strings von Polarisationen (und Bits) von Alice und Bob. Damit dieses feature realisiert werden kann, muss jedoch gezwungenermassen ein timestamp mitgeschickt werden, mit dem jedes Photon datiert wird. Nur so können Alice und Bob Gewissheit haben, ob das jeweilige Photon ausgesendet und auch angekommen ist.

Weiterhin müssten Prozesse wie Rauschen (noise) oder Abhören (eavesdropping) als zeitabhängige, anstatt rein stochastische Prozesse implementiert werden. Das heisst, dass Rauschen und Abhören nicht mit einer konstanten Rate auftritt, sondern mit zeitabhängigen Variabeln modelliert werden sollte. Beispielsweise tritt Rauschen dann plötzlich auf (sogenannte "bursts") und flacht dann wieder ab. Und Eve wird möglicherweise nur ein Teil der Übertragung (dafür alle Photonen davon) messen, anstatt ein Verhältnis der gesamten Übertragung.

### Frontend

Bei mehr verfügbarer Zeit wären im frontend die folgenden Verbesserungen implementiert worden:

* Die Systemübersicht wäre um die realistischeren features, wie oben beschrieben ergänzt worden. Diese könnten mithilfe von Regler am jeweiligen Ort einfach dargestellt werden.
* Eine verkleinerte Darstellung der Systemübersicht (eine Art minimap) sollte dem User jederzeit eingeblendet werden, um den Standpunkt im Ablauf des Algorithmus zu visualisieren. Diese wäre beispielsweise in der oberen rechten Ecke platziert und würde nicht im Dokument mitscrollen. Darauf könnten dann die jeweiligen Komponenten, welche gerade im Algorithmus eine Rolle spielen farblich hervorgehoben werden.
* Ein Plot am Ende des Dokumentes, vor der Konklusion könnte verwendet werden, um die Länge des common shared keys vs. der Länge des anfänglichen Bitstrings von Alice zu plotten. Damit könnte man visualisieren, wie sich die Wahl der Basen, das Rauschen und das Abhören auf die Länge des resultierenden Strings auswirken. Die Realisierung könnte mit einer Bibliothek, wie D3.js erfolgen.
* Im Verlauf des Dokuments sollte dem User mehr feedback gegeben werden, damit die App sich interaktiver präsentiert und sich der Ablauf des Algorithmus weniger atomar anfühlt.

### Backend

### API

Websockets?