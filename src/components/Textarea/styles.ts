import styled from "styled-components";

export const TextAreaWrapper = styled.div`
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

  textarea {
    width: 100%;

    background: transparent;
    color: rgb(219, 219, 219);

    border: 1px solid rgb(255, 255, 255);
    margin-bottom: 0.2rem;

    padding: 0.8rem;

    resize: vertical;

    &.error {
      border: 1px solid rgb(185, 0, 0);
    }
  }
`;
