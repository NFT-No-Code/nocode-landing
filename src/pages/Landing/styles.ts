import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";
import nftUnderline from "../../assets/underline.png";

export const InitialCopy = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 450px;
  background-image: url(${backgroundImg});
  background-size: cover;
`;

export const CopyContent = styled.div`
  display: flex;
  align-self: flex-start;

  position: relative;
  top: 4.5rem;

  width: 100%;
  height: calc(100% - 4.5rem);

  padding: 0 7rem;
`;

export const CopyText = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  color: rgb(var(--secondary-02));

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
`;

export const CopyImage = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
  position: relative;
  top: 12%;
`;

export const BenefitsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 7rem 7rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
  }
`;
