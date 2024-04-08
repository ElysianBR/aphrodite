"use client"

import * as React from "react"
import "./top-page-canvas.css"
import { Grid } from "@mui/material";

export default function TopPageCanvas() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {

        const canvas = canvasRef.current;
        if (canvas != null) {
            const ctx = canvas.getContext('2d');
            if (ctx != null) {
                var time: number = 0;


                const color = function (x: number, y: number, r: number, g: number, b: number) {
                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.fillRect(x, y, 10, 10);
                }

                const R = function (x: number, y: number, time: number) {
                    return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 500 + time)));
                }

                const G = function (x: number, y: number, time: number) {
                    return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
                }

                const B = function (x: number, y: number, time: number) {
                    return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
                }

                const startAnimation = function () {
                    for (let x = 0; x <= 30; x++) {
                        for (let y = 0; y <= 30; y++) {
                            color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
                        }
                    }
                    time = time + 0.02;
                    window.requestAnimationFrame(startAnimation);
                }

                startAnimation();


            }
        }

        return () => {
        }
    }, [])


    return (
        <canvas ref={canvasRef} width={32} height={32} className={"top-canvas"} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "70vh",
            zIndex: -1,
        }} ></canvas>
    );
}