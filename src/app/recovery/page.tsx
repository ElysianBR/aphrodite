"use client"

import CenterContainer from "@/components/center-container";
import Input from "@/components/input/input";
import { FC } from "react"

import "./recovery.css"

const Recovery: FC = () => {
    return (
        <section id="recovery-page" className="full-height purple-bg">
            <CenterContainer>
                <span className="recovery">Digite o seu e-mail para enviarmos o código de redefinição de senha.</span>

                <Input required label="e-mail" placeholder="E-mail" className="recovery"></Input>
            </CenterContainer>
        </section>
    );
}

export default Recovery;