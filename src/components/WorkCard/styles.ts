import styled from "styled-components";

export const WorkCard = styled.li`
  width: 100%;
  height: auto;

  @media screen and (min-width: 425px) {
    width: 300px;
  }

  .textSection {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    height: 45%;

    padding: 1.5rem 3rem 1.5rem 1rem;

    text-align: start;

    @media screen and (min-width: 375px) {
      flex-direction: initial;
      align-items: center;
      height: 30%;
    }

    h2 {
      font-weight: 500;
    }

    span {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 300;
    }
  }

  .iconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 2.8rem;
    height: 2.8rem;

    padding: 0.5rem;

    border: 1px solid white;
    border-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%) 1;

    svg {
      width: 100%;
      height: auto;
    }
  }

  .line {
    position: relative;

    width: 100%;
    height: 2px;

    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 50%, #fbab7e 100%);

    .dot {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10%;

      width: 0.5rem;
      height: 0.5rem;

      border-radius: 100%;

      background-color: white;

      outline: 2px solid white;
      outline-offset: 3px;

      -webkit-box-shadow: 0px 0px 10px 1px rgba(227, 248, 253, 0.7);
      -moz-box-shadow: 0px 0px 10px 1px rgba(227, 248, 253, 0.7);
      box-shadow: 0px 0px 10px 1px rgba(227, 248, 253, 0.7);
    }
  }

  .textBox {
    position: relative;

    width: 95%;
    height: auto;

    margin-top: 2.5rem;

    background: rgb(34, 34, 34);

    &:before {
      position: absolute;
      top: -0.5rem;
      left: 5%;

      width: 1rem;
      height: 1rem;

      background: rgb(34, 34, 34);

      content: "";

      transform: rotate(45deg);
    }
  }
`;
