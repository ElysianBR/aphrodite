import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

type AboutProps = {
    isMobile: boolean;
}

const AboutSection: FC<AboutProps> = (props) => {
    return (
        <section id="about">
            <Box
                py={12}
                sx={{
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                    color: 'white',
                }}
            >
                <Container maxWidth="lg">
                    <Typography 
                        variant={props.isMobile ? 'h4' : 'h2'} 
                        textAlign="center" 
                        fontWeight="700" 
                        gutterBottom
                        sx={{ 
                            fontFamily: "'Roboto', sans-serif",
                            marginBottom: '60px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                    >
                        Transforme seu negócio com a blockchain
                    </Typography>
                    <Typography 
                        variant="h6" 
                        textAlign="center" 
                        paragraph 
                        sx={{ 
                            fontFamily: "'Open Sans', sans-serif", 
                            lineHeight: 1.6,
                            maxWidth: '800px',
                            margin: '0 auto 60px',
                            opacity: 0.9
                        }}
                    >
                        Na Elysian, acreditamos que a tecnologia blockchain pode
                        revolucionar a maneira como as empresas operam, trazendo
                        transparência, segurança e eficiência sem precedentes.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            {
                                icon: "/security.png",
                                title: "Segurança Máxima",
                                description: "Com a Elysian, seus dados estão protegidos por criptografia avançada e tecnologia de ponta, garantindo a máxima segurança nas transações."
                            },
                            {
                                icon: "/clock.png",
                                title: "Eficiência e Velocidade",
                                description: "Nossa plataforma elimina intermediários, permitindo processar transações rapidamente e com menor custo. Oferecemos integração fácil com sistemas ERP existentes."
                            },
                            {
                                icon: "/idea.png",
                                title: "Inovação e Crescimento",
                                description: "Estamos constantemente investindo em pesquisa e desenvolvimento para trazer as mais recentes inovações ao seu negócio."
                            }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(4px)',
                                        borderRadius: 4,
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        }
                                    }}
                                >
                                    <Image src={item.icon} alt={item.title} width={60} height={60} />
                                    <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" textAlign="center">
                                        {item.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Seção Quem Somos Nós */}
            <Box py={12} sx={{ backgroundColor: '#303030', color: 'white' }}>
                <Container maxWidth="lg">
                    <Typography 
                        variant={props.isMobile ? 'h4' : 'h2'} 
                        textAlign="center" 
                        fontWeight="bold" 
                        gutterBottom 
                        sx={{ 
                            mb: 6,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                    >
                        Nossa Equipe
                    </Typography>
                    <Grid container spacing={6} justifyContent="center">
                        {[
                            {
                                name: "William Civa",
                                role: "Analista de Banco de Dados",
                                image: "/wyl.jpg",
                                linkedin: "https://www.linkedin.com/in/williamciva",
                                description: "Analista de banco de dados com experiência em Java, Python, SQL e PL/SQL. Entusiasta de blockchain, comprometido com inovações tecnológicas para segurança e eficiência."
                            },
                            {
                                name: "Andriano Toazza",
                                role: "Especialista em QA",
                                image: "/andy.jpg",
                                linkedin: "https://www.linkedin.com/in/andriano-toazza",
                                description: "Entusiasta de blockchain e criptografia. Mais de três anos de experiência em Quality Assurance de software, especializado em automação de testes para aplicações Web e APIs."
                            }
                        ].map((member, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        borderRadius: 4,
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
                                        }
                                    }}
                                >
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Image 
                                            src={member.image} 
                                            alt={member.name} 
                                            width={200} 
                                            height={200} 
                                            style={{
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                marginBottom: '20px',
                                                border: '4px solid #1e3c72',
                                            }}
                                        />
                                    </a>
                                    <Typography variant="h5" textAlign="center" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" textAlign="center" color="secondary.light" gutterBottom>
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body1" textAlign="center" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                        {member.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </section>
    )
}

export default AboutSection;
