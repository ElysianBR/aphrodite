"use client"
import { FormEventHandler, useState } from "react";

import CenterContainer from "@/components/center-container";
import { TextField, Grid, Button, Box } from "@mui/material";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Login() {

    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        var form = {
            "email": e.currentTarget.elements.namedItem("email")?.value,
            "password": e.currentTarget.elements.namedItem("password")?.value
        }

        try {
            const res = await fetch("http://localhost:8080/api/user/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "g-recaptcha-response": token
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            setRefreshReCaptcha(!refreshReCaptcha);
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="login-form">
            <CenterContainer>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    padding={"5%"}
                >
                    <TextField
                        required
                        name="email"
                        label="E-Mail"
                        variant="outlined"
                        // value={mail}
                        // error={passOrMailInvalid}
                        type="email"
                        // onChange={(e) => {
                        //     setMail(e.target.value);
                        // }}
                        style={{ minWidth: "75%", margin: "2%" }}
                    />
                    <TextField
                        required
                        name="password"
                        label="Senha"
                        variant="outlined"
                        type="password"
                        // value={password}
                        // error={passOrMailInvalid}
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        //     setPassOrMailInvalid(false);
                        // }}
                        style={{ minWidth: "75%", margin: "2%" }}
                    />
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                        padding={"5%"}
                    >
                        <Button type="submit" >Registre</Button>
                    </Grid>
                </Grid>

            </CenterContainer>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY != null ? process.env.REACT_APP_RECAPTCHA_KEY : "6LeCGMApAAAAABXtvwasSa9Aw3oy9xSiIg7YsWSC"}>
                <GoogleReCaptcha
                    onVerify={(token) => { setToken(token) }}
                    refreshReCaptcha={refreshReCaptcha}
                />
            </GoogleReCaptchaProvider>
        </form>
    )
}