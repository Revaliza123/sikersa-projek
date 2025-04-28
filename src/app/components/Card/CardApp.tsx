import React from "react"
import { Card } from "react-bootstrap"
import { AppCardItem_New } from "../../styled/app-landing.styled"

export default function AppCard_New({
  workspace,
  name,
  image,
  link,
}: IAppCard) {
  return (
    <>
      <AppCardItem_New>
        <Card.Body>
          <div className="mb-2 app-card-image">{image}</div>
          <h2 className="app-card-title">{name}</h2>
          <a
            className="app-card-link mx-auto">
            Masuk ke Website
          </a>
        </Card.Body>
      </AppCardItem_New>
    </>
  )
}

export interface IAppCard {
  workspace?: any
  name: string
  description: string
  image: any
  link: string
}
