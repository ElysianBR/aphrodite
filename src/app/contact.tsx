import React, { useState, ChangeEvent, FormEvent } from "react";
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
  SelectChangeEvent,
  Card,
  CardContent
} from "@mui/material";

interface ContactProps {
  isMobile: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC<ContactProps> = ({ isMobile }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Nome completo é obrigatório";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Informe um e-mail válido (exemplo@email.com)";
    if (formData.message.length < 20) newErrors.message = "Mensagem deve ter no mínimo 20 caracteres";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      setSuccessMessage("Sua mensagem foi enviada com sucesso!");
    }
  };

  return (
    <section id="contact">
      <Box bgcolor="inherit" color="#ffffff" py={5} style={{ backgroundImage: '/', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Container maxWidth="sm">
          <Card style={{ backgroundColor: 'rgb(156, 39, 176)' }}>
            <CardContent>
              <Typography variant={isMobile ? "h5" : "h4"} color="#ffffff" textAlign="center" fontWeight="bold" gutterBottom>
                CONTATO
              </Typography>

              <form onSubmit={onSubmit}>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  label="Nome"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name || "Nome completo é obrigatório"}
                  FormHelperTextProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputLabelProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputProps={{
                    style: { color: '#ffffff' }
                  }}
                />

                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label="E-mail"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email || "Informe um e-mail válido (exemplo@email.com)"}
                  FormHelperTextProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputLabelProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputProps={{
                    style: { color: '#ffffff' }
                  }}
                />

                <TextField
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  label="Assunto (opcional)"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputProps={{
                    style: { color: '#ffffff' }
                  }}
                />

                <TextField
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  label="Mensagem"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  error={!!errors.message}
                  helperText={errors.message || "Mensagem deve ter no mínimo 20 caracteres"}
                  FormHelperTextProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputLabelProps={{
                    style: { color: '#ffffff' }
                  }}
                  InputProps={{
                    style: { color: '#ffffff' }
                  }}
                />

                <FormControl fullWidth margin="normal">
                  <InputLabel id="inquiryTypeLabel" style={{ color: '#ffffff' }}>Tipo de consulta (opcional)</InputLabel>
                  <Select
                    labelId="inquiryTypeLabel"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleSelectChange}
                    label="Tipo de consulta"
                    style={{ color: '#ffffff' }}
                  >
                    {/* <MenuItem value="">Selecione</MenuItem> */}
                    <MenuItem value="general">Consulta geral</MenuItem>
                    <MenuItem value="support">Suporte técnico</MenuItem>
                    <MenuItem value="partnership">Parceria</MenuItem>
                    <MenuItem value="others">Outros</MenuItem>
                  </Select>
                  <FormHelperText style={{ color: '#ffffff' }}>Selecione o tipo de consulta para direcionar melhor sua mensagem.</FormHelperText>
                </FormControl>

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
                  Enviar
                </Button>
              </form>

              {successMessage && (
                <Typography variant="body1" color="success.main" align="center">
                  {successMessage}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </section>
  );
};

export default Contact;
