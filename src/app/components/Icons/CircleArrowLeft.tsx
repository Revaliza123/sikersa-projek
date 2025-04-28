import React from "react"

export default function CircleArrowLeft({ width = 14 }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 14 14"
        fill="none">
        <circle
          cx="7"
          cy="7"
          r="7"
          transform="rotate(-90 7 7)"
          fill="#0AB39C"
        />
        <path
          d="M8.61538 10.2308L5.38461 7L8.61538 3.76923"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
