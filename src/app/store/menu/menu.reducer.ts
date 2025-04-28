import { SetActiveMenu } from "./menu.types"

const initialState: any = { items: [], active: undefined }

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SetActiveMenu:
      return { ...state, active: payload }
    default:
      return state
  }
}
