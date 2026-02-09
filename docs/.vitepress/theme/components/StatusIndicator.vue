<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  status: 'online' | 'offline' | 'unknown' | 'healthy' | 'degraded'
  label?: string
}

const props = defineProps<Props>()

const statusClass = computed(() => {
  const map = {
    online: 'status-online',
    healthy: 'status-online',
    offline: 'status-offline',
    degraded: 'status-offline',
    unknown: 'status-unknown'
  }
  return map[props.status] || 'status-unknown'
})

const statusIcon = computed(() => {
  const map = {
    online: '🟢',
    healthy: '🟢',
    offline: '🔴',
    degraded: '⚠️',
    unknown: '⏳'
  }
  return map[props.status] || '⏳'
})

const statusText = computed(() => {
  if (props.label) return props.label

  const map = {
    online: 'Online',
    healthy: 'Healthy',
    offline: 'Offline',
    degraded: 'Degraded',
    unknown: 'Unknown'
  }
  return map[props.status] || 'Unknown'
})
</script>

<template>
  <span class="status-indicator" :class="statusClass">
    <span class="status-icon">{{ statusIcon }}</span>
    <span class="status-text">{{ statusText }}</span>
  </span>
</template>

<style scoped>
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-online {
  background: rgba(34, 197, 94, 0.1);
  color: rgb(34, 197, 94);
}

.status-offline {
  background: rgba(239, 68, 68, 0.1);
  color: rgb(239, 68, 68);
}

.status-unknown {
  background: rgba(156, 163, 175, 0.1);
  color: rgb(156, 163, 175);
}

.status-icon {
  line-height: 1;
}

.status-text {
  line-height: 1;
}
</style>
