import { createSlice } from "@reduxjs/toolkit"
import { getItem, setItem } from "@app/helper/localstorage.helper"

const initialState = {
  reloadData: null,
  formStepSurat: 0,
  filters: null,
  workspace: getItem("wsp", null),
  workspaceAdm: getItem("wsp_adm", null),
  sdgsRespondent: null,
  sdgsAccount: null,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setWorkspace: (state, { payload }) => {
      setItem("wsp", payload)
      state.workspace = payload
    },
    setWorkspaceAdm: (state, { payload }) => {
      setItem("wsp_adm", payload)
      state.workspaceAdm = payload
    },
    reloadingData: (state, { payload }) => {
      state.reloadData = payload
    },
    setFormStepSurat: (state, { payload }) => {
      state.formStepSurat = payload
    },
    setFilters: (state, { payload }) => {
      state.filters = payload
    },
    setSdgsRespondent: (state, { payload }) => {
      state.sdgsRespondent = payload
    },
    setSdgsAccount: (state, { payload }) => {
      state.sdgsAccount = payload
    },
  },
})

export const {
  setWorkspace,
  reloadingData,
  setFormStepSurat,
  setFilters,
  setSdgsRespondent,
  setSdgsAccount,
  setWorkspaceAdm,
} = appSlice.actions
export default appSlice.reducer
