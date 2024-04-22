import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Container } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container h='100%' w='100%'border='1px' borderColor='#000' borderStyle='solid'
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Main
    </Container>
  );
}
