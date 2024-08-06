import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";


type AboutProps = {
    isMobile: boolean;
}

const AboutSection: FC<AboutProps> = (props) => {
    return (
        <section id="about">
            <Box
                bgcolor="secondary.main"
                color="primary.contrastText"
                py={5}
                style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Container>
                    <Typography variant={props.isMobile ? 'h5' : 'h3'} textAlign="center" fontWeight="bold" gutterBottom>
                        Transforme seu negócio com a blockchain
                    </Typography>
                    <Typography variant="body1" textAlign="center">
                    Na Elysian, acreditamos que a tecnologia blockchain pode
                    revolucionar a maneira como as empresas operam, trazendo
                    transparência, segurança e eficiência sem precedentes. Somos uma
                    startup inovadora focada em desenvolver contratos inteligentes,
                    integrar sistemas e oferecer suporte de qualidade para garantir que
                    sua transição para a nova era digital seja suave e bem-sucedida.
                    </Typography>
                </Container>
            </Box>

            {/* Seção de Vantagens */}
            <Box py={5}>
                <Container>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <Image src="/security.png" alt="Segurança Máxima" width={50} height={50} />
                                <Typography variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
                                    Segurança Máxima
                                </Typography>
                                <Typography variant="body2" textAlign="justify">
                                Com a Elysian, seus dados estão protegidos por criptografia
                                avançada e tecnologia de ponta, garantindo a máxima segurança
                                nas transações.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <Image src="/clock.png" alt="Eficiência e Velocidade" width={50} height={50} />
                                <Typography variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
                                    Eficiência e Velocidade
                                </Typography>
                                <Typography variant="body2" textAlign="justify">
                                Nossa plataforma elimina intermediários, permitindo processar
                                transações rapidamente e com menor custo. Oferecemos
                                integração fácil com sistemas ERP existentes, proporcionando
                                uma visão unificada e precisa de suas operações. Com a
                                tecnologia blockchain, reduzimos erros e fraudes, tornando
                                suas movimentações de estoque mais eficientes.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <Image src="/idea.png" alt="Inovação e Crescimento" width={50} height={50} />
                                <Typography variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
                                    Inovação e Crescimento
                                </Typography>
                                <Typography variant="body2" textAlign="justify">
                                Estamos constantemente investindo em pesquisa e desenvolvimento
                                para trazer as mais recentes inovações ao seu negócio. Explore
                                novos modelos de negócios e abra portas para o crescimento
                                exponencial com nossas soluções personalizadas. Se você está
                                pronto para dar o próximo passo na revolução digital, a Elysian
                                está aqui para ajudá-lo a alcançar novos patamares.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Chamada para Ação */}
            <Box bgcolor="secondary.main" color="primary.contrastText" py={5}>
                <Container>
                    <Typography variant={props.isMobile ? 'h5' : 'h4'} textAlign="center" gutterBottom>
                        Pronto para revolucionar seu negócio?
                    </Typography>
                    <Typography variant="h6" textAlign="center">
                        Entre em contato conosco hoje mesmo e dê o primeiro passo para o futuro!
                    </Typography>
                </Container>
            </Box>
        </section>
    )
}


export default AboutSection;