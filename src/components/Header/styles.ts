import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  gap: 3.5rem;
  height: 4.5rem;
  width: 100%;
  background-color: rgba(var(--secondary-00), 0.3);

  padding: 0 7rem;
`;

export const HeaderImage = styled.figure`
  display: flex;
  width: 10.5rem;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-grow: 1;
  gap: 1.2rem;

  a {
    color: rgb(var(--secondary-01));
    transition: all 0.3s;

    &:hover {
      color: rgb(var(--secondary-00));
    }
  }
`;

export const HeaderBtn = styled.div`
  display: flex;
`;
