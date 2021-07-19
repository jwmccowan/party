import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Box as="nav" background="gray.700" py={4}>
        <Container>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Box alignItems="center" display="flex">
              <Image />
            </Box>
            <div>world</div>
          </Box>
        </Container>
      </Box>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </>
  );
}
