import { ComponentStyleConfig } from "@chakra-ui/react";

export const Card: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    alignItems: "center",
    background: colorMode === "dark" ? "gray.600" : "white",
    boxShadow: "lg",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    p: 8
  }),
  defaultProps: {
    variant: "rounded"
  },
  variants: {
    rounded: {
      borderRadius: "xl"
    },
    smooth: {
      borderRadius: "sm"
    }
  }
};
