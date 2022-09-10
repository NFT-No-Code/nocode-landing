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

  color: rgba(var(--secondary-00), 0.87);
  background-color: #111111;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

`;
