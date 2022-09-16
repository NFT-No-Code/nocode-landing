import styled from "styled-components";

export const MemberList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;

  height: 100%;
  width: 100%;

  @media screen and (min-width: 860px) {
    width: fit-content;
  }
`;
