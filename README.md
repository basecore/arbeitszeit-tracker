# ⏱️ Arbeitszeit- und GPS-Routen Analysetool

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Eine webbasierte Progressive Web App (PWA) zur lokalen Auswertung von Arbeitszeiten und Fahrtwegen. Die App nutzt Tracking-Daten (GPX- und CSV-Dateien), die mit Apps wie **GPSLogger** aufgezeichnet wurden, berechnet daraus die genauen Zeiten sowie Strecken und visualisiert die Route.

🔗 **Zur App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🚀 Funktionen
- **Lokale Auswertung:** Analysiert hochgeladene `.gpx`- und `.csv`-Dateien von GPSLogger direkt im Browser.
- **Automatische Berechnung:** Ermittelt anhand der Zeitstempel und Koordinaten die reine Arbeitszeit, die Fahrtzeit sowie die zurückgelegten Kilometer.
- **Karten-Visualisierung:** Darstellung der abgefahrenen Route auf einer interaktiven Karte (via Leaflet.js).
- **PWA-Support:** Lässt sich wie eine native App auf dem Homescreen (Desktop & Smartphone) installieren und funktioniert offline.
- **Konfigurations-Import:** Einfache Zuweisung von Namen oder Projekten zu bestimmten Tagen per JSON-Datei.

## ⚙️ Wie es funktioniert & Einstellungen
1. **App aufrufen & Installieren:** Besuche die URL. Über die Browser-Optionen ("Zum Startbildschirm hinzufügen") kannst du das Tool für den schnellen Offline-Zugriff installieren.
2. **Daten aufzeichnen:** Nutze eine Tracking-App wie **GPSLogger** auf deinem Smartphone, um während deines Arbeitstages deine Route und Zeiten als `.gpx` oder `.csv` mitzuschneiden.
3. **Dateien analysieren:** Lade die erstellten Tracking-Dateien in der Web-App hoch. Das Skript wertet die Wegpunkte lokal aus und präsentiert dir sofort eine Zusammenfassung der Zeiten und Strecken.
4. **JSON-Konfiguration laden:** Um die Auswertung zu personalisieren, kannst du eine Konfigurationsdatei hochladen, die Datumsangaben einem Namen zuordnet:
   ```json
   {
     "2026-04-09": "Max Mustermann",
     "2026-04-10": "Max Mustermann"
   }
   ```
   *Einfach in einem Texteditor anpassen und in die Web-App laden.*

## ⚠️ Worauf man aufpassen sollte (Wichtig!)
- **Datenqualität von GPSLogger:** Das Tool ist nur so genau wie die Daten, die es bekommt. Wenn dein Smartphone zwischenzeitlich das GPS-Signal verliert (z.B. in Tunneln oder Gebäuden), kann dies die berechneten Kilometer oder Zeiten beeinflussen.
- **Lokale Verarbeitung:** Alle Daten bleiben auf deinem Gerät! Es werden keine Dateien auf fremde Server hochgeladen. Wenn du den Browser-Cache löschst oder das Tab schließt, musst du die Dateien für eine erneute Ansicht wieder hochladen.
- **Dateigrößen:** Bei sehr langen Aufzeichnungen (großen GPX-Dateien mit extrem vielen Wegpunkten) kann die Berechnung je nach Geräteleistung einen kurzen Moment dauern.

---

🤖 *Dieses Projekt, der Code und die zugehörige Dokumentation wurden mit Unterstützung von **Gemini 3.1 Pro** erstellt, modifiziert und optimiert.*
