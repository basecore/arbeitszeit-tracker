# ⏱️ GPS Arbeitszeit-Tracker

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Ein kompakter, webbasierter Arbeitszeit- und Fahrtweg-Tracker, der als Progressive Web App (PWA) direkt im Browser läuft und sich auf dem Smartphone oder Desktop installieren lässt. 

🔗 **Zur App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🚀 Funktionen
- **Zeiterfassung:** Einfaches Stempeln von Arbeitszeiten (Kommen/Gehen).
- **GPS-Fahrtwegberechnung:** Automatische Erfassung der zurückgelegten Strecke via GPS (unterstützt durch Leaflet.js).
- **PWA-Support:** Kann wie eine native App auf dem Homescreen installiert werden und funktioniert dank Service Worker teilweise auch offline.
- **Konfigurations-Import:** Zuweisung von Namen und Datumswerten per JSON-Datei.

## ⚙️ Wie es funktioniert & Einstellungen
1. **App aufrufen & Installieren:** Besuche die URL im Browser. Über die Browser-Optionen ("Zum Startbildschirm hinzufügen" oder das Installations-Icon in der Adressleiste) kannst du die App wie eine echte Anwendung installieren.
2. **Standort freigeben:** Damit die Fahrtwege berechnet werden können, muss beim ersten Aufruf die Standortberechtigung im Browser erteilt werden.
3. **Zeiten tracken:** Mit den integrierten Buttons startest und stoppst du deine Arbeits- und Fahrtzeiten.
4. **JSON-Konfiguration laden:** Über den Upload-Bereich kannst du eine Konfigurationsdatei einlesen, um das Tool an deine Planung anzupassen. Das Format für die JSON-Datei lautet:
   ```json
   {
     "2026-04-09": "Max Mustermann",
     "2026-04-10": "Max Mustermann"
   }
   ```
   *Bearbeite diese Liste einfach in einem Texteditor und lade sie hoch, um die Tage entsprechend zuzuordnen.*

## ⚠️ Worauf man aufpassen sollte (Wichtig!)
- **Standortberechtigung:** Ohne GPS-Freigabe im Browser kann die Wegstrecke nicht berechnet werden. Stelle sicher, dass dein Smartphone der Browser-App den Standortzugriff erlaubt.
- **GPS-Genauigkeit:** Innerhalb von Gebäuden, Tunneln oder in dicht bebauten Gebieten kann das GPS-Signal springen. Dies kann zu leichten Ungenauigkeiten bei der erfassten Kilometerzahl führen.
- **Lokale Datenspeicherung:** Alle erfassten Zeiten und Routen bleiben **nur lokal in deinem Browser** gespeichert! Wenn du den Browser-Cache leerst oder die Website-Daten löschst, sind die Daten weg. Denke daran, deine Auswertungen regelmäßig zu exportieren oder zu sichern.
- **Energieverbrauch:** Aktives GPS-Tracking benötigt mehr Strom. Achte bei längeren Fahrten auf deinen Akkustand.

---

🤖 *Dieses Projekt, der Code und die zugehörige Dokumentation wurden mit Unterstützung von **Gemini 3.1 Pro** erstellt, modifiziert und optimiert.*
