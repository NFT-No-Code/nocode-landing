import { HeaderBtn, HeaderContainer, HeaderImage, HeaderNav } from "./styles";
import Logo from "../../assets/logo.svg";
import Button from "../Button";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderImage>
        <img src={Logo} alt="Logo do colecionável.digital" />
      </HeaderImage>
      <HeaderNav>
        <a href="#">Sobre</a>
        <a href="#">Como funciona</a>
        <a href="#">Perguntas Frequentes</a>
      </HeaderNav>
      <HeaderBtn>
        <Button>Acessar App</Button>
      </HeaderBtn>
    </HeaderContainer>
  );
}
