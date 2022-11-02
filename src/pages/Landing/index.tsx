import Header from "../../components/Header";
import {
  BenefitsSection,
  CopyContent,
  CopyImage,
  CopyText,
  CTAButton,
  FaqSection,
  InfoSection,
  InfoText,
  InitialCopy,
  TeamContainer,
  TeamDetails,
  TeamSection,
  TeamText,
} from "./styles";
import mediaImg from "../../assets/mediapost.png";
import BenefitItem from "./components/BenefitItem";
import BitcoinPane from "../../assets/bitcoin-pane.png";
import SurprisePane from "../../assets/surprise-pane.png";
import VerifyPane from "../../assets/verify-pane.png";
import Footer from "./components/Footer";
import TeamList from "./components/TeamList";
import { TeamWords } from "./components/TeamWords";
import Button from "../../components/Button";

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
      <BenefitsSection id="benefits-section">
        <h2>Porque usar a colecionavel.digital 👇</h2>
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
      <InfoSection id="info-section">
        <InfoText>
          <h2>Como funciona?</h2>
          <ul>
            <li>
              ☝️ Criar uma carteira <strong>Metamask</strong> para ter um endereço na <strong>Web3</strong>.
            </li>
            <li>
              ✌️ Selecionar os <strong>colecionáveis digitais</strong> do seu computador ou celular.
            </li>
            <li>‍👌 Colar o seu endereço Web3 para receber os NFTs.</li>
            <li>🤳 Compartilhar com sua comunidade no Instagram.</li>
          </ul>
        </InfoText>
        <CTAButton as="a" href="https://app.colecionavel.digital/" target="_blank">
          🔥 COMEÇAR AGORA
        </CTAButton>
      </InfoSection>
      <TeamSection id="team-section">
        <h2>Conheça nosso time</h2>
        <TeamContainer>
          <div>
            <TeamList />
          </div>
          <TeamText>
            <h4>Nossa história começou no</h4>
            <h3>Curso de DeFi Lift Learning</h3>
            <p>
              promovido pelo Laboratório de Inovações Financeiras e Tecnológicas do Banco Central do Brasil e pela Universidade de Brasília
              com apoio da <strong>Mercado Bitcoin</strong>, em 2022.
            </p>
            <p>
              Somos a <strong>1ª plataforma nocode</strong> a democratizar e facilitar a criação de{" "}
              <strong>colecionáveis digitais (NFTs)</strong> no Instagram!
            </p>
          </TeamText>
          <TeamDetails>
            <TeamWords />
            <a href="mailto:gm@colecionavel.digital">Falar com o time</a>
          </TeamDetails>
        </TeamContainer>
      </TeamSection>
      <FaqSection id="faq-section">
        <h2>🤔 Perguntas frequentes</h2>
        <hr className="titleBreak" />
        <details>
          <summary>Porque criar e compartilhar colecionáveis digitais no Instagram?</summary>
          <p>
            Os NFTs são itens únicos que comprovam que você detêm aquela arte, meme, certificado ou ingresso, por exemplo. Agora você tem a
            possibilidade de compartilhar seus itens digitais com sua comunidade de seguidores, e administradores da sua página.
          </p>
        </details>
        <hr />
        <details>
          <summary>Quanto custa para usar a colecionável.digital?</summary>
          <p>
            Hoje você paga apenas a taxa de transação na blockchain, podendo fazê-la através de uma testnet da Ethereum, como é o caso da
            Goerli. Em breve será possível fazer este pagamento via PIX, sem a necessidade de ter criptomoedas, previsto para fevereiro de
            2023.
          </p>
        </details>
        <hr />
        <details>
          <summary>Posso transferir meus colecionáveis digitais?</summary>
          <p>
            Sim. Ao realizar a criação da coleção NFT, você será o proprietário daquele item, logo você tem toda a liberdade para transferir
            para outra carteira sua ou uma carteira terceiro, como a dos seus seguidores do instagram.
          </p>
        </details>
        <hr />
        <details>
          <summary>Posso ter colecionáveis digitais no Instagram sem precisar a plataforma?</summary>
          <p>
            Sim, claro! Você pode fazer o processo tradicional para ter seus primeiros NFTs. Você vai precisar criar uma conta em uma
            corretora de criptomoedas, enviar seus documentos, depositar reais, trocar os reais pela criptomoeda da rede blockchain que você
            deseja utilizar, transferir essas criptomoedas para sua carteira, e em seguida mintar sua coleção NFT em um marketplace como o
            Opensea.
          </p>
        </details>
        <hr />
      </FaqSection>
      <Footer />
    </>
  );
}
