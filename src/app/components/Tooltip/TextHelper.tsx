import React from "react"

type Props = {
  message?: string
  placement?: any | "auto"
} /* could also use interface */

const TextHelper = ({ message = "Wajib diisi", placement = "top" }: Props) => (
  <span
    className="text-muted"
    data-html
    data-place={placement}
    data-tip={`<p class='m-0 p-0' style="max-width:220px">${message}</p>`}
    title={message}
    style={{ fontSize: "0.85rem" }}>
    {" "}
    <i className="fas fa-question-circle"></i>
  </span>
)

export default TextHelper
