import { Box, useStyleConfig } from "@chakra-ui/react";
import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  variant?: "smooth" | "rounded";
}

export function Card({ children, variant }: CardProps): JSX.Element {
  const styles = useStyleConfig("Card", { variant });
  return <Box __css={styles}>{children}</Box>;
}
