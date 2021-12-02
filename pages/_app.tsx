import type { AppProps } from "next/app";
import { UseWalletProvider } from "use-wallet";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider>
      <Component {...pageProps} />
    </UseWalletProvider>
  );
}

export default MyApp;
