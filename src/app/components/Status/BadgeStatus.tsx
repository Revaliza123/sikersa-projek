import React from "react"
import { Badge } from "react-bootstrap"
import styled from "styled-components"

interface IBadgeStatus {
  status: any
  trueStatus?: any
  trueMsg?: any
  falseMsg?: any
  className?: string
  falseClass?: string
  trueClass?: string
}

export default function BadgeStatus({
  status,
  trueStatus = 1,
  trueMsg = "Active",
  falseMsg = "Inactive",
  className = "",
  falseClass = "",
  trueClass = "badge-success",
}: IBadgeStatus) {
  return (
    <BadgeCustom
      pill
      bg=""
      className={`${status == trueStatus ? trueClass : falseClass} ${className}`}>
      {status == trueStatus ? trueMsg : falseMsg}
    </BadgeCustom>
  )
}

const BadgeCustom = styled(Badge)`
  text-transform: capitalize;
`
