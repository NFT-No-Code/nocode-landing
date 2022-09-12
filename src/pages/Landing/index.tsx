import Header from "../../components/Header";
import { BenefitsSection, CopyContent, CopyImage, CopyText, InitialCopy } from "./styles";
import mediaImg from "../../assets/mediapost.jpg";
import BenefitItem from "./components/BenefitItem";
import BitcoinPane from "../../assets/bitcoin-pane.png";
import SurprisePane from "../../assets/surprise-pane.png";
import VerifyPane from "../../assets/verify-pane.png";

export default function LandingPage() {
  return (
    <>
      <Header />
      <InitialCopy>
        <CopyContent>
          <CopyText>
            <h1>
              Crie seus primeiros <span className="underlineImage">NFTs</span> e use no Instagram
            </h1>
            <p className="subtitleCopy">único, sem código e fácil de usar!</p>
            <p className="textCopy">
              Colecionáveis digitais são <strong>itens virtuais exclusivos</strong> ou de <strong>edição limitada</strong> que você pode
              criar e compartilhar com seus amigos e comunidade no Instagram. Eles usam a tecnologia blockchain para provar que você criou
              aquele <strong>certificado, ingresso, arte, ilustração, vídeo, música, meme</strong>...
            </p>
          </CopyText>
          <CopyImage>
            <img src={mediaImg} alt="Post, em uma rede social, de um NFT" />
          </CopyImage>
        </CopyContent>
      </InitialCopy>
      <BenefitsSection>
        <h2>Vantagens</h2>
        <BenefitItem
          title="Fácil e sem cripto"
          desc="Agora você não precisa mais saber de programação ou de criptomoedas para ter os seus primeiros NFTs. Nós fazemos a ponte!"
          imagePath={BitcoinPane}
          imageAlt="Imagem de uma moça, usando o celular, flutuando ao reder de moedas de Bitcoin"
        />
        <BenefitItem
          title="Edições limitadas"
          desc="Crie e compartilhe edições limitadas de itens digitais exclusivos para engajar com a sua comunidade de seguidores no Instagram. "
          imagePath={SurprisePane}
          imageAlt="Imagem de uma moça, usando seu notebook, comemorando um prêmio ganho."
          isReverse={true}
        />
        <BenefitItem
          title="100% Verificável"
          desc="A tecnologia blockchain permite validar a autenticidade dos ativos digitais de modo transparente e simples."
          imagePath={VerifyPane}
          imageAlt="Imagem de uma moça olhando para linhas de código com uma lupa."
        />
      </BenefitsSection>
    </>
  );
}
