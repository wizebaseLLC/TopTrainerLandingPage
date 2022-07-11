// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
const colors = {
  brand: {
    background: "#191A32",
    tertiary: "#3CDFF0",
    secondary: "#7ACD2E",
    primary: "#FBBC21",
  },
};

const styles = {
  global: {
    body: {
      bg: "#191A32",
    },
  },
  fonts: {},
};

const theme = extendTheme({ colors, styles });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Top Trainer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/icons/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
