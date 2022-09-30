import styled from "styled-components";
import { motion } from "framer-motion";

interface IBenefitItemStyleProps {
  isReverse?: boolean;
}

export const ItemWrapper = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  }
`;

export const ItemDescription = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  width: 100%;

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }

  @media screen and (min-width: 700px) {
    width: 60%;
    text-align: ${(props) => (props.isReverse ? "end" : "start")};
  }

  @media screen and (min-width: 1400px) {
    p {
      font-size: 1.35rem;
      font-weight: 300;
      line-height: 35px;
    }
  }
`;

export const ItemTitle = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media screen and (min-width: 700px) {
    justify-content: initial;
    flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  }

  @media screen and (min-width: 1400px) {
    p {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`;

export const ItemImage = styled(motion.figure)`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  @media screen and (min-width: 700px) {
    width: 40%;
    justify-content: initial;

    img {
      width: 100%;
      height: 80%;
      object-fit: contain;
    }
  }
`;
