import "../styles/globals.css";
import "../lib/hexStyles.css";
import { TwitterProvider } from "../context/TwitterContext";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  );
}

export default MyApp;
