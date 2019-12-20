## Evaluation

### Frontend: Benutzertests und Umfrage

Für die Evaluation des Frontends wurden Benutzertests mit dem Prototyp (Stand: 17.12.2019) durchgeführt und die User füllten anschliessend ein Umfragebogen von Google forms aus. Insgesamt bearbeiteten 13 Benutzer die Applikation und füllten den Umfragebogen aus, der Arbeitsaufwand für die Bearbeitung ist ca. 15 Minuten.

Die Benutzer gaben an von Physik 4,1 von 6 Punkte zu verstehen und von Informatik 3,8 von 6 Punkten. Dies lässt auf Benutzer schliessen, die eher wenig Erfahrung mit Physik und Informatik haben und deswegen eher keinen technischen Hintergund haben.

### Erkenntnisse zur Erklärungsfähigkeit der Webseite

Insgesamt konnte das BB84-Protokoll gut erklärt werden, mit einem Mittelwert von 4,8 von 6 Punkten.

Als besonders gut wurden genannt, wie in diesem Protokoll auf den secret key geschlossen werden kann (drei Personen), die Erklärung wie das BB84-Protokoll grundsätzlich funktioniert (drei Personen) und die grafische Darstellung der polarisierten Photonen (drei Personen). Der Ablauf der Applikation scheint logisch zu sein und die Visualisierungen helfen den Benutzer den Sachverhalt zu verstehen.

Als nicht gut erklärt, wurde von drei Personen genannt, wie das Abhören die Polarisierung verändert und dass das noise bzw. die Ablenkung im Kanal nicht weiter erklärt wird (zwei Personen). Weiterhin wurde gefragt, Warum das Protokoll schlussendlich sicher sein und dass die beiden Basen besser erklärt werden müssen. Unterdessen wurde bereits ein Kapitel zum Thema noise eingefügt. Bei einer weiteren Iteration sollte also mehr Zeit in die Erklärung der Basen und deren Messvorgang investiert werden um die Polarisierung von Photonen bei der Messung besser erklären zu können.

Die Frage, ob die Systemübersicht für die Erklärung geholfen hat, wurde sehr positiv beantwortet, mit einem Mittelwert von 4,7 von 6 Punkten. Bei einer weiteren Iteration sollte besonders Wert darauf gelegt werden, die Systemübersicht auszubauen und um mehr Graphiken und Einstellungsmöglichkeiten erweitern.

### Erkentnisse zur Interaktion

Die Qualität der Interaktion der Webseite wurde durchschnittlich mit 4,7 von 6 Punkten bewertet.

Am meisten gelobt wurden die Regler, um Werte einzustellen (zwei Personen). Weiterhin wurde genannt, dass die Interaktivität einem dazu einlädt in den Prozess einzugreifen (eine Person), dass es gut sei, das noise zu setzen, da ansonsten meistens von einem perfekten System ausgegangen wird (eine Person) und dass es gut sei, das Abhören zu setzen, um später den Einfluss daraus auf die Schlüssel zu sehen (eine Person). Wenn die Applikation vervollständigt werden würde, sollten wieder die selben UI-Elemente eingesetzt werden, da diese von den Benutzern als positiv bewertet wurden.

Negativ bewertet wurde, dass bestimmte Elemente erst erscheinen, wenn auf Buttons geklickt wird (eine Person) und dass gewisse Einstellungen der Systemübersicht später wieder erneut gesetzt werden können (eine Person). Auch wurde erwähnt, dass die Buttons irgendwie behandelt werden sollen, damit sie nicht schon vor dem jeweiligen Zeitpunkt im Ablauf des Algorithmus geklickt werden können. Dies wurde unterdessen bereits im frontend umgesetzt. Die Animationen mit den Photonen, die von links nach rechts fahren und dann wieder zurückspringen wurde von einer Person als störend wahrgenommen. Bei mehr Zeitaufwand könnten die Animationen überarbeitet werden.

Die Idee, einen Komponenten zu entwickeln, mit dem man in einen String reinzoomen kann umzusetzen wurde sehr positiv aufgenommen (4,8 Punkte von 6). Von diesem Komponente könnte mehr und besseren Gebrauch gemacht werden, wenn beispielsweise realistischere features, wie bursts eingebaut wären. Damit liessen sich solche zeitabhängige Einflüsse auf die Schlüsselerzeugung gut visualisieren.

### Erkentnisse zur Visualisierung

Die Visualisierung wurde mit 4,6 Punkte von 6 schlechter als die Erklärungsfähigkeit und die Interaktion bewertet.

Mit Abstand am meisten gelobt wurde erneut die Systemübersicht (fünf Personen), es wurde genannt, dass sie die Darstellung ist, welche das Protokoll am besten zusammenfassen kann und sehr eindeutig ist. Weitere 5 Personen nannten die Darstellung der Polarisierung der Photonen, bzw. die Änderung der Polarisation beim Messen als sehr gut. Hier ist unklar, welche Visualisierung genau gemeint ist, da mehrere Komponenten die Polarisierung darstellen (unter anderem auch die `informationBox`). Gelobt wurde die visuelle Umsetzung und die Ästhetik von zwei Personen.

Als negative Kommentare wurden beispielsweise genannt, dass bei der Messung des Photons mit einem Filter, welches eine andere Ausrichtung besitzt die Polarisierung des Photons zufällig gesetzt werden müsste (wie im Text erklärt) und nicht immer gleich (eine Person). Dies könnte mit Programmieraufwand so umgesetzt werden.

Die Frage, wie gut die Animation mit den Photonen und dem Filter dazu beigetragen haben den Sachverhalt mit der Polarisierung zu verstehen wurde mit 4,5 von 6 eher schlecht bewertet. Wir denken, dass diese Animationen wichtig sind für das Verstehen des Protokolls. Bei mehr verfügbarer Zeit müssten sie angepasst werden, damit die neue Polarisierung zufällig gewählt wird anstatt immer dieselbe.

### Konklusion

Grundsätzlich wurde der Prototyp sehr positiv bewertet. Es war schwierig Personen zu finden, welche Interesse hatten den Prototypen zu testen und anschliessend das Formular auszufüllen. Teilweise wurden Dinge bemängelt, welche nicht direkt mit dem BB84-Protokoll zusammenhangen, bzw. den Rahmen der Thematik und der Applikation gesprengt hätten, wie die Erklärung, wie die beiden Basen zustande kommen oder warum nun das BB84-Protokoll sicher sei.

Die wichtigsten Punkte aus der Benutzerumfrage sind zusammengefasst:

* Der Algorithmus kann als ganzes durchaus gut erklärt werden. Dies ist sehr erfreulich, da es sich hiermit um ein komplexes Thema handelt, mit dem sich die meisten Personen der Umfrage wahrscheinlich noch nie befasst haben.
* Die Sytstemübersicht wurde sehr positiv aufgenommen und hat auch uns persönlich gefallen. Die Idee einen visuellen Überblick über das System schon ganz am Anfang des Dokuments zu geben ist sehr gut und könnte auch für weitere Projekte in der Art benutzt werden.
* Die Animationen und Visualisierungen sind grundsätzlich gut und überzeugen auch ästhetisch. Bei einer weiteren Iteration oder einem anderen Projekt könnten die verwendeten Bibliotheken erneut verwendet werden.
* Das Ziel des frontends, das BB84-Protokoll auf eine interaktive und ansprechende Weise zu erklären konnte also erreicht werden.