import React from "react"

const SizeLogo = {
  small: "48px",
  medium: "64px",
  large: "100px",
}

const SizeHeadText = {
  small: "0.75rem",
  medium: "1rem",
  large: "1.5rem",
}

export function KominfoPseLogo({
  className = "",
  backdrop = false,
  size = "large",
}: {
  className?: string
  backdrop?: boolean
  size?: "small" | "medium" | "large"
}) {
  const backdropStyle = backdrop
    ? {
        padding: "0.5rem",
        borderRadius: "1rem",
        backgroundColor: "rgba(0,0,0,0.2)",
      }
    : undefined
  const logoSize = SizeLogo[size]
  const headTextSize = SizeHeadText[size]

  return (
    <div className={className} style={backdropStyle}>
      <h6 className="mb-1" style={{ fontSize: headTextSize }}>
        Terdaftar di:
      </h6>
      <img
        width={logoSize}
        src="/static/img/landing-full-page/kominfo.svg"
        alt="kominfo logo"
      />
      <img
        width={logoSize}
        className="ms-2"
        src="/static/img/landing-full-page/barcode-2.svg"
        alt="pse barcode ids desa"
      />
    </div>
  )
}
