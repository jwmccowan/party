import { ChakraProvider } from "@chakra-ui/react";
import theme from "@plunder/theme";
import { AppProps } from "next/app";
import ThemeProvider from "components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
