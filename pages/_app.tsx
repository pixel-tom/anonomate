import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className="min-h-screen min-w-screen">
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={"auto 1fr auto"} // Adjusted to fit content appropriately
        gridTemplateColumns={"50px 1fr"} // Assuming nav needs a fixed width
        h="100vh" // Grid occupies full viewport height
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem h='60px' area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <Component {...pageProps} />
        </GridItem>
        <GridItem h='40'  area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
      
    </body>
  );
}
