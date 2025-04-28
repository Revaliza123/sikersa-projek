import styled from "styled-components"

const CardReport = styled.div`
  box-shadow: 0px 1px 2px rgb(0 0 0 / 6%);
  border-radius: 5px;
  border: none;
`
const CardHeader = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  border: none;
`

const CardReportItem = styled.div`
  border: 1px solid var(--black-50);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 16px;
`
const ReportItemTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 17px;
  color: var(--black-400);
`
const ReportItemTotal = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 29px;
  color: var(--black-800);
`

export {
  CardReport,
  CardHeader,
  CardReportItem,
  ReportItemTitle,
  ReportItemTotal,
}
