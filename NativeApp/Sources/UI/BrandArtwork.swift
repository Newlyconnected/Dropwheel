import AppKit

/// Dropwheel mark: a wheel of three slices (Convert, Tools, Actions) around a drop.
/// Shared by the app icon, settings artwork and the template menu-bar icon.
enum BrandArtwork {
    static let indigo = NSColor(srgbRed: 0.31, green: 0.275, blue: 0.898, alpha: 1)

    static func image(size: CGFloat, template: Bool = false) -> NSImage {
        let image = NSImage(size: NSSize(width: size, height: size), flipped: false) { rect in
            let s = rect.width / 100
            if !template {
                indigo.setFill()
                NSBezierPath(roundedRect: rect.insetBy(dx: s * 4, dy: s * 4), xRadius: s * 22, yRadius: s * 22).fill()
            }
            let ink = template ? NSColor.labelColor : NSColor.white
            // The menu-bar version fills its whole square; the app icon leaves room for the tile.
            let radius = s * (template ? 38 : 30), width = s * (template ? 11 : 8)
            let center = NSPoint(x: s * 50, y: s * 50)
            // Each gap must clear the two round caps, so it spans the line width plus a visible space.
            let gap = (width + s * 6) / radius * 180 / .pi
            ink.setStroke()
            for middle in [90.0, 210.0, 330.0] {
                let slice = NSBezierPath()
                slice.appendArc(withCenter: center, radius: radius, startAngle: middle - 60 + gap / 2, endAngle: middle + 60 - gap / 2)
                slice.lineWidth = width
                slice.lineCapStyle = .round
                slice.stroke()
            }
            ink.setFill()
            drop(scale: s * (template ? 1.25 : 1), center: center).fill()
            return true
        }
        image.isTemplate = template
        return image
    }

    /// A drop 18 units wide and 28 tall at scale 1, centred on the wheel.
    private static func drop(scale k: CGFloat, center c: NSPoint) -> NSBezierPath {
        func p(_ x: CGFloat, _ y: CGFloat) -> NSPoint { NSPoint(x: c.x + x * k, y: c.y + y * k) }
        let path = NSBezierPath()
        path.move(to: p(0, 14))
        path.curve(to: p(-9, -3), controlPoint1: p(0, 14), controlPoint2: p(-9, 3))
        path.appendArc(withCenter: p(0, -3), radius: 9 * k, startAngle: 180, endAngle: 360)
        path.curve(to: p(0, 14), controlPoint1: p(9, 3), controlPoint2: p(0, 14))
        path.close()
        return path
    }
}
