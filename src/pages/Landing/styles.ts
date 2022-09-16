import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";
import nftUnderline from "../../assets/underline.png";
import noisePattern from "../../assets/noise-pattern.jpg";

export const InitialCopy = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  height: fit-content;

  background-image: url(${backgroundImg});
  background-size: cover;

  @media screen and (min-width: 700px) {
    height: 450px;
  }
`;

export const CopyContent = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  top: 4.5rem;

  width: 100%;
  height: calc(100% - 4.5rem);

  margin-top: 2rem;
  padding: 0 2rem;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    gap: initial;
  }

  @media screen and (min-width: 860px) {
    padding: 0 7rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 10rem;
  }
`;

export const CopyText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: rgb(var(--secondary-02));
  text-align: center;

  h1 {
    font-size: 1.7rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  .underlineImage {
    display: inline-block;
    background-image: url(${nftUnderline});
    background-position: bottom;
    background-repeat: no-repeat;
    padding-bottom: 0.6rem;
  }

  p {
    margin: 0.9rem 0;
  }

  .subtitleCopy {
    font-size: 1.3rem;
  }

  .textCopy {
    font-size: 1rem;
  }

  @media screen and (min-width: 1100px) {
    width: 50%;
    text-align: start;
  }

  @media screen and (min-width: 700px) and (max-width: 1099px) {
    width: 60%;
    text-align: start;
  }
`;

export const CopyImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
  }

  @media screen and (min-width: 700px) {
    justify-content: flex-end;

    img {
      position: relative;
      z-index: 1;
      height: 90%;
      width: initial;
      top: 10%;
      box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.4);
    }
  }

  @media screen and (min-width: 1100px) {
    width: 50%;

    img {
      height: 115%;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1099px) {
    width: 40%;
  }

  @media screen and (min-width: 500px) and (max-width: 699px) {
    img {
      width: 50%;
    }
  }
`;

export const BenefitsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  padding: 10rem 2rem;

  @media screen and (min-width: 860px) {
    padding: 7rem 7rem;
    gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 8rem 10rem;
  }
`;

export const InfoSection = styled.section`
  position: sticky;
  top: 0;

  padding: 5rem 2rem;
  background-color: rgb(var(--primary-00));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 860px) {
    padding: 5rem 7rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 5rem 10rem;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }

  ul {
    text-align: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: black;
  }
`;

export const TeamSection = styled.section`
  position: relative;

  display: flex;
  padding: 3rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-image: url(${noisePattern});
  background-repeat: repeat;

  @media screen and (min-width: 860px) {
    padding: 3rem 7rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 3rem 10rem;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  width: 100%;

  padding: 2rem;
  border-radius: 10px;

  background-color: rgb(var(--background-00));

  @media screen and (min-width: 1100px) {
    padding: 3rem;
    flex-direction: initial;
  }
`;

export const TeamText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: auto;

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    font-weight: 600;
  }

  h4 {
    font-weight: 500;
  }

  p {
    margin: 0;
    color: rgba(var(--secondary-00), 0.7);
  }

  small {
    align-self: flex-end;
    margin: auto 0;
  }
`;

export const FaqSection = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 4rem 2rem;
  text-align: center;

  background-color: rgb(var(--primary-00));

  h2 {
    background-color: black;
    padding: 0.7rem;
  }

  hr {
    background-color: black;
    border: none;
    height: 1px;
    width: 90%;
  }

  .titleBreak {
    width: 100%;
  }

  details {
    text-align: center;
    color: black;
  }

  details summary {
    cursor: pointer;
    list-style-type: "↓   ";
    font-size: 1.1rem;
    font-weight: 500;
  }

  details[open] summary {
    list-style-type: "↑   ";
  }

  @media screen and (min-width: 860px) {
    padding: 4rem 7rem;
    text-align: initial;

    detail {
      width: 50%;
    }

    .titleBreak {
      width: 70%;
    }

    hr {
      width: 50%;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 4rem 10rem;
  }
`;
