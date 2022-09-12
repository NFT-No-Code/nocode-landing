import { ButtonWrapper, FooterSection, LinkColumn, SiteInfo, SiteLinks } from "./styles";
import Logo from "../../../../assets/logo.svg";
import { AiFillInstagram, AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterSection>
      <SiteInfo>
        <img src={Logo} alt="Logo do colecionável.digital" className="footerLogo" />
        <p>© 2022-2022 colecionavel.digital Todos os direitos reservados.</p>
        <AiFillInstagram size={48} />
      </SiteInfo>
      <SiteLinks>
        <LinkColumn>
          <p>Links</p>
          <a href="#">Política de privacidade</a>
        </LinkColumn>
        <LinkColumn>
          <p>Site</p>
          <a href="#">Início</a>
          <a href="#benefits-section">Vantagens</a>
          <a href="#info-section">Como funciona</a>
          <a href="#team-section">Time</a>
          <a href="#faq-section">FAQ</a>
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
