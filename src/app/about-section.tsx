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
                py={8}
                style={{ 
                    backgroundImage: 'url(/path/to/your/background-image.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            >
                <Container>
                    <Typography 
                        variant={props.isMobile ? 'h5' : 'h3'} 
                        textAlign="center" 
                        fontWeight="700" 
                        gutterBottom
                        style={{ fontFamily: "'Roboto', sans-serif", color: "#fff" }}
                    >
                        Transforme seu negócio com a blockchain
                    </Typography>
                    <Typography 
                        variant="body1" 
                        textAlign="center" 
                        paragraph 
                        style={{ fontFamily: "'Open Sans', sans-serif", lineHeight: 1.6 }}
                    >
                        Na Elysian, acreditamos que a tecnologia blockchain pode
                        revolucionar a maneira como as empresas operam, trazendo
                        transparência, segurança e eficiência sem precedentes. Somos uma
                        startup inovadora focada em desenvolver contratos inteligentes,
                        integrar sistemas e oferecer suporte de qualidade para garantir que
                        sua transição para a nova era digital seja suave e bem-sucedida.
                    </Typography>
                </Container>
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

            {/* Seção Quem Somos Nós */}
            <Box py={5}>
                <Container>
                    <Typography variant={props.isMobile ? 'h5' : 'h3'} textAlign="center" fontWeight="bold" gutterBottom>
                        Sobre a gente
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={6}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <a href="https://www.linkedin.com/in/williamciva" target="_blank" rel="noopener noreferrer">
                                    <Image src="/wyl.png" alt="Fundador 1" width={200} height={200} />
                                </a>
                                <Typography variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
                                    William Civa
                                </Typography>
                                <Typography variant="body2" textAlign="justify">
                                Analista de banco de dados com experiência em tecnologias como React.js e CSS3, e um sólido histórico em banco de dados SQL e PL/SQL. Desde setembro de 2022, atua como analista de banco de dados, trazendo uma abordagem analítica e técnica para a otimização de dados e desenvolvimento de soluções robustas. Anteriormente, trabalhou como assistente de TI, onde desenvolveu habilidades práticas em gestão de banco de dados e suporte técnico. William é também um entusiasta de blockchain, acreditando na sua capacidade de transformar a maneira como as empresas gerenciam e protegem dados, e está comprometido em explorar e implementar inovações tecnológicas que promovam segurança e eficiência.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <a href="https://www.linkedin.com/in/andriano-toazza" target="_blank" rel="noopener noreferrer">
                                    <Image src="/andy.jpg" alt="Fundador 2" width={200} height={200} />
                                </a>
                                <Typography variant="h6" textAlign="center" fontWeight="bold" gutterBottom>
                                    Andriano Toazza
                                </Typography>
                                <Typography variant="body2" textAlign="justify">
                                Entusiasta de blockchain e criptografia. Possui mais de três anos de experiência em Quality Assurance de software, com especialização em automação de testes para aplicações Web e APIs. Tem experiência significativa no desenvolvimento e manutenção de testes automatizados, garantindo cobertura eficiente e robusta. Além disso, possui habilidades em testes manuais e gestão de testes exploratórios, atuando com competência em ambientes ágeis e sempre buscando a excelência e inovação nos processos.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Chamada para Ação */}
            <Box bgcolor="secondary.main" color="primary.contrastText" py={8}>
                <Container>
                    <Typography variant={props.isMobile ? 'h5' : 'h4'} textAlign="center" fontWeight="bold" gutterBottom>
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
