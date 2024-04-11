"use client";

import { useEffect, useState } from "react";
import { Roboto_Condensed } from "next/font/google";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getBreakpoint } from "@/utils/utils";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "600" });

type links = {
  text: string;
  href: string;
  id: string,
};

const linksArray: links[] = [
  {
    text: "Home",
    href: "#home",
    id: "home",
  },
  {
    text: "Sobre",
    href: "#about",
    id: "about",
  },
  {
    text: "Contato",
    href: "#contact",
    id: "contact",
  },
];

export default function Header() {
  const [hover, setHover] = useState<number>(0);
  const [buttonMenuHover, setButtonMenuHover] = useState<boolean>(false);

  const theme = useTheme();
  const beackpoint = getBreakpoint(theme)
  const isMobile = beackpoint == 'xs' || beackpoint == 'sm';

  const [curentSection, setCurentSection] = useState<number>(0);
  useEffect(() => {
    document.addEventListener('scroll', setCenterSection);

    return () => {
      document.removeEventListener('scroll', setCenterSection);
    };
  }, [])

  const setCenterSection = () => {
    const center = window.innerHeight / 2;
    let minDistance = Number.MAX_VALUE;
  
    linksArray.forEach((e, i) => {
      const element = document.getElementById(e.id);
  
      if (element) {
        const verticalPositionElement = element.getBoundingClientRect().top + (element.clientHeight / 2);
        const distance = Math.abs(verticalPositionElement - center);
  
        if (distance < minDistance) {
          minDistance = distance; 
          setCurentSection(i);
        }
      }
    });
  };

  const normalToolbar = () => {
    return (
      <Grid
        container
        spacing={10}
        alignItems={"flex-end"}
        justifyContent="center"
      >
        <Grid item key={0}>
          <Typography
            style={Object.assign({}, roboto.style)}
            fontSize={"25px"}
          >
            Elysian
          </Typography>
        </Grid>
        {linksArray.map((link, index) => (
          <Grid item key={index}>
            <Link
              href={link.href}
              underline={
                curentSection === index
                  ? "always"
                  : hover === index
                    ? "hover"
                    : "none"
              }
              color={"inherit"}
              style={Object.assign({}, roboto.style)}
              fontSize={"20px"}
              onClick={() => setCurentSection(index)}
              onMouseOver={() => setHover(index)}
            >
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  const compactionToolbar = () => {
    return (
      <Grid container alignItems={"flex-end"} justifyContent="space-between">
        <Grid item>
          <Typography
            style={Object.assign({}, roboto.style)}
            fontSize={"25px"}
          >
            Elysian
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            size="medium"
            edge="start"
            aria-label="menu"
            color="inherit"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: buttonMenuHover
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.4)",
            }}
            onMouseOver={() => {
              setButtonMenuHover(true);
            }}
            onMouseOut={() => {
              setButtonMenuHover(false);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <AppBar position="sticky" color={"transparent"} variant="elevation">
      <Toolbar variant="dense" >
        {isMobile ? compactionToolbar() : normalToolbar()}
      </Toolbar>
    </AppBar>
  );
}