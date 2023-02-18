import Image, { StaticImageData } from "next/image";
import { MdVerified } from "react-icons/md";
import { ItemDescription, ItemImage, ItemTitle, ItemWrapper } from "./styles";

interface IBenefitItemProps {
  title: string;
  desc: string;
  imagePath: StaticImageData | string;
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
      <ItemImage
        initial={isReverse ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 }}
        whileInView={isReverse ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
      >
        <Image src={imagePath} alt={imageAlt}/>
      </ItemImage>
    </ItemWrapper>
  );
}
