# Changelog

What changed in each release of Dropwheel for Windows and Linux. The release workflow copies a version's section into its
GitHub release, and **Settings › System › Check for updates** shows it as "What's new" before updating.

Before tagging `desktop-vX.Y.Z`, add a `## [X.Y.Z]` section at the top. The release fails if it's missing.

## [1.5.0]

- **First Dropwheel release for Windows and Linux.** Based on OG Converter 1.5.0 by Anandhu Suresh, Mahesh P S and Bijo Prasad,
  renamed to Dropwheel with its own update channel. Settings and tools now live in a `Dropwheel` folder, so settings from an
  OG Converter install are not carried over.
- **Updates**: Check for updates now reads Dropwheel's Windows and Linux releases (tagged `desktop-v…`) and ignores the Mac app's releases.

Earlier history: see the OG Converter changelog at https://github.com/Dr-At0mic/og-converter/blob/main/CHANGELOG.md
