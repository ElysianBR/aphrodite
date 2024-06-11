"use client"

import React, { FormEventHandler, Ref, useRef } from "react";

import CenterContainer from "@/components/center-container";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

import Input from "@/components/input/input"
import Button from "@/components/button/button"

import "@/app/login/login.css"
import Provider from "@/provider/provider";
import LoginMethod from "@/provider/methods/loginMethod";
import { LoginResponseOk } from "@/provider/dtos/LoginResponseOkDTO";
import ResponseError from "@/provider/dtos/ResponseErrorDTO";
import Image from "next/image";
import GoogleCaptchaV3, { GetCaptchaToken } from "@/components/recaptcha/v3/google-captcha-v3";


export default function Login() {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    const captchaRef: React.ForwardedRef<GetCaptchaToken> = useRef(null);

    const provider = new Provider();
    const loginProvider = new LoginMethod(provider);


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        var form = {
            "email": (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value,
            "password": (e.currentTarget.elements.namedItem("password") as HTMLInputElement)?.value
        }

        try {

            let gToken = '';
            if (captchaRef.current) {
                gToken = await captchaRef.current()
            }


            const data = await loginProvider.login({
                credentials: { email: form.email, password: form.password },
                gRecaptchaResponse: gToken
            });

            
            if (data instanceof LoginResponseOk) {

                localStorage.setItem("SessionToken", data.getToken());
                localStorage.setItem("SessionExpires", data.getExpiresIn().toISOString())

            } else {

                // TODO: Implements de message return to user from backend
                alert(JSON.stringify(data))

            }

        } catch (err) {
            // TODO: Implements a popup provider or component for exceptions not mappeds
            alert("Ocorreu um erro inesperado durante o login...")
            console.error(err);
        }
    };

    return (
        <section id="login-page">
            <CenterContainer>
                <Image src="/logo_wo_bg.png" alt="Elysian Logo" className="logo-login logo-animation" width={120} height={120} />

                <Typography fontSize={isXs || isSm ? "4.5vh" : "4.5vw"} className="login-title">Login</Typography>


                <form
                    onSubmit={handleSubmit}
                    id="login-form"
                    style={isXs || isSm ? { minWidth: '80%', maxWidth: '85%', margin: 0 } : { minWidth: '60%', maxWidth: '65%', margin: 0 }}>

                    <Input required placeholder="E-mail" name="email" type="email" />

                    <Input name="password" placeholder="Senha" type="password" autoComplete="on" />

                    <a className="what-is-my-password">Esqueci minha senha</a>

                    <Button type="submit" className="login" >Entrar</Button>
                </form>
            </CenterContainer>


            {/* Captcha V3 enabled */}
            <GoogleCaptchaV3 sitekey={provider.getRecaptchaAppKey()} ref={captchaRef} />


        </section>
    )
}