import * as React from "react";
import { AppBar, Toolbar, Typography, Grid, IconButton } from "@mui/material";
import { Instagram, LinkedIn, MailOutline } from "@mui/icons-material";

export default function Footer() {
  return (
    <section id="footer"> 
      <AppBar position="static" color="transparent"> 
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="inherit">
                © 2024 Elysian - Transformando cadeias de suprimentos com tecnologia Blockchain
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-end" } }}>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                href="https://www.instagram.com/elysianbrazil"
                sx={{
                  fontSize: 28,
                  '&:hover': {
                    color: '#E4405F',
                    transform: 'scale(1.2)',
                  }
                }}
              >
                <Instagram fontSize="inherit" />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                href="https://br.linkedin.com/company/elysianbr"
                sx={{
                  fontSize: 28,
                  '&:hover': {
                    color: '#0077B5',
                    transform: 'scale(1.2)',
                  }
                }}
              >
                <LinkedIn fontSize="inherit" />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Email"
                href="mailto:contato@elysian.com.br"
                sx={{
                  fontSize: 28,
                  '&:hover': {
                    color: '#D44638',
                    transform: 'scale(1.2)',
                  }
                }}
              >
                <MailOutline fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </section>
  );
}
