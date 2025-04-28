import { SetActiveMenu } from "./menu.types"

const setActiveMenu = (index: any) => ({ type: SetActiveMenu, payload: index })

export { setActiveMenu }
