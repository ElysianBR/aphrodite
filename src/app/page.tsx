"use client"

import 'react';
import { Typography, Grid } from "@mui/material";
import { Roboto_Condensed } from 'next/font/google';
import TopPageCanvas from '@/components/top-page-canvas';

const roboto_h1 = Roboto_Condensed({ subsets: ["latin"], weight: "800" });

export default function Home() {

  return (
    <main>
      <TopPageCanvas></TopPageCanvas>
      <Grid container justifyContent="center" direction={"column"} style={{ minHeight: '50vh' }}>
        <Grid container >
          <Grid item textAlign={"center"} style={{ minWidth: '50vw', mixBlendMode: 'difference' }}>
            <Typography style={Object.assign({}, roboto_h1.style)} fontSize={'10vw'} variant={"h1"} fontFamily={'unset'}>Elysian</Typography>
            <Typography variant={"overline"} fontSize={"1vw"} fontFamily={'unset'}>Uma nova forma de fazer integrações</Typography>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
