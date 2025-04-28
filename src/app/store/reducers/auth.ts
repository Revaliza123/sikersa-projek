import { getItem, setItem } from "@app/helper/localstorage.helper"
import { createSlice } from "@reduxjs/toolkit"
import moment from "moment"

const me = getItem("me")

const initialState = {
  isLoggedIn: !!getItem("credentials"),
  credentials: getItem("credentials"),
  privileges: getItem("priv"),
  loggedInUser: me,
  roleUser: me?.user_role_id?.role_id_app,
  power: getItem("power"),
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      setItem("credentials", payload)
      state.isLoggedIn = true
      state.credentials = payload
    },
    setPrivileges: (state, { payload }) => {
      setItem("priv", payload)
      console.log("priv", payload)
      state.privileges = payload
    },
    refreshToken: (state, { payload }) => {
      setItem("credentials", payload)
      state.isLoggedIn = true
      state.credentials = payload
    },
    setLoggedInUserDetail: (state, { payload }) => {
      setItem("me", payload)
      state.loggedInUser = payload
    },
    setSessionLifetime: (_state, { payload }) => {
      setItem("accepted", {
        remember_me: payload.rememberMe,
        time: moment().valueOf(),
      })
    },
    logoutUser: (state) => {
      localStorage.removeItem("credentials")
      localStorage.removeItem("accepted")
      localStorage.removeItem("power")
      localStorage.removeItem("me")
      localStorage.removeItem("layout")
      localStorage.removeItem("rgroup")
      localStorage.removeItem("active_roject")
      localStorage.removeItem("view_type")
      localStorage.removeItem("theme_mode")
      localStorage.removeItem("priv")
      localStorage.removeItem("filter_monitoring_type")
      localStorage.clear()

      state.loggedInUser = {}
      state.isLoggedIn = false
      state.privileges = null
      state.credentials = null
      state.power = null
      state.roleUser = null
    },
    loadUser: (state, { payload }) => {
      state.loggedInUser = payload
    },
  },
})

export const {
  loginUser,
  setLoggedInUserDetail,
  logoutUser,
  loadUser,
  setSessionLifetime,
  refreshToken,
  setPrivileges,
} = authSlice.actions

export default authSlice.reducer
