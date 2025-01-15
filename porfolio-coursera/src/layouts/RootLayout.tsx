import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Toaster />
      <Container
        paddingTop={""}
        centerContent={true}
        colorPalette={"cyan"}
        minH={"100dvh"}
      >
        <Flex
          direction={"column"}
          grow={1}
          as="main"
          w="100%"
          paddingBlock={"4"}
        >
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
}
