import { FontIcon2 } from "@app/components/Icons/FontIcon"
import { setThemeFont } from "@app/store/reducers/ui"
import { nanoid } from "nanoid"
import React, { useEffect } from "react"
import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

export default function FontDropdown() {
  const dispatch = useDispatch()
  const { themeFont } = useSelector((state: any) => state.ui)
  const font = [
    {
      name: "tiny",
    },
    {
      name: "small",
    },
    {
      name: "medium",
    },
    {
      name: "large",
    },
    {
      name: "big",
    },
  ]
  const handleChangeFont = (item: any) => {
    const { name } = item
    dispatch(setThemeFont(name))
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      "theme-fontsize",
      themeFont || "large"
    )
  }, [themeFont])
  return (
    <>
      <Dropdown data-tip="Teks" className="hide-toogle mmenu hide-focus ms-2">
        <Dropdown.Toggle
          className="p-0 bg-transparent border-0 no-outline"
          variant="">
          <div className="align-items-center d-flex py-2">
            <FontIcon2 />
          </div>
        </Dropdown.Toggle>
        <DropdownMenu
          align="end"
          className="transform-right mt-1 animate__animated animate__zoomIn animate__faster">
          {font.map((item: any) => (
            <Dropdown.Item
              className={
                "text-capitalize" + (themeFont == item?.name ? " active" : "")
              }
              onClick={() => handleChangeFont(item)}
              key={nanoid()}>
              {item.name}
            </Dropdown.Item>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

const DropdownMenu = styled(Dropdown.Menu)`
  margin-top: 1rem;
`
