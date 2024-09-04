import React, { useEffect, useState, FC } from "react";
import { AppBar, Toolbar, Button, Grid, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Link } from "@/app/types";

interface LinkButtonProps {
  link: Link;
  index: number;
  currentSection: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, index, currentSection, setCurrentSection }) => (
  <Button
    color="inherit"
    href={link.href}
    onClick={() => setCurrentSection(index)}
    data-testid={`section-button-${link.id}`}
    sx={{
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "none",
      color: "white",
      textShadow: "0px 0px 8px rgba(0, 0, 0, 0.6)",
      textDecoration: index === currentSection ? "underline" : "none",
      '&:hover': {
        color: "#E4405F",
      }
    }}
  >
    {link.text}
  </Button>
);

export type HeaderProps = {
  links: Link[];
}

const Header: FC<HeaderProps> = (props) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const setCenterSection = () => {
      const center = window.innerHeight / 2;
      let minDistance = Number.MAX_VALUE;

      props.links.forEach((link, index) => {
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
  }, [props.links]);  // Adiciona props.links aqui

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar variant="dense" style={{ margin: 2, padding: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <a href="#home" data-testid="elysian-logo-button">
              <Image src="/logo_wo_bg.png" alt="Elysian Logo" width={40} height={40} style={{ cursor: 'pointer' }} className="logo-animation" />
            </a>
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
              {props.links.map((link, index) => (
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
          {props.links.map((link, index) => (
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
