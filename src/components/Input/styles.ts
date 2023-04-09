import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  label {
    font-family: var(--font-barlow);
    font-weight: 400;

    margin-bottom: 0.5rem;
  }

  .errorMessage {
    font-size: 0.8rem;
    color: rgba(250, 0, 0, 1);
  }

  .inputContainer {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;

    background: transparent;

    margin-bottom: 0.2rem;

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

  .error {
    input {
      border: 1px solid rgb(185, 0, 0);
    }

    svg {
      color: rgb(185, 0, 0);
    }
  }
`;
