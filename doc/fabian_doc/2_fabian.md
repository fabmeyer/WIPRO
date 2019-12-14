## 2. Problem, Fragestellung, Vision

### Quantenkryptografie: Das BB84-Protokoll

#### Einführung

In der Quantenverschlüsselung werden sich Eigenschaften der Quantenphysik zu eigen gemacht, um damit Informationen verschlüsseln zu können. Gleichzeitig ist es eine inhärente Eigenschaft eines quantenphysikalischen Systems, dass bei einem Messvorgang das System selbst gestört wird. Diese Eigenschaft wird benutzt, um ein mögliches Abhören einer Botschaft detektieren zu können.

Eine Möglichkeit, Informationen mithilfe eines quantenphysikalischen Systems zu übertragen, ist die Polarisierung von Photonen. Dabei werden Photonen mithilfe von geeigneter Gerätschaft polarisiert und dann durch einen Lichtwellenleiter verschickt. Am anderen Ende kann der Empfänger die Polarisation durch den Einsatz von optischen Geräten rekonstruieren und so die originale Botschaft wiederherstellen.

Photonen können in 4 möglichen Zuständen polarisiert werden: 0°, 45°, 90° und 135°. Dabei stellen 0° und 90° gerade Polarisierungen dar und 45° und 135° diagonale Polarisierungen.

Ein Bit kann nun in 2 möglichen Polarisierungen kodiert werden: 0 mit 0° oder 45° und 1 mit 90° oder 135°. Nur durch das Wissen der Polarisierung und der richtigen Basis kann das korrekte Bit bestimmt werden.

Ist das Protokoll erfolgreich durchgeführt worden unter Einhaltung von gewöhnlichen Sicherheitsvorkehrungen, können der Sender und der Empfänger erfolgreich einen Schlüssel generieren, mit dem sie Informationen ähnlich einem one-time pad (symmetrisch) verschlüsseln können.

Ein weiterer, wichtiger Vorteil von Quantenverschlüsselung im Gegensatz zu konventioneller (asymmetrischer) Verschlüsselung ist, dass die Etablierung des Schlüssels auf physikalischen Eigenschaften beruht und nicht auf mathematischen Berechnungen, wie beispielsweise von Hashfunktionen. Diese physikalischen Eigenschaften lassen sich auch mit erhöhtem Rechenaufwand nicht umgeghen.

#### Das BB84-Protokoll

Das BB84-Protokoll, benannt nach seinen Erfindern, Charles Bennet und Gilles Brassard, und seinem Veröffentlichungsjahr 1984, ist das bekannteste Protokoll zur Realisierung einer Quantenverschlüsselung. Es soll hier kurz beschrieben werden.

Der Einfachheit halber gehen wir von 3 Personen aus: Alice, welche die Nachricht verschickt, Bob, welche sie empfängt und Eve, welche die Nachricht abhören möchte.

Ablauf:

1. Alice erzeugt einen zufälligen, genügend langen Bitstring
2. Diesen Bitstring enkodiert Alice, indem sie für jedes Bit eine zufällige Basis wählt (gerade oder diagonal) und damit jedes Photon polarisiert
3. Die polarisierten Photonen schickt Alice mithilfe eines optischen Mediums (in der Regel ein Glasfaserkanal) an Bob
4. Wenn Bob die Photonen erhält, misst er die Polarisierung jedes einzelnen Photons mithilfe seiner zufällig gewählten Basis (gerade oder diagonal) und dekodiert so den Bitstring
5. Durchschnittlich sollte Bob zu 50% die richtige Basis wählen und daher das korrekte Bit (0 oder 1) zu 50% rekonstruieren können
6. Bob befragt nun Alice (über einen authentisierten, öffentlichen Kanal) über die Basis jedes einzelnen Photons
7. Jedes Bit, welches durch eine falsch gewählte Basis bestimmt wurde, wird gekürzt. Das heisst der Schlüssel wird durchschnittlich 50% kürzer
8. Zum jetzigen Zeitpunkt sollten Alice und Bob denselben, identischen Bitstring besitzen, dieser wird auch *sifted key* genannt
9. Alice und Bob können über einen authentisierten, öffentlichen Kanal ein Teil des Bitstrings miteinander vergleichen, um sicherzugehen, dass sie nicht abgehört wurden
10. Dieser Teil wird dann verworfen. Der restliche Teil bildet den *shared secret key*
11. Falls Eve die Nachricht abhören will, muss sie die Polarisierung der Photonen zwischen Alice und Bob messen. Auch Eve muss daher eine zufällig generierte Abfolge von Basen (gerade und diagonal) verwenden, um die Polarisation zu messen
12. Wenn Eve eine falsche Basis gewählt hat, wird die Polarisierung des jeweiligen Photons aufgrund zufälligerweise neu gesetzt
13. Falls Eve alle Bits gemessen hat, sinkt die Wahrscheinlichkeit, dass Eve unentdeckt bleibt nach $n$ verglichenen Bits auf $(\frac{3}{4})^n$. Mithilfe von statistischen Tests kann überprüft werden, ob ein Mithörer die Photonen abgehört hat oder nicht
14. Falls ein Mithörer vorhanden war, wird das Protokoll wiederholt
15. Durch ein Absprechen können Alice und Bob eine andere Basenverteilung von geraden und diagonalen Basen als 50/50 benutzen. Dies führt zu längeren Schlüsseln bzw. weniger Kürzen

### Kompromiss aus Simulation und Visualisierung des BB84-Protokolls

Die Fragestellung, wie man ein solch komplexen Sachverhalt simulieren und gleichzeitig visualisieren könnte war die Ausgangsstellung dieses Projektes. Von Anfang an gab es einen grossen Spielraum und Freiheit bei der Konzeption und Umsetzung.

Da die zwei Autoren dieses Projektes beide einen anderen Background haben (frontend, bzw. backend), kristallisierte sich langsam ein Konzept heraus, welches eine relativ klare Aufgabenteilung beinhaltete.

Für die Simulation bietet sich natürlich ein Backend an, bei welcher Performance und Robustheit oberste Priorität hat. Auf der anderen Seite kann die Visualisierung nur in einem Frontend sinnvoll verwirklicht werden, da hier mithilfe des Einsatz von Text, Bild und weiteren Medien die Thematik dem Benutzer erklärt werden kann.

Dies gab uns die Idee, eine Webapplikation zu programmieren, welche beide Anwendungen miteinander verbindet. Diese Verbindung führte zu einem bedingten Kompromiss: Das Backend generiert Daten für eine Simulation von quantenkryptografischer Verschlüsselung, bei welcher üblicherweise sehr grosse Datenmengen verarbeitet werden. Das Frontend hingegen muss den Sachverhalt möglichst einfach erklären können. Dazu sind keine grossen Datenmengen nötig.

Wir denken, dass uns dieser Kompromiss gelungen ist, indem dem Benutzer trotzdem das Gefühl gegeben wird, dass hier sehr grosse Mengen von Daten verarbeitet werden und der Benutzer einen Einblick in die Komplexität der Thematik erhält.