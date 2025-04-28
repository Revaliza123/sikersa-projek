import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

export default function CardImageInfo({ image, label }: ICardImageInfo) {
  const helperLampiran = (path: string) => {
    let src: string
    switch (path?.substring(path?.length - 4)) {
      case ".pdf":
        src = "/static/img/file/pdf.png"
        break
      case "docx":
        src = "/static/img/file/doc.png"
        break
      case "xlsx":
        src = "/static/img/file/xlsx.png"
        break
      default:
        src = path
        break
    }
    return src
  }

  return (
    <>
      <Title className="elipsis" title={label}>
        {label}
      </Title>
      <CardImage>
        <Card.Img variant="bottom" src={helperLampiran(image)} />
      </CardImage>
    </>
  )
}

interface ICardImageInfo {
  image: string
  label: string
}

const Title = styled.h3`
  padding: 0.75rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`
const CardImage = styled(Card)`
  .card-img-bottom {
    height: 7.5rem;
    object-fit: scale-down;
  }
`
