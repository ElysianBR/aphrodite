import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from 'react-scroll';

interface Link {
  text: string;
  href: string;
  id: string;
}

interface LinkButtonProps {
  link: Link;
  index: number;
  currentSection: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, index, currentSection, setCurrentSection }) => (
  <ScrollLink
    to={link.id}
    smooth={true}
    duration={500}
    offset={-70}
    spy={true}
    onSetActive={() => setCurrentSection(index)}
  >
    <Button
      color="inherit"
      sx={{
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "none",
        color: "white",
        textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
        textDecoration: index === currentSection ? "underline" : "none",
        '&:hover': {
          color: "#fa0083",
        }
      }}
    >
      {link.text}
    </Button>
  </ScrollLink>
);

const linksArray: Link[] = [
  { text: "Home", href: "#home", id: "home" },
  { text: "Sobre", href: "#about", id: "about" },
  { text: "Contato", href: "#contact", id: "contact" },
];

const Header: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar variant="dense">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
              <img src="/logo_wo_bg.png" alt="Elysian Logo" style={{ height: '40px', cursor: 'pointer' }} />
            </ScrollLink>
          </Grid>
          {isMobile ? (
            <Grid item>
              <IconButton
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  '&:hover': { backgroundColor: "rgba(255, 255, 255, 0.7)" }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          ) : (
            <Grid item>
              {linksArray.map((link, index) => (
                <LinkButton key={link.id} link={link} index={index} currentSection={currentSection} setCurrentSection={setCurrentSection} />
              ))}
            </Grid>
          )}
        </Grid>
      </Toolbar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "rgba(0, 0, 0, 0.85)", color: "white", width: "250px", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" } }}
        transitionDuration={500}
      >
        <List>
          {linksArray.map((link, index) => (
            <ListItem button key={link.id} onClick={() => setCurrentSection(index)}>
              <LinkButton link={link} index={index} currentSection={currentSection} setCurrentSection={setCurrentSection} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
