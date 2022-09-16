import { Menu } from "@headlessui/react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 4.5rem;
  width: 100%;

  padding: 0 2rem;

  transition: all 0.5s;

  &.showBackground {
    background-color: rgb(var(--primary-00));
  }

  @media screen and (min-width: 1100px) {
    justify-content: initial;
  }

  @media screen and (min-width: 860px) {
    padding: 0 7rem;
    gap: 3.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 10rem;
  }
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
  gap: 1.5rem;

  a {
    font-weight: 500;
    font-size: 0.95rem;
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

export const DropdownOpenButton = styled(Menu.Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 2px;
  padding: 0.6rem;
  background-color: rgb(var(--background-00));
  color: rgb(var(--secondary-00));

  outline: none;
  border: none;

  transition: all 0.3s;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const DropdownItems = styled(Menu.Items)`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  padding: 4rem 2rem;

  background-color: rgb(var(--background-00));

  @media screen and (min-width: 860px) {
    padding: 4rem;
  }
`;

export const DropdownMenuClose = styled.div`
  display: flex;

  button {
    width: 30px;
    height: 30px;

    outline: none;
    border: none;

    background-color: rgb(var(--primary-00));
    transition: all 0.3s;

    &:hover {
      svg {
        color: rgb(var(--secondary-00));
      }
      cursor: pointer;
    }

    svg {
      width: 100%;
      height: 100%;
      color: rgb(var(--background-00));
      transition: all 0.3s;
    }
  }

  @media screen and (min-width: 860px) {
    button {
      width: 50px;
      height: 50px;
    }
  }
`;

export const DropdownMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    filter: invert(100%);
    width: 60%;
  }

  a {
    font-size: 1.1rem;
    font-weight: 400;
  }

  button {
    width: 100%;

    border: 0;
    outline: 0;
    border-radius: 5px;
    padding: 0.8rem;

    background-color: rgb(var(--secondary-00));
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(105%);
    }
  }

  @media screen and (min-width: 860px) {
    a {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;
