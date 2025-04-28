import React from "react"

export default function DraggableIcon({ width = 16, height = 16 }: any) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="2" r="1.5" fill="#B4BAC4" />
      <circle cx="1.5" cy="8" r="1.5" fill="#B4BAC4" />
      <circle cx="1.5" cy="14" r="1.5" fill="#B4BAC4" />
      <circle cx="6.5" cy="2" r="1.5" fill="#B4BAC4" />
      <circle cx="6.5" cy="8" r="1.5" fill="#B4BAC4" />
      <circle cx="6.5" cy="14" r="1.5" fill="#B4BAC4" />
    </svg>
  )
}
