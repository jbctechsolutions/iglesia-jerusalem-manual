# 30-Minute Pre-Service Checklist

Follow these steps to ensure everything is ready before the service starts.

## Estimated Total Time: 30 Minutes

Arrive early to give yourself time for setup and any unexpected issues.

---

## Step 1: Power On (5 minutes)

::: tip Two Startup Scenarios
**If you arrive early:** Turn on projector first, then run "Start Service" manually

**If schedule triggered automatically:** Equipment is already on - you'll get a notification to turn on projector, then apps launch
:::

### Tasks

- [ ] **Turn on the Projector** using the remote control
  - Find the remote on top of the AV rack in the front
  - Point remote at ceiling-mounted projector
  - Press the power button once
  - Wait for the blue light to turn solid (~30 seconds)

- [ ] **Equipment Powers On Automatically** via Shelly smart plugs
  - **No manual action needed!** The system automatically activates:
    - Power Conditioner (10.100.0.40) - Powers stage equipment
    - Mac Mini (10.100.0.41) - Production computer
    - Charging Station (10.100.0.42) - Microphone batteries and tablets
  - Wait about 1 minute for equipment to power on

::: info Smart Automation
The Shelly smart plugs have a built-in schedule that automatically powers on equipment before service time. When activated, they hold their shutdown schedules to prevent the system from turning off during the service.

*If you arrive early or need to start before the schedule, you can manually start the system by pressing **Cmd+Space** and typing "Start Service" in the launcher, or by double-clicking the "Start Service" desktop icon on the Mac Mini.*
:::

::: info What Happens Automatically
When the X18 audio mixer powers on, the system detects it and prepares to launch applications. However, it will **wait for you to turn on the projector first**.

📱 **You'll see a notification:** "Please turn ON the projector to continue..."

The system will wait for the projector. Once detected, all apps launch automatically.

**Main Applications (you'll see these):**
- ProPresenter (slides)
- Zoom (online streaming)
- X-Air Edit (audio mixing)
- OBS (recording/streaming)
- Companion (tablet control)

**Background Applications (run automatically):**
- ZoomOSC (Zoom control)
- Loopback (audio routing)
- NDI Virtual Input (video)
- SonoBus (remote audio)

**After turning on the projector,** wait about 1-2 minutes for all apps to finish launching before proceeding to Step 2.
:::

---

## Step 2: Verify the Displays (2 minutes)

After startup, check that each screen shows the correct content:

| Screen | What Should Appear |
|--------|-------------------|
| **Left Monitor** | Four windows: OBS, Zoom, X-Air Edit, Companion |
| **Right Monitor** | ProPresenter control window |
| **Projector** | ProPresenter audience view (your slides) |

::: danger If the projector shows the wrong content
See the [Troubleshooting Guide](/iglesia-jerusalem/manual/troubleshooting/common-issues#projector-shows-wrong-content)
:::

---

## Step 3: Check ProPresenter (10 minutes)

- [ ] **Look at the right monitor** - This is ProPresenter

- [ ] **Verify today's presentation is loaded**
  - Look at the playlist on the left side
  - Today's service should be visible

- [ ] **If the playlist is missing or incomplete:**
  - Ask the pastor for today's song list and scripture readings
  - You'll need to create or update the playlist
  - See detailed instructions in the Operations Guide

- [ ] **Click on the first slide** to verify it appears on the projector

::: tip ProPresenter Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| **Right Arrow** | Next slide within current item |
| **Left Arrow** | Previous slide within current item |
| **Down Arrow** | Next item in playlist (next song/reading) |
| **Up Arrow** | Previous item in playlist |
| **C** | Clear the slide (show black) |
:::

---

## Step 4: Test the Microphones (10 minutes)

- [ ] **Turn on each wireless microphone**
  - Flip the power switch on the microphone body to ON
  - Wait for the green/power indicator light

- [ ] **Test Mics 1-4 (Shure Handhelds)**
  - Look at the Shure receivers in the equipment rack on stage
  - You should see signal bars on the receiver screens when speaking

- [ ] **Test Mics 5-8 (Phenyx Pro Lapels)**
  - Look at the Phenyx Pro rack unit on stage
  - You should see signal bars when the lapel mic picks up sound

- [ ] **Test Mic 9 (Pianist Vocal)**
  - Check X-Air Edit on the left monitor
  - Look at Channel 9's meter - it should move when the pianist speaks/sings

- [ ] **Listen in the room**
  - Sound should come through the main speakers
  - Adjust volume if needed using Companion

### Channel Assignments

| Channel | Microphone | Location/Use |
|---------|------------|--------------|
| **1** | Handheld Mic | Main pulpit (lower) |
| **2** | Handheld Mic | Audience/Congregation/Q&A |
| **3** | Handheld Mic | Guest/Extra |
| **4** | Handheld Mic | Guest/Extra |
| **5** | Lapel Mic | Wireless lavalier |
| **6** | Lapel Mic | Wireless lavalier |
| **7** | Lapel Mic | Wireless lavalier |
| **8** | Lapel Mic | Wireless lavalier |
| **9** | Pianist Vocal Mic | For pianist to sing |

---

## Step 5: Check the Camera and OBS (5 minutes)

- [ ] **Look at OBS** on the left monitor (top-left window)

- [ ] **Verify the scene is set to "Camera"**
  - Look at the Scenes panel (bottom-left of OBS)
  - The "Camera" scene should be selected/highlighted
  - If not, click on "Camera" to select it

- [ ] **Verify you see the camera image**
  - You should see a live view of the sanctuary
  - The camera should be pointed at the stage area

- [ ] **Verify Recording is active**
  - Look at the Controls panel (bottom-right of OBS)
  - Should show "Stop Recording" (meaning it's already recording)
  - If it shows "Start Recording", click it to begin

- [ ] **Verify Virtual Camera is ON**
  - Should show "Stop Virtual Camera" (meaning it's on)
  - If it shows "Start Virtual Camera", click it to turn it on
  - This is required for Zoom to see the camera feed

- [ ] **Test camera presets** using Companion:
  - Tap "Wide" - camera shows full stage
  - Tap "Pulpit" - camera zooms to pulpit
  - Return to "Wide" for service start

- [ ] **Check available disk space**
  - Look at the bottom-right of OBS
  - Should show plenty of space (100+ GB free)

---

## Step 6: Final Checks (3 minutes)

- [ ] Projector showing slides correctly
- [ ] All microphones tested and working
- [ ] Camera showing stage area
- [ ] Companion is accessible (on computer or tablet)
- [ ] Worship team notified system is ready

---

## Ready for the Service?

Learn what to do during the service: operating Companion, controlling cameras, and managing audio.

[View During Service Guide →](/iglesia-jerusalem/manual/operations/streaming)
