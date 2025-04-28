import styled from "styled-components"

const DFlex = styled.div`
  display: flex !important;
`

const DFlexJustifyBetween = styled(DFlex)`
  justify-content: space-between !important;
  align-items: center;
`

const DFlexJustifyStart = styled(DFlex)`
  justify-content: flex-start !important;
`

const DFlexJustifyEnd = styled(DFlex)`
  justify-content: flex-end !important;
`

export const DFlexALignCenter = styled(DFlex)`
  align-items: center;
`

export { DFlex, DFlexJustifyStart, DFlexJustifyEnd, DFlexJustifyBetween }
