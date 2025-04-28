import { useLocation, useParams, useSearchParams } from "react-router-dom"

export function useDisableWhenDetailPath() {
  const location = useLocation()
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const isDetailPage =
    location.pathname.match(/(detail)/) || id || searchParams.get("id")
  const isDisabled = isDetailPage ? true : false
  const hideElement = isDisabled ? { style: { display: "none" } } : {}

  return {
    isDisabled,
    hideElement,
  }
}
