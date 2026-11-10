import { execSync } from 'node:child_process';

/**
 * When the site last changed: the date of the latest commit, read at build time.
 * Re-running a deploy without new commits leaves it unchanged. Falls back to the build date outside a git checkout.
 */
function lastCommitDate(): Date {
  try {
    const iso = execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    const date = new Date(iso);
    if (!Number.isNaN(date.getTime())) return date;
  } catch {
    // No git available, e.g. building from a downloaded archive.
  }
  return new Date();
}

export const lastUpdated = lastCommitDate();
