# IJC Production Manual

Technical documentation for the Iglesia Jerusalem Charlotte AV production system, built with VitePress.

## Overview

This repository contains the production manual for operating the audio/visual system at Iglesia Jerusalem Charlotte. The manual is built as a static documentation site using VitePress and deployed to a secure, authenticated web portal.

**Production URL:** https://remote-support.jbc.dev/iglesia-jerusalem/manual/

## Features

- **Modern Documentation:** Built with VitePress for fast, searchable, accessible documentation
- **Live System Status:** Vue components display real-time device status from the control system API
- **Secure Access:** Authentication via Tailscale auto-auth or password
- **Dark Mode:** Built-in light/dark theme switching
- **Mobile Responsive:** Optimized for use on phones, tablets, and desktops
- **Local Search:** Fast client-side search across all documentation
- **Automated Deployment:** GitHub Actions pipeline for continuous deployment

## Quick Start

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Development server runs at:
# http://localhost:5173/iglesia-jerusalem/manual/
```

The dev server supports hot module replacement (HMR) - changes to content or components update instantly without page refresh.

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Build output is generated in the `dist/` directory.

## Project Structure

```
iglesia-jerusalem-manual/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts               # VitePress configuration
│   │   └── theme/
│   │       └── components/         # Vue components
│   │           ├── StatusMonitor.vue
│   │           ├── StatusIndicator.vue
│   │           └── DeviceCard.vue
│   ├── index.md                    # Homepage
│   ├── getting-started/            # Onboarding documentation
│   ├── operations/                 # Daily operations guides
│   ├── troubleshooting/            # Problem-solving guides
│   ├── reference/                  # Technical reference
│   │   └── system-status.md        # Live status page
│   ├── public/                     # Static assets (images, etc.)
│   ├── deployment.md               # Deployment documentation
│   └── deployment-checklist.md     # Post-deployment verification
├── package.json
├── tsconfig.json
└── README.md
```

## Content Organization

Documentation is organized by user workflow:

- **Getting Started** - Installation, quick start, first service walkthrough
- **Operations** - Running services, equipment guides, streaming, recording
- **Troubleshooting** - Common issues, emergency procedures, debugging
- **Reference** - System status, shortcuts, network info, API documentation

## Interactive Components

### Live Status Monitoring

The manual includes Vue components that display real-time system status by polling the ij-control API:

**API Endpoints (in fallback order):**
1. `http://100.65.198.33:3000/api/status` - Tailscale IP (primary)
2. `http://10.100.0.34:3000/api/status` - Local network IP
3. `http://control.ijc.local:3000/api/status` - mDNS fallback

**Usage in Markdown:**
```markdown
# System Status

<StatusMonitor />

This page shows real-time status of all connected devices.
```

Components automatically handle:
- API endpoint fallback
- 10-second polling interval
- Error handling and offline states
- Reactive state updates

## Deployment

### Automatic Deployment

The manual is automatically deployed to production when changes are pushed to the `main` branch.

**Deployment target:** `admin@10.100.0.34:/var/www/remote-support/iglesia-jerusalem/manual/`

**Required GitHub Secrets:**
- `DEPLOY_SSH_KEY` - SSH private key for deployment
- `DEPLOY_USER` - Deployment user (admin)
- `DEPLOY_HOST` - Deployment host (10.100.0.34)

See [docs/deployment.md](docs/deployment.md) for detailed deployment documentation.

### Manual Deployment

You can also deploy manually if needed:

```bash
# Build the site
npm run build

# Deploy via rsync
rsync -avz --delete \
  -e "ssh -i ~/.ssh/ijc-manual-deploy" \
  dist/ \
  admin@10.100.0.34:/var/www/remote-support/iglesia-jerusalem/manual/
```

### Deployment Verification

After deployment, use the [deployment checklist](docs/deployment-checklist.md) to verify:
- Site accessibility and authentication
- Navigation and search functionality
- Live status monitoring
- Cross-browser compatibility
- API connectivity

## Authentication

The manual is protected by Caddy reverse proxy authentication:

- **Tailscale users:** Automatically authenticated (no password required)
- **External users:** Must enter password
- **No VitePress authentication:** All auth is handled by Caddy

This keeps the VitePress site simple and secure - it's just static files behind authenticated access.

## Contributing

### Adding New Pages

1. Create a new `.md` file in the appropriate section directory
2. Add frontmatter with title and description
3. Update `.vitepress/config.ts` to add the page to navigation/sidebar
4. Use Markdown with optional Vue components

Example:
```markdown
---
title: My New Guide
description: A guide for doing something
---

# My New Guide

Content here...

<StatusMonitor />
```

### Creating Vue Components

1. Create component in `docs/.vitepress/theme/components/`
2. Use TypeScript for type safety
3. Import and use in Markdown files

Example:
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const status = ref('loading')

onMounted(() => {
  // Component logic
})
</script>

<template>
  <div class="status">{{ status }}</div>
</template>

<style scoped>
.status { /* styles */ }
</style>
```

### Updating Styles

VitePress uses the default theme. To customize:
1. Edit `.vitepress/theme/index.ts` to add custom styles
2. Use scoped styles in Vue components
3. Follow VitePress theme customization guidelines

## Testing

### Local Testing

```bash
# Development mode (hot reload)
npm run dev

# Production preview
npm run build && npm run preview
```

### Pre-Deployment Checklist

Before pushing to main:
- [ ] Build succeeds locally: `npm run build`
- [ ] Preview looks correct: `npm run preview`
- [ ] All links work
- [ ] Vue components load and function
- [ ] No TypeScript errors
- [ ] No console errors

### Cross-Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (macOS/iOS)
- Mobile browsers (iOS Safari, Chrome Android)

## Troubleshooting

### Build Errors

**"Cannot find module"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors in components**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Development Server Issues

**Port 5173 already in use**
```bash
# Kill existing process or use different port
npm run dev -- --port 5174
```

**Changes not updating**
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Restart dev server
- Clear browser cache

### API Connectivity

**Status monitor not loading data**
1. Check ij-control is running: `ssh admin@10.100.0.34 "pm2 status"`
2. Verify API endpoint accessible: `curl http://100.65.198.33:3000/api/status`
3. Check browser console for CORS or network errors

## Related Repositories

- **Control System:** [iglesia-jerusalem-avl](https://github.com/jbctechsolutions/iglesia-jerusalem-avl) - Main control system codebase
- **Infrastructure:** [infrastructure](https://github.com/jbctechsolutions/infrastructure) - Ansible deployment roles

## Technology Stack

- **Static Site Generator:** [VitePress](https://vitepress.dev/) v1.x
- **Framework:** Vue 3 with Composition API
- **Language:** TypeScript
- **Build Tool:** Vite
- **Deployment:** GitHub Actions + rsync
- **Authentication:** Caddy reverse proxy (external to this repo)

## Support

**For manual content questions:**
- Production team members
- Review existing documentation sections

**For technical/deployment issues:**
- See [docs/deployment.md](docs/deployment.md) troubleshooting section
- Check GitHub Actions logs
- Contact DevOps engineer

## License

Internal use only - Iglesia Jerusalem Charlotte production team documentation.

---

**Last Updated:** 2026-02-08
**Maintained By:** IJC Production Team
**Repository:** https://github.com/jbctechsolutions/iglesia-jerusalem-manual
