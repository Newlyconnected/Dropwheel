# Updates and releases

Mac and Windows/Linux releases are published from this repository with separate tags:

| Edition | Tag | Workflow | Marked "latest" |
|---|---|---|---|
| macOS | `v0.1.9` | `release.yml`: runs when `scripts/build-app.sh` changes on `main`, or from the Actions tab | Yes |
| Windows and Linux | `desktop-v1.5.0` | `desktop.yml`: runs on a `desktop-v*` tag, or from the Actions tab with "Publish a GitHub release" ticked | No |

Published versions are never overwritten.

## Mac

The menu-bar **Check for Updates** command opens `https://newlyconnected.github.io/Dropwheel/?version=<installed>#download`. The website compares that version with the latest published Mac release and offers a manual download. Automatic background checks contact GitHub at most once a day and send no filenames, file content or account credentials.

This is a notification and download flow, not automatic installation. The trial is ad-hoc signed and not Apple-notarized, so macOS may block it. Do not disable macOS security to install an update. A signed update channel, notarized builds and rollback checks are needed before in-app replacement.

## Windows and Linux

**Settings › System › Check for updates** contacts GitHub only when you ask. It reads the newest release tagged `desktop-v…` and ignores the Mac releases. "What's new" comes from that version's section in [Desktop/CHANGELOG.md](../Desktop/CHANGELOG.md).

On Windows, the single-file exe downloads the new version beside itself, checks it against the release's `.sha256` file, swaps the files and restarts. The checksum detects corruption; it is not a publisher signature. Linux copies link to the release page instead of updating in place.
