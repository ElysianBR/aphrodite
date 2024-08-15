import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { FC } from "react";

type PlansSectionProps = {
    isMobile: boolean;
};

const PlansSection: FC<PlansSectionProps> = ({ isMobile }) => {
    return (
        <section id="plans">
            <Box
                color="primary.contrastText"
                py={8}
                style={{
                    backgroundImage: 'url(/path/to/your/background-image.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Container>
                    <Typography 
                        variant="h3" 
                        textAlign="center" 
                        fontWeight="bold" 
                        gutterBottom
                        style={{ fontFamily: "'Roboto', sans-serif", color: "#fff" }}
                    >
                        Escolha um plano
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Plano Mensal
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    R$ 4.000,00/mês
                                </Typography>
                                <Typography variant="body1" textAlign="center" gutterBottom>
                                    Acesso completo à API e suporte técnico prioritário 24/7.
                                </Typography>
                                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: 'rgb(35, 35, 35)',
                    color: '#ffffff',
                    '&:hover': {
                      bgcolor: 'rgb(35, 35, 35)',
                      color: '#ffffff'
                    }
                  }}
                >
                  Escolher plano
                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Plano Anual
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    R$ 40.000,00/ano
                                </Typography>
                                <Typography variant="body1" textAlign="center" gutterBottom>
                                    Acesso completo à API, suporte técnico 24/7 e desconto significativo.
                                </Typography>
                                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: 'rgb(35, 35, 35)',
                    color: '#ffffff',
                    '&:hover': {
                      bgcolor: 'rgb(35, 35, 35)',
                      color: '#ffffff'
                    }
                  }}
                >
                  Escolher plano
                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Integração Personalizada
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    A partir de R$ 10.000,00
                                </Typography>
                                <Typography variant="body1" textAlign="center" gutterBottom>
                                    Soluções específicas adaptadas aos seus sistemas existentes.
                                </Typography>
                                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: 'rgb(35, 35, 35)',
                    color: '#ffffff',
                    '&:hover': {
                      bgcolor: 'rgb(35, 35, 35)',
                      color: '#ffffff'
                    }
                  }}
                >
                  Contate-nos
                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5} textAlign="center">
                        <Typography variant="h6" color="primary.contrastText">
                            Taxa por Transação: 2.5% do valor da transação
                        </Typography>
                        <Typography variant="body2" color="primary.contrastText">
                            Exemplo: Para uma transação de R$ 10.000,00, a taxa seria R$ 250,00.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            {/* Chamada para Ação */}
            <Box bgcolor="secondary.main" color="primary.contrastText" py={8}>
                <Container>
                    <Typography variant={isMobile ? 'h5' : 'h4'} textAlign="center" fontWeight="bold" gutterBottom>
                        Pronto para revolucionar seu negócio?
                    </Typography>
                    <Typography variant="h6" textAlign="center">
                        Entre em contato conosco hoje mesmo e dê o primeiro passo para o futuro!
                    </Typography>
                </Container>
            </Box>
        </section>
    );
};

export default PlansSection;