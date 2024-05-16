import * as React from "react";
import { AppBar, Toolbar, Typography, Grid, Link, IconButton } from "@mui/material";
import { Instagram, LinkedIn, MailOutline, Newspaper } from "@mui/icons-material"; // Import social media icons

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
            <Grid item xs={12} sm={6} sx={{ display: { xs: "none", sm: "flex" } }}>
              <IconButton color="inherit" aria-label="Instagram" href="https://www.instagram.com/elysianbrazil">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" href="https://br.linkedin.com/company/elysianbr">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" aria-label="Email" href="mailto:contato@elysian.com.br">
                <MailOutline />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </section>
  )
}
