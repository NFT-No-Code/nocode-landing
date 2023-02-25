import styled from "styled-components";

export const CardWrapper = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  background: rgb(43, 43, 43);

  border-radius: 4px;
  padding: 2.5rem 1rem 1rem 1rem;

  height: 20rem;
  width: 18rem;

  .iconContainer {
    position: absolute;
    top: -1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    border-radius: 4px;
    padding: 1rem;

    background: rgb(252, 163, 17);

    img {
      width: 100%;
      height: auto;
    }
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    height: 100%;

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
    }
  }
`;
