import styled from "styled-components";

export const FooterSection = styled.footer`
  position: absolute;

  display: flex;
  justify-content: space-between;
  gap: 8rem;

  width: 100%;

  padding: 4rem 7rem;
`;

export const SiteInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .footerLogo {
    filter: invert(100%);
  }

  svg {
    color: rgb(var(--primary-00));
  }
`;

export const SiteLinks = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 3.5rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    background-color: rgb(var(--primary-00));
    color: black;

    padding: 0.8rem;
    outline: none;
    border: none;

    transition: all 0.3s;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;
