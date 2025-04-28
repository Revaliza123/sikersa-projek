import styled from "styled-components";
import { DFlex } from "./flex.styled";

export const LogoContainer = styled(DFlex)`
  position: relative;
  /* margin: 0 auto; */
  width: 50%;
  text-transform: capitalize;

  @media (min-width: 768px) {
    width: 25rem;
    height: 15rem;
  }

  .desa {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    padding: 0;
    text-transform: capitalize;
    left: 10.75rem;

    &.signin {
      color: var(--black-700);
      padding: 0.75rem 0 0 4rem;
      bottom: -0.2rem;
      font-size: 1.1rem;
      font-weight: 600;
      left: 6.8rem;
    }
  }
`;
export const LogoLoginContainer = styled(DFlex)`
  /* margin: 0 auto; */
  width: 100%;
  text-transform: capitalize;

  height: 14rem;

  .desa {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    padding: 0;
    text-transform: capitalize;
    left: 10.75rem;

    &.signin {
      color: var(--black-700);
      padding: 0.75rem 0 0 4rem;
      bottom: -0.2rem;
      font-size: 1.1rem;
      font-weight: 600;
      left: 6.8rem;
    }
  }
`;
