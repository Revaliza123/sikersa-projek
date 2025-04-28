import React from "react"

export default function CircleArrowIcon({ width = 14 }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 14 14"
        fill="none">
        <circle cx="7" cy="7" r="7" transform="rotate(90 7 7)" fill="#0AB39C" />
        <path
          d="M5.38459 3.76923L8.61536 7L5.38459 10.2308"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
