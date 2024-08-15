import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from 'next/link';
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
                        bgcolor="secondary.main" //comentar se achar feio
                        gutterBottom
                        style={{ 
                            fontFamily: "'Roboto', sans-serif", 
                            color: "#fff", 
                            padding: '20px 0',  // Aumenta o espaçamento vertical
                            marginBottom: '40px' // Adiciona espaço abaixo do título
                        }}
                    >
                        Escolha um plano
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                                textAlign="center"
                                height="100%"
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Plano Mensal
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                     R$ {/*4.000,00*/}/mês 
                                </Typography>
                                <Typography variant="body1" textAlign="justify" gutterBottom>
                                    Acesso completo à API e suporte técnico prioritário 24/7. <br />
                                    Criação de rotinas agendadas, sincronizadores e demais ferramentas para o seu sistema.
                                </Typography>
                                <Box 
                                    component={Link} 
                                    href="/login" 
                                    sx={{
                                        display: 'block', 
                                        width: '100%', 
                                        mt: 'auto', 
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
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
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                                textAlign="center"
                                height="100%"
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Plano Anual
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    R$ {/*40.000,00*/}/ano
                                </Typography>
                                <Typography variant="body1" textAlign="justify" gutterBottom>
                                    Acesso completo à API, suporte técnico 24/7 e <strong>desconto significativo</strong>.
                                    Criação de rotinas agendadas, sincronizadores e demais ferramentas para o seu sistema.
                                    <br />
                                </Typography>
                                <Box 
                                    component={Link} 
                                    href="/login" 
                                    sx={{
                                        display: 'block', 
                                        width: '100%', 
                                        mt: 'auto', 
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
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
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                                textAlign="center"
                                height="100%"
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Integração Personalizada
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    A partir de R$ {/*10.000,00*/}
                                </Typography>
                                <Typography variant="body1" textAlign="justify" gutterBottom>
                                    Soluções personalizadas e altamente adaptáveis, projetadas para se integrar perfeitamente aos seus sistemas existentes.
                                </Typography>
                                <Box 
                                    component={Link} 
                                    href="/login" 
                                    sx={{
                                        display: 'block', 
                                        width: '100%', 
                                        mt: 'auto', 
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
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
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="secondary.main"
                                borderRadius={2}
                                boxShadow={3}
                                textAlign="center"
                                height="100%"
                            >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Transações Independentes
                                </Typography>
                                <Typography variant="h6" color="secondary.light" gutterBottom>
                                    Taxa de 2.5% por transação
                                </Typography>
                                <Typography variant="body1" textAlign="justify" gutterBottom>
                                    Sem custos fixos, pague apenas pelo que usar. Ideal para empresas que não precisam de um plano recorrente.
                                </Typography>
                                <Box 
                                    component={Link} 
                                    href="/login" 
                                    sx={{
                                        display: 'block', 
                                        width: '100%', 
                                        mt: 'auto', 
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            bgcolor: 'rgb(35, 35, 35)',
                                            color: '#ffffff',
                                            '&:hover': {
                                                bgcolor: 'rgb(35, 35, 35)',
                                                color: '#ffffff'
                                            }
                                        }}
                                    >
                                        Saiba Mais
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
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