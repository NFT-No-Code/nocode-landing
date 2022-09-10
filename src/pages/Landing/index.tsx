import Header from "../../components/Header";
import { InitialCopy } from "./styles";
import backgroundImg from "../../assets/background.svg";

export default function LandingPage() {
  return (
    <>
      <Header />
      <InitialCopy>
        <img src={backgroundImg} alt="Foto de fundo azul com detalhes blob rosa" />
      </InitialCopy>
    </>
  );
}
