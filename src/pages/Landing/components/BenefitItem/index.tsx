import { MdVerified } from "react-icons/md";
import { ItemDescription, ItemImage, ItemTitle, ItemWrapper } from "./styles";

interface IBenefitItemProps {
  title: string;
  desc: string;
  imagePath: string;
  imageAlt: string;
  isReverse?: boolean;
}

export default function BenefitItem({ title, desc, imagePath, imageAlt, isReverse }: IBenefitItemProps) {
  return (
    <ItemWrapper isReverse={isReverse}>
      <ItemDescription isReverse={isReverse}>
        <ItemTitle isReverse={isReverse}>
          <MdVerified size={38} />
          <p>{title}</p>
        </ItemTitle>
        <p>{desc}</p>
      </ItemDescription>
      <ItemImage>
        <img src={imagePath} alt={imageAlt} />
      </ItemImage>
    </ItemWrapper>
  );
}
