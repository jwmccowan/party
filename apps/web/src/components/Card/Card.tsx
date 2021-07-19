import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export interface CardProps extends Omit<BoxProps, "variant"> {
  variant?: "smooth" | "rounded";
}

export function Card({ children, variant, ...rest }: CardProps): JSX.Element {
  const styles = useStyleConfig("Card", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}
