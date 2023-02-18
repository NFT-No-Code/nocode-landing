import { createGlobalStyle } from "styled-components";
import { DarkTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior:smooth
  }
  
  * {
    box-sizing: border-box;
    font-family: var(--font-poppins), var(--font-barlow), var(--font-inter), Avenir, Helvetica, Arial, sans-serif;
   
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #dadada;
      background-clip: padding-box;
      border: 3px solid rgba(0,0,0,0.2);

      &:hover {
        background-color: #b6b6b6;
      }
    }
  }

  :root {
    ${DarkTheme}
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: rgba(var(--secondary-00));
    background-color: rgb(var(--background-00));

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    scrollbar-width: thin;
    scrollbar-color: #e3e3e3 transparent;
  } 

  a {
    font-weight: 400;
    color: rgb(var(--secondary-00), 0.5);
    text-decoration: inherit;
    font-size: 0.9rem;
    transition: all 0.3s;
  }
  a:hover {
    color: rgb(var(--secondary-00));;
  }

  body {
    margin: 0;
    min-height: 100vh;

    &.App {
      max-width: 100%;
      width: 100%;
    }
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  h2 {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
    }
`;
