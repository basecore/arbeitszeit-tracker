# ⏱️ GPS Arbeitszeit-Tracker & Analysetool

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Eine webbasierte Progressive Web App (PWA) zur lokalen Auswertung von Arbeitszeiten, Aufenthalten am Arbeitsplatz und Fahrtwegen auf Basis von GPS-Tracking-Daten. Die App verarbeitet GPX-, KML- und CSV-Dateien direkt im Browser, erkennt Arbeitszeiten anhand definierter Zonen für Zuhause und Arbeitsplatz und visualisiert Tagesrouten auf einer interaktiven Karte.

🔗 **Zur Live-App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🚀 Funktionen

- **Lokale Auswertung im Browser:** Tracking-Dateien werden direkt lokal verarbeitet. Es findet kein Upload deiner GPX-, KML- oder CSV-Dateien auf fremde Server statt.
- **Mehrfachimport:** Mehrere GPX-, KML- oder CSV-Dateien können in einem Schritt importiert und gemeinsam ausgewertet werden.
- **Automatische Monatsauswahl:** Nach dem Import wird automatisch der aktuellste Monat aller importierten Dateien angezeigt.
- **Intelligente Standort-Ermittlung (Neu in v1.8):** Wenn du deine genauen Koordinaten für Zuhause oder die Arbeit nicht weißt, kann die App sie automatisch aus deinen hochgeladenen GPS-Routen lernen und die passenden Adressen via Reverse-Geocoding (Nominatim) vorschlagen.
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
- `.kml` (z. B. aus Google Takeout)
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

**Standorte automatisch finden lassen:**
Weißt du deine Koordinaten nicht genau? Lade einfach deine GPS-Dateien hoch und klicke auf "Standorte prüfen & automatisch finden". Die App analysiert deine Aufenthaltsorte (Nachts = Zuhause; Werktags tagsüber = Arbeit) und trägt die Koordinaten und Straßennamen auf Wunsch automatisch für dich ein!

Alle Werte werden lokal im Browser gespeichert und beim nächsten Aufruf automatisch wieder geladen.

## 🗓️ Bedienung im Alltag

Der typische Ablauf sieht so aus:
1. GPS-Tracking mit einer App (z.B. GPSLogger) oder über die Google Zeitachse aufzeichnen.
2. Eine oder mehrere GPX-, KML- oder CSV-Dateien in den GPS Arbeitszeit-Tracker laden.
3. Die App analysiert die Daten automatisch und springt direkt in den neuesten importierten Monat.
4. Tage prüfen, Status anpassen oder Zeiten bei Bedarf manuell korrigieren.
5. Optional die Tagesroute auf der Karte öffnen.
6. Regelmäßig per JSON-Export ein Backup sichern.

---

## 🧭 Datenquellen & Empfehlungen

### Option A: Automatisches Tracking mit GPSLogger (Android)
Für die detaillierte Aufzeichnung der Bewegungsdaten eignet sich **GPSLogger** sehr gut:
🔗 **Website:** [https://gpslogger.app/](https://gpslogger.app/)

**Empfohlene GPSLogger-Konfiguration:**
Die folgenden Werte sind eine gute und in der Praxis bewährte Grundlage für die Nutzung mit diesem Projekt:
- **Neue Datei erstellen:** Monatlich
- **GPS/GNSS-Standorte aufzeichnen:** Aktiviert
- **Aufzeichnungsintervall:** 60 Sekunden
- **Aktualisierungsintervall für passive Standorte:** 1 Sekunde
- **Genauigkeit:** 40 Meter
- **Zeit bis die Genauigkeit erreicht ist:** 60 Sekunden
- **Absolute Zeit bis zur GPS-Positionsbestimmung:** *(Bitte in deiner Installation prüfen, hier kann je nach Gerät ein Standardwert aktiv sein)*

Ein Intervall von 60 Sekunden und die monatliche Dateierstellung sind ein hervorragender Kompromiss aus Akkulaufzeit, Datenmenge und Genauigkeit für den späteren Import.

### Option B: Daten aus der Google Maps Zeitachse exportieren (Google Takeout)
Wenn du ohnehin deinen Standortverlauf über Google Maps aufzeichnest, kannst du diese Daten nutzen, um sie als KML in dieses Tool zu importieren.

**So exportierst du die Daten:**
1. Öffne **[Google Takeout](https://takeout.google.com/)**.
2. Klicke ganz oben in der Liste auf **"Auswahl aufheben"** (um nicht alle Google-Daten zu exportieren).
3. Scrolle nach unten zum Punkt **"Zeitachse"** *(Zeitachsendaten, z. B. Einstellungen und Orte)* und setze dort den Haken.
4. Klicke bei diesem Punkt auf den Button **"Dateiformate bearbeiten"** (oder "Mehrere Formate").
5. Stelle das Dropdown-Menü für Datensätze auf das Format **KML** um und bestätige mit OK.
6. Scrolle ganz nach unten und klicke auf **"Nächster Schritt"**, um den Export zu starten.
7. Warte einen Moment. Sobald Google die Daten zusammengestellt hat, erhältst du eine E-Mail. 
8. Lade die ZIP-Datei herunter, entpacke sie und lade die darin enthaltene **`.kml`-Datei** über den Upload-Button in das Arbeitszeit-Tracker-Webtool hoch.

<p align="center">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google1.png" width="32%" alt="Schritt 1: Google Takeout Auswahl">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google2.png" width="32%" alt="Schritt 2: KML Format auswählen">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google3.png" width="32%" alt="Schritt 3: Export erstellen">
</p>

---

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

## 💾 Datenspeicherung & Datenschutz
- **Lokaler Speicher:** Einstellungen, Tagesdaten, Feiertage und importierte Auswertungen werden ausschließlich lokal in deinem Browser (Cache/LocalStorage) verarbeitet und gespeichert.
- **Keine Cloud-Pflicht:** Das Tool ist für eine einfache lokale Nutzung ohne eigenes Backend oder Datenbank konzipiert. Es werden **keine** Positionsdaten ins Internet gesendet (Ausnahme: Adress-Abfrage bei Nominatim/OSM bei aktiver Nutzung der Karten/Suchfunktion).
- **Backups empfohlen:** Nutze regelmäßig den JSON-Export, da beim Löschen der Browserdaten auch deine Tracking-Auswertungen gelöscht werden.

## 🛠️ Technischer Überblick
- Webbasierte Anwendung ohne Server-Backend
- Verarbeitung der Tracking-Daten direkt im Browser (`Vanilla JavaScript`)
- Speicherung über `localStorage`
- Kartenansicht auf Basis von Leaflet/OpenStreetMap
- Import von GPX, KML, CSV und JSON
- Export kompletter Sicherungen als JSON

---

🤖 *Dieses Projekt, die Code-Architektur und die Dokumentation wurden mit KI-Unterstützung erstellt, erweitert und optimiert.*
