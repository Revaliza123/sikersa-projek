import React from "react"
import ButtonB from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

const icons: any = {
  facebook: "fab fa-facebook",
  google: "fab fa-google",
  googlePlus: "fab fa-google-plus",
  print: "fa fa-print",
  show: "fas fa-file-powerpoint",
  search: "fas fa-search",
  update: "fas fa-paper-plane",
  reload: "fas fa-sync-alt",
  delete: "fas fa-trash",
  edit: "fas fa-edit",
  check: "fas fa-check",
  lock: "fas fa-lock",
  add: "fas fa-plus",
  report: "fas fa-file",
}

const Button = ({
  children,
  isLoading,
  icon,
  variant = "primary",
  disabled,
  iconOnly,
  ...otherProps
}: any) => {
  let spinnerTemplate
  let iconTemplate

  if (isLoading) {
    spinnerTemplate = (
      <Spinner
        className="ms-1"
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    )
  }

  if (icon) {
    const iconClass = icons[icon] ? icons[icon] : icon
    iconTemplate = <i className={`${iconClass} ${iconOnly ? "" : "mr-2"}`} />
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <ButtonB {...otherProps} variant={variant} disabled={isLoading || disabled}>
      {iconTemplate}
      {children}
      {spinnerTemplate}
    </ButtonB>
  )
}

export default Button
