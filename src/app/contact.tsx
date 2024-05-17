import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Contact = ({ isMobile }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form data:", data); 
    setSuccessMessage("Your message has been sent successfully!");
  };

  return (
    <section id="contact">
      <Box bgcolor="inherit" color="white" py={5}>
        <Container maxWidth="md">
          <Typography variant={isMobile ? "h5" : "h4"} textAlign="center" gutterBottom>
            CONTATO
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name field */}
            <TextField
              {...register("name", { required: true, maxLength: 40})}
              label="Nome"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message || "Nome completo é obrigatório"}
              sx={{
                color: "white"
              }}
            />

            {/* Email field */}
            <TextField
              {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              label="E-mail"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={
                errors.email?.message || "Informe um e-mail válido (exemplo@email.com)"
              }
            />

            {/* Subject field (optional) */}
            <TextField
              {...register("subject")}
              label="Assunto (opcional)"
              fullWidth
              margin="normal"
            />

            {/* Message field */}
            <TextField
              {...register("message", { required: true, minLength: 20 })}
              label="Mensagem"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              error={!!errors.message}
              helperText={errors.message?.message || "Mensagem deve ter no mínimo 20 caracteres"}
            />

            {/* Inquiry type selection (optional) */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="inquiryTypeLabel">Tipo de consulta (opcional)</InputLabel>
              <Select
                labelId="inquiryTypeLabel"
                {...register("inquiryType")}
                label="Tipo de consulta"
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="general">Consulta geral</MenuItem>
                <MenuItem value="support">Suporte técnico</MenuItem>
                <MenuItem value="partnership">Parceria</MenuItem>
              </Select>
              <FormHelperText>Selecione o tipo de consulta para direcionar melhor sua mensagem.</FormHelperText>
            </FormControl>

            <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
              Enviar
            </Button>
          </form>

          {successMessage && (
            <Typography variant="body1" color="success.main" align="center">
              {successMessage}
            </Typography>
          )}
        </Container>
      </Box>
    </section>
  );
};

export default Contact;
