# ⏱️ GPS Arbeitszeit-Tracker & Analysetool

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Eine webbasierte Progressive Web App (PWA) zur lokalen Auswertung von Arbeitszeiten, Aufenthalten am Arbeitsplatz und Fahrtwegen auf Basis von GPS-Tracking-Daten. Die App verarbeitet GPX-, KML- und CSV-Dateien direkt im Browser, erkennt Arbeitszeiten anhand definierter Zonen für Zuhause und Arbeitsplatz und visualisiert Tagesrouten auf einer interaktiven Karte.

🔗 **Zur Live-App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🚀 Funktionen

- **Lokale Auswertung im Browser:** Tracking-Dateien werden direkt lokal verarbeitet. Es findet kein Upload deiner GPX-, KML- oder CSV-Dateien auf fremde Server statt.
- **Mehrfachimport:** Mehrere GPX-, KML- oder CSV-Dateien können in einem Schritt importiert und gemeinsam ausgewertet werden.
- **Automatische Monatsauswahl:** Nach dem Import wird automatisch der aktuellste Monat aller importierten Dateien angezeigt.
- **PWA-Support:** Die App kann auf Smartphone, Tablet oder Desktop wie eine native App installiert werden und ist für die lokale Nutzung optimiert.
- **Arbeitsplatz- und Zuhause-Zonen:** Radius, Position und Adresse können frei definiert werden, um Arbeitszeiten und Pendelwege automatisch zu erkennen.
- **Arbeitszeitberechnung:** Erkennung von Kommen, Gehen, Aufenthaltsdauer, Pausenzeit, Sollzeit und Differenz.
- **Pendeldistanz und Gesamtstrecke:** Anzeige von Hinweg, Rückweg und gesamter Tagesstrecke.
- **Interaktive Routenansicht:** Tagesrouten können auf einer Karte geöffnet und farblich nach Hinweg, Rückweg, Aufenthalt am Arbeitsplatz, Pause und sonstiger Strecke dargestellt werden.
- **Status pro Tag:** Tage lassen sich als Büro, Homeoffice, Urlaub, Frei, Feiertag oder N.A. markieren.
- **Manuelle Nachbearbeitung:** Kommen- und Gehen-Zeiten können direkt pro Tag bearbeitet und gespeichert werden.
- **Feiertagseditor:** Feiertage lassen sich als JSON pflegen und lokal speichern.
- **Zeitzonen- und Offset-Einstellungen:** Tages- und Stunden-Offsets sowie ein automatischer oder manueller Zeitzonenmodus stehen zur Verfügung.
- **JSON-Import/Export:** Konfiguration, Feiertage, Tagesdaten und Tracks können als JSON exportiert und später wieder importiert werden.
- **Mobile Optimierung:** Kompakte Darstellung für kleine Displays mit Fokus auf Status, Zeiten und Schnellaktionen.

## 📂 Unterstützte Formate

Für den Streckenimport werden aktuell folgende Dateitypen unterstützt:

- `.gpx`
- `.kml`
- `.csv`

Zusätzlich kann eine komplette Sicherung als `.json` importiert bzw. exportiert werden.

## ⚙️ Einrichtung & Standardwerte

Beim ersten Start sind Beispielpositionen hinterlegt:

- **Zuhause:** Rathaus München
- **Arbeitsplatz:** Forschungszentrum Garching

**So passt du die App an:**

1. Trage deine echte Adresse ein oder setze die Position direkt per Klick auf der Karte.
2. Alternativ kannst du Breiten- und Längengrad manuell eintragen.
3. Passe den Radius für Zuhause und Arbeitsplatz an.
4. Hinterlege deine Sollstunden pro Tag und die Standardpause.
5. Speichere die Konfiguration.

Alle Werte werden lokal im Browser gespeichert und beim nächsten Aufruf automatisch wieder geladen.

## 🗓️ Bedienung im Alltag

Der typische Ablauf sieht so aus:

1. GPS-Tracking mit einer App wie **GPSLogger** aufzeichnen.
2. Eine oder mehrere GPX-, KML- oder CSV-Dateien in den GPS Arbeitszeit-Tracker laden.
3. Die App analysiert die Daten automatisch und springt direkt in den neuesten importierten Monat.
4. Tage prüfen, Status anpassen oder Zeiten bei Bedarf manuell korrigieren.
5. Optional die Tagesroute auf der Karte öffnen.
6. Regelmäßig per JSON-Export ein Backup sichern.

## 📊 Was ausgewertet wird

Die App ermittelt je nach Datenlage unter anderem:

- Beginn des Aufenthalts am Arbeitsplatz
- Ende des Aufenthalts am Arbeitsplatz
- Netto-Arbeitszeit
- Pausen zwischen mehreren Arbeitsplatz-Besuchen
- Tages-Sollzeit
- Überstunden oder Unterstunden
- Gesamte zurückgelegte Strecke
- Pendelstrecke von Zuhause zur Arbeit und zurück

## 🧭 Empfehlung: GPSLogger zum Aufzeichnen

Für die Aufzeichnung der Bewegungsdaten eignet sich **GPSLogger** sehr gut:

🔗 **Website:** [https://gpslogger.app/](https://gpslogger.app/)

Warum es gut passt:

- zuverlässige GPS-Aufzeichnung im Hintergrund
- praxistauglich für längere Zeiträume
- gut geeignet für den späteren Import in diese Web-App
- praktisch, wenn regelmäßig automatisch neue Tracking-Dateien erzeugt werden sollen

### Empfohlene GPSLogger-Konfiguration

Die folgenden Werte sind eine gute und in der Praxis bewährte Grundlage für die Nutzung mit diesem Projekt:

- **Neue Datei erstellen:** Monatlich
- **GPS/GNSS-Standorte aufzeichnen:** Aktiviert
- **Aufzeichnungsintervall:** 60 Sekunden
- **Aktualisierungsintervall für passive Standorte:** 1 Sekunde
- **Genauigkeit:** 40 Meter
- **Zeit bis die Genauigkeit erreicht ist:** 60 Sekunden
- **Absolute Zeit bis zur GPS-Positionsbestimmung:** Bitte in deiner Installation prüfen; hier kann je nach Gerät oder App-Stand ein Standardwert aktiv sein

### Hinweise zu den GPSLogger-Einstellungen

- Ein Intervall von **60 Sekunden** ist meist ein guter Kompromiss zwischen Akkuverbrauch und ausreichend genauer Wegerfassung.
- Eine **monatliche Datei-Erstellung** passt gut zu dieser App, weil größere Zeiträume übersichtlich importiert werden können.
- Die tatsächliche Genauigkeit hängt stark vom Smartphone, Empfang, Energiesparmodus und Standort ab.
- Wenn Pendelwege oder kurze Stopps sehr präzise erkannt werden sollen, kann ein kürzeres Intervall sinnvoll sein, kostet aber mehr Akku.
- Die optimale Konfiguration ist immer ein Kompromiss aus Akkulaufzeit, Datenmenge und Genauigkeit.

## 💾 Datenspeicherung

Wichtige Hinweise zur Speicherung:

- **Lokaler Speicher:** Einstellungen, Tagesdaten, Feiertage und importierte Auswertungen werden lokal im Browser gespeichert.
- **Browser-Cache:** Wenn Browserdaten oder lokaler Speicher gelöscht werden, gehen diese Informationen verloren.
- **Backups empfohlen:** Nutze regelmäßig den JSON-Export.
- **Keine Cloud-Pflicht:** Das Tool ist für eine einfache lokale Nutzung ohne eigenes Backend gedacht.

## ⚠️ Hinweise zur Datenqualität

- Die Qualität der Auswertung hängt direkt von der Qualität der GPS-Daten ab.
- Schlechter Empfang, Energiesparmodi oder ungenaue Standortdaten können Arbeitszeiten und Pendeldistanzen verfälschen.
- CSV-, GPX- oder KML-Dateien aus unterschiedlichen Quellen sollten möglichst konsistente Zeitstempel enthalten.
- Bei unvollständigen Tracks kann eine manuelle Nachbearbeitung einzelner Tage sinnvoll sein.

## 🛠️ Technischer Überblick

- Webbasierte Anwendung ohne Server-Backend
- Verarbeitung der Tracking-Daten direkt im Browser
- Speicherung über `localStorage`
- Kartenansicht auf Basis von Leaflet/OpenStreetMap
- Import von GPX, KML, CSV und JSON
- Export kompletter Sicherungen als JSON
- Installierbar als Progressive Web App (PWA)

---

🤖 *Dieses Projekt, die Code-Architektur und die Dokumentation wurden mit KI-Unterstützung erstellt, erweitert und optimiert.*
