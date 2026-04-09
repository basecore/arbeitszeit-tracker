# ⏱️ GPS Arbeitszeit-Tracker & Analysetool

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Eine webbasierte Progressive Web App (PWA) zur lokalen Auswertung von Arbeitszeiten und Fahrtwegen. Die App analysiert Tracking-Daten (GPX- und CSV-Dateien), die z. B. mit Apps wie **GPSLogger** aufgezeichnet wurden. Sie berechnet automatisch Arbeitszeiten, Pausen und Pendelstrecken und visualisiert die Routen auf einer interaktiven Karte.

🔗 **Zur Live-App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🚀 Funktionen
- **Lokale Offline-Auswertung:** Die hochgeladenen Dateien (`.gpx` / `.csv`) werden ausschließlich lokal im Browser verarbeitet. Es findet **kein Upload** auf fremde Server statt.
- **PWA-Support:** Kann auf Smartphones und Desktop-Rechnern wie eine native App installiert werden und funktioniert dank Service Worker auch ohne aktive Internetverbindung (Offline-Modus).
- **Zonen-Konfiguration:** Frei definierbare Radien für den Arbeitsplatz und das Zuhause zur automatischen Pendel-Erkennung.
- **Mobile Optimierung:** Kompakte Ansicht für Smartphones (Status unter dem Datum, Arbeitszeit unter "Gehen"), damit alle relevanten Buttons immer im Blick bleiben.
- **JSON-Konfiguration:** Einfacher Import von Feiertagen und Namenszuweisungen für den Export.

## ⚙️ Einrichtung & Standardwerte
Beim allerersten Start sind neutrale Orte voreingestellt:
- **Zuhause:** Rathaus München
- **Arbeitsplatz:** Forschungszentrum Garching

**So passt du es an:**
1. Trage deine echte Adresse ein und klicke auf "🔎 Adresse suchen" (oder trage die Koordinaten manuell ein).
2. Klicke auf **Speichern**. Die Werte werden sicher in deinem lokalen Browser-Cache (`localStorage`) hinterlegt und bei zukünftigen Aufrufen automatisch geladen.

## ⚠️ Wichtige Hinweise zur Datenspeicherung
- **Lokaler Cache:** Alle erfassten Zeiten, bearbeiteten Tage und Einstellungen liegen nur im Cache deines Browsers. Wenn du die Browser-Daten löschst, sind diese Informationen weg.
- **Backups:** Nutze regelmäßig den **Export**-Button, um deine konfigurierten Daten und Auswertungen als JSON-Datei zu sichern.
- **Datenqualität:** Die Genauigkeit der Arbeits- und Fahrtzeiten hängt massiv von der Empfangsqualität deines Smartphones bei der GPX/CSV-Aufzeichnung ab.

---

🤖 *Dieses Projekt, die Code-Architektur und die Dokumentation wurden vollständig mit Unterstützung von **Gemini 3.1 Pro** erstellt, optimiert und modifiziert.*
