# Dropwheel

A local file converter and toolbox for **macOS**, with a **Windows edition** and a **Linux beta**, by **Abdul Razzaq**.
Local processing, no account, no subscription. GPL-3.0-only. Safety limits apply.

**Mac status: 0.1.9 developer trial — ad-hoc signed, not Apple-notarized.** This is an independent project. It builds on [Satsuma](https://github.com/plyght/satsuma), with its MIT attribution preserved. See [limitations](#limitations).

## Windows and Linux edition

Dropwheel for Windows and Linux (**1.5.0**) is a native .NET app. Like the Mac app, it has a **global drag wheel**: drag a file anywhere, tap **Shift** to convert, **Ctrl** for tools or **Alt** for actions, and drop. [Download status and installation](https://newlyconnected.github.io/Dropwheel/#desktop) · [Windows/Linux source and guide](Desktop/README.md) · [Windows/Linux builds](https://github.com/Newlyconnected/Dropwheel/actions/workflows/desktop.yml).

| Platform | Interface | Availability / requirements |
|---|---|---|
| macOS | Native menu bar, global drag wheel and notch | v0.1.9; macOS 26+, Apple silicon |
| Windows | Global drag wheel, tray app and dashboard | 1.5.0; Windows 10 (1809+) / 11 x64; single unsigned `.exe` |
| Linux (beta) | Drag wheel on GNOME, file-manager menus elsewhere, tray and dashboard | 1.5.0 beta; x64, glibc; `.tar.gz` |

Windows and Linux convert images (including HEIC and SVG), video, audio, PDF, Word/Excel/PowerPoint, Markdown, web pages and archives, and add compression, crop and trim, OCR, PDF tools and password protection. Media, Office and some archive features use optional tools (FFmpeg, Office or LibreOffice, 7-Zip, WinRAR), which the app offers to install only when you ask. Everything runs locally. Windows/Linux releases are tagged `desktop-v…`; Mac releases are tagged `v…`. [Features and requirements](Desktop/README.md).

The Mac-specific sections below describe the **Mac app**.

## Download for Mac

**[Website, download and installation guide](https://newlyconnected.github.io/Dropwheel/)** · [GitHub releases](https://github.com/Newlyconnected/Dropwheel/releases)

Download the trial ZIP, quit the previous app, unzip, then drag Dropwheel into Applications and choose Replace if updating. macOS may block this unnotarized trial; see the website for Apple's official per-app opening guidance. Never disable Gatekeeper globally. Check for Updates opens the website with your installed version; the website compares published releases and provides a manual download. No Apple Developer subscription is required for update checks or hosting.

## Install from source

Requires **macOS 26 or later**, Xcode 26 / compatible Command Line Tools, and Git. The build script uses Apple's Swift compiler directly; no package manager or third-party Swift dependencies are required.

```sh
git clone https://github.com/Newlyconnected/Dropwheel.git
cd Dropwheel
./scripts/build-app.sh
open "dist/Dropwheel.app"
```

To keep the app, drag `dist/Dropwheel.app` into your Applications folder in Finder. The local build is ad-hoc signed, not Apple-notarized. We do not recommend disabling Gatekeeper. A signed, notarized release and automatic updates are planned.

Optional: install FFmpeg from your trusted package manager (`brew install ffmpeg` if you already use Homebrew). Settings → Formats shows whether FFmpeg is available. It is already present on the development Mac. We do not bundle or silently download it.

## What changed in 0.1.9

Every menu command now has an icon. Drag hover updates continuously, and internal non-file drags no longer trigger the wheel. In **Settings → General → Excluded applications**, use **Add Application…** to disable drag shortcuts in CorelDRAW or any selected application; remove it to enable them again. Menu-bar file picking remains available. Successful notch results retract automatically after two seconds, including when hovered; failures remain visible so their message can be read.

## What changed in 0.1.8

Appearance settings now offer **Pure black** (default) or **Glass** for the notch. The glass option uses native macOS material and falls back to black with Reduce Transparency. The wheel springs into view and lifts the highlighted segment; Reduce Motion disables these effects. Completed results have **Open** and **Show in Finder** actions. Results stay for eight seconds and remain visible while hovered. Settings show the actual installed version.

See the [DragShift comparison](DRAGSHIFT_COMPARISON.md).

## What changed in 0.1.7

The notch panel now has an explicit solid sRGB black backing without the gray border. It expands from the physical notch width and top edge, and retracts into it on dismissal. Reopening interrupts dismissal safely; Reduce Motion uses immediate transitions. Includes all 0.1.6 conversion repairs.

## What changed in 0.1.6

WebP conversion now has a built-in lossless fallback when the installed FFmpeg lacks `libwebp`. AVIF and Ogg choose available encoders. Batch jobs reserve distinct filenames across overlapping requests and report unsupported inputs individually. PDF/DOCX page order, precise video trimming, silent-video operations, audio channels/bleep, PNG compression, image rotation, framing and metadata handling have regression fixes. [Test coverage and known gaps](docs/BUILD-STATUS.md).

The lossless WebP fallback prioritizes compatibility, produces larger files, and does not use the lossy quality slider. It supports up to 16,384 pixels per side and keeps outputs within the app's 100 MB input limit; larger images need a compressed WebP encoder or resizing. Audio/video still require a suitable FFmpeg build for many operations. Word support is DOCX export, not general DOCX input conversion.

## What changed in 0.1.2

Notch progress is now the default, with an original animated citrus companion, clearer job status and batch scrolling. The menu bar has Check for Updates and marks newer GitHub releases. [Update details](docs/UPDATES.md).

## What changed in 0.1.1

Roomier settings with sidebar navigation, orange selection highlights, contextual headers, animated file artwork, softer transitions and a larger menu-bar icon. Motion responds to macOS Reduce Motion.

## Try it

The app lives in the menu bar; Settings opens on first launch. Enable **Settings → General → Start automatically at login** after moving it to Applications. Future logins start it quietly in the menu bar. If macOS needs approval, the app links to Login Items.

1. Select one or several files in Finder (for example four PNGs), drag them together, hold **Shift**, and drop on JPEG or another common target. Each input produces its own output; a failed file does not stop the others.
2. Hold **Command** while dragging for the tool wheel. **Option + Shift** also works.
3. Hold **Control** while dragging for file actions.
4. If dragging does not trigger a wheel, use the menu-bar **Convert Files…**, **Open Tool for Files…**, or **File Actions…** commands. These also support multiple selections.
5. Converted outputs appear beside the source by default. Change this to Downloads or Desktop in Settings. Existing conversion destinations are never intentionally replaced.

Start with copies of ordinary files. Try PNG → JPEG, crop/resize, create a PDF, merge two PDFs, and copy a SHA-256 checksum.

## Features in this trial

| Area | Included implementation |
|---|---|
| Images | PNG, JPEG, HEIC, TIFF, BMP, WebP, AVIF and SVG input routes; quality settings; edit, crop, resize, rotate, visible redaction, background framing, collage, PDF creation |
| Documents | PDF to text/images/DOCX; text to PDF/images/subtitles; PDF merge, split and page organization |
| Media | Audio/video conversions; trim, split, join, crop, speed, snapshots, visible redaction, audio normalization/channel tools/bleeping/visualizer; many need FFmpeg |
| Subtitles | SRT, VTT and text conversions |
| File actions | Reveal in Finder, copy files, copy paths, duplicate, streaming SHA-256 checksum copied to clipboard |
| Workflow | Batch jobs, cancellation, output naming, floating or notch progress, light/dark appearance, launch at login |

The active format matrix describes **176 potential routes** and **25 tool types**. This is a catalogue, not a claim that every codec, tool or route has passed end-to-end tests. Archive routes are disabled in this trial. Optional codec availability varies by FFmpeg build.

## Limitations

- Not included yet: AI background removal, OCR, translation, universal Office conversion, watch folders, undo history or plugin installer.
- Background framing adds a background; it does not remove the existing one.
- Archive conversion is intentionally disabled until bounded extraction, traversal/link defenses and isolation are implemented.
- Native image loading is limited to 100 MB / 40 megapixels. Animated/multipage image behavior needs further work; use single-frame images for this trial.
- This is not a security-certified sanitizer. Metadata editing and visible redaction should not be relied on to anonymize sensitive documents. Review exported files.
- Heavy native operations can temporarily block the interface. Cancellation is best-effort for external processes. Worker isolation and timeouts are release gates.
- No App Sandbox, notarization, automatic updates, Intel-specific verification or complete accessibility audit yet.
- No AI service is implemented, so there is no API key or usage charge. Update checks contact GitHub; file processing stays local. Future AI integrations must be opt-in and bring-your-own-key.

## Development

```sh
./scripts/test.sh
./scripts/build-app.sh
```

- `NativeApp/Sources/`: shipping trial implementation (SwiftUI/AppKit, ImageIO, PDFKit, AVFoundation).
- `NativeApp/Tests/`: inherited deterministic tests and real conversion regression tests.
- `scripts/`: reproducible compiler, test and packaging entry points.
- `Desktop/`: Windows app and Linux beta (.NET); see [Desktop/README.md](Desktop/README.md).

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), [build status](docs/BUILD-STATUS.md), and [third-party notices](THIRD_PARTY_NOTICES.md).

## License and attribution

Dropwheel © 2026 Abdul Razzaq, licensed under **GPL-3.0-only**. Copyright notices for the Windows/Linux edition are in [Desktop/LICENSE](Desktop/LICENSE) and [NOTICE](NOTICE). See [LICENSE](LICENSE). Commercial use and sale are permitted under that license; distribution of covered derivatives requires corresponding source and the GPL terms. Upstream Satsuma code © 2026 plyght remains available under its original MIT terms, reproduced in [NativeApp/LICENSE](NativeApp/LICENSE). Contributors retain copyright in their contributions. The license does not grant rights to company names or logos.
