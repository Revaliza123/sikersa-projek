import { createStore, combineReducers } from "redux"

import notificationReducer from "./notification/notification.reducer"

import { authSlice } from "@app/store/reducers/auth"
import { authSdgsSlice } from "@app/store/reducers/auth_sdgs"
import { uiSlice } from "@app/store/reducers/ui"
import { appSlice } from "./reducers/app"

const reducers = combineReducers({
  notifications: notificationReducer,
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
  app: appSlice.reducer,
  auth_sdgs: authSdgsSlice.reducer,
})

export default createStore(reducers)
