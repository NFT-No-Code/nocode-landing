import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const MemberCard = styled(Popover.Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  padding: 0.2rem;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: rgb(var(--secondary-00));
  color: rgb(var(--background-00));

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
  }

  p {
    font-weight: 500;
    margin: 0;
    font-size: 0.9rem;
    line-height: 18px;
    overflow: hidden;
    text-align: start;
  }

  @media screen and (min-width: 860px) {
    width: 250px;
  }

  @media screen and (min-width: 1400px) {
    p {
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

export const StyledPanel = styled(Popover.Panel)`
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;

  width: 330px;
  height: max-content;
  max-height: 330px;

  display: flex;
  flex-direction: column;

  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);

  border-radius: 4px;

  @media screen and (min-width: 860px) {
    right: initial;
    left: initial;
    margin: initial;
  }
`;

export const PanelCover = styled.div`
  display: flex;
  width: 100%;
  height: 50px;

  background-color: rgb(55, 88, 153);

  border-radius: 4px 4px 0 0;

  img {
    width: 100%;
    object-fit: fill;
    border-radius: 4px 4px 0 0;
  }
`;

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;

  color: rgb(var(--background-00));

  padding: 1rem;
`;

export const PanelMember = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: 600;
  font-size: 0.9rem;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100%;
  }

  p {
    margin: 0;
    text-align: start;
  }
`;

export const MemberDesc = styled.div`
  display: flex;
  max-height: 100px;
  overflow: auto;

  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 16px;
    padding: 1px 0;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  overflow: auto;
  flex-grow: 1;
  align-items: flex-end;
  gap: 0.5rem;

  a {
    color: rgb(var(--background-00));

    &:hover {
      color: rgb(55, 88, 153);
    }
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
