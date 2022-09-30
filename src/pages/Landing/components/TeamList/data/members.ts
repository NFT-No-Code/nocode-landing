interface ISocialMediaKeys {
  [key: string]: string | undefined;
}

interface ISocialMedia extends ISocialMediaKeys {
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
}

export interface ITeamMember {
  name: string;
  description: string;
  pfp: string;
  cover?: string;
  social_media?: ISocialMedia;
  id: string;
}

export const teamMembersData: ITeamMember[] = [
  {
    name: "Marcos Gaius",
    description:
      "Desenvolvedor Frontend. Entusiasta da Web3, trabalhando para ajudar o amanhã ser melhor que o hoje, assumindo a responsabilidade do Ser. We Are Gonna ₿uild It!",
    pfp: "https://i.imgur.com/pihpN7o.png",
    social_media: {
      linkedin: "https://www.linkedin.com/in/marcos-gaius/",
      github: "https://github.com/MarcosGaius",
    },
    cover: "https://i.imgur.com/LU7XxEY.png",
    id: "1",
  },
  {
    name: "Tiago Ferreira Cavazin",
    description:
      "Acadêmico de Administração, Empreendedor com participação em mais de 4 projetos, founder do token ERC20 FITCASH-FTH captando leads em 117 países, ganhador de 2º Prêmios nacionais no segmento de startups, ganhador do 'Selo Empreendedor' do Angel Club Investor, Mentor de startup e Consultor de WEB3.",
    pfp: "https://i.imgur.com/fM0z3h5.png",
    social_media: {
      twitter: "https://twitter.com/tiagofcavazin",
      linkedin: "https://www.linkedin.com/in/tiagoferreiracavazin/",
      instagram: "https://www.instagram.com/tcavazin/",
      github: "https://github.com/cavazinf",
    },
    cover: "https://i.imgur.com/1X1YU48.png",
    id: "2",
  },
  {
    name: "Guilherme Henriques Monteiro",
    description:
      "Estudante de Ciência da Computação na Universidade Vila Velha, atualmente no 6° período e estudando Golang, JavaScript, Solidity e Web3.",
    pfp: "https://i.imgur.com/yuprR7q.png",
    social_media: {
      linkedin: "https://www.linkedin.com/in/guilherme-henriques-monteiro-11a2a2217/",
      github: "https://github.com/GuihermeHenriquesM",
    },
    id: "3",
  },
  {
    name: "Gabriel Figueira",
    description:
      "Profissional de Marketing para empresas tech do Brasil, Índia e Colômbia, formado em publicidade, análise e desenvolvimento de sistemas e pós graduado em gestão de negócios sustentáveis. Pesquisador de DeFi e WEB3 desde 2019.",
    pfp: "https://i.imgur.com/4rugEMg.png",
    social_media: {
      linkedin: "https://www.linkedin.com/in/gfigueira/",
    },
    cover:
      "https://media-exp1.licdn.com/dms/image/C4E16AQHPcFvRb76zrg/profile-displaybackgroundimage-shrink_350_1400/0/1521047695085?e=1668643200&v=beta&t=QDm49_AeFKvknYabeV0sYvu5MAUYj4gElQYihj-M7g8",
    id: "4",
  },
  {
    name: "Samuel Schramm Meurer",
    description:
      "Discente do curso de Engenharia de Controle e Automação na Universidade Federal de Santa Catarina, pós-MEJ, atualmente estudando negócios escaláveis e  desenvolvendo a startup Infinity que está inserida no universo de Web 3.0.",
    pfp: "https://i.imgur.com/Iydut1Z.png",
    id: "5",
  },
];
