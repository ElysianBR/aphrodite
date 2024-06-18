import { FC } from "react"
import PlanCard, { Itens } from "./plan-card";

import "./plan.css"
import CenterContainer from "../center-container";
import { Grid } from "@mui/material";

const monthItens: Itens[] = [
    {
        text: "Integração"
    }
]

const PlansSection: FC = () => {
    return (
        <section id="plans" className="full-height plans">
            <CenterContainer >
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <PlanCard title="Mensal" itens={monthItens} price={4000} />
                    <PlanCard title="Anual" itens={monthItens} price={40000} />
                </Grid>
            </CenterContainer>
        </section>
    )
}

export default PlansSection;