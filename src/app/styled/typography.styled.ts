import styled, { css } from "styled-components"
import { font } from "./function/_font.styled"

const PrimaryFont = css`
  font-family: "Montserrat", sans-serif;
`

const SecondaryFont = css`
  font-family: "Montserrat", sans-serif;
`

const DivTextCenter = styled.div`
  text-align: center;
`

const Title = styled.h3`
  font-size: 1.55rem;
`

const DescriptionInfo = styled.p`
  color: var(--black-500);
`

const PageTitle = styled.h2`
  ${font({ size: "1.33rem", color: "var(--black)" })}
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.06em;
  margin-bottom: 0;
  max-width: 100%;
  display: none;
  overflow: hidden;

  @media (min-width: 768px) {
    display: block;
  }
`

const PageCurrentDate = styled.p`
  ${font({ color: "var(--black)" })}
  font-style: normal;
  margin: 0;
`

const FormGroupTitle = styled.h5`
  ${font({ size: "1.05rem" })}
  font-weight: 600;
  line-height: 1.33rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  /* identical to box height */

  letter-spacing: 0.06em;
  border-bottom: 1px solid var(--black-200);
  padding: 1rem 0;
`
export {
  DescriptionInfo,
  DivTextCenter,
  FormGroupTitle,
  PageCurrentDate,
  PageTitle,
  PrimaryFont,
  SecondaryFont,
  Title,
}
