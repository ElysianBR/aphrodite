"use client"

import "react"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Roboto_Condensed } from 'next/font/google';


const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "900" });


export default function Header() {
    return (
        <AppBar color="transparent">
            <Toolbar>
                <Typography
                    style={Object.assign({}, roboto.style)}
                    fontSize={'2vw'}>
                    elysian
                </Typography>
            </Toolbar>
        </AppBar>
    )
}