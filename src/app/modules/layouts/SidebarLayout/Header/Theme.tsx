import React from "react"
import MonthIcon from "@app/components/Icons/MonthIcon"
import styled from "styled-components"

const SwithTheme = styled.div`
  color: "var(--black)";
`

function Theme() {
  return (
    <SwithTheme className="cursor-pointer">
      <MonthIcon />
    </SwithTheme>
  )
}

export default Theme
