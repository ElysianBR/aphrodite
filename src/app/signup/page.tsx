'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = formData;

    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }

    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formData);
      alert('Cadastro realizado com sucesso!');
    }
  };

  const awaitAnimationLogo = () => {
    setReverseAnimation(true);

    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      // Aqui deve ser a lógica do provider praligar com o backend blz willzao
    }, 500);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box
        bgcolor="#303030"
        color="secondary.contrastText"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        position="relative"
        style={{
          backgroundImage: 'url(/path/to/your/background-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Logo animado */}
        <Box position="absolute" top={20} left={20}>
          <Link href="/" onClick={awaitAnimationLogo}>
            <Image
              src="/logo_wo_bg.png"
              alt="Elysian Logo"
              className={`logo-login logo-animation ${reverseAnimation ? 'reverse' : ''}`}
              width={100}
              height={100}
            />
          </Link>
        </Box>

        <Container maxWidth="xs">
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="700"
              gutterBottom
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Crie sua conta
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate width="100%">
              <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    style={{ backgroundColor: '#fff', borderRadius: 4 }}
                    InputProps={{
                      style: { height: 50 },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    style={{ backgroundColor: '#fff', borderRadius: 4 }}
                    InputProps={{
                      style: { height: 50 },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirme a senha"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    style={{ backgroundColor: '#fff', borderRadius: 4 }}
                    InputProps={{
                      style: { height: 50 },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: 2, height: 50 }}
                  >
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Signup;