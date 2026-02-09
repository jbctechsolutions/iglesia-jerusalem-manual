# Recording Operations

Complete guide to recording services with OBS Studio and managing recording files.

## Overview

All church services are automatically recorded using OBS Studio. The recording captures:

- Camera feed (PTZ camera with preset positions)
- Sanctuary audio (all microphones and music)
- High-quality video (1080p @ 30fps)
- Local storage (Mac Mini internal drive)

**Automatic Recording:**
- Starts when service-start script runs
- Records continuously until stopped manually or by end-service script
- Saves to `~/Movies/OBS/` directory
- Filenames include date and time

---

## OBS Window Location

**Left Monitor** - Top-left corner

The OBS window shows:
- **Preview** - Current scene being recorded
- **Scenes** - Available scene options (Camera, ProPresenter, Zoom, Mixed)
- **Sources** - Video/audio inputs for current scene
- **Controls** - Start/Stop Recording, Start/Stop Virtual Camera

---

## Recording Setup (Automatic)

### Service-Start Sequence

1. **OBS Launches** - Automatically after projector detection
2. **Camera Scene Selected** - Default recording source
3. **Recording Starts** - Automatically begins recording
4. **Virtual Camera Starts** - Enables camera feed to Zoom

::: tip Virtual Camera is Critical
The Virtual Camera must be ON for Zoom to receive the camera feed. It should start automatically, but verify the button says "Stop Virtual Camera" (meaning it's running).
:::

### Manual Recording Start (If Needed)

If recording didn't start automatically:

1. Look at OBS window (left monitor, top-left)
2. Check **Controls** section (bottom-right of OBS)
3. Click **"Start Recording"** button
4. Red dot appears, timer starts
5. Recording indicator shows in OBS title bar

---

## OBS Scenes

### Available Scenes

| Scene | Description | When to Use |
|-------|-------------|-------------|
| **Camera** | PTZ camera feed (default) | Most of service - default recording source |
| **ProPresenter** | Presentation slides | When you want to record slides directly (rare) |
| **Zoom** | Zoom gallery view | Recording online participants (not typical) |
| **Mixed** | Camera + ProPresenter overlay | Picture-in-picture (advanced use) |

### Changing Scenes During Recording

**Default:** Stay on **Camera** scene for entire service

**To Change Scene:**
1. Look at **Scenes** panel (bottom-left of OBS)
2. Click on desired scene name
3. Preview updates immediately
4. Recording continues with new scene

::: warning Scene Changes Affect Recording
Changing scenes changes what's being recorded. Unless you have a specific reason, stay on the **Camera** scene throughout the service.
:::

---

## Recording Controls

### During Service

**OBS Control Buttons (bottom-right):**

| Button | Status Indicates | Action |
|--------|-----------------|--------|
| **Stop Recording** | Currently recording | Click to stop recording |
| **Start Recording** | Not recording | Click to start recording |
| **Stop Virtual Camera** | Virtual camera ON | Click to disable (not recommended) |
| **Start Virtual Camera** | Virtual camera OFF | Click to enable for Zoom |

### Recording Status Indicators

**Recording Active:**
- Button says "Stop Recording"
- Red recording indicator in OBS title bar
- Timer shows recording duration (e.g., "00:45:23")
- Disk space remaining shown in bottom-right

**Recording Not Active:**
- Button says "Start Recording"
- No red indicator
- No timer visible
- Start immediately if service has begun!

---

## Camera Control via Companion

### Camera Presets (Companion Page 1)

The camera follows the service action via Companion buttons:

| Button | Camera Position | When to Use |
|--------|----------------|-------------|
| **WIDE** | Full stage view | Default, worship, multiple people |
| **PULPIT** | Speaker area | Main preaching, announcements |
| **WORSHIP** | Worship team | During worship songs |
| **PIANO** | Keyboard area | Piano solo or focus |
| **DRUMS** | Drum kit | Drum focus (rarely used) |
| **CONGREG L** | Congregation left | Showing congregation response |
| **CONGREG R** | Congregation right | Showing congregation response |

### Service Mode Auto-Camera

**Service mode buttons automatically move camera:**

- **WORSHIP** → Camera goes to WIDE
- **SERMON** → Camera goes to PULPIT
- **SCRIPTURE** → Camera goes to PULPIT
- **ANNOUNCE** → Camera goes to PULPIT
- **PRE-SERVICE** → Camera goes to WIDE
- **END SERVICE** → Camera goes to WIDE

::: tip Let Service Modes Handle Camera
The service mode buttons automatically move the camera to appropriate positions. Manual camera buttons are for fine-tuning or special situations.
:::

---

## Stopping Recording

### Automatic Stop (End-Service Script)

**Preferred Method:** End-service script stops recording automatically

1. Run "End Service" from desktop
2. Script stops OBS recording safely
3. Waits for file to finish writing
4. Closes OBS application
5. Recording saved to disk

### Manual Stop (If Needed)

If you need to stop recording manually:

1. Look at OBS window (left monitor, top-left)
2. Click **"Stop Recording"** button
3. Wait 2-3 seconds for file to finish writing
4. Check bottom-right for "Recording saved" message

::: danger Don't Force-Quit OBS While Recording
Never force-quit OBS (Cmd+Option+Esc) while recording is active. This can corrupt the recording file. Always stop recording first, then quit OBS.
:::

---

## Recording File Management

### File Location

**Default Directory:** `~/Movies/OBS/`
**Full Path:** `/Users/admin/Movies/OBS/`

**File Naming Convention:**
```
YYYY-MM-DD HH-MM-SS.mp4
```
Example: `2025-02-08 11-30-00.mp4` (February 8, 2025 at 11:30 AM)

### File Specifications

**Video:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (Full HD)
- Frame Rate: 30fps
- Bitrate: 6000 kbps

**Audio:**
- Codec: AAC
- Sample Rate: 48kHz
- Bitrate: 192 kbps
- Channels: Stereo

**Typical File Size:**
- 1 hour service ≈ 3-4 GB
- 1.5 hour service ≈ 4.5-6 GB

### Checking Disk Space

**During Recording:**
- Look at bottom-right of OBS window
- Shows remaining disk space (e.g., "750 GB free")
- Warning appears if space is low (< 50 GB)

**Before Service:**
1. Open Finder
2. Navigate to Mac HD (left sidebar)
3. Look at bottom status bar for available space
4. Ensure 100+ GB free for comfortable recording

::: warning Low Disk Space
If disk space drops below 50 GB, archive old recordings to external drive or cloud storage. Recording will fail if disk fills completely.
:::

---

## Reviewing Recordings

### Immediate Playback (After Service)

**To Play Recording:**
1. Open Finder
2. Navigate to `~/Movies/OBS/`
3. Find today's recording (sorted by date)
4. Double-click to open in QuickTime Player
5. Review quality, verify audio/video sync

**What to Check:**
- Audio levels (not too quiet or distorted)
- Video quality (clear, in focus, not too dark)
- Camera framing (subject visible, not cut off)
- Full service captured (didn't stop early)

### Scrubbing Through Recording

**QuickTime Controls:**
- Spacebar - Play/Pause
- Arrow keys - Step forward/backward frame-by-frame
- Click timeline - Jump to specific point
- Cmd+Left/Right - Skip 5 seconds backward/forward

---

## Archiving and Backup

### Cloud Upload (Recommended)

**Google Drive:**
1. Open Google Drive in browser
2. Create folder: `Church Recordings/2025/`
3. Drag recording file from Finder to browser
4. Wait for upload to complete (may take 1-2 hours)
5. Share link with leadership

**YouTube (Unlisted):**
1. Log into church's YouTube account
2. Click "Create" → "Upload Video"
3. Select recording file
4. Set visibility to "Unlisted" (not public)
5. Add title, description, date
6. Share unlisted link with congregation

### External Drive Backup

**To External Hard Drive:**
1. Connect external USB drive to Mac Mini
2. Open Finder, navigate to `~/Movies/OBS/`
3. Select recording files to backup
4. Drag to external drive
5. Wait for copy to complete
6. Verify file plays from external drive

**Organization on External Drive:**
```
Church Services/
  2025/
    01-January/
      2025-01-07 Sunday Service.mp4
      2025-01-14 Sunday Service.mp4
      ...
    02-February/
      2025-02-04 Sunday Service.mp4
      ...
```

### Deleting Old Recordings

**When to Delete:**
- After successful upload to cloud/external drive
- When disk space drops below 100 GB
- Recordings older than 60 days (after backup)

**How to Delete:**
1. Open Finder, navigate to `~/Movies/OBS/`
2. Select recordings to delete (Cmd+Click for multiple)
3. Right-click → "Move to Trash"
4. Empty Trash (Finder → Empty Trash)

::: danger Always Verify Backup Before Deleting
Never delete the original recording until you've verified the backup copy plays correctly from cloud storage or external drive.
:::

---

## Recording Quality Settings

### Current OBS Settings (Default)

**Video Encoder:** Apple VT H264 Hardware Encoder
**Rate Control:** CBR (Constant Bitrate)
**Bitrate:** 6000 Kbps
**Keyframe Interval:** 2 seconds
**Preset:** Quality

**These settings are optimized for:**
- High-quality local recording
- Mac Mini M1 hardware encoding (low CPU usage)
- Fast enough bitrate for 1080p @ 30fps
- Compatible with most playback devices

::: warning Don't Change Settings During Service
OBS settings should only be changed by technical staff during non-service times. Incorrect settings can result in failed recordings or performance issues.
:::

### Adjusting Settings (Advanced)

**To Access Settings:**
1. OBS → Preferences (Cmd+,)
2. Navigate to "Output" tab
3. Switch to "Advanced" mode
4. Modify Recording settings

**Common Adjustments:**
- **Lower Bitrate (4000 Kbps)** - If recordings are too large
- **Higher Bitrate (8000 Kbps)** - If quality is insufficient
- **Change Resolution (1280x720)** - If system performance is slow

---

## Troubleshooting Recording Issues

### Recording Didn't Start

**Symptoms:** After service, no recording file found

**Solutions:**
1. Check if "Start Recording" button was pressed
2. Verify OBS was launched (check left monitor)
3. Look for error messages in OBS log
4. Check disk space (recording fails if disk full)
5. Restart service-start script if OBS didn't launch

### Recording Stopped Mid-Service

**Symptoms:** Recording file is shorter than expected

**Solutions:**
1. Check if someone accidentally clicked "Stop Recording"
2. Verify disk space didn't fill completely
3. Check for Mac Mini crash or restart (system log)
4. Review OBS log for errors (`~/Library/Application Support/obs-studio/logs/`)

### Audio Not in Recording

**Symptoms:** Video is fine, but no audio present

**Solutions:**
1. Verify audio sources are enabled in OBS
2. Check X-Air Edit "USB Out" routing
3. Ensure Mac Mini system volume is not muted
4. Verify Loopback audio routing (X18 → OBS)
5. Test audio in OBS "Settings → Audio" (input meters moving?)

### Video is Choppy or Frozen

**Symptoms:** Recording stutters, frames drop, video freezes

**Solutions:**
1. Check Mac Mini CPU usage (Activity Monitor)
2. Close unnecessary applications
3. Lower recording bitrate in OBS settings
4. Reduce resolution to 720p
5. Verify camera NDI stream is stable (network issue?)

### File Won't Play After Recording

**Symptoms:** Recording file is corrupted, won't open

**Causes:**
- OBS force-quit while recording (didn't stop gracefully)
- Disk filled during recording
- System crash or power loss

**Recovery Attempts:**
1. Try opening in VLC Player (more forgiving than QuickTime)
2. Use video repair tools (online search: "repair corrupted MP4")
3. Check if partial recording is salvageable
4. In future, always stop recording before quitting OBS

---

## Recording Best Practices

::: tip Start Recording Before Service
Always verify recording is active **before** worship begins. Check the red dot and timer in OBS window.
:::

::: tip Monitor Recording During Service
Periodically glance at OBS to ensure:
- Recording is still active (timer incrementing)
- Disk space is sufficient
- No error messages displayed
:::

::: tip Stop Recording After Service Ends
Use the end-service script or manually stop recording **after** final prayer, not during dismissal. You can always trim the end later.
:::

::: tip Review First 30 Seconds After Start
After starting recording, play back the first 30 seconds to verify audio and video are captured correctly. Better to catch issues early than discover problems after service.
:::

::: tip Label Recordings Clearly
After uploading to cloud or external drive, rename files with descriptive names:
- `2025-02-08 Sunday Service - Pastor Juan Message.mp4`
- `2025-02-15 Special Event - Guest Speaker.mp4`
:::

::: tip Archive Regularly
Don't let recordings accumulate on the Mac Mini. Upload and archive within 7 days to free up disk space and protect against data loss.
:::

---

## See Also

- [Equipment Guide](./equipment-guide) - OBS and camera specifications
- [Streaming Guide](./streaming) - Zoom and online broadcast
- [Troubleshooting](../troubleshooting/common-issues) - Common OBS problems
