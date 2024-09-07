import "../styles/global.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font_open-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={`${open_sans.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
