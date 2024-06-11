import { Grid } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { ReactNode } from "react";

export default function CenterContainer({ children, style }: { children?: ReactNode, style?: CSSProperties | undefined }) {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            minWidth={"100%"}
        >
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                minHeight={"100vh"}
            >
                {children}
            </Grid>
        </Grid>
    )
}