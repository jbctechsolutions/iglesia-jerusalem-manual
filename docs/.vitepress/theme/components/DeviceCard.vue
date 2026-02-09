<script setup lang="ts">
import { computed } from 'vue'
import type { Device } from '../types'
import StatusIndicator from './StatusIndicator.vue'

interface Props {
  device: Device
}

const props = defineProps<Props>()

const deviceStatusLabel = computed(() => {
  const device = props.device

  // Show device-specific details if available
  if (device.details) {
    // Shelly devices - show power state and watts
    if (device.id.startsWith('shelly-')) {
      const { powerState, powerWatts } = device.details
      if (powerState === 'on' && powerWatts !== undefined) {
        return `${Math.round(powerWatts)}W`
      } else if (powerState) {
        return powerState.toUpperCase()
      }
    }

    // OBS - show recording status
    if (device.id === 'obs-studio' && device.details.recording) {
      return '🔴 Recording'
    }
  }

  // Default: just show status
  return device.status === 'online' ? 'Online' :
         device.status === 'offline' ? 'Offline' : 'Unknown'
})
</script>

<template>
  <div class="device-card">
    <div class="device-header">
      <span class="device-name">{{ device.name }}</span>
      <span class="device-type">{{ device.type }}</span>
    </div>
    <StatusIndicator :status="device.status" :label="deviceStatusLabel" />
  </div>
</template>

<style scoped>
.device-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s;
}

.device-card:hover {
  border-color: var(--vp-c-brand-1);
}

.device-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.device-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.device-type {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
