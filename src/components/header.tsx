import React, { useState, useEffect, FC } from "react";
import { AppBar, Toolbar, Button, Grid, IconButton, Drawer, List, ListItemButton, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { Link } from "@/app/types";
import '../app/signup/signup.css';

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
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      textTransform: "none",
      color: "white",
      textShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
      position: "relative",
      padding: "4px 12px",
      transition: "all 0.3s ease",
      '&:hover': {
        color: "#E4405F",
        transform: "translateY(-2px)",
      },
      '&::after': {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: index === currentSection ? "100%" : "0%",
        height: "2px",
        backgroundColor: "#E4405F",
        transition: "all 0.3s ease",
        transform: "translateX(-50%)",
      },
      '&:hover::after': {
        width: "100%",
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
  const [isHovered, setIsHovered] = useState<boolean>(false); // Estado para hover
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Lógica para mudança de seção com scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <Toolbar 
        variant="dense" 
        sx={{ 
          minHeight: '48px',
          padding: '0 16px',
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <a href="#home" data-testid="elysian-logo-button">
              <div
                className="logo-login"
                style={{
                  transform: isHovered ? "rotate(360deg)" : "none",
                  transition: "transform 0.6s ease-in-out",
                }}
                onMouseEnter={() => setIsHovered(true)}  // Inicia rotação ao passar o mouse
                onMouseLeave={() => setIsHovered(false)} // Para a rotação ao sair o mouse
              >
                <Image 
                  src="/logo_wo_bg.png" 
                  alt="Elysian Logo" 
                  width={40} 
                  height={40} 
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            </a>
          </Grid>
          {isMobile ? (
            <Grid item>
              <IconButton
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  padding: '8px',
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  '&:hover': { 
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    transform: "scale(1.1)"
                  },
                  transition: "all 0.3s ease"
                }}
              >
                <MenuIcon fontSize="small" />
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
        PaperProps={{ 
          sx: { 
            backgroundColor: "rgba(0, 0, 0, 0.9)", 
            color: "white", 
            width: "280px", 
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)"
          } 
        }}
        transitionDuration={500}
      >
        <List>
          {props.links.map((link, index) => (
            <ListItemButton key={link.id} onClick={() => setCurrentSection(index)}>
              <LinkButton link={link} index={index} currentSection={currentSection} setCurrentSection={setCurrentSection} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;