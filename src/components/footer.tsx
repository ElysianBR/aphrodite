"use client";

import * as React from "react";
import { AppBar, Toolbar, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography>Rodapé</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
