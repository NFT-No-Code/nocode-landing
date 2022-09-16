import { StyledWordLi, StyledWordList } from "./styles";

export function TeamWords() {
  const wordArray = [
    "🕸️WEB3",
    "👾solidity",
    "🦄defi",
    "🖼️nfT",
    "📑smart contracts",
    "⛓️blockchain",
    "🧩DAO",
    "🪙token",
    "🎨front-end",
    "🤳crypto MARKETING",
    "📊dex",
    "🧙web design (UX/UI)",
    "⚒️builders",
  ];

  return (
    <StyledWordList>
      {wordArray.map((word) => (
        <StyledWordLi>{word}</StyledWordLi>
      ))}
    </StyledWordList>
  );
}
