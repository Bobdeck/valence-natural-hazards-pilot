# Deployment routing

## Canonical production target

- Vercel project: `valence-natural-hazards-pilot`
- Production domain: https://valence-natural-hazards-pilot.vercel.app
- Source repository: https://github.com/Bobdeck/valence-natural-hazards-pilot
- Production branch: `main`

## Standard workflow

1. Make ongoing dashboard changes in this repository.
2. Use a feature branch and pull request when review or a preview deployment is useful.
3. Merge or push the verified change to `main`.
4. Let the existing GitHub-to-Vercel connection create the production deployment automatically.
5. Verify the deployment is Ready, the canonical production domain still targets it, and the changed behaviour works live.

Do not create a replacement Vercel project or domain for routine updates. Do not use ZIP uploads, Drop, or a manual `vercel deploy` as the normal development path. Browser or Vercel CLI actions are recovery routes only when the Git integration is unavailable; connector/plugin installation is a last resort.

Never commit secrets. Keep deployment configuration in `vercel.json` and store environment-specific secrets in the existing Vercel project settings.
