<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Device, StatusResponse } from '../types'
import DeviceCard from './DeviceCard.vue'
import StatusIndicator from './StatusIndicator.vue'

const API_ENDPOINTS = [
  'http://100.65.198.33:3000/api/status',     // Tailscale IP (primary)
  'http://10.100.0.34:3000/api/status',       // Local network IP
  'http://control.ijc.local:3000/api/status'  // Local mDNS hostname
]

const POLL_INTERVAL = 10000  // 10 seconds
const TIMEOUT = 5000         // 5 second timeout
const RETRY_DELAY = 30000    // 30 seconds on error

const devices = ref<Device[]>([])
const overallStatus = ref<'healthy' | 'degraded' | 'offline' | 'unknown'>('unknown')
const lastUpdate = ref<Date | null>(null)
const isLoading = ref(true)
const errorCount = ref(0)
const pollTimer = ref<number | null>(null)

async function fetchStatus() {
  // Try each endpoint in order
  for (const endpoint of API_ENDPOINTS) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT)

      const response = await fetch(endpoint, {
        signal: controller.signal,
        headers: {
          'Cache-Control': 'no-cache'
        }
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data: StatusResponse = await response.json()

      // Update state
      overallStatus.value = data.overall
      lastUpdate.value = new Date(data.timestamp)
      devices.value = data.devices
      errorCount.value = 0
      isLoading.value = false

      return // Success - stop trying other endpoints

    } catch (error) {
      console.log(`[StatusMonitor] Failed to fetch from ${endpoint}:`, error)
      continue // Try next endpoint
    }
  }

  // All endpoints failed
  console.error('[StatusMonitor] All API endpoints failed')
  errorCount.value++
  isLoading.value = false
}

function schedulePoll() {
  if (pollTimer.value) {
    clearTimeout(pollTimer.value)
  }

  const delay = errorCount.value > 0 ? RETRY_DELAY : POLL_INTERVAL
  pollTimer.value = setTimeout(() => {
    fetchStatus()
    schedulePoll()
  }, delay)
}

onMounted(() => {
  fetchStatus() // Initial fetch
  schedulePoll()
})

onUnmounted(() => {
  if (pollTimer.value) {
    clearTimeout(pollTimer.value)
  }
})
</script>

<template>
  <div class="status-monitor">
    <div class="status-header">
      <div class="overall-status">
        <StatusIndicator
          :status="overallStatus"
          :label="
            overallStatus === 'healthy' ? '✅ All Systems Operational' :
            overallStatus === 'degraded' ? '⚠️ Some Devices Offline' :
            overallStatus === 'offline' ? '❌ Critical Systems Offline' :
            'Checking system status...'
          "
        />
      </div>
      <div class="last-update" v-if="lastUpdate">
        Last Updated: {{ lastUpdate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) }}
      </div>
      <div class="api-status" v-else-if="errorCount > 0">
        <span class="error-message">Cannot connect to status API</span>
      </div>
    </div>

    <div v-if="isLoading" class="loading">
      Loading device status...
    </div>

    <div v-else-if="devices.length > 0" class="device-grid">
      <DeviceCard
        v-for="device in devices"
        :key="device.id"
        :device="device"
      />
    </div>

    <div v-else class="no-devices">
      No devices found
    </div>
  </div>
</template>

<style scoped>
.status-monitor {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.status-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
}

.overall-status {
  font-size: 1.125rem;
}

.last-update {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.api-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-message {
  color: var(--vp-c-danger-1);
  font-size: 0.875rem;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.device-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.no-devices {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .device-grid {
    grid-template-columns: 1fr;
  }
}
</style>
