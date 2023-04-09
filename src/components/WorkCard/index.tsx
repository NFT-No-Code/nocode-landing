import * as S from "./styles";

interface IWorkCardProps {
  title: string;
  content: string;
  icon: any;
}

export default function WorkCard({ title, content, icon }: IWorkCardProps) {
  return (
    <S.WorkCard className="keen-slider__slide">
      <div className="textSection">
        <div className="iconWrapper">{icon}</div>
        <h2>{title}</h2>
      </div>
      <div className="line">
        <div className="dot"></div>
      </div>
      <div className="textSection textBox">
        <span>{content}</span>
      </div>
    </S.WorkCard>
  );
}
