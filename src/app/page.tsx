"use client";

import "react";
import { Typography, Grid, useTheme, useMediaQuery, Container, Box } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import TopPageCanvas from "@/components/top-page-canvas/top-page-canvas";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeSection from "./homeSection";
import ScrollbarCustom from "@/components/scroll-bar/scrollbar";
import { GetBreakpoint } from "@/utils/utils";

const roboto = Roboto_Condensed({ subsets: ["latin"], });


export default function Home() {
  const theme = useTheme();
  const beackpoint = GetBreakpoint(theme)
  const isMobile = beackpoint == 'xs' || beackpoint == 'sm';

  return (
    <main>
      <ScrollbarCustom>
        <TopPageCanvas />
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header />
          <HomeSection />

          {/* Introdução Impactante */}
          <section id="about">
          <Box bgcolor="secondary.main" color="primary.contrastText" py={5}>
            <Container>
              <Typography variant={isMobile ? 'h5' : 'h3'} textAlign="center" gutterBottom>
                Transforme seu negócio com a blockchain
              </Typography>
              <Typography variant="body1" textAlign="center">
                Entre na nova era digital e revolucione o mercado com soluções blockchain inovadoras.
              </Typography>
            </Container>
          </Box>

          {/* Seção de Vantagens */}
          <Box py={5}>
            <Container>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" textAlign="center" gutterBottom>
                    Segurança Máxima
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Garanta a segurança dos dados com criptografia avançada e tecnologia de ponta.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" textAlign="center" gutterBottom>
                    Eficiência e Velocidade
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Processe transações rapidamente, sem intermediários, reduzindo custos e tempo.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" textAlign="center" gutterBottom>
                    Inovação e Crescimento
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Explore novos modelos de negócios e abra portas para o crescimento exponencial.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Chamada para Ação */}
          <Box bgcolor="secondary.main" color="primary.contrastText" py={5}>
            <Container>
              <Typography variant={isMobile ? 'h5' : 'h4'} textAlign="center" gutterBottom>
                Pronto para revolucionar seu negócio?
              </Typography>
              <Typography variant="h6" textAlign="center">
                Entre em contato conosco hoje mesmo e dê o primeiro passo para o futuro!
              </Typography>
            </Container>
          </Box>
          </section>

          <Footer />
        </Box>
      </ScrollbarCustom>
    </main>
  );
}