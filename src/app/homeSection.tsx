import EndPageArrow from "@/components/end-page-arrow/end-page-arrow";
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { Roboto_Condensed } from "next/font/google";
import { GetNextSection, ScrollToNextSection } from "@/utils/utils";
const roboto_title = Roboto_Condensed({ subsets: ["latin"], weight: "800" });

export default function HomeSection() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    return (
        <section id={"home"} style={{ flex: 1, minHeight: "100vh" }}>
            <Grid
                // divide a tela na horizontal, em dispositivos pequenos usa toda a horizontal
                container
                item
                direction={"row"}
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                minHeight={"50vh"}>
                <Grid
                    container
                    item
                    direction={"column"}
                    alignItems={isXs || isSm ? "center" : "flex-end"}
                    justifyContent={"center"} >
                    <Grid item style={{ mixBlendMode: "difference" }}>
                        <Typography
                            style={Object.assign({}, roboto_title.style)}
                            fontSize={isXs || isSm ? "12vh" : "12vw"}
                            fontFamily={"unset"}
                        >Elysian</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container
                item
                direction={"row-reverse"}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}>
                <Grid container
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    direction={"column"}
                    alignItems={isXs || isSm ? "center" : "flex-stat"}
                    justifyContent={"flex-stat"}
                    minHeight={"25vh"}>
                    <Typography
                        variant={"overline"}
                        fontSize={isXs || isSm ? "2vh" : "2vw"}
                        fontFamily={"unset"}>
                        Uma nova forma de fazer integrações
                    </Typography>
                </Grid>

                <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}>
                    <Typography
                        variant={"overline"}
                        fontSize={isXs || isSm ? "2vh" : "1.5vw"}
                        fontFamily={"unset"}
                        onClick={ScrollToNextSection}
                        className={"clickable"}>
                        Descubra
                    </Typography>
                    <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"center"}
                        marginTop={"2vh"}
                        className={"clickable"}>
                        <EndPageArrow onClick={ScrollToNextSection}></EndPageArrow>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}