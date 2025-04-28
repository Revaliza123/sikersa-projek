import React from "react"

interface ITopBarLoader {
  isLoading?: any
  className?: string
}
export default function TopBarLoader({
  isLoading = 0,
  className = "",
}: ITopBarLoader) {
  return (
    <>
      {isLoading > 0 && (
        <div
          className={`top-bar-loader${className ? " " + className : ""}`}></div>
      )}
    </>
  )
}
