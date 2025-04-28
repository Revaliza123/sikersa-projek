import React, { JSX } from "react"
import { Navigate } from "react-router-dom"

import { getItem } from "@app/helper/localstorage.helper"
import moment from "moment"
import { useSelector } from "react-redux"

export const AuthCheck = (): any => {
  let auth = false
  const userLoggedIn = getItem("credentials")

  if (userLoggedIn) {
    const prevAccepted = getItem("accepted")
    const privileges: any = getItem("priv")

    const expirationDuration =
      1000 * 60 * 60 * (prevAccepted?.remember_me ? 24 * 7 : 24 * 3) // 1 days default if remember 3 weeks
    const currentTime: any = moment().valueOf()
    const notAccepted = prevAccepted?.time == undefined
    const prevAcceptedExpired =
      prevAccepted?.time != undefined &&
      currentTime - prevAccepted?.time > expirationDuration

    if (
      notAccepted ||
      prevAcceptedExpired ||
      (privileges?.level != 10 && privileges?.name == "User")
    ) {
      auth = false
      localStorage.clear()
    } else {
      auth = true
    }
  }
  return auth
}

interface Props {
  children: JSX.Element
  path?: string
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
  const { workspace } = useSelector((state: any) => state.app)

  const isAuthenticated = AuthCheck() // get from state
  const userHasRequiredRole = true // get from state loggedin user

  if (isAuthenticated && userHasRequiredRole) {
    return children
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <p className="text-danger">Access Denied</p>
  }

  return (
    <Navigate
      to={
        workspace?.prefixPath ? `/${workspace?.prefixPath}/signin` : "/signin"
      }
    />
  )
}

export default ProtectedRoutes
