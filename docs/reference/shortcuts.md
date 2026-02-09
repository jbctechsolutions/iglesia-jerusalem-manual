# Companion Shortcuts Reference

Complete button layout and functions for the Companion control interface. Access at [http://companion.ijc.local:8888](http://companion.ijc.local:8888)

## Quick Access

**URLs:**
- **Tablet Interface:** `http://companion.ijc.local:8888/tablet`
- **Desktop Interface:** `http://companion.ijc.local:8888`
- **Admin Interface:** `http://localhost:8000` (Mac Mini only)

## Page Overview

Companion has 6 pages of controls:

| Page | Name | Purpose |
|------|------|---------|
| 1 | Service Control | Main page - camera, modes, announcements, mutes |
| 2 | Zoom Control | Zoom participant management |
| 3 | Room Mix | Congregation audio levels (main PA) |
| 4 | Online Mix | Zoom/stream audio levels |
| 5 | Piano Monitor | Pianist's monitor speaker mix |
| 6 | Drums Monitor | Drummer's monitor speaker mix |

## Page 1: Service Control

The main control page for camera, service modes, announcements, and quick mutes.

### Service Mode Buttons (Row 1)

One-touch buttons that automatically configure multiple systems:

#### PRE-SERVICE
**When:** Before service starts
**Actions:**
- Camera → WIDE shot
- ProPresenter → Default slides
- Audio → Normal levels

#### WORSHIP
**When:** During worship songs
**Actions:**
- Camera → WIDE shot
- ProPresenter → Shows lyrics on projector
- Audio → Unmutes worship team mics

#### SERMON
**When:** During main preaching
**Actions:**
- Camera → PULPIT view
- Main mic → +3dB boost
- ProPresenter → Shows scripture slides

### Camera Preset Buttons (Row 2)

Direct control over camera positioning:

| Button | Camera View | When to Use |
|--------|-------------|-------------|
| **WIDE** | Full stage wide shot | Default view, worship, multiple people |
| **PULPIT** | Pulpit/speaker area | Main preaching, announcements |
| **WORSHIP** | Worship team area | During worship songs |
| **PIANO** | Keyboard/piano area | Piano solo or pianist leading |
| **DRUMS** | Drum kit area | Drum focus (rarely used) |
| **CONGREG L** | Congregation left | Showing congregation response |
| **CONGREG R** | Congregation right | Testimonies from pews |

### Quick Mute Buttons (Row 4)

Instantly mute microphones or instruments (toggle buttons):

| Button | What It Mutes | When to Use |
|--------|---------------|-------------|
| **MUTE MIC 1** | Handheld Mic 1 (Pulpit) | Speaker finished, prevent feedback |
| **MUTE MIC 2** | Handheld Mic 2 (Audience) | Audience testimony done |
| **MUTE MIC 3** | Handheld Mic 3 (Guest) | Guest speaker finished |
| **MUTE MIC 4** | Handheld Mic 4 (Guest) | Second guest finished |
| **MUTE MUSIC** | Keys + Drums together | Announcements, sermon |
| **MUTE ALL EMERGENCY** | All audio instantly | Emergency only (feedback) |

::: warning Remember to Unmute!
Mute buttons are toggles - press again to unmute. Button lights up when muted.
:::

## Page 3: Room Mix

**What the congregation hears through the main PA speakers.**

### Available Controls

| Channel | Source | Controls |
|---------|--------|----------|
| **Mic 1-4** | Handheld mics | +1dB / -1dB buttons |
| **Mic 5-9** | Lapel mics + Pianist | +1dB / -1dB buttons |
| **DRUMS** | Drums (Stereo) | +1dB / -1dB buttons |
| **KEYS** | Keys/Piano (Mono) | +1dB / -1dB buttons |
| **Main Master** | Overall room volume | +1dB / -1dB buttons |

## Button Connection Mapping

When Companion buttons aren't working:

| Button Function | Companion Connection | How to Fix |
|-----------------|---------------------|------------|
| Camera presets | PTZOptics | Check camera power, restart connection |
| Audio controls | Behringer X18 | Check mixer power, verify 10.100.0.18 |
| ProPresenter | ProPresenter | Check ProPresenter running |
| Recording | OBS Studio | Check OBS running |
| Zoom spotlight | ZoomOSC | Check Zoom running |

## Related Pages

- [System Status](./system-status) - Check device connections
- [Network Information](./network-info) - IP addresses
- [Common Issues](/troubleshooting/common-issues) - Button troubleshooting
