import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;

  font-family: "Barlow";
  font-weight: 500;
  font-size: 0.9rem;

  padding: 0.5rem;
  border-radius: 5px;

  outline: 0;
  border: 0;

  background-color: rgb(var(--secondary-00));
  color: rgb(var(--secondary-01));

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(105%);
  }

  @media screen and (min-width: 1400px) {
    font-weight: 500;
    font-size: 1.1rem;
    width: 8.5rem;
  }
`;
