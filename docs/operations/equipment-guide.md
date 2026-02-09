# Equipment Guide

Complete reference for all production equipment at Iglesia Jerusalem.

## Audio Equipment

### Behringer X18 Digital Mixer

**Model:** X18 18-Channel Digital Mixer
**IP Address:** `10.100.0.11`
**Location:** Stage equipment rack
**Control:** X-Air Edit application, Companion interface

**Specifications:**
- 18 input channels (16 XLR + 2 aux)
- 6 aux buses for monitors
- Built-in WiFi for wireless control
- USB recording interface
- Digital effects processors

**Channel Assignments:**

| Channel | Device | Type | Location |
|---------|--------|------|----------|
| **1** | Main Handheld | Shure Wireless | Pulpit (lower) |
| **2** | Audience Mic | Shure Wireless | Congregation |
| **3** | Guest Mic 1 | Shure Wireless | Extra |
| **4** | Guest Mic 2 | Shure Wireless | Extra |
| **5** | Lapel Mic 1 | Phenyx Pro | Wireless lavalier |
| **6** | Lapel Mic 2 | Phenyx Pro | Wireless lavalier |
| **7** | Lapel Mic 3 | Phenyx Pro | Wireless lavalier |
| **8** | Lapel Mic 4 | Phenyx Pro | Wireless lavalier |
| **9** | Pianist Vocal | Wired | Piano area |
| **10** | Piano L | Direct | Keyboard output |
| **11** | Piano R | Direct | Keyboard output |
| **12** | Drum Overhead | Wired | Above drum kit |
| **13** | Kick Drum | Wired | Bass drum |
| **14** | Snare | Wired | Snare drum |
| **15** | Mac Return L | USB Audio | Computer playback |
| **16** | Mac Return R | USB Audio | Computer playback |
| **AUX 1** | Zoom Send | Virtual | Online mix |
| **AUX 2** | SonoBus | Virtual | Remote audio |

### Shure Wireless Microphone System

**Model:** Shure BLX Series (4 channels)
**Channels:** 1-4 on X18 mixer
**Location:** Stage equipment rack
**Type:** Handheld dynamic microphones

**Receivers:**
- 4x BLX4 single-channel receivers
- Rack-mounted in stage equipment rack
- RF coordination for interference-free operation

**Transmitters:**
- 4x BLX2 handheld transmitters
- SM58-type capsules
- Battery-powered (AA batteries)
- Charging station: 10.100.0.42

### Phenyx Pro Wireless Lavalier System

**Model:** Phenyx Pro PTU-5000 Series
**Channels:** 5-8 on X18 mixer
**Location:** Stage equipment rack
**Type:** Bodypack with lavalier mics

**Receiver:**
- 4-channel rack-mount receiver
- UHF frequency range
- Individual volume controls
- LCD displays per channel

**Bodypack Transmitters:**
- 4x PTU-5000 bodypack units
- Lavalier microphones included
- Rechargeable batteries
- Charging station: 10.100.0.42

### Main Speakers

**Model:** QSC K Series
**Location:** Front-of-house (left and right)
**Power:** Via Power Conditioner (10.100.0.40)
**Connection:** XLR from X18 main outputs

**Specifications:**
- Active powered speakers
- 1000W Class D amplifier
- Built-in DSP processing
- Wide dispersion pattern

### Stage Monitors

**Type:** Floor wedge monitors + In-ear systems
**Buses:** AUX 3-6 on X18 mixer
**Control:** Companion Page 4 (Monitors)

---

## Video Equipment

### PTZ Optics Camera

**Model:** PTZ Optics 20X-NDI Camera
**IP Address:** `10.100.0.10`
**Location:** Rear of sanctuary (ceiling-mounted)
**Control:** Companion interface, PTZOptics app

**Specifications:**
- 20x optical zoom
- 1080p60 video output
- NDI and HDMI outputs
- IP control via network
- 255 preset positions (10 programmed)

**Camera Presets:**

| Preset | Name | Description |
|--------|------|-------------|
| **1** | Wide | Full stage view |
| **2** | Pulpit | Speaker area (lower pulpit) |
| **3** | Worship | Worship team area |
| **4** | Piano | Keyboard/piano area |
| **5** | Drums | Drum kit area |
| **6** | Congreg L | Congregation left side |
| **7** | Congreg R | Congregation right side |
| **8-10** | (Reserved) | Future use |

### Epson Projector

**Model:** Epson PowerLite Series
**Location:** Ceiling-mounted (center)
**Resolution:** 1920x1080 (Full HD)
**Control:** IR remote (on AV rack)

**Specifications:**
- 3LCD technology
- 3000+ lumens brightness
- HDMI input from Mac Mini
- ~30 second warm-up time
- Manual power control only

### Mac Mini Production Computer

**Model:** Mac Mini (2020)
**IP Address:** `10.100.0.34`
**Hostname:** `admin-mac-mini.local`
**Location:** AV booth
**Power:** Via Shelly Plug (10.100.0.41)

**Specifications:**
- Apple M1 chip
- 16GB RAM
- 512GB SSD
- macOS Sonoma
- Dual external monitors + projector

**Installed Applications:**
- ProPresenter 7
- OBS Studio
- X-Air Edit
- Zoom
- Bitfocus Companion
- ZoomOSC
- Rogue Amoeba Loopback
- NDI Virtual Input
- SonoBus

### Display Monitors

**Left Monitor (Portrait):**
- 4-window layout
- OBS (top-left)
- Zoom (top-right)
- X-Air Edit (bottom-left)
- Companion (bottom-right)

**Right Monitor (Landscape):**
- ProPresenter control interface
- Playlist and slide editor
- Preview and output windows

**Projector (Audience Screen):**
- ProPresenter audience output
- Worship lyrics
- Scripture slides
- Announcements
- Camera/Zoom video (when overlayed)

---

## Network Equipment

### Network Infrastructure

**Router:** TP-Link or similar
**Switch:** Gigabit managed switch
**Network:** `10.100.0.0/24`
**DNS Domain:** `.ijc.local`

**Network Map:**

| Device | IP Address | Hostname |
|--------|-----------|----------|
| **Mac Mini** | 10.100.0.34 | admin-mac-mini.ijc.local |
| **PTZ Camera** | 10.100.0.10 | ptz-camera.ijc.local |
| **X18 Mixer** | 10.100.0.11 | x18-mixer.ijc.local |
| **Shelly Conditioner** | 10.100.0.40 | shelly-conditioner.local |
| **Shelly Mac Mini** | 10.100.0.41 | shelly-macmini.local |
| **Shelly Charging** | 10.100.0.42 | shelly-charging.local |
| **Companion** | localhost:8000 | (Mac Mini) |
| **ij-control API** | localhost:3000 | (Mac Mini) |

---

## Smart Power Management

### Shelly Smart Plugs

**Model:** Shelly Gen2 Plug-S
**Control:** Shelly Cloud app, ij-control API
**Features:** WiFi-enabled, schedule automation, power monitoring

**Shelly 1: Power Conditioner (10.100.0.40)**
- Powers: Stage equipment (speakers, mixer, wireless systems)
- Startup Schedule: 30 min before service
- Shutdown Schedule: 30 min after service
- Power Monitoring: Yes

**Shelly 2: Mac Mini (10.100.0.41)**
- Powers: Production computer
- Startup Schedule: 30 min before service
- Shutdown Schedule: 30 min after service (or when service ends)
- Power Monitoring: Yes

**Shelly 3: Charging Station (10.100.0.42)**
- Powers: Microphone and tablet charging
- Startup Schedule: When service starts
- Shutdown Schedule: 5-6 hours after service (full charge time)
- Power Monitoring: Yes

**Schedule Hold Feature:**
- Service start script "holds" shutdown schedules
- Prevents equipment from powering off during service
- Released by end-service script
- Allows scheduled power-off after service

---

## Control Equipment

### iPad/Tablet Control

**App:** Web browser (Chrome/Safari)
**URL:** `http://10.100.0.34:8000` or `http://admin-mac-mini.ijc.local:8000`
**Interface:** Bitfocus Companion web interface
**Charging:** Shelly Charging Station (10.100.0.42)

**Pages:**
1. **Service Control** - Main operations (service modes, camera, announcements, mutes)
2. **Room Mix** - Sanctuary audio levels
3. **Online Mix** - Zoom participant levels
4. **Monitors** - Stage monitor sends

### Companion Server

**Software:** Bitfocus Companion v3.x
**Port:** 8000 (web interface)
**Location:** Runs on Mac Mini
**Config:** Auto-starts with service-start script

**Integrations:**
- PTZOptics camera control (IP)
- X18 mixer control (OSC)
- ProPresenter control (REST API)
- OBS Studio control (WebSocket)
- Zoom control (via ZoomOSC)
- Shelly plugs (via ij-control API)

### ij-control API Server

**Software:** Node.js REST API
**Port:** 3000
**Location:** Runs on Mac Mini
**Purpose:** Centralized device control and status

**Endpoints:**
- `/api/status` - System status (all devices)
- `/api/startup` - Service startup automation
- `/api/shutdown` - Service shutdown automation
- `/api/shelly/:device/on` - Power on Shelly plug
- `/api/shelly/:device/off` - Power off Shelly plug

---

## Software Applications

### ProPresenter 7

**Purpose:** Worship presentation software
**License:** Commercial (church license)
**Config:** Dual screen (operator + audience)
**Media:** Songs, scripture, announcements

**Key Features:**
- Playlist management
- Live slide editing
- Media playback (video, images)
- Lower thirds and overlays
- Multiple screen outputs

### OBS Studio

**Purpose:** Recording and streaming software
**License:** Free open-source
**Output:** Local recording + virtual camera

**Scenes:**
- Camera - PTZ camera feed (default)
- ProPresenter - Presentation slides
- Zoom - Gallery view
- Mixed - Camera + ProPresenter overlay

**Recording:**
- Format: MP4 (H.264 + AAC)
- Resolution: 1920x1080 @ 30fps
- Bitrate: 6000 kbps
- Location: `~/Movies/OBS/`

### Zoom

**Purpose:** Online broadcast platform
**Account:** Church Zoom account
**Meeting:** Recurring meeting ID
**Audio:** Loopback virtual device (mixed audio from X18)

**Settings:**
- Gallery view enabled
- Virtual background disabled
- Original sound enabled
- HD video enabled

### X-Air Edit

**Purpose:** X18 mixer control application
**Protocol:** OSC over WiFi
**Connection:** `10.100.0.11`

**Controls:**
- Channel faders and mutes
- Aux send levels
- Effects and EQ
- Scene recall

### ZoomOSC

**Purpose:** Zoom control via OSC protocol
**Integration:** Connects Companion to Zoom
**Features:** Spotlight, mute, gallery control

### Loopback

**Purpose:** Virtual audio routing
**License:** Rogue Amoeba commercial
**Devices:** Creates virtual audio interfaces

**Routes:**
- X18 mixer → Zoom (online participants hear room)
- Zoom → X18 mixer (room hears online participants)
- X18 mixer → OBS (recording captures room audio)

### NDI Virtual Input

**Purpose:** NDI video over network
**Protocol:** NewTek NDI
**Source:** PTZ Optics camera NDI stream

**Integration:**
- Camera sends NDI to Mac Mini
- OBS receives NDI as video source
- Low-latency video over gigabit network

### SonoBus

**Purpose:** Remote audio streaming
**Use Case:** Remote musicians or speakers
**Protocol:** Peer-to-peer audio
**Quality:** High-quality, low-latency

---

## Maintenance Schedule

### Daily (After Each Service)

- [ ] Turn off projector
- [ ] Run end-service script
- [ ] Place microphones on charging station
- [ ] Place tablet on charging station
- [ ] Verify charging station is on
- [ ] Check for loose cables

### Weekly

- [ ] Check microphone battery status
- [ ] Verify all equipment powers on correctly
- [ ] Test camera presets
- [ ] Review recording storage space
- [ ] Clean camera lens (if needed)

### Monthly

- [ ] Test all microphones (RF check)
- [ ] Clean monitors and projector filter
- [ ] Update Companion button labels (if needed)
- [ ] Backup ProPresenter library
- [ ] Review and archive old recordings

### Quarterly

- [ ] Update software (Mac, OBS, ProPresenter, etc.)
- [ ] Test backup/restore procedures
- [ ] Inspect cables for damage
- [ ] Clean equipment racks
- [ ] Review and update documentation

### Annually

- [ ] Professional audio calibration
- [ ] Replace microphone batteries (if needed)
- [ ] Inspect all cable runs
- [ ] Verify network security
- [ ] Review and update equipment inventory

---

## Emergency Contact Information

**Technical Support:**
- Production System: Joel Castillo (system admin)
- Companion/Automation: See GitHub issues
- Equipment Repairs: Local AV technician

**Vendor Support:**
- Behringer X18: Behringer support website
- PTZ Optics: PTZ Optics support portal
- Shure Wireless: Shure support
- ProPresenter: Renewed Vision support

**Online Resources:**
- System Documentation: This manual
- GitHub Repository: [iglesia-jerusalem-avl](https://github.com/jbctechsolutions/iglesia-jerusalem-avl)
- Companion Docs: [Bitfocus Companion](https://bitfocus.io/companion)
