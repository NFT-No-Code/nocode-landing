import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";
import nftUnderline from "../../assets/underline.png";
import noisePattern from "../../assets/noise-pattern.jpg";

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

  margin-top: 2rem;
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
`;

export const InfoSection = styled.section`
  padding: 5rem 7rem;
  background-color: rgb(var(--primary-00));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  position: sticky;

  display: flex;
  padding: 3rem 7rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-image: url(${noisePattern});
  background-repeat: repeat;
`;

export const TeamContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  padding: 3rem;
  border-radius: 10px;

  background-color: rgb(var(--background-00));
`;

export const MemberList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MemberCard = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 250px;

  padding: 0.2rem;

  background-color: rgb(var(--secondary-00), 0.85);
  color: rgb(var(--background-00));

  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
  }

  p {
    margin: 0;
  }
`;

export const TeamText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
