import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const ServiceListWrapper = styled.ul`
  all: unset;

  height: 100%;

  display: flex;
  box-shadow: inset 0px 0px 50px 50px rgb(var(--background-00));

  li {
    position: relative;
    all: unset;

    height: 100%;
    width: 100vw;
  }

  .slideText {
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 1300px;
    height: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    padding: 1rem;
    text-align: center;

    user-select: none;

    h2 {
      font-size: 2rem;
      line-height: 1.2;
    }

    span {
      display: list-item;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.8);

      text-align: left;
    }

    @media screen and (min-width: 768px) {
      align-items: flex-start;
      text-align: left;
      line-height: 1;

      padding: 3rem 5rem;

      h2 {
        font-size: 3.5rem;
      }

      span {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 1024px) {
      h2 {
        font-size: 3.8rem;
      }

      span {
        font-size: 1.2rem;
      }
    }

    @media screen and (min-width: 1440px) {
      h2 {
        font-size: 4.5rem;
      }

      span {
        font-size: 1.2rem;
      }
    }

    & > div {
      display: flex;
      flex-wrap: wrap;
      gap: 0 2rem;

      padding-left: 1.5rem;

      @media screen and (min-width: 768px) {
        padding: 0 2rem;
      }
    }
  }

  .navButton {
    display: none;

    border: 0;
    background: transparent;

    position: absolute;
    z-index: 3;
    right: 0;
    top: 50%;

    width: 4.5rem;
    height: 4.5rem;
    padding: 1rem;

    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: initial;
    }

    svg {
      color: #cacaca;
      width: 100%;
      height: auto;
    }

    &:nth-child(1) {
      left: 0;
    }
  }
`;

export const EnterpriseButton = styled(StyledButton)`
  background: rgba(252, 163, 17, 0.3);
  color: rgb(255, 255, 255);

  font-size: 0.9rem;

  border-radius: 0;
  border: 1px solid rgb(252, 163, 17);

  width: fit-content;

  span {
    font-family: var(--font-barlow);
    display: none;
  }

  img {
    height: 1.5rem;
    width: auto;
  }

  a {
    all: unset;
  }

  @media screen and (min-width: 420px) {
    height: 3rem;

    img {
      display: none;
    }

    span {
      display: initial;
    }
  }
`;
