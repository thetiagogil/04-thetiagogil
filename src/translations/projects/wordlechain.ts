import type { TranslationDictionary } from "@/translations/types";

export const wordlechainTranslations: TranslationDictionary = {
  project_wordlechain_subject: {
    en: "Wordle Game (Blockchain Edition)",
    pt: "Jogo Wordle (Edição Blockchain)",
  },
  project_wordlechain_description: {
    en: "A blockchain-based Wordle game built as a first introduction to Web3 development.",
    pt: "Um jogo Wordle em blockchain desenvolvido como primeira introdução ao desenvolvimento Web3.",
  },
  project_wordlechain_details: {
    en: {
      type: "sections",
      sections: [
        {
          title: "Overview",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "Wordlechain is a blockchain-based version of the Wordle game, built as my first project in a Web3 setting.",
              ],
              [
                "The goal was to explore how smart contracts and wallet interactions can be connected to a traditional web interface.",
              ],
            ],
          },
        },
        {
          title: "Highlights",
          content: {
            type: "list",
            items: [
              {
                text: ["Built a simple game connected to a custom ERC20 token"],
              },
              {
                text: ["Integrated wallet interaction using Web3 tools"],
              },
              {
                text: ["Worked with smart contracts as the backend logic"],
              },
              {
                text: [
                  "Combined blockchain concepts with a React-based frontend",
                ],
              },
            ],
          },
        },
        {
          title: "Challenges",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "First experience working in a Web3 environment, requiring a shift in how application state and interactions are handled",
                ],
              },
              {
                text: [
                  "Understanding how blockchain transactions differ from traditional request/response flows",
                ],
              },
              {
                text: [
                  "Integrating wallet interactions into the frontend experience",
                ],
              },
              {
                text: [
                  "Working with new tools and concepts with limited prior experience",
                ],
              },
            ],
          },
        },
      ],
    },
    pt: {
      type: "sections",
      sections: [
        {
          title: "Visão Geral",
          content: {
            type: "paragraphs",
            paragraphs: [
              [
                "O Wordlechain é uma versão em blockchain do jogo Wordle, desenvolvido como o meu primeiro projeto num contexto Web3.",
              ],
              [
                "O objetivo foi explorar como smart contracts e interações com carteiras podem ser ligadas a uma interface web tradicional.",
              ],
            ],
          },
        },
        {
          title: "Destaques",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Desenvolvimento de um jogo simples ligado a um token ERC20",
                ],
              },
              {
                text: [
                  "Integração de interações com carteira através de ferramentas Web3",
                ],
              },
              {
                text: [
                  "Utilização de smart contracts como lógica principal da aplicação",
                ],
              },
              {
                text: [
                  "Combinação de conceitos de blockchain com um frontend em React",
                ],
              },
            ],
          },
        },
        {
          title: "Desafios",
          content: {
            type: "list",
            items: [
              {
                text: [
                  "Primeira experiência num ambiente Web3, exigindo uma mudança na forma de pensar estado e interações da aplicação",
                ],
              },
              {
                text: [
                  "Compreender as diferenças entre transações em blockchain e aplicações tradicionais",
                ],
              },
              {
                text: ["Integrar interações com carteira no fluxo do frontend"],
              },
              {
                text: [
                  "Trabalhar com novas ferramentas e conceitos com pouca experiência prévia",
                ],
              },
            ],
          },
        },
      ],
    },
  },
};
