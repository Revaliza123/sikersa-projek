import { isArray } from "lodash"
import React, { createContext, useContext, useMemo } from "react"

interface IDisableFieldsContext {
  isFieldDisable: (f: string) => boolean
  setDisables: (f: any) => void
  disables: any[]
}

const DisableFieldsContext = createContext<IDisableFieldsContext>({
  isFieldDisable: () => false,
  setDisables: () => void 0,
  disables: [],
})

export function useDisableField() {
  return useContext(DisableFieldsContext)
}

export function DisableFieldsProvider({
  children,
  disables,
  setDisables,
}: any) {
  const isFieldDisable = useMemo(
    () => (fieldName: string) => {
      return isArray(disables) && disables.indexOf(fieldName) > -1
    },
    [disables]
  )

  return (
    <DisableFieldsContext.Provider
      value={{
        isFieldDisable,
        setDisables,
        disables,
      }}>
      {children}
    </DisableFieldsContext.Provider>
  )
}
