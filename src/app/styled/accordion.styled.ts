import BsAccordion from "react-bootstrap/Accordion"
import styled from "styled-components"

export const AccordionHeader = styled(BsAccordion.Header)`
  background: var(--black-25);
  border: 1px solid var(--black-150);
  padding: 0 1rem;
  border-radius: 0.5rem 0.5rem 0px 0px;

  .accordion-button {
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem !important;
    line-height: 1.6rem;
    color: var(--black);
  }
`

export const AccordionItem = styled(BsAccordion.Item)`
  margin-bottom: 1.1rem;
`

export const AccordionBody = styled(BsAccordion.Body)`
  background: var(--white);
`

export const AccordionBodyFooter = styled.div`
  font-style: normal;
  font-weight: 600;
  padding: 1.5rem 2rem;
`
