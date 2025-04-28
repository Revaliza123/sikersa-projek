import { Accordion } from "react-bootstrap"
import styled from "styled-components"

export const DataPotensiDesaAccordion = styled(Accordion)``

export const DataPotensiDesaAccordionItem = styled(Accordion.Item)`
  border: 1px solid var(--black-150);
  // padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: var(--white);

  &:not(:first-of-type) {
    border-top: 1px solid var(--black-150);
  }

  &:hover {
    color: unset;
  }
`
export const DataPotensiDesaAccordionHeader = styled(Accordion.Header)`
  padding: 1rem;
  background: var(--black-50);

  .accordion-button:hover,
  .accordion-button:not(.collapsed) {
    color: unset !important;
  }
`

export const DataPotensiDesaAccordionBody = styled(Accordion.Body)`
  padding: 0.5rem 1rem;
  overflow: auto;
`
