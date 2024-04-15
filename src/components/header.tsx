import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Roboto_Condensed } from "next/font/google";

// Tipagem para os links
interface Link {
  text: string;
  href: string;
  id: string;
}

// Tipagem para as props do LinkButton
interface LinkButtonProps {
  link: Link;
  index: number;
  currentSection: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
}

// Componente LinkButton com tipos explicitamente definidos
const LinkButton: React.FC<LinkButtonProps> = ({ link, index, currentSection, setCurrentSection }) => (
  <Button
    href={link.href}
    color="inherit"
    sx={{
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "none",
      color: "white",
      textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
      textDecoration: index === currentSection ? "underline" : "none",
    }}
    onMouseEnter={() => setCurrentSection(index)}
  >
    {link.text}
  </Button>
);

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "600" });

const linksArray: Link[] = [
  { text: "Home", href: "#home", id: "home" },
  { text: "Sobre", href: "#about", id: "about" },
  { text: "Contato", href: "#contact", id: "contact" },
];

const Header: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const setCenterSection = () => {
      const center = window.innerHeight / 2;
      let minDistance = Number.MAX_VALUE;

      linksArray.forEach((link, index) => {
        const element = document.getElementById(link.id);
        if (element) {
          const verticalPosition = element.getBoundingClientRect().top + (element.clientHeight / 2);
          const distance = Math.abs(verticalPosition - center);
          if (distance < minDistance) {
            minDistance = distance;
            setCurrentSection(index);
          }
        }
      });
    };

    document.addEventListener('scroll', setCenterSection);
    return () => {
      document.removeEventListener('scroll', setCenterSection);
    };
  }, []);

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar variant="dense">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs>
            <Typography variant="h6" sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "white",
              textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
            }}>
              Elysian
            </Typography>
          </Grid>
          {!isMobile && linksArray.map((link, index) => (
            <Grid item key={link.id}>
              <LinkButton link={link} index={index} currentSection={currentSection} setCurrentSection={setCurrentSection} />
            </Grid>
          ))}
          {isMobile && (
            <Grid item>
              <IconButton
                aria-label="menu"
                sx={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  '&:hover': { backgroundColor: "rgba(255, 255, 255, 0.7)" }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
