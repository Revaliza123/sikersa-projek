import styled from "styled-components"

const SideNavContainer = styled.div`
  background: var(--white);
  // height: 100%;
  width: 16.7rem;
  margin-left: 0;
  position: absolute;
  /* border-radius: 0.5rem; */
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  // top: 0;
  left: 1.5rem;
  padding-top: -20rem;
  // transform: translateY(-50%);
  // display: none;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  border: 1px solid var(--black-50);
  box-shadow: 0px 4px 20px 0px rgba(76, 87, 125, 0.02);
  z-index: 10;
  @media (min-width: 920px) {
    display: flex;
    // top: 50%;
    // transform: translateY(-50%);
  }
`

const ContainerNav = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: space-between;

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`

const Logo = styled.div`
  padding: 1rem 1.6rem;
`

const SearchInput = styled.div`
  margin: 4.75rem 1rem 0.5rem 1rem;
`

const SideNavDivider = styled.hr``
const AvatarContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;

  .circle {
    border-radius: 1rem;
  }
`
const CircleAvatar = styled.div`
  display: inline-table;
  vertical-align: middle;
  width: 2rem;
  height: 2rem;

  background-color: var(--black-100);
  border-radius: 25%;
  margin-right: 0.5rem;
`

const FixedTopSidenav = styled.div`
  position: absolute;
  top: 0;
  z-index: 1024;
  background: var(--white);
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

const WorkspaceSettings = styled.div`
  position: absolute;
  top: 0.85rem;
  right: 0;
`

export {
  AvatarContent,
  CircleAvatar,
  ContainerNav,
  FixedTopSidenav,
  Logo,
  SearchInput,
  SideNavContainer,
  SideNavDivider,
  WorkspaceSettings,
}
