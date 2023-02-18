import { ButtonWrapper, FooterSection, LinkColumn, SiteInfo, SiteLinks, SocialLinks } from "./styles";
import Logo from "../../../assets/logo.svg";
import { AiFillInstagram, AiOutlineArrowUp, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterSection>
      <SiteInfo>
        <Image src={Logo} alt="Logo do colecionável.digital" className="footerLogo"/>
        <p>© 2022-2023 colecionavel.digital Todos os direitos reservados.</p>
        <SocialLinks>
          <a href="https://www.instagram.com/colecionavel.digital/" target="_blank" rel="noreferrer">
            <AiFillInstagram size={48} />
          </a>
          <a href="https://linkedin.com/company/colecionaveldigital" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={48} />
          </a>
          <a href="https://www.youtube.com/channel/colecionaveldigital" target="_blank" rel="noreferrer">
            <AiFillYoutube size={48} />
          </a>
        </SocialLinks>
      </SiteInfo>
      <SiteLinks>
        <LinkColumn>
          <p>Links</p>
          <a href="#" target="_blank">
            Política de privacidade
          </a>
          <a href="https://bit.ly/whitepaper-colecionavel" target="_blank" rel="noreferrer">
            Whitepaper
          </a>
        </LinkColumn>
      </SiteLinks>
      <ButtonWrapper>
        <a href="#">
          <AiOutlineArrowUp />
        </a>
      </ButtonWrapper>
    </FooterSection>
  );
}
