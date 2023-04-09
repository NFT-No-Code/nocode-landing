import { StyledButton } from "@/components/Button/styles";
import styled from "styled-components";

interface HeaderProps {
  scrollPosition: number;
}

export const HeaderEntreprises = styled.header<HeaderProps>`
  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: center;

  background: ${({ scrollPosition }) => (scrollPosition > 80 ? "rgba(0,0,0,0.5)" : "transparent")};
  transition: all 0.5s;

  width: 100vw;
  height: 5rem;
`;

export const HeaderContainer = styled.div`
  max-width: 1300px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  figure {
    display: flex;

    width: 10rem;

    margin: 0;

    @media screen and (min-width: 768px) {
      width: 12rem;
    }

    img {
      width: 100%;
      height: 100%;
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

export const MainContent = styled.main`
  display: flex;
  justify-content: center;

  p,
  small {
    color: rgb(219, 219, 219);
  }

  .bgDetailImage {
    position: absolute;
    z-index: -1;
    height: auto;
  }

  #tetra1,
  #tetra2,
  #tetra3 {
    display: none;
    width: 12rem;

    @media screen and (min-width: 768px) {
      display: initial;
    }
  }

  #tetra1 {
    right: 20%;
    top: 0%;

    @media screen and (min-width: 1440px) {
      top: 7%;
    }
  }

  #tetra2 {
    left: 0;
    top: 40%;
  }

  #tetra3 {
    right: -2%;
    top: 50%;

    @media screen and (min-width: 860px) {
      right: 0;
    }
  }

  h2 {
    font-size: 1.8rem;
  }
`;

export const MainContainer = styled.div`
  max-width: 1300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  text-align: center;

  .mainCopy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    width: 100%;

    padding: 7rem 1.5rem 0 1.5rem;

    @media screen and (min-width: 768px) {
      width: 70%;
      padding: 7rem 0 0 0;
    }

    @media screen and (min-width: 1024px) {
      width: 70%;
      padding: 7rem 0 0 0;
    }

    img {
      width: 14rem;
      height: auto;
    }

    small {
      font-size: 1rem;
      font-weight: 300;
    }

    h1 {
      margin: 0.5rem;
      font-size: 2rem;

      max-width: 100%;
      overflow-wrap: break-word;
    }

    p {
      font-size: 0.9rem;
    }

    @media screen and (min-width: 420px) {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 768px) {
      h1 {
        font-size: 3.2rem;
      }
    }
  }

  .dividedSection {
    display: flex;
    flex-direction: column-reverse;

    width: 100%;

    margin-top: 6rem;
    padding: 0 2rem;

    display: flex;
    gap: 2rem;

    text-align: center;

    div {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }

    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;

      @media screen and (min-width: 768px) {
        align-items: initial;
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: initial;
      text-align: start;

      padding: 0 6rem;

      div {
        width: 50%;
      }

      div:first-child {
        width: 50%;
      }
    }

    @media screen and (min-width: 1024px) {
      gap: 5rem;
    }
  }

  .blockDivision {
    padding: 2rem 0;

    img {
      width: 10rem;
      height: auto;
    }

    @media screen and (min-width: 768px) {
      padding: 5rem;
    }
  }

  .ourServices {
    min-width: 100vw;
    height: 120vh;

    overflow: hidden;
  }

  .cardSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    padding: 7rem 1rem 0 1rem;

    max-width: 100%;

    ul {
      display: flex;

      max-width: 100%;
      height: fit-content;

      overflow-x: hidden;

      margin: 0;
      padding: 0;
    }

    @media screen and (min-width: 408px) {
      padding: 7rem 1.5rem 0 1.5rem;
    }
  }

  .workStepsSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 6rem;
    padding: 0 2rem;

    max-width: 1300px;
    width: 100%;

    overflow: hidden;

    .heading {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      margin-bottom: 1rem;

      text-align: start;

      @media screen and (min-width: 500px) {
        margin-bottom: 4rem;

        flex-direction: initial;
      }

      div {
        display: flex;
        gap: 0.8rem;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: none;
        background: none;

        cursor: pointer;

        svg {
          color: #fff;
          width: 1.2rem;
          height: auto;
        }
      }
    }
  }

  .contactSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    padding: 7rem 1rem 0 1rem;

    @media screen and (min-width: 408px) {
      padding: 7rem 1.5rem 0 1.5rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      width: 100%;

      margin: 3rem auto;

      @media screen and (min-width: 768px) {
        width: 75%;
      }
    }

    button {
      margin-top: 2rem;
      padding: 0 5rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: 10rem;
`;

export const FooterContent = styled.div`
  position: relative;

  max-width: 1300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 1rem 1rem;

  @media screen and (min-width: 408px) {
    padding: 1rem 2rem;
  }

  figure {
    display: flex;

    width: 12rem;

    margin: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .backToTopButton {
    position: absolute;
    right: 0;

    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.2rem;

    background: rgb(252, 163, 17);
    color: rgb(0, 0, 0);

    &:hover {
      color: rgb(252, 163, 17);
      background: rgb(0, 0, 0);
    }

    svg {
      width: 1.5rem;
      height: auto;
    }

    @media screen and (min-width: 408px) {
      padding: 0.4rem;

      svg {
        width: initial;
      }
    }
  }

  .footerHeader {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    nav {
      display: flex;
      gap: 1rem;

      flex-wrap: wrap;
    }
  }

  .footerEnd {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.7rem;

    p {
      margin: 0;

      font-size: 0.75rem;

      color: rgb(219, 219, 219);
    }

    .socialIcons {
      display: flex;
      align-items: center;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.4rem;

        border-radius: 100%;

        background: rgb(252, 163, 17);
        color: rgb(0, 0, 0);
      }

      a:hover {
        color: rgb(252, 163, 17);
        background: rgb(0, 0, 0);
      }
    }
  }
`;
