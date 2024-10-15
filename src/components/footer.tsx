import * as React from "react";
import { AppBar, Toolbar, Typography, Grid, IconButton, Box, useTheme } from "@mui/material";
import { Instagram, LinkedIn, MailOutline, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();

  return (
    <section id="footer">
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="white" fontWeight="light">
                © 2024 Elysian
              </Typography>
              <Typography variant="body2" color="white" sx={{ mt: 1, opacity: 0.8 }}>
                Transformando cadeias de suprimentos com tecnologia Blockchain
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, gap: 2 }}>
                {[
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/elysianbrazil", hoverColor: theme.palette.secondary.main },
                  { icon: LinkedIn, label: "LinkedIn", href: "https://br.linkedin.com/company/elysianbr", hoverColor: theme.palette.secondary.main },
                  { icon: MailOutline, label: "Email", href: "mailto:contato@elysian.com.br", hoverColor: "#ffffff" },
                  { icon: WhatsApp, label: "WhatsApp", href: "https://wa.me/5554996030635", hoverColor: theme.palette.secondary.main },
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    aria-label={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "white",
                      transition: "all 0.3s ease",
                      '&:hover': {
                        color: item.hoverColor,
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <item.icon />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </section>
  );
}