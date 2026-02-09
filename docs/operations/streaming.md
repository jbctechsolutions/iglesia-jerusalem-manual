# Live Streaming Operations

Complete guide to operating Zoom for online broadcast during services.

## Overview

Our church streams services live via Zoom, allowing remote participants to watch and participate in real-time. The system automatically:

- Connects to Zoom meeting on startup
- Routes audio from sanctuary to online participants
- Routes audio from online participants to sanctuary speakers
- Sends camera or ProPresenter video to Zoom
- Records the service for later viewing

## Zoom Window Location

**Left Monitor** - Top-right corner

The Zoom window shows:
- Gallery view of online participants
- Meeting controls (mute, video, participants list)
- Waiting room notifications
- Chat messages

## Starting Zoom (Automatic)

Zoom automatically launches during the service-start sequence:

1. Service-start script runs (automatic or manual)
2. System waits for projector to turn on
3. Zoom launches after projector detection
4. Joins recurring meeting automatically
5. Unmutes microphone and enables video
6. System waits 10 minutes for Zoom to stabilize

::: tip Zoom Stabilization Wait
The 10-minute wait ensures Zoom fully connects and audio/video streams stabilize before service begins. You can skip this wait by pressing **ENTER** in the Terminal window if service time is approaching.
:::

---

## Admitting Online Participants

### When Someone Joins

1. Watch the **Zoom window** on the left monitor (top-right)
2. When someone joins, you'll see "Participant waiting" notification
3. Click **"Admit"** to let them in
4. They'll appear in the gallery view

::: warning Check Waiting Room Every Few Minutes
Not everyone joins at the same time. Periodically check the Zoom window throughout the service to admit late arrivals.
:::

### Admitting Multiple Participants

1. Click **"Participants"** button in Zoom controls
2. Participants panel opens on the right
3. Click **"Admit All"** to admit everyone at once
4. Individual **"Admit"** buttons for selective admission

---

## Spotlight Control

### Using Companion Spotlight Buttons

**Location:** Companion Page 1, bottom-right corner

**ZOOM SPOT 1** - Spotlight first participant
**ZOOM SPOT 2** - Spotlight second participant

### When to Use Spotlight

**During Prayer:**
- When an online participant wants to pray
- Press **SHOW ZOOM** to display Zoom on projector
- Press **ZOOM SPOT 1** to feature their video
- Their audio automatically plays through room speakers

**During Sharing:**
- When someone online is sharing testimony
- Use spotlight to feature their video
- Congregation can see and hear them clearly

**During Q&A:**
- When someone online has a question
- Spotlight them so pastor can see who's asking
- Their video and audio featured for everyone

### Removing Spotlight

- Press the spotlight button again to remove spotlight
- Or use Zoom's built-in "Remove Spotlight" option
- Gallery view returns to normal

---

## Video Source Control

### Sending Camera to Zoom (Default)

**Action:** No action needed - this is the default

**What Online Sees:**
- PTZ camera feed
- Live view of sanctuary and stage
- Camera follows service action (wide, pulpit, worship, etc.)

### Sending ProPresenter to Zoom

**Action:** Press **SHOW ZOOM** button on Companion

**What Online Sees:**
- Worship lyrics (during songs)
- Scripture slides (during readings)
- Announcement graphics
- Same content as projector screen

**When to Use:**
- During worship (so they can sing along)
- During scripture reading (bilingual text)
- During announcements (so they see graphics)

**To Return to Camera:**
- Press **SHOW CAMERA** button
- Or press **CLEAR** to remove overlay

---

## Audio Routing

### What Online Participants Hear

**Room Audio (via Loopback):**
- All microphones (pastor, worship team, congregation)
- Music (piano, drums)
- Ambient room sound
- Mixed via X18 mixer AUX 1 send

**Audio Mix for Online:**
- Controlled via **Companion Page 3 (Online Mix)**
- Independent from room speakers
- Optimized for online listening
- Prevents echo and feedback

### What Room Hears from Online

**Zoom Return Audio:**
- Online participant voices
- Automatically routed to room speakers
- Mixed into sanctuary sound system
- Clear audible communication both ways

### Preventing Echo and Feedback

**Automatic Echo Cancellation:**
- Zoom has built-in echo cancellation
- Loopback virtual device prevents feedback loops
- Online participants don't hear themselves

**If Feedback Occurs:**
1. Mute Zoom microphone temporarily
2. Lower "Zoom Return" level in X-Air Edit
3. Adjust Online Mix faders on Companion Page 3
4. Unmute Zoom microphone when resolved

---

## Managing Participants

### Viewing Participant List

1. Click **"Participants"** button in Zoom window
2. Panel shows list of all participants
3. See who's online, muted, or using video

### Muting Participants

**Individual Mute:**
1. Hover over participant name
2. Click **"Mute"** button
3. They can unmute themselves (unless host-disabled)

**Mute All:**
1. Click **"Mute All"** at bottom of Participants panel
2. All participants instantly muted
3. Use for emergencies or noisy disruptions

::: tip Allow Unmute
Keep "Allow participants to unmute themselves" enabled. This lets online members participate naturally without asking permission each time.
:::

### Managing Video

**Ask to Start Video:**
- Hover over participant name
- Click **"Ask to Start Video"**
- They receive a request notification

**Stop Participant Video:**
- Hover over participant name
- Click **"Stop Video"**
- Use only if inappropriate content is being shared

---

## Chat Management

### Viewing Chat Messages

1. Click **"Chat"** button in Zoom controls
2. Chat panel opens
3. See messages from online participants

### Responding to Chat

**Quick Responses:**
- Type message in chat box
- Press Enter to send
- Visible to all participants

**Common Chat Uses:**
- Prayer requests during service
- Technical issues ("Can't hear", "Video frozen")
- Questions for pastor (relay verbally during Q&A)
- Greetings and farewells

::: tip Assign a Chat Monitor
If possible, have a second person monitor Zoom chat during service. This allows the main operator to focus on camera, audio, and Companion controls.
:::

---

## Recording for Online

### Automatic Recording

**OBS Studio** handles all recording:
- Starts recording automatically on service-start
- Captures camera feed (not Zoom gallery)
- Records mixed audio from sanctuary
- Saves to `~/Movies/OBS/` directory

**Zoom Cloud Recording** (Optional):
- Can enable Zoom cloud recording if desired
- Records from Zoom's perspective (includes gallery)
- Stored in Zoom cloud for 30 days
- Useful backup if OBS recording fails

### Manual Zoom Recording

1. Click **"Record"** button in Zoom controls
2. Choose "Record on this Computer" or "Record to Cloud"
3. Recording starts immediately
4. Stop recording when service ends

---

## Common Streaming Scenarios

### Scenario: Online Participant Wants to Pray

1. Acknowledge them via chat or verbally
2. Press **SHOW ZOOM** (shows Zoom gallery on projector)
3. Press **ZOOM SPOT 1** to spotlight them
4. Let them pray (audio automatically in room)
5. Press **CLEAR** when prayer finished
6. Remove spotlight if needed

### Scenario: Worship Leader Asks for Prayer Requests

1. Watch Zoom chat for typed requests
2. Announce to worship leader: "We have requests from online"
3. Read requests aloud or have online participant share verbally
4. Spotlight participant if they're speaking

### Scenario: Technical Issue ("Can't Hear")

1. Check Zoom window - is participant muted?
2. Check if they accidentally left meeting
3. Verify Online Mix levels (Companion Page 3)
4. Ask them via chat to check their speakers/headphones
5. If widespread issue, adjust Loopback routing

### Scenario: Disruptive Participant

1. Mute the participant immediately
2. Send private chat message explaining issue
3. If behavior continues, use "Remove Participant" option
4. Document incident for leadership

### Scenario: Internet Connection Lost

1. Check Mac Mini network connection
2. Verify router/switch status
3. Zoom will attempt to reconnect automatically
4. If reconnect fails, restart Zoom manually
5. Participants will rejoin automatically (recurring meeting)

---

## Companion Zoom Controls

### Available Buttons (Companion Page 1)

**SHOW ZOOM** - Display Zoom gallery on projector
**ZOOM SPOT 1** - Spotlight first participant
**ZOOM SPOT 2** - Spotlight second participant

### Integration with Service Modes

**PRE-SERVICE Mode:**
- Camera to Zoom
- Normal gallery view
- Chat open for greetings

**WORSHIP Mode:**
- ProPresenter lyrics to Zoom (if SHOW ZOOM pressed)
- Camera remains default
- Music and vocals mixed for online

**SERMON Mode:**
- Camera to pulpit
- Normal Zoom gallery
- Optimized audio for speech

**ANNOUNCE Mode:**
- Announcements may be overlayed
- Consider showing announcements to Zoom

---

## Troubleshooting Zoom Issues

### Zoom Won't Launch

**Symptoms:** Zoom doesn't appear after service-start

**Solutions:**
1. Manually launch Zoom from Applications folder
2. Join meeting manually (Meeting ID saved in Zoom)
3. Check for Zoom updates (may require manual install)
4. Restart Mac Mini if completely frozen

### Audio Echo or Feedback

**Symptoms:** Online participants hear themselves, echo present

**Solutions:**
1. Verify "Original Sound" is enabled in Zoom
2. Check Loopback routing (X18 → Zoom, not bidirectional)
3. Lower Zoom return level in X-Air Edit
4. Mute Zoom mic temporarily, then unmute

### Video Frozen or Choppy

**Symptoms:** Camera feed to Zoom is frozen or stuttering

**Solutions:**
1. Check network bandwidth (other devices using internet?)
2. Lower Zoom video quality setting
3. Restart NDI Virtual Input
4. Switch to lower resolution in OBS
5. Check Mac Mini CPU usage (Activity Monitor)

### Can't Admit Participants

**Symptoms:** No "Admit" button visible

**Solutions:**
1. Verify you're the meeting host (not co-host)
2. Check if waiting room is enabled (Zoom settings)
3. Participants may have joined directly (no waiting room)
4. Restart Zoom to regain host controls

### Participants Can't Hear Room

**Symptoms:** Online participants report no audio

**Solutions:**
1. Verify Zoom microphone is unmuted
2. Check Loopback virtual device is selected in Zoom audio settings
3. Verify AUX 1 send levels in X-Air Edit (Online Mix)
4. Test microphone input in Zoom settings
5. Restart Loopback audio engine

### Room Can't Hear Participants

**Symptoms:** Sanctuary doesn't hear online voices

**Solutions:**
1. Verify Zoom speaker is set to correct output device
2. Check "Zoom Return" channel level in X-Air Edit
3. Ensure Zoom audio is routed correctly via Loopback
4. Unmute Zoom participants if muted
5. Check Mac Mini system volume

---

## Best Practices

::: tip Start Zoom Early
If possible, join the meeting 15-30 minutes before service to test audio/video and greet early arrivals.
:::

::: tip Communicate with Online Participants
Use chat to acknowledge prayer requests, answer questions, and make people feel included.
:::

::: tip Monitor Gallery View
Glance at Zoom gallery every few minutes to see who's online and if anyone is trying to get attention.
:::

::: tip Coordinate with Room
When online participants pray or speak, ensure the sanctuary can hear them clearly. Adjust levels as needed.
:::

::: tip Test Before Service
Before worship starts, ask an online participant "Can you hear us clearly? How's the video quality?" to verify everything is working.
:::

::: tip Document Issues
If recurring technical issues occur, document them for troubleshooting after service. Don't try to fix complex problems mid-service.
:::

---

## See Also

- [Equipment Guide](./equipment-guide) - Zoom technical specifications
- [Recording Guide](./recording) - OBS recording setup
- [Troubleshooting](../troubleshooting/common-issues) - Common Zoom problems and solutions
