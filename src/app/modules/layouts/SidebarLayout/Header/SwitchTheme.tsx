import CogIcon from "@app/components/Icons/CogIcon"
import DropletIcon from "@app/components/Icons/DropletIcon"
import { setThemeColor } from "@app/store/reducers/ui"
import {
  CardHeaderMenu,
  DescMenu,
  DropdownImage,
  DropdownMenu,
  LinkMenuClick,
  TitleMenu,
} from "@app/styled/card-menu.styled"
import { DFlex } from "@app/styled/flex.styled"
import { Icon } from "@app/styled/icon.styled"
import React from "react"
import { Card, Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SwitchTheme() {
  const { workspace } = useSelector((state: any) => state.app)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const changeColorScheme = (color: string) => {
    dispatch(setThemeColor(color))
  }

  const handleClickSetting = () => {
    navigate(`/${workspace?.alias}/administrasi/pengaturan/aplikasi`)
  }

  return (
    <Wrapper>
      <DropdownImage
        data-tip="Pengaturan"
        className="hide-toogle mmenu hide-focus ms-1">
        <Dropdown.Toggle
          className="p-0 bg-transparent border-0 no-outline"
          variant=""
          onClick={handleClickSetting}>
          <div className="align-items-center d-flex py-2">
            <Icon>
              {" "}
              <CogIcon />{" "}
            </Icon>
          </div>
        </Dropdown.Toggle>

        <DropdownMenu className="transform-right animate__animated animate__zoomIn animate__faster py-0 mt-1">
          <Card className="border-0" hidden>
            <CardHeaderMenu>Color Scheme</CardHeaderMenu>
            <Card.Body className="p-0">
              <DFlex className="border-top">
                <LinkMenuClick
                  key="theme"
                  className="dropdown-item p-0 border-end"
                  onClick={() => changeColorScheme("sidesa")}>
                  <div style={{ color: "green" }}>
                    <DropletIcon />
                  </div>
                  <TitleMenu className="mt-1">Default</TitleMenu>
                  <DescMenu>Default color scheme</DescMenu>
                </LinkMenuClick>

                <LinkMenuClick
                  className="dropdown-item p-0"
                  onClick={() => changeColorScheme("sidesa-merah")}>
                  <div style={{ color: "red" }}>
                    <DropletIcon />
                  </div>
                  <TitleMenu className="mt-1">Red</TitleMenu>
                  <DescMenu>Red color scheme</DescMenu>
                </LinkMenuClick>
              </DFlex>

              <DFlex className="border-top">
                <LinkMenuClick
                  className="dropdown-item p-0 border-end"
                  onClick={() => changeColorScheme("sidesa-biru")}>
                  <div style={{ color: "blue" }}>
                    <DropletIcon />
                  </div>
                  <TitleMenu className="mt-1">Blue</TitleMenu>
                  <DescMenu>Blue color scheme</DescMenu>
                </LinkMenuClick>

                <LinkMenuClick
                  className="dropdown-item p-0"
                  onClick={() => changeColorScheme("sidesa-oren")}>
                  <div style={{ color: "#F0BB62" }}>
                    <DropletIcon />
                  </div>
                  <TitleMenu className="mt-1">Orange</TitleMenu>
                  <DescMenu>Orange color scheme</DescMenu>
                </LinkMenuClick>
              </DFlex>
            </Card.Body>
          </Card>
        </DropdownMenu>
      </DropdownImage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: block;
  }
`
