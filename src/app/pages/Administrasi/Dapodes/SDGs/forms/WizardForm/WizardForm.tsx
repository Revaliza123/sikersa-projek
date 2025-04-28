/* eslint-disable @typescript-eslint/no-unused-vars */
import { deleteItem, getItem, setItem } from "@app/helper/localstorage.helper"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { Button } from "react-bootstrap"

type WizardTypes = {
  currentPage: number
  onSubmit: any | null
  initialFormData: any | null
  setCurrentPage: any | null | React.Dispatch<any>
  totalPage: number
  setTotalPage: any | null | React.Dispatch<any>
  formData: any | null
  setFormData: any | null | React.Dispatch<any>
}
const initialWizard = {
  currentPage: 1,
  onSubmit: null,
  initialFormData: {},
  setCurrentPage: null,
  totalPage: 1,
  setTotalPage: null,
  formData: null,
  setFormData: null,
} as WizardTypes

const WizardContext = createContext<WizardTypes>(initialWizard)

const useWizardContext = () => useContext(WizardContext)

export function useWizard() {
  const {
    currentPage,
    onSubmit,
    initialFormData,
    setCurrentPage,
    formData,
    setFormData,
    totalPage,
    setTotalPage,
  } = useWizardContext()
  const nextPage = () => setCurrentPage(currentPage + 1)
  const prevPage = () => setCurrentPage(currentPage - 1)
  const updateFormData = (partialData: any) => {
    console.log("updateformdata", partialData, currentPage, formData)
    const newFormData = { ...formDataMemoized, ...partialData }
    setFormData(newFormData)
    setItem("sdgs", newFormData)
    nextPage()
  }
  const isLastPage = useMemo(
    () => currentPage === totalPage,
    [currentPage, totalPage]
  )
  const handleSubmit = (partialData: any) => {
    const newFormData = { ...formDataMemoized, ...partialData }
    setFormData(newFormData)
    onSubmit(newFormData)
    setItem("sdgs", newFormData)
    // deleteItem('sdgs');
  }

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData)
    }
  }, [])

  const formDataMemoized = useMemo(() => {
    const lastestData = getItem("sdgs") || formData
    if (lastestData) {
      return lastestData
    }
  }, [formData])

  const getCurrentValue = (fieldName: string) => {
    if (formDataMemoized && formDataMemoized[fieldName]) {
      return formDataMemoized[fieldName]
    }
    return null
  }

  return {
    currentPage,
    nextPage,
    prevPage,
    totalPage,
    setTotalPage,
    updateFormData,
    handleSubmit,
    isLastPage,
    formData,
    // formState,
    // updateFormState,
    formDataMemoized,
    getCurrentValue,
  }
}

function WizardForm({ children, currentPage, onSubmit, initialFormData }: any) {
  const [page, setPage] = useState((currentPage as number) || 1)
  const [totalPage, setTotalPage] = useState(1)
  const [formData, setFormData] = useState<any>(initialFormData)

  return (
    <WizardContext.Provider
      value={{
        currentPage: page,
        setCurrentPage: setPage as any,
        totalPage,
        setTotalPage,
        formData,
        setFormData,
        initialFormData,
        onSubmit,
      }}>
      {children}
    </WizardContext.Provider>
  )
}

function WizardPages({ children }: any) {
  const { currentPage, setTotalPage } = useWizard()

  useEffect(() => {
    if (Array.isArray(children)) {
      setTotalPage(children.length)
    }
  }, [children])

  const activePage = useMemo(() => {
    return children[currentPage - 1]
  }, [currentPage, children])

  // const activePage = useMemo(() => {
  //   console.log('activepage', children)
  //   return children.map((child: any, index: number) => {
  //     console.log('childdddddd', child, index, currentPage)
  //     return React.cloneElement(child, {
  //       key: index,
  //       className: currentPage === index ? 'd-block' : 'd-none'
  //     })
  //   })
  // }, [currentPage, children]);

  return activePage
}

function WizardPage({ children }: any) {
  const { updateFormData, handleSubmit } = useWizard()

  if (typeof children === "function") {
    return children({ updateFormData, handleSubmit })
  }

  return children
}

function WizardPageWithNavigation({ children }: any) {
  return (
    <>
      <WizardPage>{children}</WizardPage>
      <WizardNavigation />
    </>
  )
}

function WizardNavigation() {
  const { prevPage, isLastPage } = useWizard()
  return (
    <div className="d-flex justify-content-end">
      <Button onClick={prevPage} type="button" variant="outline-primary">
        Kembali
      </Button>
      <Button
        className={`ms-1 ${!isLastPage ? "d-block" : "d-none"}`}
        type="submit"
        variant="primary">
        Lanjut
      </Button>
      <Button
        className={`ms-1 ${isLastPage ? "d-block" : "d-none"}`}
        type="submit"
        variant="primary">
        Simpan
      </Button>
    </div>
  )
}

WizardForm.Pages = WizardPages
WizardForm.Page = WizardPage
WizardForm.Navigation = WizardNavigation
WizardForm.PageWithNavigation = WizardPageWithNavigation

export { WizardForm }
