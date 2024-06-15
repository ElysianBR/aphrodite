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
import ContactSection from "./contact";
import AboutSection from "./aboutSection";
import { Link } from "./types";


const linksArray: Link[] = [
  { text: "Home", href: "#home", id: "home" },
  { text: "Sobre", href: "#about", id: "about" },
  { text: "Contato", href: "#contact", id: "contact" },
  { text: "Acesso", href: "/login", id: "login" },
];

export default function Home() {
  const theme = useTheme();
  const breakpoint = GetBreakpoint(theme);
  const isMobile: boolean = breakpoint == 'xs' || breakpoint == 'sm';

  return (
    <main>
      <ScrollbarCustom>
        <TopPageCanvas />
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header links={linksArray} />
          <HomeSection />
          <AboutSection isMobile={isMobile} />
          <ContactSection isMobile={isMobile} />
          <Footer />
        </Box>
      </ScrollbarCustom>
    </main>
  );
}
