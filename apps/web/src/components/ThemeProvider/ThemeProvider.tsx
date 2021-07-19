import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from "@chakra-ui/react";
import React from "react";
import theme from "@plunder/theme";

export interface ThemeProviderProps {
  children?: React.ReactNode;
  cookies: string;
}

export function ThemeProvider({
  cookies,
  children
}: ThemeProviderProps): JSX.Element {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

interface SSP {
  req: {
    headers: {
      cookie: string;
    };
  };
}

export function getServerSideProps({ req }: SSP) {
  return {
    props: {
      cookies: req.headers.cookie ?? ""
    }
  };
}
