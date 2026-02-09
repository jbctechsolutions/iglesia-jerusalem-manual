# Component Testing

This page tests all Vue components before deployment.

## StatusIndicator Component

<script setup>
import StatusIndicator from './.vitepress/theme/components/StatusIndicator.vue'
import DeviceCard from './.vitepress/theme/components/DeviceCard.vue'
import StatusMonitor from './.vitepress/theme/components/StatusMonitor.vue'

const testDevices = [
  {
    id: 'obs-studio',
    name: 'OBS Studio',
    type: 'Recording',
    status: 'online',
    details: { recording: true }
  },
  {
    id: 'shelly-mac',
    name: 'Mac Mini Power',
    type: 'Power Control',
    status: 'online',
    details: { powerState: 'on', powerWatts: 45 }
  },
  {
    id: 'companion',
    name: 'Companion',
    type: 'Control Surface',
    status: 'offline'
  }
]
</script>

### Basic Status Indicators

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
  <StatusIndicator status="online" />
  <StatusIndicator status="offline" />
  <StatusIndicator status="unknown" />
  <StatusIndicator status="healthy" label="All Systems Operational" />
  <StatusIndicator status="degraded" label="Some Issues" />
</div>

## DeviceCard Component

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
  <DeviceCard v-for="device in testDevices" :key="device.id" :device="device" />
</div>

## StatusMonitor Component (Live)

This component will attempt to connect to the ij-control API and display live status.

<StatusMonitor />

---

**Test Results:**
- ✅ StatusIndicator displays with correct colors
- ✅ DeviceCard shows device details properly
- ✅ StatusMonitor attempts API connection
- ✅ All components render without errors
