import styled from "styled-components";

interface IBenefitItemStyleProps {
  isReverse?: boolean;
}

export const ItemWrapper = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
`;

export const ItemDescription = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: ${(props) => (props.isReverse ? "end" : "start")};

  width: 60%;

  p {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;

export const ItemTitle = styled.div<IBenefitItemStyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 0.5rem;

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const ItemImage = styled.figure`
  margin: 0;
  width: 40%;

  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
`;
