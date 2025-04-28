import { CONFIG_DEVICE } from "@app/config/device.config";
import styled from "styled-components";
import { font } from "./function/_font.styled";

const LoginFormContainer = styled.div`
  display: flex;
  /* justify-content: center !important; */
  height: 100vh;
  align-items: center;
  padding-left: 8rem;
  background-image: url('/static/bg-login.png');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  input {
    border-radius: 5px !important;
  }

  @media ${CONFIG_DEVICE.tabletL} {
    padding: 0;
    justify-content: center;
  }
  @media ${CONFIG_DEVICE.mobileL} {
    background-size: inherit !important;
  }
`;

const LoginFormBox = styled.div`
  /* margin: auto; */
`;

const LoginWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 35rem;
`;

const LoginForm = styled.div`
  width: 28.6rem !important;
  background: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem;
  // background: var(--white);
  border-radius: 0.5rem;
  // box-shadow: 0 5px 20px rgb(0,0,0,.075);
  /* margin: 6rem auto 4rem !important; */
  box-shadow: 0px 4px 20px rgba(var(--black-800-rgb), 0.1);

  @media ${CONFIG_DEVICE.mobileL} {
    width: 100% !important;
  }
`;

const WelcomeText = styled.p`
  ${font({ size: "1.25rem", color: "var(--black)" })}
  font-style: normal;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 0;
  text-align: left;
`;

const LoginIntroText = styled.p`
  ${font({ size: "0.9rem", color: "var(--black-500)" })}
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.6rem;
`;

const LabelForm = styled.span`
  ${font({ size: "1rem", color: "var(--black)" })}
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

const InputIcon = styled.span`
  position: absolute;
  padding: 8px 10px;
  font-size: 16px;
  z-index: 6;
  color: var(--black-500);
`;

const Copyright = styled.p`
  text-align: center;
  color: var(--black-500);
  font-size: 0.85rem;
`;

export {
  LoginForm,
  LoginFormBox,
  LoginFormContainer,
  LoginIntroText,
  LoginWrapper,
  LabelForm,
  InputIcon,
  WelcomeText,
  Copyright,
};
