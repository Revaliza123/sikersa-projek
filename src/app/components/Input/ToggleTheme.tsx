import React from "react"
import { useSelector } from "react-redux"
import { InputToggleTheme } from "@app/styled/toggle-theme.styled"

interface IToggleTheme {
  onChangeTheme?: any
}

export default function ToggleTheme({ onChangeTheme }: IToggleTheme) {
  const { themeMode } = useSelector((state: any) => state.ui)

  const handleToggleTheme = (e: any) => {
    if (onChangeTheme) {
      onChangeTheme(e)
    }
  }
  return (
    <InputToggleTheme
      className="toggle-theme"
      type="checkbox"
      checked={themeMode == "light"}
      onChange={handleToggleTheme}
    />
  )
}
