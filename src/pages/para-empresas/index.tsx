import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@/hooks/hooks";
import { Form } from "@unform/web";
import { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import * as Yup from "yup";
import { contactFormSchema } from "schemas";
import { FormHandles, SubmitHandler } from "@unform/core";

import HeadSEO from "@/components/HeadSEO";
import InfoCard from "@/components/InfoCard";
import Input from "@/components/Input";
import TextArea from "@/components/Textarea";
import * as S from "../../styles/para-empresas";

import Logo from "../../assets/logo-white.svg";
import Tetra1 from "../../assets/tetra_1.png";
import Tetra2 from "../../assets/tetra_2.png";
import Tetra3 from "../../assets/tetra_3.png";
import Block from "../../assets/block.png";
import Matrix3D from "../../assets/matrix.png";
import ChatIcon from "../../assets/chat.svg";
import BusinessPane from "../../assets/business.svg";

import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineOfficeBuilding,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";
import {
  MdDocumentScanner,
  MdGames,
  MdGeneratingTokens,
  MdOutlineDocumentScanner,
  MdOutlineStorage,
} from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import ServicePanel from "@/components/ServicePanel";
import WorkSteps from "@/components/WorkSteps";

interface FormData {
  name: string;
  email: string;
  phone: string;
  enterprise: string;
  message: string;
}

interface IValidationError {
  [key: string]: string;
}

export default function BussinessPage() {
  const scrollPosition = useScrollPosition();
  const formRef = useRef<FormHandles>(null);

  const [sliderRef, sliderInstance] = useKeenSlider({
    range: {
      align: true,
    },
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  const [workSliderRef, workSliderInstance] = useKeenSlider({
    range: {
      align: false,
    },
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
        },
      },
    },
  });

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      formRef.current!.setErrors({});

      await contactFormSchema.validate(data, { abortEarly: false });
      console.log(data);
    } catch (err) {
      const validationErrors = {} as IValidationError;
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        formRef.current!.setErrors(validationErrors);
      }
    }
  };

  // arrumar metadados da página
  // submit com api
  // tracking

  return (
    <>
      <HeadSEO />
      <S.HeaderEntreprises scrollPosition={scrollPosition}>
        <S.HeaderContainer>
          <figure>
            <Image src={Logo} alt="Logo do colecionavel.digital" />
          </figure>
          <S.EnterpriseButton>
            <a href="#contact">
              <span>CONTATE-NOS</span>
              <Image src={ChatIcon} alt="" className="bgDetailImage" />
            </a>
          </S.EnterpriseButton>
        </S.HeaderContainer>
      </S.HeaderEntreprises>
      <S.MainContent>
        <Image src={Tetra1} alt="" className="bgDetailImage" id="tetra1" />
        <Image src={Tetra2} alt="" className="bgDetailImage" id="tetra2" />
        <Image src={Tetra3} alt="" className="bgDetailImage" id="tetra3" />
        <S.MainContainer>
          <section className="mainCopy">
            <small>COLECIONAVEL.DIGITAL</small>
            <h1>Consultoria e desenvolvimento de soluções corporativas na Web3</h1>
            <p>
              Ajudamos empresas inovadoras a ingressar no mundo da Web3 e gerar resultados de
              negócio através da tecnologia blockchain
            </p>
            <Image src={Matrix3D} alt="" />
          </section>
          <section className="dividedSection">
            <div>
              <h2>Seu negócio na Web3</h2>
              <p>
                Acreditamos no poder da tecnologia web3 para transformar a forma como conduzimos os
                negócios. Somos apaixonados por trazer os benefícios do blockchain para a vanguarda
                do economia digital e criando soluções inovadoras que atendam às necessidades de
                nossos clientes.
              </p>
              <p>
                Nossa equipe de especialistas está empenhada em permanecer à frente, desenvolvendo
                continuamente novas estratégias que aproveitam o que há de mais moderno em
                tecnologia web3 para fornecer aos nossos clientes uma vantagem competitiva.
              </p>
              <S.EnterpriseButton as="a" href="#contact">
                CONTATE-NOS
              </S.EnterpriseButton>
            </div>
            <div>
              <Image src={BusinessPane} alt="" />
            </div>
          </section>
          <div className="blockDivision">
            <Image src={Block} alt="" />
          </div>
          <ServicePanel />
          <section className="workStepsSection">
            <div className="heading">
              <h2>Como trabalhamos?</h2>
              <div>
                <button onClick={() => workSliderInstance.current?.prev()}>
                  <HiArrowLeft />
                </button>
                <button onClick={() => workSliderInstance.current?.next()}>
                  <HiArrowRight />
                </button>
              </div>
            </div>
            <WorkSteps workSliderRef={workSliderRef} />
            <S.EnterpriseButton as="a" href="#contact">
              CONTATE-NOS
            </S.EnterpriseButton>
          </section>
          <section className="cardSection">
            <div>
              <h2>Aplicações da tecnologia descentralizada</h2>
              <p>
                Integre a tecnologia Web3 em seu negócio e desbloqueie um novo mundo de
                possibilidades. Com aplicações descentralizadas, contratos inteligentes e soluções
                blockchain, você pode otimizar processos, aumentar a transparência e construir
                confiança com seus clientes. Explore o potencial do Web3 e descubra como ele pode
                revolucionar seu negócio.
              </p>
            </div>
            <ul ref={sliderRef} className="keen-slider">
              <InfoCard
                className="keen-slider__slide"
                title="Tokenização"
                content="Novas formas de captação de recursos, programas de recompensas ou até programas de fidelidade do cliente. Através da criação e gerência ativos digitais, como tokens ou criptomoedas."
                icon={<MdGeneratingTokens />}
              />
              <InfoCard
                className="keen-slider__slide"
                title="Colecionáveis Digitais"
                content="Os colecionáveis digitais oferecem uma maneira nova e empolgante para as empresas interagirem com seus fãs e clientes. Ao criar itens únicos e colecionáveis, as empresas podem aumentar o engajamento e a lealdade."
                icon={<RiGalleryFill />}
              />
              <InfoCard
                className="keen-slider__slide"
                title="Contratos Inteligentes"
                content="Contratos inteligentes são programas que funcionam em uma rede blockchain. Eles permitem que as empresas automatizem processos complexos, como transações financeiras e acordos legais, sem a necessidade de intermediários."
                icon={<MdOutlineDocumentScanner />}
              />
              <InfoCard
                className="keen-slider__slide"
                title="Gamificação"
                content="A gamificação é uma técnica de engajamento que usa elementos de jogos para tornar as experiências dos usuários mais envolventes e divertidas. A tecnologia web3 permite que as empresas criem jogos baseados em blockchain que oferecem recompensas em criptomoedas ou tokens."
                icon={<MdGames />}
              />
              <InfoCard
                className="keen-slider__slide"
                title="Armazenamento"
                content="Armazenamento de dados descentralizado é uma aplicação da tecnologia web3 que permite que os usuários armazenem e acessem dados de maneira segura e descentralizada, sem confiar em serviços centralizados."
                icon={<MdOutlineStorage />}
              />
            </ul>
          </section>
          <section className="contactSection" id="contact">
            <div>
              <h2>Fale conosco!</h2>
              <p>
                Pronto para trazer o poder da Web3 para o seu negócio? Entre em contato conosco hoje
                para discutir como podemos ajudá-lo a aproveitar o potencial da tecnologia
                descentralizada e levar o seu negócio para o próximo nível.
              </p>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                  name="name"
                  label="Nome completo"
                  placeholder="Fulano da Silva"
                  type="text"
                  icon={<HiOutlineUserCircle />}
                />
                <Input
                  name="email"
                  label="E-mail para contato"
                  placeholder="fulanosilva@email.com"
                  type="email"
                  icon={<HiOutlineMail />}
                />
                <Input
                  name="phone"
                  label="Telefone para contato"
                  placeholder="99999999999"
                  type="text"
                  icon={<HiOutlinePhone />}
                />
                <Input
                  name="enterprise"
                  label="Nome da empresa"
                  placeholder="Fulano Empresa LTDA"
                  type="text"
                  icon={<HiOutlineOfficeBuilding />}
                />
                <TextArea
                  name="message"
                  label="Sua mensagem"
                  placeholder="Descreva aqui suas dúvidas, necessidades, etc."
                />
                <S.EnterpriseButton>ENVIAR MENSAGEM</S.EnterpriseButton>
              </Form>
            </div>
          </section>
        </S.MainContainer>
      </S.MainContent>
      <S.Footer>
        <S.FooterContent>
          <a className="backToTopButton" href="#">
            <AiOutlineArrowUp size={32} />
          </a>
          <div className="footerHeader">
            <figure>
              <Image src={Logo} alt="Logo do colecionavel.digital" />
            </figure>
            <nav>
              <a href="#">Início</a>
              <Link href="/" target="_blank">
                Página Inicial - Crie seu NFT
              </Link>
            </nav>
          </div>
          <div className="footerEnd">
            <p>©️ 2022-2023 colecionavel.digital. Todos os direitos reservados.</p>
            <div className="socialIcons">
              <a
                href="https://www.instagram.com/colecionavel.digital/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/colecionaveldigital"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/colecionaveldigital"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube size={24} />
              </a>
            </div>
          </div>
        </S.FooterContent>
      </S.Footer>
    </>
  );
}
