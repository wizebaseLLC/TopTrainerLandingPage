// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
