import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 100%;

  label {
    font-family: var(--font-barlow);
    font-weight: 400;
  }

  textarea {
    width: 100%;

    background: transparent;
    color: rgb(219, 219, 219);

    border: 1px solid rgb(255, 255, 255);

    padding: 0.8rem;

    resize: vertical;
  }
`;
