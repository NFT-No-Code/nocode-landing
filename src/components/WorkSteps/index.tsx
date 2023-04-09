import { RefObject } from "react";
import WorkCard from "../WorkCard";
import * as S from "./styles";
import { HiLightBulb, HiCode, HiTrendingUp, HiMap } from "react-icons/hi";

interface IWorkStepsInterface {
  workSliderRef: (node: HTMLElement | null) => void;
}

export default function WorkSteps({ workSliderRef }: IWorkStepsInterface) {
  return (
    <S.WorkSlidesContainer ref={workSliderRef} className="keen-slider">
      <WorkCard
        title=" Assessment & Ideation"
        content="Exploramos oportunidades de negócios, definimos escopo e estratégias para cumprir seus objetivos de negócio."
        icon={<HiLightBulb />}
      />
      <WorkCard
        title="Roadmap & Governance"
        content="Executamos todos os aspectos técnicos do seu projeto com uso de metodologias ágeis."
        icon={<HiMap />}
      />
      <WorkCard
        title="Dev & Test"
        content="Cocriamos estratégias de marketing para aproveitar ao máximo o potencial do seu projeto."
        icon={<HiCode />}
      />
      <WorkCard
        title="Sustain & Growth"
        content="Através da coleta e análise de dados, apoiamos na evolução e sustentação do seu projeto."
        icon={<HiTrendingUp />}
      />
    </S.WorkSlidesContainer>
  );
}
