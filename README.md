# ⏱️ GPS Arbeitszeit-Tracker & Analysetool

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://basecore.github.io/arbeitszeit-tracker/)

Eine webbasierte Progressive Web App (PWA) zur lokalen Auswertung von Arbeitszeiten, Aufenthalten am Arbeitsplatz und Fahrtwegen auf Basis von GPS-Tracking-Daten. Die App verarbeitet GPX-, KML-, CSV- und JSON-Dateien direkt im Browser, erkennt Arbeitszeiten anhand definierter Zonen für Zuhause und Arbeitsplatz und visualisiert Tagesrouten auf einer interaktiven Karte.

🔗 **Zur Live-App:** [https://basecore.github.io/arbeitszeit-tracker/](https://basecore.github.io/arbeitszeit-tracker/)

## 🖼️ Vorschau

**Desktop Ansicht** (Übersichtliche GUI & Detailansicht mit Map-Option):
<p align="center">
  <img src="images/arbeitszeit_tracker_pc_gui2.jpg" alt="Computer Ansicht der GUI" width="48%">
  &nbsp;
  <img src="images/arbeitszeit_tracker_pc_gui1.jpg" alt="Übersicht der Zeiten mit Map" width="48%">
</p>

**Smartphone Ansicht** (Optimierte GUI, einfache Zeitenansicht & Konfiguration):
<p align="center">
  <img src="images/arbeitszeit_tracker_smartphone_gui1.jpg" alt="Optimierte GUI" width="32%">
  <img src="images/arbeitszeit_tracker_smartphone_gui2.jpg" alt="Einfache Ansicht" width="32%">
  <img src="images/arbeitszeit_tracker_smartphone_gui3.jpg" alt="Arbeitsplatz Konfiguration" width="32%">
</p>

## 🚀 Neue Funktionen & Updates (v2.0.0)

- **JSON Google Timeline Import:** Direkter Import von JSON-Dateien aus der Google Standortverlauf-Zeitachse.
- **Kompakte UI:** Die Konfigurationsbereiche für Arbeitsplatz, Zuhause und Einstellungen sind nun standardmäßig eingeklappt, um den Fokus sofort auf die wesentlichen Aktionen (Strecke laden, Auswertung) zu lenken.
- **Automatische Neuberechnung:** Änderungen an den Konfigurationen oder Standorten lösen nun eine Abfrage aus, ob bestehende, importierte Tracking-Daten sofort mit den neuen Parametern neu berechnet werden sollen.
- **Optimierte Standorthinweise:** Auffälligere, kompaktere Hinweise ("🔍 Standorte prüfen & automatisch finden") direkt im Konfigurationsbereich.
- **Verbesserte API-Feiertagsabfrage:** Feiertage können nun direkt über einen Button aus der API nachgeladen werden.

## 🚀 Hauptfunktionen

- **Lokale Auswertung im Browser:** Tracking-Dateien werden direkt lokal verarbeitet. Es findet kein Upload deiner GPX-, KML-, CSV- oder JSON-Dateien auf fremde Server statt.
- **Mehrfachimport:** Mehrere Dateien können in einem Schritt importiert und gemeinsam ausgewertet werden.
- **Automatische Monatsauswahl:** Nach dem Import wird automatisch der aktuellste Monat aller importierten Dateien angezeigt.
- **Intelligente Standort-Ermittlung:** Wenn du deine genauen Koordinaten für Zuhause oder die Arbeit nicht weißt, kann die App sie automatisch aus deinen hochgeladenen GPS-Routen lernen und die passenden Adressen via Reverse-Geocoding vorschlagen.
- **Automatische Feiertags-Erkennung:** Die App erkennt das Bundesland anhand deiner hochgeladenen GPS-Routen und lädt automatisch die passenden Feiertage für die in den Daten enthaltenen Jahre über eine API herunter.
- **Manuelles Feiertags-Management:** Bundesland und Jahr können im Feiertags-Dialog auch jederzeit manuell konfiguriert werden, falls die automatische Erkennung nicht gewünscht ist.
- **PWA-Support:** Die App kann auf Smartphone, Tablet oder Desktop wie eine native App installiert werden und ist für die lokale Nutzung optimiert.
- **Arbeitsplatz- und Zuhause-Zonen:** Radius, Position und Adresse können frei definiert werden, um Arbeitszeiten und Pendelwege automatisch zu erkennen.
- **Arbeitszeitberechnung:** Erkennung von Kommen, Gehen, Aufenthaltsdauer, Pausenzeit, Sollzeit und Differenz.
- **Pendeldistanz und Gesamtstrecke:** Anzeige von Hinweg, Rückweg und gesamter Tagesstrecke.
- **Interaktive Routenansicht:** Tagesrouten können auf einer Karte geöffnet und farblich nach Hinweg, Rückweg, Aufenthalt am Arbeitsplatz, Pause und sonstiger Strecke dargestellt werden.
- **Status pro Tag:** Tage lassen sich als Büro, Homeoffice, Urlaub, Frei, Feiertag oder N.A. markieren.
- **Manuelle Nachbearbeitung:** Kommen- und Gehen-Zeiten können direkt pro Tag bearbeitet und gespeichert werden.
- **Intelligentes Speichermanagement:** Bei Erreichen des Browser-Speicherlimits (QuotaExceeded) werden alte GPS-Routen automatisch aufgeräumt, während die berechneten Arbeitszeiten sicher erhalten bleiben.
- **Zeitzonen- und Offset-Einstellungen:** Tages- und Stunden-Offsets sowie ein automatischer oder manueller Zeitzonenmodus stehen zur Verfügung.
- **JSON-Import/Export:** Konfiguration, Feiertage, Tagesdaten und Tracks können als JSON exportiert und später wieder importiert werden.
- **Mobile Optimierung:** Kompakte Darstellung für kleine Displays mit Fokus auf Status, Zeiten und Schnellaktionen.

## 📂 Unterstützte Formate

Für den Streckenimport werden aktuell folgende Dateitypen unterstützt:
- `.gpx`
- `.kml` (z. B. aus Google Takeout)
- `.csv`
- `.json` (Google Timeline / Standortverlauf)

Zusätzlich kann eine komplette Sicherung als `.json` importiert bzw. exportiert werden.

## ⚙️ Einrichtung & Standardwerte

Beim ersten Start sind Beispielpositionen hinterlegt:
- **Zuhause:** Rathaus München
- **Arbeitsplatz:** Forschungszentrum Garching

**So passt du die App an:**
1. Klappe die Bereiche "Arbeitsplatz Konfiguration" oder "Zuhause Konfiguration" auf.
2. Trage deine echte Adresse ein oder setze die Position direkt per Klick auf der Karte.
3. Alternativ kannst du Breiten- und Längengrad manuell eintragen.
4. Passe den Radius für Zuhause und Arbeitsplatz an.
5. Hinterlege deine Sollstunden pro Tag und die Standardpause.
6. Speichere die Konfiguration (Bestehende Daten können auf Wunsch sofort neu berechnet werden).

**Standorte automatisch finden lassen:**
Weißt du deine Koordinaten nicht genau? Lade einfach deine Dateien hoch und klicke in der aufpoppenden Box auf "🔍 Standorte prüfen & automatisch finden". Die App analysiert deine Aufenthaltsorte (Nachts = Zuhause; Werktags tagsüber = Arbeit) und trägt die Koordinaten und Straßennamen auf Wunsch automatisch für dich ein!

Alle Werte werden lokal im Browser gespeichert und beim nächsten Aufruf automatisch wieder geladen.

## 🗓️ Bedienung im Alltag

Der typische Ablauf sieht so aus:
1. GPS-Tracking mit einer App (z.B. GPSLogger) oder über die Google Zeitachse aufzeichnen.
2. Eine oder mehrere GPX-, KML-, CSV- oder JSON-Dateien in den GPS Arbeitszeit-Tracker laden.
3. Die App analysiert die Daten automatisch und springt direkt in den neuesten importierten Monat. Das Bundesland wird aus den GPS-Daten erkannt und die passenden Feiertage werden geladen.
4. Tage prüfen, Status anpassen oder Zeiten bei Bedarf manuell korrigieren.
5. Optional die Tagesroute auf der Karte öffnen.
6. Regelmäßig per JSON-Export ein Backup sichern.

---

## 🧭 Datenquellen & Empfehlungen

### Option A: Automatisches Tracking mit GPSLogger (Android)
Für die detaillierte Aufzeichnung der Bewegungsdaten eignet sich **GPSLogger** sehr gut:
🔗 **Website:** [https://gpslogger.app/](https://gpslogger.app/)

**Empfohlene GPSLogger-Konfiguration:**
- **Neue Datei erstellen:** Monatlich
- **GPS/GNSS-Standorte aufzeichnen:** Aktiviert
- **Aufzeichnungsintervall:** 60 Sekunden
- **Aktualisierungsintervall für passive Standorte:** 1 Sekunde
- **Genauigkeit:** 40 Meter

### Option B: Daten aus der Google Maps Zeitachse exportieren (Google Takeout)
Wenn du ohnehin deinen Standortverlauf über Google Maps aufzeichnest, kannst du diese Daten nutzen, um sie in dieses Tool zu importieren.

**So exportierst du die Daten:**
1. Öffne **[Google Takeout](https://takeout.google.com/)**.
2. Klicke ganz oben in der Liste auf **"Auswahl aufheben"** (um nicht alle Google-Daten zu exportieren).
3. Scrolle nach unten zum Punkt **"Zeitachse"** *(Zeitachsendaten, z. B. Einstellungen und Orte)* und setze dort den Haken.
4. Klicke bei diesem Punkt auf den Button **"Dateiformate bearbeiten"** (oder "Mehrere Formate").
5. Stelle das Dropdown-Menü für Datensätze auf das Format **KML** oder **JSON** um und bestätige mit OK.
6. Scrolle ganz nach unten und klicke auf **"Nächster Schritt"**, um den Export zu starten.
7. Lade die ZIP-Datei herunter, entpacke sie und lade die darin enthaltene **`.kml`** oder **`.json`-Datei** über den Upload-Button in das Arbeitszeit-Tracker-Webtool hoch.

<p align="center">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google1.png" width="32%" alt="Schritt 1: Google Takeout Auswahl">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google2.png" width="32%" alt="Schritt 2: KML Format auswählen">
  <img src="https://raw.githubusercontent.com/basecore/arbeitszeit-tracker/main/images/takeout_google3.png" width="32%" alt="Schritt 3: Export erstellen">
</p>

### Option C: Google Maps Timeline direkt vom Smartphone exportieren (JSON)
Da Google die Web-Zeitachse eingestellt hat, befinden sich deine aktuellen Standortdaten nun direkt lokal auf deinem Smartphone. Du kannst diese Daten als JSON-Datei exportieren und hier auswerten.

**Für Android & iOS:**
1. Öffne die **Google Maps App** auf deinem Smartphone.
2. Tippe oben rechts auf dein **Profilbild**.
3. Wähle **"Deine Zeitachse"** (Your Timeline) aus.
4. Tippe oben rechts auf das **Drei-Punkte-Menü** (oder Einstellungen-Icon) und wähle **"Standort- und Datenschutzeinstellungen"**.
5. Scrolle nach unten zum Bereich *Standorteinstellungen* und tippe auf **"Zeitachsendaten exportieren"**.
6. Bestätige den Export. Google Maps erstellt nun eine Sicherung deiner Zeitachse im **JSON-Format**.
7. Speichere oder teile diese Datei (z. B. per E-Mail, Google Drive oder iCloud) auf deinen PC.
8. Lade die `.json` Datei im GPS Arbeitszeit-Tracker Webtool hoch. 

> 💡 *Hinweis zu JSON-Parsern:* Dieser Tracker nutzt einen vollständig lokalen JSON-Parser, der direkt im Browser läuft. Alle Daten bleiben auf deinem Gerät. Wenn du eine ganzheitliche Visualisierung deiner gesamten Lebens-Historie suchst (inkl. Server/Docker-Hosting), empfiehlt sich ergänzend das quelloffene Projekt **[Dawarich](https://github.com/Freika/dawarich)** ([dawarich.app](https://dawarich.app)), welches eine Privacy-First Google Timeline Visualisierung anbietet.

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
- **Keine Cloud-Pflicht:** Das Tool ist für eine einfache lokale Nutzung ohne eigenes Backend oder Datenbank konzipiert. Es werden **keine** Positionsdaten ins Internet gesendet (Ausnahme: Ein einzelner Punkt zur Erkennung des Bundeslandes/Feiertage via Reverse-Geocoding).
- **Backups empfohlen:** Nutze regelmäßig den JSON-Export, da beim Löschen der Browserdaten auch deine Tracking-Auswertungen gelöscht werden.

## 🛠️ Technischer Überblick
- Webbasierte Anwendung ohne Server-Backend
- Verarbeitung der Tracking-Daten direkt im Browser (`Vanilla JavaScript`)
- Speicherung über `localStorage` mit intelligentem Quota-Management
- Kartenansicht auf Basis von Leaflet/OpenStreetMap
- Import von GPX, KML, CSV und JSON (Google Timeline)
- Export kompletter Sicherungen als JSON

---

🤖 *Dieses Projekt, die Code-Architektur und die Dokumentation wurden mit KI-Unterstützung erstellt, erweitert und optimiert.*
