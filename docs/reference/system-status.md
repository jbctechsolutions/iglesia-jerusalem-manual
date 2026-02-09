# System Status

Real-time monitoring of all production equipment. This page automatically refreshes every 10 seconds to show current device status.

<script setup>
import StatusMonitor from '../.vitepress/theme/components/StatusMonitor.vue'
</script>

<StatusMonitor />

## Understanding Device Status

### Status Indicators

The status monitor shows real-time information for each device:

#### Online Status
- **🟢 Green** - Device is online and responding normally
- **🔴 Red** - Device is offline or not responding
- **⚪ Gray** - Status unknown or checking

#### Device Information

Each device card displays:
- **Device Name** - Friendly name of the equipment
- **Status** - Current online/offline state
- **IP Address** - Network location of device (click to access web interface)
- **Additional Details** - Device-specific information when available

### Critical Devices

#### Audio System
- **X18 Mixer (10.100.0.18)** - Behringer digital mixer
  - Controls all microphones and audio routing
  - Should always be online during service
  - If offline: Check Power Conditioner

#### Video System
- **PTZ Camera (10.100.0.31)** - PTZOptics camera
  - Main service camera with remote control
  - Requires PoE power from network switch
  - If offline: Check PoE switch and camera power LED

#### Control Systems
- **Companion (localhost:8000)** - Control surface for tablets/devices
  - Manages all button controls and presets
  - Runs on Mac Mini
  - If offline: Check if Mac Mini is awake

- **ij-control API (localhost:3000)** - Automation system
  - Handles scheduled startup/shutdown
  - Monitors device health
  - Provides status data for this page
  - If offline: Service can still operate manually

## Device IP Reference

Quick reference for accessing devices directly:

| Device | IP Address | Access Method |
|--------|-----------|---------------|
| Mac Mini | 10.100.0.34 | SSH, Screen Sharing |
| X18 Mixer | 10.100.0.18 | X-Air Edit app |
| PTZ Camera | 10.100.0.31 | [http://10.100.0.31](http://10.100.0.31) |
| Companion | localhost:8888 | [http://companion.ijc.local:8888](http://companion.ijc.local:8888) |
| ij-control | localhost:3000 | [http://control.ijc.local:3000](http://control.ijc.local:3000) |

## Related Pages

- [Network Information](./network-info) - Complete network diagram and IP assignments
- [Troubleshooting](/troubleshooting/) - Solutions for offline devices
- [Emergency Procedures](/troubleshooting/emergency-procedures) - Critical failure handling
