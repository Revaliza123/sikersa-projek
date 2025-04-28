import React from "react"

export default function ShiledIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" style={{ fill: "var(--primary-25)" }} />
      <path
        d="M20 30C20 30 28 26 28 20V13L20 10L12 13V20C12 26 20 30 20 30Z"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
