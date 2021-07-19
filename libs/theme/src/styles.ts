import { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: ({ colorMode }) => ({
    body: {
      background: colorMode === "dark" ? "gray.800" : "gray.200",
      fontFamily: "Poppins,sans-serif"
    }
  })
};
