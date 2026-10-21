# Build status

Updated 21 October 2026.

| Edition | Version | Automated checks | Hands-on testing |
|---|---|---|---|
| macOS | 0.1.9 | Builds and passes `./scripts/test.sh` on GitHub's macOS 26 runner (`build.yml`) | Pending for the Dropwheel name |
| Windows | 1.5.0 | Self-contained `win-x64` exe builds on GitHub's Windows runner (`desktop.yml`) | Pending |
| Linux (beta) | 1.5.0 | Self-contained `linux-x64` build on GitHub's Ubuntu runner (`desktop.yml`) | Pending |

## Mac test suites

`./scripts/test.sh` compiles once, then runs each suite in a separate process:

| Suite | Coverage |
|---|---|
| Deterministic | Target matrix, names, parsing, tools and timestamp handling |
| Integration | Real JPEG/TIFF/PDF output; failure then success without restart; collision and original preservation; malformed input; disabled archive guard |
| Interaction | Update detection, version comparison and website handoff; companion state transitions |
| Image conversion | Routes among PNG/JPEG/TIFF/BMP/WebP/AVIF and lossless WebP RGBA checks |
| Documents | TXT/PDF/image/DOCX/subtitle outputs; PDF split, merge, reorder, rotate and compression page integrity |
| Batch | Four-file conversion, overlapping output reservation, mixed targets, individual corrupt/unknown failures |
| Image tools | Rotation/flip round trips, resize/crop, frame, collage layouts, metadata deletion, checksum and duplication |
| Media | Audio/video targets, trim/split/crop/speed/join/snapshot/redaction, channels, bleep, loudness, compression and visualizers |

The website checks (`scripts/test-site.cjs`, `test-desktop-site.cjs`, `test-demo.cjs`) run in the same workflow.

## Windows and Linux checks

The Windows and Linux edition has a built-in self-test suite (`dropwheel --test`, see [Desktop/README.md](../Desktop/README.md)). It is not run in CI yet; run it on a Windows PC or Linux machine before publishing a release.

## Explicit limits

- Mac: macOS 26+ on Apple silicon only. Intel Macs and macOS 15 are not supported yet.
- Mac: ad-hoc signed, not Apple-notarized. Updates are a manual download from the website.
- Mac: Word support is DOCX output, not Word input. PDF-to-DOCX has no OCR or exact layout. Archive conversion is disabled.
- Mac: compression cannot guarantee smaller output. The built-in WebP fallback is lossless and ignores lossy quality.
- Windows and Linux: unsigned builds; Windows SmartScreen shows an unknown-publisher warning.
- All editions: SVG, malformed-file fuzzing, very large batches, accessibility and every codec/profile combination are not exhaustively verified.

Tests establish specific behavior on their fixtures; they are not a promise that arbitrary files can never fail.
