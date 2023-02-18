import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { Poppins, Barlow, Inter } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        <style jsx global>{`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
            --font-barlow: ${barlow.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
      }
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
