import * as S from "./styles";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface IInfoCardProps {
  title: string;
  content: string;
  icon: any;
  className?: string;
}

export default function InfoCard({ content, icon, title, className }: IInfoCardProps) {
  return (
    <S.CardWrapper className={className}>
      <div className="iconContainer">{icon}</div>
      <div className="textContainer">
        <h3>{title}</h3>
        <div className="mainText">
          <p>{content}</p>
        </div>
      </div>
    </S.CardWrapper>
  );
}
