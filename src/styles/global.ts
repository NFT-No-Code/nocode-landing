import { createGlobalStyle } from "styled-components";
import { DarkTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: Poppins, Barlow, Inter, Avenir, Helvetica, Arial, sans-serif;
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
