"use client"

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getStoredPlan, clearStoredPlan } from '@/utils/planStorage';
import { Box, Typography, Button, Container, Paper, Grid, TextField, InputAdornment, Tabs, Tab } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventIcon from '@mui/icons-material/Event';
import LockIcon from '@mui/icons-material/Lock';
import ElysianLogo from '/public/logo_wo_bg.png';
import '@/app/signup/signup.css';

interface CreditCardProps {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
}

const CreditCard: React.FC<CreditCardProps> = ({ cardNumber, cardName, expiryDate }) => (
  <Paper
    elevation={3}
    sx={{
      width: '100%',
      maxWidth: 400,
      height: 220,
      borderRadius: 2,
      p: 2,
      background: 'linear-gradient(45deg, #000850 0%, #000320 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      mb: 3,
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Cartão de Crédito</Typography>
      <CreditCardIcon />
    </Box>
    <Typography variant="h5" sx={{ letterSpacing: 4 }}>
      {cardNumber || '•••• •••• •••• ••••'}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="caption">Nome no Cartão</Typography>
        <Typography>{cardName || 'NOME COMPLETO'}</Typography>
      </Box>
      <Box>
        <Typography variant="caption">Validade</Typography>
        <Typography>{expiryDate || 'MM/AA'}</Typography>
      </Box>
    </Box>
  </Paper>
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`payment-tabpanel-${index}`}
      aria-labelledby={`payment-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `payment-tab-${index}`,
    'aria-controls': `payment-tabpanel-${index}`,
  };
}

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [cardName, setCardName] = React.useState<string>('');
  const [expiryDate, setExpiryDate] = React.useState<string>('');
  const [cvv, setCvv] = React.useState<string>('');
  const [isAnimated, setIsAnimated] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    const plan = getStoredPlan();
    setSelectedPlan(plan);
  }, []);

  const handleLogoClick = () => {
    setIsAnimated(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handlePayment = () => {
    alert('Pagamento processado com sucesso!');
    clearStoredPlan();
    router.push('/dashboard');
  };

  const getPlanPrice = (plan: string | null): string => {
    switch (plan) {
      case 'Plano Mensal':
        return 'R$ 4.000,00/mês';
      case 'Plano Anual':
        return 'R$ 40.000,00/ano';
      case 'Integração Personalizada':
        return 'A partir de R$ 10.000,00';
      case 'Transações Independentes':
        return 'Taxa de 2.5% por transação';
      default:
        return 'Preço não disponível';
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(value);
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value.toUpperCase());
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  return (
    <>
      <Box 
        sx={{ 
          position: 'fixed', 
          top: 16, 
          left: 16, 
          zIndex: 1000,
          cursor: 'pointer' 
        }}
        onClick={handleLogoClick}
        className={`logo-login logo-animation ${isAnimated ? 'reverse' : ''}`}
      >
        <Image src={ElysianLogo} alt="Elysian Logo" width={150} height={50} />
      </Box>
      <Container maxWidth="md">
        <Box sx={{ mt: 12, mb: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Finalizar Pagamento
          </Typography>
          {selectedPlan ? (
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Detalhes do Plano
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Plano selecionado: <strong>{selectedPlan}</strong>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Preço: <strong>{getPlanPrice(selectedPlan)}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Escolha a forma de pagamento
                  </Typography>
                  <Tabs value={tabValue} onChange={handleTabChange} aria-label="payment options" centered>
                    <Tab icon={<CreditCardIcon />} label="Cartão" {...a11yProps(0)} />
                    <Tab icon={<ReceiptIcon />} label="Boleto" {...a11yProps(1)} />
                    <Tab icon={<QrCodeIcon />} label="PIX" {...a11yProps(2)} />
                  </Tabs>
                </Grid>
              </Grid>
              
              <TabPanel value={tabValue} index={0}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <CreditCard cardNumber={cardNumber} cardName={cardName} expiryDate={expiryDate} />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Número do Cartão"
                      variant="outlined"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CreditCardIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nome no Cartão"
                      variant="outlined"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Data de Expiração"
                      variant="outlined"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EventIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      variant="outlined"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon color="action" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Typography variant="body1" gutterBottom>
                  Clique no botão abaixo para gerar o boleto:
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<ReceiptIcon />}
                  onClick={() => alert('Boleto gerado! Verifique seu e-mail.')}
                >
                  Gerar Boleto
                </Button>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Typography variant="body1" gutterBottom>
                  Escaneie o QR Code abaixo para pagar com PIX:
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <QrCodeIcon sx={{ fontSize: 150 }} />
                </Box>
                <Typography variant="body2" align="center">
                  Ou use o código PIX: 123456789
                </Typography>
              </TabPanel>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePayment}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
                    }
                  }}
                >
                  Finalizar Pagamento
                </Button>
              </Box>
            </Paper>
          ) : (
            <Typography align="center" sx={{ mt: 4 }}>Nenhum plano selecionado</Typography>
          )}
        </Box>
      </Container>
    </>
  );
}