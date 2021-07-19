import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    textTransform: "uppercase",
    borderRadius: "xl",
    margin: 2 // TODO: this is temporary
  },
  defaultProps: {
    variant: "outline",
    size: "md"
  },
  sizes: {
    md: {
      fontSize: "md",
      px: 4,
      py: 4
    },
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3
    }
  },
  variants: {
    outline: {
      border: "2px solid"
    }
  }
};
