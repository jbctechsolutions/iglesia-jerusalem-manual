# Common Issues and Solutions

Step-by-step solutions for the most common problems during service. Most issues have simple fixes!

## Audio Problems {#audio-problems}

### No Sound at All {#no-sound}

**Symptoms:** Congregation can't hear anything, no sound from speakers

**Check these in order:**

1. **Is the mixer powered on?**
   - Look at the X18 in the rack on stage
   - Should have green lights moving (audio levels)
   - If no lights: Check if Power Conditioner is on

2. **Is the main output muted?**
   - Look at X-Air Edit on the center monitor
   - Check if the main fader is up (not at bottom)
   - Check if "MUTE" button is lit red on the main output
   - If muted: Click to unmute

3. **Are the speakers powered on?**
   - Main speakers should have power lights
   - Check if speaker power switch is on (near speakers)

::: danger Still no sound?
[Call for help immediately](/troubleshooting/#contact-information) - this is a critical issue
:::

### Microphone Not Working {#mic-not-working}

**Symptoms:** One specific microphone has no sound, speaker is talking but nothing comes through

**Check these in order:**

1. **Is the microphone turned on?**
   - Check for green/power light on the microphone
   - If off: Press and hold power button

2. **Is the microphone charged?**
   - If the mic won't turn on, battery may be dead
   - Get a different microphone from charging station

3. **Is the channel muted?**
   - Look at X-Air Edit on center monitor
   - Find the channel (Ch 1-4 = handhelds, Ch 5-8 = lapels, Ch 9 = pianist)
   - If "MUTE" is lit, click to unmute

4. **Is the fader up?**
   - The volume slider for that channel should be raised
   - If at bottom, slide it up to about 0 dB

::: tip Quick Fix
Use Companion Page 1 to quickly unmute: Look for the MUTE MIC buttons (row 4). Tap the specific mic number to toggle mute/unmute.
:::

### Feedback (Squealing Sound) {#feedback}

**Symptoms:** Loud squealing or ringing sound that gets louder quickly

**IMMEDIATE ACTION:**
1. **MUTE the problem microphone immediately!**

**How to mute quickly:**
- **Option 1:** Use Companion Page 1 → Row 4 → Tap specific MIC button
- **Option 2:** Use "MUTE ALL EMERGENCY" button (red button, bottom of row 4)
- **Option 3:** Use X-Air Edit → Click MUTE on the problem channel

**Why feedback happens:**
- Microphone too close to a speaker
- Monitor volume too high
- Microphone pointed at speaker

**How to fix and prevent:**
1. Move the microphone away from speakers
2. Lower the monitor send for that mic (if using monitors)
3. Slowly unmute and test at lower volume
4. Point microphone away from speakers

::: warning Remember to Unmute!
After fixing the issue, remember to unmute that microphone when needed. Mute buttons are toggles - press again to unmute.
:::

## Video Problems {#video-problems}

### Projector Shows Wrong Content {#projector-wrong}

**Symptoms:** Projector shows computer desktop instead of slides, projector shows nothing/black, slides appear on wrong monitor

**This usually happens when the projector wasn't on before the computer started.**

**Quick Fix (takes 30 seconds):**
1. Open **ProPresenter** (click on left monitor)
2. Go to menu: **Screens → Configure Screens**
3. Click **"Audience"** in the left panel
4. Click the **Projector** in the right panel (rightmost screen)
5. Click **"Done"**

**If that doesn't work - Full Restart:**
1. Double-click "End Service" on desktop
2. Wait for everything to close (~90 seconds)
3. Make sure projector is ON
4. Double-click "Start Service" on desktop
5. Wait 1 minute for everything to restart
6. Check projector now shows ProPresenter audience output

::: tip Prevention
This is why the startup script now waits for the projector! If you always turn on the projector first (or when prompted), ProPresenter will configure correctly every time.
:::

## Network/Connection Problems {#network-connection}

### Companion Buttons Not Working {#companion-buttons}

**Symptoms:** Pressing camera buttons does nothing, audio controls don't respond

**This means Companion has lost connection to equipment.**

**To restart connections:**

1. **Open Companion Admin:**
   - On the computer, open Safari or Chrome
   - Go to: `http://localhost:8000`

2. **Go to the Connections tab:**
   - Click on "Connections" in the left sidebar
   - You'll see a list of all connected devices

3. **Restart the connection:**
   - Find the problem connection in the list
   - Click the **toggle switch** to disable it (switch turns gray)
   - Wait 3 seconds
   - Click the toggle switch again to re-enable it (switch turns green)

## Contact for Help

**JBC Tech Solutions**
- **Phone:** [+1 917-664-1081](tel:+19176641081)
- **Email:** [joel@jbc.dev](mailto:joel@jbc.dev)
