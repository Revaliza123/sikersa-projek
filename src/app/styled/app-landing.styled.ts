import { Card, Container } from "react-bootstrap"
import styled from "styled-components"
import { CONFIG_DEVICE } from "../config/device.config"
import { font } from "../config/function/_font.styled"


export const AppLandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center !important;
  background-image: url('/static/digital-img.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${CONFIG_DEVICE.mobileL} {
    background-size: cover !important;
  }
`

export const AppLandingContent = styled.div`
  margin: auto;
`

export const AppCardImage = styled.div`
  overflow: hidden;
  padding: 0.5rem;
  border: 1px solid var(--black-75);
  /* background: var(--black-25); */
  width: auto;
  border-radius: 2rem;
  width: 2.75rem;
  margin: 0;
`
  
export const AppCardTitle = styled.h2`
  ${font({})}
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  @media (min-width: 1200px) {
    min-width: 14rem;
  }
`

export const AppCardDesc = styled.p`
  ${font({})}
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 20px;
  color: var(--black-600);
  margin-bottom: 1.5rem;
`

export const AppCardLink = styled.a`
  ${font({})}
  color:var(--primary);
  font-weight: 600;
  margin-top: auto;
`

export const AppCardItem = styled(Card)`
  ${font({})}
  background: rgba(242, 235, 215, 0.95); /* Cream/beige with 95% opacity - less transparent */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  height: 100%;
  border: none;

  .card-body {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    .body {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  overflow: hidden;
  position: relative;
  .bg-edge {
    position: absolute;
    top: -10px;
    right: -8px;
  }
`

export const HeaderContainer = styled(Container)`
  max-width: 60%;
  /* margin-top: 8rem;
  margin-bottom: 8rem; */

  @media ${CONFIG_DEVICE.tablet} {
    max-width: 500px;
  }
`
export const Header = styled.div`
  text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 1.33rem;
  line-height: 150%;
  margin-left: 4rem;
  ${font({})}
`
export const AppDescription = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: white;
  font-weight: 400;
  padding: 1rem;
  backdrop-filter: blur(50px);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
`
export const Footer = styled.p`
  color: var(--black-200);
  text-align: center;
  font-size: 0.85rem;
  margin-top: 8rem;
`

export const CopyrightText = styled.p`
  text-align: center;
  margin-top: 16rem;
  margin-bottom: 5rem;
`

export const CopyrightText_New = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  color: white;
  background: var(--primary);
  padding: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    bottom: 0;
    position: absolute;
    margin-top: 0;
  }
`

export const AppCardItem_New = styled(Card)`
  ${font({})}
  background: radial-gradient(
    101.99% 253.16% at -1.99% -1.14%,
    rgba(255, 255, 255, 0.42) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  box-shadow: 0px 4px 20px rgba(76, 87, 125, 0.07);
  border-radius: 1rem;
  background: white;
  height: 100%;
  position: relative;

  a.app-card-link {
    ${font({})}
    color: white;
    font-weight: 500;
    margin-top: auto;
    background: var(--primary);
    text-align: center;
    padding: 0.5rem 1.1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
  }

  h2.app-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    @media (min-width: 1200px) {
      min-width: 14rem;
    }
  }

  div.app-card-image {
    position: absolute;
    top: -20px;
    left: -20px;
    padding: 0.7rem;
    text-align: center;
    border: none;
    background: var(--secondary);
    color: white;
    border-radius: 1rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0.8rem 1.5rem;
  }
`
