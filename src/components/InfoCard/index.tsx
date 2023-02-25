import * as S from "./styles";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface IInfoCardProps {
  title: string;
  content: string;
  icon: string | StaticImageData; //colocar imagem
}

export default function InfoCard({ content, icon, title }: IInfoCardProps) {
  return (
    <S.CardWrapper>
      <div className="iconContainer">
        <Image src={icon} alt="ícone" />
      </div>
      <div className="textContainer">
        <h3>{title}</h3>
        <div className="mainText">
          <p>{content}</p>
        </div>
      </div>
    </S.CardWrapper>
  );
}
