# Security

This is a developer trial, not a hardened file-processing boundary. Process only files you trust while worker isolation is unfinished.

No account, telemetry, file upload or AI service is implemented. Version checks contact the fixed public GitHub releases endpoint without file contents or credentials. Normal logging is off. `OPEN_TANGERINE_DEBUG=1` opts into local diagnostic logs which may contain filenames; do not publish them without review.

Conversion staging never deletes an existing destination. Native image input has file-size and pixel limits. External processes receive argument arrays and have bounded captured output. Archive conversion is disabled pending safe extraction. Original files are retained by conversion workflows.

Known release gates: sandboxed workers, hard CPU/memory/time/output limits, metadata and redaction verification, SVG external-resource analysis, archive traversal/link/bomb tests, concurrency-safe publication across every tool, malicious parser corpus, cancellation/process cleanup and code signing/notarization. File extensions are not a trust boundary.

To report a vulnerability, use GitHub private vulnerability reporting if enabled; otherwise open a non-sensitive issue asking for a private contact. Do not post private files, secrets, or a working exploit publicly. Do not claim a security audit based on the current regression tests.

## Windows/Linux edition

`Desktop/` is based on OG Converter. On Windows it installs low-level keyboard and mouse hooks to detect the drag-and-tap gesture, and reads the dragged item from File Explorer or a code editor through shell automation and accessibility APIs; it does not record typed text. Conversions run in-process or through external programs that are already installed (FFmpeg, Microsoft Office or LibreOffice, Edge or another Chromium browser, 7-Zip, WinRAR). Archive extraction and SVG, HTML and Markdown rendering are enabled, so only open files you trust. Optional tools are installed through winget, and Guetzli is downloaded with a pinned SHA-256 check, only when you click. Updates are checked only on request and verified against the release `.sha256` file, which detects corruption but is not a publisher signature. The app is unsigned and not sandboxed, and it runs with your user permissions.
