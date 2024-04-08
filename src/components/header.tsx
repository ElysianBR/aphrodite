"use client";

import { useState } from "react";
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

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "600" });

type links = {
  text: string;
  href: string;
};

const linksArray: links[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "Sobre",
    href: "#",
  },
  {
    text: "Contato",
    href: "#",
  },
];

export default function Header() {
  const [actual, setActual] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const [buttonMenuHover, setButtonMenuHover] = useState<boolean>(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

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
            elysian
          </Typography>
        </Grid>
        {linksArray.map((link, index) => (
          <Grid item key={index}>
            <Link
              href={link.href}
              underline={
                actual === index
                  ? "always"
                  : hover === index
                    ? "hover"
                    : "none"
              }
              color={"inherit"}
              style={Object.assign({}, roboto.style)}
              fontSize={"20px"}
              onClick={() => setActual(index)}
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
            elysian
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
    <AppBar position="static" color={"transparent"} variant="elevation">
      <Toolbar variant="dense" >
        {isXs || isSm ? compactionToolbar() : normalToolbar()}
      </Toolbar>
    </AppBar>
  );
}
