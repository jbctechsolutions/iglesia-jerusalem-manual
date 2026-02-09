# Network Information

Complete network configuration, IP addresses, and network topology for the IJC Production System.

## Network Overview

The production system uses a dedicated subnet (`10.100.0.0/24`) with static IP assignments.

### Network Architecture

```
Internet (Verizon FiOS)
    ↓
Verizon Router (192.168.1.1)
    ↓
Ubiquiti UniFi Network
    ↓
    ├── UniFi Switch (Main)
    │   ├── Mac Mini (10.100.0.34)
    │   ├── X18 Mixer (10.100.0.18)
    │   ├── PoE Switch (cameras/PoE devices)
    │   ├── UniFi AP (WiFi access points)
    │   └── Network devices
    │
    └── WiFi Network (SSID: IglesiaJerusalem)
        ├── Tablets (Companion control)
        ├── Shelly Smart Plugs
        └── Guest devices
```

## Device IP Addresses

### Production Equipment

| Device | IP Address | Access Method | Notes |
|--------|-----------|---------------|-------|
| Mac Mini (Production) | `10.100.0.34` | SSH, Screen Sharing | Main production workstation |
| X18 Mixer | `10.100.0.18` | X-Air Edit app | Audio mixer, has own WiFi AP |
| PTZ Camera | `10.100.0.31` | HTTP web interface | [http://10.100.0.31](http://10.100.0.31) |

### Control Systems

| Service | Address | Purpose |
|---------|---------|---------|
| ij-control API | `http://10.100.0.34:3000` | Automation and monitoring |
| ij-control Web | `http://control.ijc.local:3000` | User-friendly web interface |
| Companion | `http://10.100.0.34:8888` | Control surface interface |
| Companion (mDNS) | `http://companion.ijc.local:8888` | Easy-to-remember address |
| Companion Admin | `http://localhost:8000` | Configuration (Mac Mini only) |

### Power Management

| Device | IP Address | Purpose |
|--------|-----------|---------|
| Shelly Power Conditioner | Dynamic (DHCP) | Controls stage equipment power |
| Shelly Mac Mini | Dynamic (DHCP) | Controls production computer power |
| Shelly Charging Station | Dynamic (DHCP) | Controls mic/tablet chargers |

## WiFi Configuration

### Primary Network

**SSID:** `IglesiaJerusalem`
- **Security:** WPA2/WPA3 Personal
- **Network:** `10.100.0.0/24`
- **DHCP Range:** `10.100.0.100-199`
- **Gateway:** `10.100.0.1`

**Connected Devices:**
- Tablets running Companion
- Staff phones
- Guest WiFi access
- Shelly smart plugs

## IP Address Assignments

### Static Assignments (Reserved)

```
10.100.0.1      - Gateway (UniFi Router)
10.100.0.2-10   - Reserved for infrastructure
10.100.0.18     - X18 Mixer
10.100.0.31     - PTZ Camera
10.100.0.34     - Mac Mini Production
10.100.0.50-99  - Reserved for future devices
```

### Dynamic Range (DHCP)

```
10.100.0.100-199 - DHCP pool for tablets, phones, guests
10.100.0.200-254 - Reserved for expansion
```

## Remote Access

### Tailscale VPN

Tech support accesses the system remotely via Tailscale VPN:

**Tailscale Network:** `100.x.x.x/32`
- **Mac Mini Tailscale IP:** Check Tailscale menu bar
- **Access:** Tech support can SSH, screen share, or access web interfaces
- **Security:** End-to-end encrypted, invite-only access

## Troubleshooting Network Issues

### Device Can't Connect

**Check these in order:**
1. **Physical connection:**
   - Ethernet cable plugged in?
   - Link lights on switch port?
   - PoE indicator (if PoE device)?

2. **IP configuration:**
   - Device has correct IP?
   - Can ping default gateway (10.100.0.1)?
   - Can ping other devices?

3. **Service status:**
   - Is the service running?
   - Firewall blocking connection?
   - Check [System Status](./system-status) page

### Internet Not Working

**Local network still works:**
- Production system continues operating
- Zoom streaming will fail
- Recordings work locally

::: info Local Operation
Most of the production system works without internet. Only Zoom streaming requires internet.
:::

## Related Documentation

- [System Status](./system-status) - Real-time device connectivity
- [Troubleshooting](/troubleshooting/common-issues#network-connection) - Network issue solutions
- [Reference Home](./index) - Other reference documentation
