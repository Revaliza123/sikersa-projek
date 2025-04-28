import CogIcon from "@app/components/Icons/CogIcon"
import SignoutIcon from "@app/components/Icons/SignoutIcon"
import UserIcon from "@app/components/Icons/UserIcon"
import LazyImage from "@app/components/LazyLoad/LazyImage"
import { setWorkspace } from "@app/store/reducers/app"
import { logoutUser } from "@app/store/reducers/auth"
import { setMenuStyle } from "@app/store/reducers/ui"
import { Icon } from "@app/styled/icon.styled"
import React from "react"
import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function AvatarDropdown() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { workspace } = useSelector((state: any) => state.app)
  const { loggedInUser } = useSelector((state: any) => state.auth)
  const { menuStyle } = useSelector((state: any) => state.ui)

  /** HANDLE LOGOUT */
  const logoutProcessing = (event: any) => {
    event.preventDefault()
    // reset user
    dispatch(logoutUser())

    // reset workspace
    dispatch(setWorkspace(null))

    window.location.href = `/${workspace?.prefixPath}/signin`
  }

  const navigateToSetting = () => {
    navigate(`/${workspace?.alias}/administrasi/pengaturan/aplikasi`)
  }

  /** HANDLE LOGOUT */
  const changeMenuStyle = () => {
    const ms = menuStyle == "v2" ? "v1" : "v2"
    dispatch(setMenuStyle(ms))
  }

  return (
    <>
      <DropdownImage
        data-tip="Profil"
        className="hide-toogle mmenu hide-focus ms-2">
        <Dropdown.Toggle
          className="p-0 bg-transparent border-0 no-outline"
          variant="">
          <div className="align-items-center d-flex py-2">
            <LazyImage
              src={`${process.env.CDN}${loggedInUser?.avatar}`}
              defaultImage={"/static/avatar.svg"}
              alt={loggedInUser?.fullname}
              className="avatar-img image-circle bg-white"
              style={{ width: "2.75rem", height: "2.75rem" }}
            />
          </div>
        </Dropdown.Toggle>
        <DropdownMenu className="transform-right animate__animated animate__zoomIn animate__faster">
          <Link
            to={`${workspace?.prefixPath ? `/${workspace?.prefixPath}` : ""}/account`}
            className="dropdown-item">
            <Icon>
              <UserIcon />{" "}
            </Icon>{" "}
            <span className="text-capitalize">{loggedInUser?.fullname || "Account"}</span>
          </Link>

          {/* <Dropdown.Item className='pb-0'>
            Settings
          </Dropdown.Item> */}
          <Link
            to={`${workspace?.prefixPath ? `/${workspace?.prefixPath}` : ""}/administrasi/pengaturan/aplikasi`}
            className="dropdown-item">
            <Icon>
              <CogIcon width={20} />{" "}
            </Icon>{" "}
            <span className="text-capitalize">Pengaturan</span>
          </Link>

          {/* <Dropdown.Item onClick={changeMenuStyle}>
            <Icon>
              <MenuBarIcon />{" "}
            </Icon>{" "}
            {menuStyle == "v1" ? "Simple Menu" : "Advance Menu"}
          </Dropdown.Item> */}

          <hr className="my-2" />
          <a
            onClick={logoutProcessing}
            className="dropdown-item cursor-pointer">
            <Icon>
              <SignoutIcon />
            </Icon>{" "}
            Sign Out
          </a>
        </DropdownMenu>
      </DropdownImage>
    </>
  )
}

const DropdownMenu = styled(Dropdown.Menu)`
  margin-top: 1rem;
`

const DropdownImage = styled(Dropdown)``
