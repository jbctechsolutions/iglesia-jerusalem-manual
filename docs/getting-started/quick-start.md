<script setup>
import StatusMonitor from '../.vitepress/theme/components/StatusMonitor.vue'
</script>

# Quick Start Guide

## System Status

<StatusMonitor />

## The 2-Step Startup Process

The system does almost everything automatically - you just need to turn on the projector!

### Step 1: Everything Starts Automatically

**Action:** Nothing! The system starts automatically on its schedule.

**How It Works:**

The Shelly smart plugs have a built-in schedule that automatically powers on equipment before service time.

When the schedule activates, it automatically:

1. Powers ON the Power Conditioner (stage equipment)
2. Powers ON the Mac Mini (production computer)
3. Powers ON the Charging Station (microphone batteries and tablets)
4. HOLDS all shutdown schedules (prevents auto-shutdown during service)
5. Detects X18 mixer coming online
6. **WAITS for you to turn on the projector** (shows notification)
7. Auto-launches all 9 production applications once projector detected

::: tip Applications That Auto-Launch (After Projector)
⏸️ These applications wait for the projector to be turned on before launching.

**Main Applications:**
- ProPresenter (slides)
- Zoom (streaming)
- X-Air Edit (audio)
- OBS (recording)
- Companion (tablet)

**Background Apps:**
- ZoomOSC
- Loopback
- NDI Virtual Input
- SonoBus
:::

::: warning Manual Override (if needed)
If you arrive early or the schedule hasn't triggered yet, you can manually start everything by pressing **Cmd+Space** and typing "Start Service" in the launcher, or by double-clicking the **"Start Service"** desktop icon on the Mac Mini. This does the exact same thing as the automatic schedule.
:::

### Step 2: Turn ON the Projector

**Action:** Turn ON the **Projector** (remote on top of AV rack in front)

**Wait Time:** 30 seconds

**How To:**

1. Find the projector remote on top of the AV rack in the front
2. Point it at the ceiling-mounted projector
3. Press the power button once
4. Wait for the blue light to turn solid (about 30 seconds)

::: info Why the Projector Needs to Be On
The projector must be ON before ProPresenter launches so the computer knows where to send the presentation slides.

📱 You'll see a notification: "Please turn ON the projector to continue..."

The system will wait for you to turn on the projector, then automatically launch all applications once the projector is detected. This ensures ProPresenter always starts with the correct screen configuration!
:::

::: tip The 10-Minute Zoom Stabilization Wait
After all apps launch, the system waits **10 minutes** for Zoom to fully connect and stabilize. This ensures stable audio/video before service begins.

💡 You can skip this wait anytime by pressing **ENTER** in the Terminal window

The wait is recommended if you're starting early, but if service time is approaching, feel free to skip it!
:::

---

## The 2-Step Shutdown Process

After every service, follow these steps.

### Shutdown Step 1: Run the End Service Script

**Action:** On the Mac Mini, run the **End Service** script

**How To:**

1. Look for the "End Service" icon on the desktop
2. Double-click to run the shutdown script
3. The script will ask for confirmation
4. You'll have 15 seconds to cancel if needed
5. Wait for the countdown to finish

**What Happens Automatically:**

The end-service script automatically handles the entire shutdown sequence:

- Mutes the X18 audio mixer
- Stops any active recordings in OBS
- Closes all main applications (ProPresenter, Zoom, OBS, X-Air Edit)
- Closes background apps (ZoomOSC, Loopback, NDI, SonoBus, Chrome)
- Releases Shelly schedule hold (equipment can auto-shutdown)
- Puts the Mac Mini to sleep

::: tip Automatic Shutdown Alternative
You can also trigger shutdown by turning OFF the X18 mixer (power switch on back panel). The system detects when the X18 goes offline and automatically runs the shutdown sequence after 30 seconds. This is useful if you're in a hurry or prefer a physical shutdown trigger!
:::

**Note:** The Shelly smart plugs will power off the equipment on their normal schedule after you run this script.

### Shutdown Step 2: Turn OFF the Projector

**Action:** Turn off the **Projector** using the remote control

**How To:**

1. Use the projector remote control
2. Press the power button to turn off the projector
3. Make sure the charging station is on (microphone batteries and tablets)

::: info No Waiting Required
You can turn off the projector right away - no need to wait for apps to close. The end-service script handles all the shutdown timing automatically.
:::

---

## Next Steps

Now that you know the basic startup and shutdown, learn the complete pre-service checklist:

[View Pre-Service Checklist →](/iglesia-jerusalem/manual/getting-started/first-service)
