import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import * as S from "./styles";
import { servicesData } from "./data";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

export default function ServicePanel() {
  let intervalId: NodeJS.Timer;

  const [sliderRef, sliderInstance] = useKeenSlider({
    range: {
      align: true,
    },
    slides: {
      origin: "center",
      perView: "auto",
    },
    loop: true,
    created() {
      const initialIntervalId = setInterval(() => sliderInstance.current?.next(), 8000);
      intervalId = initialIntervalId;
    },
    slideChanged() {
      if (intervalId) {
        clearInterval(intervalId);
      }

      const newIntervalId = setInterval(() => sliderInstance.current?.next(), 8000);
      intervalId = newIntervalId;
    },
  });

  return (
    <S.ServiceListWrapper ref={sliderRef} className="keen-slider">
      {servicesData.map((service) => {
        return (
          <li className="keen-slider__slide" key={service.id}>
            <button className="navButton" onClick={() => sliderInstance.current?.prev()}>
              <BsChevronCompactLeft size={18} />
            </button>
            <button className="navButton" onClick={() => sliderInstance.current?.next()}>
              <BsChevronCompactRight size={18} />
            </button>
            <div className="slideText">
              <h2>{service.title}</h2>
              <div>
                {service.content.length > 0 &&
                  service.content.map((content, id) => <span key={id}>{content}</span>)}
              </div>
              <S.EnterpriseButton as="a" href="#contact">
                ENVIAR MENSAGEM
              </S.EnterpriseButton>
            </div>
            <Image
              src={service.image?.src || ""}
              alt={service.title}
              fill
              style={{ objectFit: "cover", zIndex: 1, opacity: "30%", filter: "blur(6px)" }}
            />
          </li>
        );
      })}
    </S.ServiceListWrapper>
  );
}
