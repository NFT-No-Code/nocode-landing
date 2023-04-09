import styled from "styled-components";

export const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: rgb(34, 34, 34);

  border: 1.28px solid rgb(56, 56, 56);
  border-radius: 4px;
  padding: 1rem 1.5rem;

  height: 20rem;
  max-height: 20rem;
  min-width: 100%;

  @media screen and (min-width: 400px) {
    min-width: 18rem;
  }

  .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 3rem;

    border-radius: 4px;
    padding: 0.6rem;

    background: #d48200;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    height: auto;
    overflow: hidden;

    color: rgb(255, 255, 255);

    .mainText {
      height: auto;
      overflow: auto;
    }

    p,
    h3 {
      margin: 0;
    }

    p {
      color: rgb(219, 219, 219);
      font-size: 0.9rem;
    }
  }
`;
