import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 100%;

  label {
    font-family: var(--font-barlow);
    font-weight: 400;
  }

  .inputContainer {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;

    background: transparent;

    svg {
      position: absolute;
      left: 0.5rem;
      z-index: -1;

      width: 1.5rem;
      height: 1.5rem;

      color: rgb(219, 219, 219);
    }

    input {
      width: 100%;

      background: transparent;
      color: rgb(219, 219, 219);

      border: 1px solid rgb(255, 255, 255);

      padding: 0.8rem;
      padding-left: 2.4rem;
    }
  }
`;
