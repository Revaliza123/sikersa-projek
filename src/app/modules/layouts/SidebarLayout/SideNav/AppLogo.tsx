import { LazyImage } from "@app/components"
import LogoImage from "@app/components/Logo/LogoImage"
import { DFlex } from "@app/styled/flex.styled"
import { FixedTopSidenav, Logo } from "@app/styled/sidenav.styled"
import { noop } from "lodash"
import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"

interface IAppLogo {
  onChangeVisible?: any
  isVisible?: boolean
  type?: "logo" | "logo-text"
}
function AppLogo({
  onChangeVisible = noop,
  isVisible = false,
  type = "logo-text",
}: IAppLogo) {
  return (
    <FixedTopSidenav>
      <Logo className="logo">
        <LogoContainer>
          {type == "logo-text" && <LogoImage width="140"></LogoImage>}
          {type == "logo" && (
            <LazyImage src="/static/logo-icon-2.svg" width="100%"></LazyImage>
          )}
          <Button
            onClick={() => onChangeVisible(isVisible)}
            type="button"
            className="d-block d-sm-none ms-auto px-2 py-0 no-outline rounded-circle"
            variant=""
            size="lg"
            style={{
              height: "28px",
              position: "absolute",
              right: "-1rem",
              top: "1.5rem",
            }}>
            <i className="fal fa-times"></i>
          </Button>
        </LogoContainer>
      </Logo>
    </FixedTopSidenav>
  )
}

const LogoContainer = styled(DFlex)`
  padding: 0.25rem 0;
`
export default React.memo(AppLogo)
