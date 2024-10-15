import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from 'next/link';
import { FC } from "react";
import { storePlan } from '@/utils/planStorage';
import { useRouter } from 'next/navigation';

type PlansSectionProps = {
    isMobile: boolean;
};

const PlansSection: FC<PlansSectionProps> = ({ isMobile }) => {
    const router = useRouter();

    const handlePlanSelection = (plan: string) => {
        storePlan(plan);
        router.push('/login');
    };

    return (
        <section id="plans">
            <Box
                color="primary.contrastText"
                py={12}
                sx={{
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <Typography 
                        variant="h2" 
                        textAlign="center" 
                        fontWeight="bold"
                        gutterBottom
                        sx={{ 
                            fontFamily: "'Roboto', sans-serif", 
                            color: "#fff", 
                            marginBottom: '60px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                    >
                        Escolha o Plano Ideal para Você
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                p={4}
                                bgcolor="rgba(255, 255, 255, 0.1)"
                                borderRadius={4}
                                boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                                textAlign="center"
                                height="100%"
                                sx={{
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    }
                                }}
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
                                            mt: 'auto',
                                            bgcolor: 'primary.main',
                                            color: '#ffffff',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                            borderRadius: '50px',
                                            padding: '12px 0',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                        }}
                                        onClick={() => handlePlanSelection('Plano Mensal')}
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
                                bgcolor="rgba(255, 255, 255, 0.1)"
                                borderRadius={4}
                                boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                                textAlign="center"
                                height="100%"
                                sx={{
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    }
                                }}
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
                                            mt: 'auto',
                                            bgcolor: 'primary.main',
                                            color: '#ffffff',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                            borderRadius: '50px',
                                            padding: '12px 0',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                        }}
                                        onClick={() => handlePlanSelection('Plano Anual')}
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
                                bgcolor="rgba(255, 255, 255, 0.1)"
                                borderRadius={4}
                                boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                                textAlign="center"
                                height="100%"
                                sx={{
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    }
                                }}
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
                                            mt: 'auto',
                                            bgcolor: 'primary.main',
                                            color: '#ffffff',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                            borderRadius: '50px',
                                            padding: '12px 0',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                        }}
                                        onClick={() => handlePlanSelection('Integração Personalizada')}
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
                                bgcolor="rgba(255, 255, 255, 0.1)"
                                borderRadius={4}
                                boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                                textAlign="center"
                                height="100%"
                                sx={{
                                    backdropFilter: 'blur(4px)',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    }
                                }}
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
                                            mt: 'auto',
                                            bgcolor: 'primary.main',
                                            color: '#ffffff',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                            borderRadius: '50px',
                                            padding: '12px 0',
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                        }}
                                        onClick={() => handlePlanSelection('Transações Independentes')}
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
            <Box 
                bgcolor="primary.main" 
                color="primary.contrastText" 
                py={10}
                sx={{
                    background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant={isMobile ? 'h4' : 'h3'} textAlign="center" fontWeight="bold" gutterBottom>
                        Pronto para revolucionar seu negócio?
                    </Typography>
                    <Typography variant="h6" textAlign="center" mb={4}>
                        Entre em contato conosco hoje mesmo e dê o primeiro passo para o futuro!
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': {
                                    bgcolor: 'secondary.dark',
                                },
                                borderRadius: '50px',
                                padding: '12px 40px',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                            }}
                        >
                            Fale Conosco
                        </Button>
                    </Box>
                </Container>
            </Box>
        </section>
    );
};

export default PlansSection;
