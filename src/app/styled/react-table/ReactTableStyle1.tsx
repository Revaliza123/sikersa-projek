import styled from "styled-components"
import { font } from "../function/_font.styled"

export const ReactTableStyle1: any = styled.div`
  margin-bottom: 0 !important;
  table {
    width: 100%;
    border-spacing: 0;
    ${font({})}
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    border-collapse: separate !important;
    border-spacing: 0 0.4rem;
    line-height: 1rem;
    color: var(--black-600);
    th,
    td {
      margin: 0;
      padding: 0.85rem 1.33rem;

      :last-child {
        border-right: 0;
      }
    }
    thead {
      background-color: var(--primary);
      tr {
        border-radius: 5px;
        th {
          ${font({})}
          font-style: normal;
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 15px;
          padding: 1.7rem 1.33rem;
          text-align: left;
          color: var(--white);
          &:first-child {
            text-align: left;
          }
        }
      }
      th > div {
        max-width: 16ch;
        width: max-content;
      }
    }
    tbody {
      tr {
        border-top: 0.15rem solid var(--body-bg);
        border-bottom: 0.15rem solid var(--body-bg);
        background-color: var(--white);
        border-radius: 5px;
        td {
          text-align: left;
          color: var(--black);

          &:first-child {
            text-align: left;
          }
        }
      }
    }
  }
`
