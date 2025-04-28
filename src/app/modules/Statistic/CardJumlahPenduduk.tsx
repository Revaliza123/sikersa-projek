import CircleArrowIcon from "@app/components/Icons/CircleArrowIcon"
import CircleArrowLeft from "@app/components/Icons/CircleArrowLeft"
import ManIllustration from "@app/components/Illustration/ManIllustration"
import WomanIllustration from "@app/components/Illustration/WomanIllustration"
import { toggleSidebarMenuBeranda } from "@app/store/reducers/ui"
import { DFlex, DFlexJustifyBetween } from "@app/styled/flex.styled"
import React from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

interface Props {
  data?: any
}

export default function CardJumlahPenduduk({ data }: Props) {
  const { isSidebarMenuBerandaCollapsed } = useSelector(
    (state: any) => state.ui
  )

  const dispatch = useDispatch()

  console.log("coll", isSidebarMenuBerandaCollapsed)

  const toggleSidebar = () => {
    dispatch(toggleSidebarMenuBeranda(undefined))
  }
  return (
    <>
      <Card
        style={{
          background: "url(/static/illustration/beranda.svg)",
          height: "15rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
        }}>
        {isSidebarMenuBerandaCollapsed === 0 ? <Background /> : ""}
        <BoxJumlah
          style={{
            left: `${isSidebarMenuBerandaCollapsed === 1 ? "-20%" : "24%"}`,
          }}>
          <DFlexJustifyBetween className="gap-1">
            <DFlex
              className="flex-column align-items-center justify-content-center"
              style={{ marginLeft: "3rem" }}>
              <Circle>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}>
                  <ManIllustration width={50} />
                </div>
              </Circle>
              <p className="mt-1 mb-0">{data?.[1].name}</p>
              <p className="fs-3 m-0" style={{ fontWeight: "800" }}>
                {data?.[1].value}
              </p>
            </DFlex>

            <Line />

            <DFlex
              className="flex-column align-items-center justify-content-center"
              style={{ marginRight: "3rem" }}>
              <Circle>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}>
                  <WomanIllustration width={50} />
                </div>
              </Circle>
              <p className="mt-1 mb-0">{data?.[0].name}</p>
              <p className="fs-3 m-0" style={{ fontWeight: "800" }}>
                {data?.[0].value}
              </p>
            </DFlex>
          </DFlexJustifyBetween>

          <BoxArrow onClick={toggleSidebar}>
            {isSidebarMenuBerandaCollapsed === 1 ? (
              <CircleArrowIcon width={30} />
            ) : (
              <CircleArrowLeft width={30} />
            )}
          </BoxArrow>
        </BoxJumlah>
      </Card>
    </>
  )
}

const Background = styled.div`
  background: rgba(93, 93, 93, 0.58);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.6px);
  -webkit-backdrop-filter: blur(0.6px);
  border: 1px solid rgba(93, 93, 93, 0.31);
  width: 100%;
  height: 100%;
  transition: all 0.3 ease-in-out;
`

const Line = styled.div`
  height: 8rem;
  width: 0.2rem;
  border-radius: 3rem;
  background: #0da18d;
`

const BoxArrow = styled.div`
  position: fixed;
  right: -0.9rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const Circle = styled.div`
  position: relative;
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  background: #0ab39c;
  border-radius: 5rem;
`

const BoxJumlah = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.69);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.8px);
  border-radius: 0 0.5rem 0.5rem 0;
  -webkit-backdrop-filter: blur(6.8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 25rem;
  height: 10rem;
  padding: 1rem 2rem 1rem 2rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3 ease-in-out;
`
