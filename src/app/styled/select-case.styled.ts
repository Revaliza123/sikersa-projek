import styled from "styled-components"

import { DivPopins, InputPopins } from "./font-family"

const CaseActive = styled(DivPopins)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.875rem;
  letter-spacing: 0.06em;
  height: 3.938rem;
`
const TextTitle = styled(DivPopins)`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.313rem;
  letter-spacing: 0.06em;
  color: var(--black);
`
const TextDescription = styled(DivPopins)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 0.06em;
  color: var(--black-600);
`
const TextDescription2 = styled(DivPopins)`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 0.06em;
  color: inherit; //var(--black-600);
  margin-top: 0.3rem;
`
const CaseIcon = styled.div`
  background: var(--primary-10);
  border-radius: 5px;
`
const WrapListCase = styled.div`
  &:not(:last-child) {
    .separator-case {
      background: var(--black-200);
      border-bottom: 1px dashed var(--black-10);
      border-top: 1px dashed var(--black-10);
      width: 100%;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }
`
const WrapSearch = styled.div`
  border-bottom: 1px solid var(--black-50);
`
const FormSearch = styled(InputPopins)`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 110%;
  color: var(--black);
`

export {
  CaseActive,
  CaseIcon,
  FormSearch,
  TextDescription,
  TextDescription2,
  TextTitle,
  WrapListCase,
  WrapSearch,
}
