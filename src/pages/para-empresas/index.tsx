import Image from "next/image";
import { useScrollPosition } from "@/hooks/hooks";
import { Form } from "@unform/web";
import { useRef } from "react";

import HeadSEO from "@/components/HeadSEO";
import * as S from "./styles";

import Logo from "../../assets/logo-white.svg";
import Tetra1 from "../../assets/tetra_1.png";
import Tetra2 from "../../assets/tetra_2.png";
import Tetra3 from "../../assets/tetra_3.png";
import Block from "../../assets/block.png";
import Matrix3D from "../../assets/matrix.png";
import ChatIcon from "../../assets/chat.svg";

import {
  HiOutlineUserCircle,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

import tempImage from "../../assets/bitcoin-pane.png";
import InfoCard from "@/components/InfoCard";
import Input from "@/components/Input";
import TextArea from "@/components/Textarea";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";

export default function BussinessPage() {
  const scrollPosition = useScrollPosition();
  const formRef = useRef(null);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  // arrumar cards
  // validação do form, com função de submit
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
            <h1>Soluções corporativas através de colecionáveis digitais (NFTs)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit massa.
              Vivamus porttitor risus eu quam ultrices finibus. Duis lectus eros, cursus nec tempus
              id, dapibus nec mi.
            </p>
            <Image src={Matrix3D} alt="" />
          </section>
          <section className="dividedSection">
            <div>
              <h2>Seu negócio na Web3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit massa.
                Vivamus porttitor risus eu quam ultrices finibus. Duis lectus eros, cursus nec
                tempus id, dapibus nec mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit massa. Vivamus porttitor risus eu quam ultrices finibus. Duis
                lectus eros, cursus nec tempus id, dapibus nec mi.
              </p>
              <S.EnterpriseButton>CONTATE-NOS</S.EnterpriseButton>
            </div>
            <div>
              <Image src={tempImage} alt="tempImage" />
            </div>
          </section>
          <div className="blockDivision">
            <Image src={Block} alt="" />
          </div>
          <section className="cardSection">
            <div>
              <h2>Algumas aplicações</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iusto voluptatem
                architecto at modi harum, consequuntur eaque placeat consectetur alias sit neque ab
                nobis eos, iure necessitatibus delectus nemo voluptatibus?
              </p>
            </div>
            <ul>
              <InfoCard
                title="Lorem Ipsum"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit massa.
                Vivamus porttitor risus eu quam ultrices finibus. Duis lectus eros, cursus nec
                tempus id, dapibus nec mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit massa. Vivamus porttitor risus eu quam ultrices finibus. Duis
                lectus eros, cursus nec tempus id, dapibus nec mi."
                icon={ChatIcon}
              />
              <InfoCard
                title="Lorem Ipsum"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit massa.
                Vivamus porttitor risus eu quam ultrices finibus. Duis lectus eros, cursus nec
                tempus id, dapibus nec mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit massa. Vivamus porttitor risus eu quam ultrices finibus. Duis
                lectus eros, cursus nec tempus id, dapibus nec mi."
                icon={ChatIcon}
              />
              <InfoCard
                title="Lorem Ipsum"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit massa.
                Vivamus porttitor risus eu quam ultrices finibus. Duis lectus eros, cursus nec
                tempus id, dapibus nec mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla vitae elit massa. Vivamus porttitor risus eu quam ultrices finibus. Duis
                lectus eros, cursus nec tempus id, dapibus nec mi."
                icon={ChatIcon}
              />
            </ul>
          </section>
          <section className="contactSection" id="contact">
            <div>
              <h2>Fale conosco!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iusto voluptatem
                architecto at modi harum, consequuntur eaque placeat consectetur alias sit neque ab
                nobis eos, iure necessitatibus delectus nemo voluptatibus?
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
                  placeholder="(99) 99999-9999"
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
                Crie seu NFT
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
