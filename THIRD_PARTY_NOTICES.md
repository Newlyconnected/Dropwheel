# Third-party notices

## Satsuma

Source: https://github.com/plyght/satsuma
Imported revision: 6cb76b78e1932bcdb297be73454ed75d09c252cc
Copyright (c) 2026 plyght. MIT license: `NativeApp/LICENSE`.

The native app is substantially based on Satsuma's Swift implementation. Dropwheel changes include branding, direct compiler build/test scripts, Command and Control workflows, file actions/checksums, safer conversion publication, input limits, opt-in diagnostics, bounded process output, and archive restrictions. Original MIT rights and notice are preserved. The combined distribution and new additions are GPL-3.0-only. No upstream image/logo assets were imported.

## Apple frameworks

AppKit, SwiftUI, ImageIO, PDFKit, AVFoundation, CoreImage, CryptoKit and related system frameworks are provided by macOS. They are not redistributed separately.

## Optional external programs

FFmpeg is located on the user's machine and invoked as a separate executable. It is not bundled. Its build-specific LGPL/GPL and codec obligations must be reviewed before distributing a future bundled binary. macOS command-line utilities are supplied by the operating system.

## DragShift design reference

Source reviewed: https://github.com/llamaboi55/DragShift (18 October 2026).
DragShift's radial-menu motion and completion controls informed the optional glass
notch and result actions in 0.1.8. These are native SwiftUI implementations;
no Python runtime, screenshot-capture renderer or mascot assets were imported.
The upstream MIT notice is retained below for attribution.

MIT License

Copyright (c) 2026 DragShift contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Windows/Linux desktop edition (OG Converter)

Source: https://github.com/Dr-At0mic/og-converter
Imported revision: 1.5.0 (21 October 2026)
Copyright (C) 2026 Anandhu Suresh, with contributions by Mahesh P S and Bijo Prasad. GPL-3.0 license: `Desktop/LICENSE`.

The Windows and Linux edition in `Desktop/` is based on OG Converter. Dropwheel changes include the product name, project and namespace names, application identifiers, update and repository links, and credits. Original copyright and license notices are preserved.

Bundled .NET libraries: SharpZipLib, SharpCompress, ZstdSharp, K4os.Compression.LZ4, PDFsharp 6.2.4 and Konscious Argon2 (MIT), Markdig (BSD-2-Clause), PdfPig (Apache-2.0), System.Security.Cryptography.Pkcs (MIT). The Linux build also uses Avalonia and Tmds.DBus.Protocol (MIT), the Inter font (SIL OFL 1.1) and a subset of Microsoft Fluent UI System Icons (MIT, see `Desktop/src/Dropwheel.Linux/Assets/Fonts/`).

Installed or downloaded only when the user asks: FFmpeg (LGPL/GPL), LibreOffice (MPL), 7-Zip (LGPL), WinRAR (proprietary shareware) and Guetzli (Apache-2.0). These are not redistributed with Dropwheel.
