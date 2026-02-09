# Deployment Documentation

This document describes how to configure and deploy the IJC Production Manual using GitHub Actions.

## Deployment Overview

The manual is automatically deployed to the production server whenever changes are pushed to the `main` branch. The deployment process:

1. Builds the VitePress static site
2. Verifies the build output
3. Deploys to the production server via rsync over SSH

**Production URL:** https://remote-support.jbc.dev/iglesia-jerusalem/manual/

**Deployment Target:** `admin@10.100.0.34:/var/www/remote-support/iglesia-jerusalem/manual/`

## GitHub Secrets Configuration

The deployment workflow requires three GitHub secrets to be configured. These secrets are used to authenticate and connect to the production server.

### Required Secrets

Navigate to your GitHub repository settings: **Settings → Secrets and variables → Actions → New repository secret**

#### 1. `DEPLOY_SSH_KEY`

The SSH private key used to authenticate with the production server.

**How to obtain:**
```bash
# On your local machine or the server, generate a dedicated deployment key
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/ijc-manual-deploy

# This creates two files:
# - ijc-manual-deploy (private key) - Add this to GitHub secrets
# - ijc-manual-deploy.pub (public key) - Add this to the server
```

**Add public key to the server:**
```bash
# Copy the public key to the production server
ssh admin@10.100.0.34 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys" < ~/.ssh/ijc-manual-deploy.pub

# Set correct permissions
ssh admin@10.100.0.34 "chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys"
```

**Add private key to GitHub:**
1. Copy the entire contents of `ijc-manual-deploy` (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`)
2. In GitHub: Settings → Secrets → New repository secret
3. Name: `DEPLOY_SSH_KEY`
4. Value: Paste the private key content
5. Click **Add secret**

#### 2. `DEPLOY_USER`

The SSH username for connecting to the production server.

**Value:** `admin`

#### 3. `DEPLOY_HOST`

The IP address or hostname of the production server.

**Value:** `10.100.0.34`

## Manual Deployment

While the GitHub Actions workflow handles automatic deployments, you can also deploy manually if needed.

### Local Manual Deployment

```bash
# Build the site
npm run build

# Deploy via rsync (requires SSH key)
rsync -avz --delete \
  -e "ssh -i ~/.ssh/ijc-manual-deploy" \
  dist/ \
  admin@10.100.0.34:/var/www/remote-support/iglesia-jerusalem/manual/
```

### GitHub Manual Deployment

You can trigger a manual deployment from GitHub:

1. Go to **Actions** tab in the repository
2. Select **Deploy Manual** workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Deployment Verification

After each deployment, verify the manual is working correctly:

1. **Access the manual:** https://remote-support.jbc.dev/iglesia-jerusalem/manual/
2. **Check authentication:**
   - From Tailscale network: Should auto-authenticate
   - From external network: Should prompt for password
3. **Verify functionality:**
   - Navigation works
   - Search functions correctly
   - System status page loads live data
   - All assets (images, CSS, JS) load properly

See [deployment-checklist.md](./deployment-checklist.md) for a complete verification checklist.

## Rollback Procedure

If a deployment causes issues, you can quickly rollback:

```bash
# SSH into the production server
ssh admin@10.100.0.34

# Backup the broken deployment
sudo mv /var/www/remote-support/iglesia-jerusalem/manual \
        /var/www/remote-support/iglesia-jerusalem/manual-broken-$(date +%Y%m%d-%H%M%S)

# Deploy a previous working commit
# (Replace COMMIT_SHA with a known good commit)
git clone https://github.com/jbctechsolutions/iglesia-jerusalem-manual.git /tmp/rollback
cd /tmp/rollback
git checkout COMMIT_SHA
npm ci
npm run build
sudo rsync -avz --delete dist/ /var/www/remote-support/iglesia-jerusalem/manual/
```

## Troubleshooting

### Build Fails

**Symptom:** GitHub Actions workflow fails at "Build VitePress site" step

**Solutions:**
1. Check for TypeScript errors: `npm run build` locally
2. Verify all dependencies are installed: `npm ci`
3. Check VitePress configuration in `.vitepress/config.ts`
4. Review build logs in GitHub Actions

### Deployment Fails

**Symptom:** GitHub Actions workflow fails at "Deploy to server" step

**Possible causes:**
1. **SSH key issues:** Verify `DEPLOY_SSH_KEY` secret is correctly configured
2. **Server unreachable:** Check that `10.100.0.34` is accessible from GitHub Actions runners
3. **Permission issues:** Verify the deploy user has write access to `/var/www/remote-support/iglesia-jerusalem/manual/`
4. **Disk space:** Check server has sufficient disk space

**Debug steps:**
```bash
# Test SSH connection from your machine
ssh -i ~/.ssh/ijc-manual-deploy admin@10.100.0.34 "ls -la /var/www/remote-support/iglesia-jerusalem/manual/"

# Check disk space on server
ssh admin@10.100.0.34 "df -h"

# Verify directory permissions
ssh admin@10.100.0.34 "ls -ld /var/www/remote-support/iglesia-jerusalem/manual/"
```

### Site Not Loading After Deployment

**Symptom:** Deployment succeeds but site doesn't load or shows 404

**Check:**
1. **Base path configuration:** Verify `base: '/iglesia-jerusalem/manual/'` in `.vitepress/config.ts`
2. **Caddy configuration:** Ensure reverse proxy is configured correctly
3. **File permissions:** Check that deployed files are readable by the web server

```bash
# Check deployed files
ssh admin@10.100.0.34 "ls -la /var/www/remote-support/iglesia-jerusalem/manual/"

# Check Caddy configuration
ssh admin@10.100.0.34 "sudo cat /etc/caddy/Caddyfile | grep -A 10 iglesia-jerusalem"

# Restart Caddy if needed
ssh admin@10.100.0.34 "sudo systemctl restart caddy"
```

## Security Considerations

1. **SSH Key Management:**
   - Use a dedicated SSH key pair for deployments (not your personal key)
   - Never commit private keys to the repository
   - Rotate keys periodically (every 6-12 months)
   - Limit key permissions to only what's needed

2. **GitHub Secrets:**
   - Only repository administrators should have access to secrets
   - Secrets are encrypted at rest by GitHub
   - Secret values are never exposed in logs

3. **Deployment User:**
   - The `admin` user should have minimal privileges
   - Consider using a dedicated deployment user with restricted permissions
   - Deployment user should only have write access to the manual directory

4. **Network Security:**
   - Deployment happens over SSH (encrypted connection)
   - Server is only accessible via Tailscale or local network
   - Manual is protected by Caddy authentication

## Maintenance

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Test the build
npm run build
npm run preview

# Commit and push (triggers deployment)
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push
```

### Monitoring Deployments

1. **GitHub Actions:** Monitor workflow runs in the Actions tab
2. **Build times:** Typical build should complete in 1-2 minutes
3. **Deployment frequency:** Review deployment history to track changes
4. **Failed deployments:** Set up GitHub notifications for workflow failures

## Additional Resources

- [VitePress Deployment Guide](https://vitepress.dev/guide/deploy)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [rsync Manual](https://linux.die.net/man/1/rsync)
- [SSH Key Management Best Practices](https://www.ssh.com/academy/ssh/keygen)
