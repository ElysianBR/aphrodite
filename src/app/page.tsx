"use client";

import "react";
import { useTheme, Box } from "@mui/material";
import TopPageCanvas from "@/components/top-page-canvas/top-page-canvas";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeSection from "./home-section";
import ScrollbarCustom from "@/components/scroll-bar/scrollbar";
import { GetBreakpoint } from "@/utils/utils";
import ContactSection from "./contact";
import AboutSection from "./about-section";
import { Link } from "./types";
import PlansSection from "../components/plans/plans-section";


const linksArray: Link[] = [
  { text: "Home", href: "#home", id: "home" },
  { text: "Sobre", href: "#about", id: "about" },
  // { text: "Planos", href: "#plans", id: "plans" },
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
          {/* <PlansSection /> */}
          <ContactSection isMobile={isMobile} />
          <Footer />
        </Box>
      </ScrollbarCustom>
    </main>
  );
}
