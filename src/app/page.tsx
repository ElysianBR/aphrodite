"use client";

import { useEffect }  from "react";
import { Typography, Grid, useTheme, useMediaQuery, Container, Box } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import TopPageCanvas from "@/components/top-page-canvas";
import Header from "@/components/header";
import Footer from "@/components/footer";
import scrollBar from "@/components/scrollBar";

const roboto = Roboto_Condensed({ subsets: ["latin"], });
const roboto_title = Roboto_Condensed({ subsets: ["latin"], weight: "800" });


export default function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));


  return (
    <main>
      <TopPageCanvas></TopPageCanvas>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header></Header>
        <Container style={{ flex: 1 }}>
          {/* titulo e frase de efeito  */}
          <section>
            <Grid
              // divide a tela na horizontal, em dispositivos pequenos usa toda a horizontal
              container
              direction={"row"}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              alignItems="flex-end"
              justifyContent={isXs || isSm ? "center" : "flex-end"}
            >
              <Grid
                container
                direction={"column"}
                alignItems={isXs || isSm ? "center" : "flex-end"}
                justifyContent={isXs || isSm ? "flex-start" : "flex-end"}
                minHeight={isXs || isSm ? 0 : "50vh"}
              >
                <Grid item style={{ mixBlendMode: "difference" }}>
                  <Typography
                    style={Object.assign({}, roboto_title.style)}
                    fontSize={"10vw"}
                    fontFamily={"unset"}
                  >
                    Elysian
                  </Typography>
                  <Typography
                    variant={"overline"}
                    fontSize={"1.5vw"}
                    fontFamily={"unset"}
                  >
                    Uma nova forma de fazer integrações
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </section>
          <section>
            <Grid container
              direction={"row"}
              alignItems="flex-start"
              justifyContent={isXs || isSm ? "center" : "flex-end"}
              marginTop={"5%"}
            >
              <Grid direction={"row"}
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}>
                <Typography
                  style={Object.assign({}, roboto.style)}
                  fontFamily={"unset"}
                  textAlign={isXs || isSm ? "center" : "end"}
                  variant={"h4"}
                >
                  Que tal conectar o seu negócio com a Blockchain?
                </Typography>
                <Typography
                  style={Object.assign({}, roboto.style)}
                  fontFamily={"unset"}
                  textAlign="justify"
                  variant={"subtitle1"}
                >
                  Somos uma startup de tecnologia que tem seu foco no desenvolvimento de soluções para blockchain.
                  <br></br>
                  Leve hoje a sua empresa para um outro nível, fazendo com que seus dados se tornem 100% distribuídos e criptografados.
                </Typography>
              </Grid>
            </Grid>
          </section>
        </Container>
        <Footer></Footer>
      </Box>
    </main>
  );
}
