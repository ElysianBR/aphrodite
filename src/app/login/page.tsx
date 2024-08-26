"use client";

import React, { FormEventHandler, useRef, useState, useEffect } from "react";
import CenterContainer from "@/components/center-container";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import "@/app/login/login.css";
import Provider from "@/provider/provider";
import LoginMethod from "@/provider/methods/loginMethod";
import { LoginResponseOk } from "@/provider/dtos/LoginResponseOkDTO";
import ResponseError from "@/provider/dtos/ResponseErrorDTO";
import Image from "next/image";
import GoogleCaptchaV3, { GetCaptchaToken } from "@/components/recaptcha/v3/google-captcha-v3";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    const captchaRef: React.ForwardedRef<GetCaptchaToken> = useRef(null);
    const [reverseAnimation, setReverseAnimation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [provider, setProvider] = useState<Provider>();
    const [loginProvider, setLoginProvider] = useState<LoginMethod>();

    useEffect(() => {
        const tmpProvider = new Provider();
        setProvider(tmpProvider);
        setLoginProvider(new LoginMethod(tmpProvider));
    }, []);

    const validateForm = (form: { email: string; password: string }): boolean => {
        if (!form.email.includes("@")) {
            alert("Por favor, insira um e-mail válido.");
            return false;
        }
        if (form.password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        return true;
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setLoading(true);

        e.preventDefault();

        const form = {
            "email": (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value,
            "password": (e.currentTarget.elements.namedItem("password") as HTMLInputElement)?.value
        };

        if (!validateForm(form)) {
            setLoading(false);
            return;
        }

        try {
            let gToken = '';
            if (captchaRef.current) {
                gToken = await captchaRef.current();
            }

            if (loginProvider != undefined) {
                const data = await loginProvider.login({
                    credentials: { email: form.email, password: form.password },
                    gRecaptchaResponse: gToken
                });

                if (data instanceof LoginResponseOk) {
                    localStorage.setItem("SessionToken", data.getToken());
                    localStorage.setItem("SessionExpires", data.getExpiresIn().toISOString());
                    router.push("/dashboard");
                } else if (data instanceof ResponseError) {
                    const code = data.getStatusCode();
                    const message = data.getMessage();
                    alert(`Erro inesperado: [ ${code} - ${message} ]`);
                }
            }
        } catch (err) {
            alert("Ocorreu um erro inesperado durante o login...");
            console.error("Erro de captura:", err);
        } finally {
            setLoading(false);
        }
    };

    const awaitAnimationLogo = () => {
        setReverseAnimation(true);

        const timeOut = setTimeout(() => {
            clearTimeout(timeOut);
            router.push("/");
        }, 80);
    };

    return (
        <section id="login-page" className="await-animation purple-bg full-height">
            <CenterContainer>
                <a onClick={awaitAnimationLogo}>
                    <Image 
                        src="/logo_wo_bg.png" 
                        alt="Elysian Logo" 
                        className={`logo-login logo-animation ${reverseAnimation ? 'reverse' : ''}`} 
                        width={100} 
                        height={100} 
                    />
                </a>

                <Typography fontSize={isXs || isSm ? "4.5vh" : "4.5vw"} className="login-title">
                    Login
                </Typography>

                <form
                    onSubmit={handleSubmit}
                    id="login-form"
                    style={isXs || isSm ? { minWidth: '80%', maxWidth: '85%', margin: 0 } : { minWidth: '60%', maxWidth: '65%', margin: 0 }}
                >
                    <Input 
                        className="login" 
                        required 
                        placeholder="E-mail" 
                        name="email" 
                        type="email" 
                    />

                    <Input 
                        className="login" 
                        required 
                        name="password" 
                        placeholder="Senha" 
                        type="password" 
                        autoComplete="on" 
                    />

                    <a className="what-is-my-password" href="/recovery">Esqueci minha senha</a>

                    <div>
                        <Button type="submit" className="login" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar"}
                        </Button>
                    </div>
                    
                    {/* Botão de criar conta que leva ao cadastro */}
                    {/* <div style={{ marginTop: -130, marginLeft: 15 }}>
                        <a href="/signup" className="signup-link">Criar uma conta</a>
                    </div> */}
                </form>
            </CenterContainer>

            {/* Captcha V3 enabled */}
            <GoogleCaptchaV3 ref={captchaRef} />
        </section>
    );
}