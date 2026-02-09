# Deployment Verification Checklist

Use this checklist to verify the IJC Production Manual after each deployment to production.

## Pre-Deployment Checks

Before deploying to production, verify locally:

- [ ] **Local build succeeds:** `npm run build` completes without errors
- [ ] **Preview looks correct:** `npm run preview` shows expected content
- [ ] **Base path works:** Site works correctly at `/iglesia-jerusalem/manual/`
- [ ] **All internal links work:** Navigate through all sections
- [ ] **Vue components load:** Status monitor and other interactive elements work
- [ ] **TypeScript compiles:** No TypeScript errors in build output
- [ ] **No console errors:** Browser console shows no JavaScript errors

## Post-Deployment Verification

After deployment completes, verify on production:

### 1. Basic Accessibility

- [ ] **Manual loads:** https://remote-support.jbc.dev/iglesia-jerusalem/manual/ returns 200 OK
- [ ] **No 404 errors:** Check browser console for missing assets
- [ ] **Correct version deployed:** Verify latest content changes are visible
- [ ] **Page load time:** Initial load completes in < 2 seconds

### 2. Authentication

Test authentication from different network contexts:

- [ ] **Tailscale auto-authentication works:**
  - Connect via Tailscale VPN
  - Navigate to manual URL
  - Should bypass password prompt and load directly

- [ ] **Password authentication works (external):**
  - Disconnect from Tailscale
  - Navigate to manual URL from external network
  - Should prompt for password
  - Correct password grants access

- [ ] **Session persistence:**
  - After successful login, refresh page
  - Should remain authenticated (no re-prompt)

- [ ] **Logout functionality:**
  - Clear cookies or use incognito mode
  - Should require re-authentication

### 3. Navigation & Search

- [ ] **Sidebar navigation works:** All sections expand/collapse correctly
- [ ] **Page links work:** Click through all navigation items
- [ ] **Search functionality:**
  - Search for common terms (e.g., "streaming", "troubleshooting")
  - Results appear in < 100ms
  - Clicking results navigates to correct page
- [ ] **Breadcrumb navigation:** Shows correct page hierarchy
- [ ] **Mobile navigation:** Hamburger menu works on mobile devices

### 4. Content & Styling

- [ ] **All content visible:** No missing sections or truncated content
- [ ] **Images load correctly:** All screenshots and diagrams display
- [ ] **Formatting preserved:** Lists, code blocks, tables render correctly
- [ ] **Dark mode toggle works:** Switch between light/dark modes
- [ ] **Responsive design:** Test on mobile, tablet, and desktop viewports
- [ ] **Footer displays:** Shows correct copyright and branding

### 5. Interactive Features

- [ ] **System Status page loads:** Navigate to `/reference/system-status`
- [ ] **Live status data displays:** Vue component shows device status
- [ ] **API polling works:** Status updates automatically (10-second interval)
- [ ] **Device indicators update:** Green/red status indicators reflect actual state
- [ ] **Error handling:** Graceful offline state if API unreachable

### 6. API Connectivity

Test API endpoint fallback logic from the manual:

- [ ] **Tailscale IP works (primary):**
  - From Tailscale network: `http://100.65.198.33:3000/api/status`
  - Status monitor should show live data

- [ ] **Local network works (fallback):**
  - From local network: `http://10.100.0.34:3000/api/status`
  - Status monitor should show live data

- [ ] **mDNS works (tertiary):**
  - From local network: `http://control.ijc.local:3000/api/status`
  - Status monitor should show live data

- [ ] **Offline state handles gracefully:**
  - Disconnect from network or stop ij-control
  - Status monitor should show "Unable to connect" message
  - No JavaScript errors in console

### 7. Cross-Browser Testing

Test on multiple browsers:

- [ ] **Chrome/Edge:** Full functionality works
- [ ] **Firefox:** Full functionality works
- [ ] **Safari:** Full functionality works (especially important for macOS users)
- [ ] **Mobile Safari (iOS):** Responsive layout and touch navigation
- [ ] **Mobile Chrome (Android):** Responsive layout and touch navigation

### 8. Performance

- [ ] **Page load time:** < 1 second for subsequent pages
- [ ] **Search response time:** < 100ms for search queries
- [ ] **Build size:** Check dist folder size (should be < 5MB)
- [ ] **No memory leaks:** Status polling doesn't cause memory growth
- [ ] **Lighthouse score:** Run audit (aim for 90+ in all categories)

### 9. SEO & Metadata

- [ ] **Page titles correct:** Each page has descriptive title
- [ ] **Meta descriptions present:** Check page metadata
- [ ] **Favicon displays:** Browser tab shows IJC favicon (if configured)
- [ ] **Social preview:** Open Graph tags set correctly (if configured)

### 10. Security

- [ ] **HTTPS works:** All resources load over HTTPS
- [ ] **No mixed content warnings:** No HTTP resources on HTTPS pages
- [ ] **Authentication enforced:** Cannot bypass password prompt
- [ ] **Session security:** Cookies have secure flags set
- [ ] **No sensitive data exposed:** Check for API keys or secrets in source

## Rollback Decision

If any critical issues are found during verification:

**Critical Issues (require immediate rollback):**
- Authentication completely broken (cannot access manual)
- Site returns 500 errors or fails to load
- JavaScript errors prevent core functionality
- API polling causes performance issues

**Non-Critical Issues (can fix with follow-up PR):**
- Minor styling issues
- Broken links to non-essential pages
- Search returns unexpected results
- Dark mode toggle glitches

### Rollback Procedure

If rollback is needed:

1. Follow the rollback procedure in [deployment.md](./deployment.md#rollback-procedure)
2. Create GitHub issue documenting the problem
3. Fix the issue in a new branch
4. Test thoroughly before re-deploying

## Post-Verification Actions

After successful verification:

- [ ] **Update deployment log:** Note successful deployment in team chat/docs
- [ ] **Monitor for issues:** Check for user reports in first 24 hours
- [ ] **Review analytics:** Check usage patterns (if analytics configured)
- [ ] **Archive old backup:** Remove previous deployment backup after 30 days

## Automated Monitoring

Consider setting up automated monitoring:

- [ ] **Uptime monitoring:** Use service like UptimeRobot or Pingdom
- [ ] **Error tracking:** Set up Sentry or similar for JavaScript errors
- [ ] **Performance monitoring:** Use Google PageSpeed Insights API
- [ ] **SSL certificate monitoring:** Alert before certificate expires
- [ ] **GitHub Actions notifications:** Enable Slack/email alerts for failed deployments

## Contact Information

**If deployment issues occur:**
- **DevOps Engineer:** [Contact info]
- **Team Lead:** [Contact info]
- **On-Call Support:** [Contact info]

**Escalation Path:**
1. Check GitHub Actions logs
2. Review [deployment.md](./deployment.md) troubleshooting section
3. Contact DevOps engineer
4. If unavailable, follow manual rollback procedure
5. Create incident report

## Revision History

| Date | Deployed By | Changes | Issues Found |
|------|-------------|---------|--------------|
| YYYY-MM-DD | Name | Initial deployment | None |

---

**Last Updated:** 2026-02-08
**Document Owner:** DevOps Team
**Review Frequency:** Quarterly or after major changes
