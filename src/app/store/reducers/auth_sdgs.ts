import { createSlice } from "@reduxjs/toolkit"
import { getItem, setItem } from "@app/helper/localstorage.helper"

const initialState = {
  isLoggedInSdgs: !!getItem("auth_sdgs"),
  loggedInSdgsDetail: getItem("auth_sdgs"),
}

export const authSdgsSlice = createSlice({
  name: "auth_sdgs",
  initialState,
  reducers: {
    setLoggedInSdgsDetail: (state, { payload }) => {
      setItem("auth_sdgs", payload)
      state.isLoggedInSdgs = true
      state.loggedInSdgsDetail = payload
    },
    logoutSdgs: (state) => {
      localStorage.removeItem("auth_sdgs")
      state.isLoggedInSdgs = false
      state.loggedInSdgsDetail = null
    },
  },
})

export const { setLoggedInSdgsDetail, logoutSdgs } = authSdgsSlice.actions

export default authSdgsSlice.reducer
