"use client"

import 'react';
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { Roboto_Condensed } from 'next/font/google';
import TopPageCanvas from '@/components/top-page-canvas';

const roboto_h1 = Roboto_Condensed({ subsets: ["latin"], weight: "800" });

export default function Home() {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <main>
      <TopPageCanvas></TopPageCanvas>
      <Grid
        // divide a tela na horizontal, em dispositivos pequenos usa toda a horizontal
        container
        direction={"row"}
        xs={12} sm={12} md={6} lg={6} xl={6}
        alignItems="flex-end"
        justifyContent={isXs || isSm ? "center" : "flex-end"} 
        marginTop={isXs || isSm ? "2vh" : 0} >
        <Grid
          container
          direction={"column"}
          alignItems={isXs || isSm ? "center" : "flex-end"}
          justifyContent={isXs || isSm ? "flex-start" : "flex-end"}
          minHeight={isXs || isSm ? 0 : "50vh"} >
          <Grid
            item
            style={{ mixBlendMode: 'difference' }}>
            <Typography
              style={Object.assign({}, roboto_h1.style)}
              fontSize={'10vw'}
              variant={"h1"}
              fontFamily={'unset'}>
              Elysian
            </Typography>
            <Typography
              variant={"overline"}
              fontSize={"1vw"}
              fontFamily={'unset'}>
              Uma nova forma de fazer integrações
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
