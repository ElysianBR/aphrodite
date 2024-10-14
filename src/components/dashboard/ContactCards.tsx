import React from 'react';
import { Card, CardContent, IconButton, Typography, Grid, Box, useTheme } from '@mui/material';
import { Instagram, LinkedIn, MailOutline, WhatsApp } from "@mui/icons-material";

interface ContactOption {
  icon: React.ReactNode;
  text: string;
  link: string;
  color: string;
}

const contactOptions: ContactOption[] = [
  { icon: <Instagram />, text: 'Instagram', link: 'https://www.instagram.com/elysianbrazil', color: '#E4405F' },
  { icon: <LinkedIn />, text: 'LinkedIn', link: 'https://br.linkedin.com/company/elysianbr', color: '#0077B5' },
  { icon: <MailOutline />, text: 'E-mail', link: 'mailto:contato@elysian.com.br', color: '#D44638' },
  { icon: <WhatsApp />, text: 'WhatsApp 1', link: 'https://wa.me/5554981688639', color: '#25D366' },
  { icon: <WhatsApp />, text: 'WhatsApp 2', link: 'https://wa.me/5554996030635', color: '#25D366' },
];

const ContactCards: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: theme.palette.primary.main }}>
        Entre em contato conosco:
      </Typography>
      <Grid container spacing={4}>
        {contactOptions.map((option, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(4px)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': { 
                transform: 'translateY(-10px)',
                boxShadow: `0 10px 20px rgba(${option.color}, 0.3)`,
              }
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <IconButton
                  aria-label={option.text}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: option.color,
                    fontSize: 48,
                    mb: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(5deg)',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {option.icon}
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
                  {option.text}
                </Typography>
                {/* <Typography variant="body2" sx={{ mt: 1, color: theme.palette.text.secondary }}>
                  Clique para conectar
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactCards;
