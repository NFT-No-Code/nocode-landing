import styled from "styled-components";

export const StyledWordList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  height: fit-content;

  padding: 0;
  margin: 0;
`;

export const StyledWordLi = styled.li`
  width: fit-content;
  height: fit-content;

  padding: 0.2rem 0.4rem;
  border-radius: 8px;

  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;

  background-color: rgb(var(--secondary-00), 0.15);
`;
