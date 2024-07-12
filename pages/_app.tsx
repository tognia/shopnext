import "../styles/global.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font_open-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${open_sans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
