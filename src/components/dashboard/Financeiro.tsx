import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { getStoredPlan, clearStoredPlan } from '@/utils/planStorage';

interface PlanoInfo {
  nome: string;
  preco: number;
  dataContratacao: string;
}

const precosPorPlano: { [key: string]: number } = {
  'Plano Mensal': 4000,
  'Plano Anual': 40000,
  'Integração Personalizada': 10000,
  'Transações Independentes': 0,
};

const Financeiro: React.FC = () => {
  const [planoAtual, setPlanoAtual] = useState<PlanoInfo | null>(null);

  useEffect(() => {
    const planoArmazenado = getStoredPlan();
    if (planoArmazenado) {
      const preco = precosPorPlano[planoArmazenado] || 0;
      const dataAtual = new Date().toISOString().split('T')[0];
      setPlanoAtual({
        nome: planoArmazenado,
        preco: preco,
        dataContratacao: dataAtual,
      });
    }
  }, []);

  const handleCancelarPlano = () => {
    clearStoredPlan();
    setPlanoAtual(null);
    console.log('Plano cancelado');
  };

  const handleEditarPagamento = () => {
    // Lógica para editar o método de pagamento (a ser implementada)
    console.log('Editar método de pagamento');
  };

  if (!planoAtual) {
    return <Typography>Nenhum plano contratado.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Seu Plano Atual
          </Typography>
          <Typography variant="body1">Nome: {planoAtual.nome}</Typography>
          <Typography variant="body1">
            Preço: {planoAtual.nome === 'Transações Independentes' 
              ? 'Taxa de 2.5% por transação' 
              : `R$ ${planoAtual.preco.toFixed(2)}${planoAtual.nome === 'Plano Anual' ? '/ano' : '/mês'}`}
          </Typography>
          <Typography variant="body1">Data de Contratação: {planoAtual.dataContratacao}</Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="secondary" onClick={handleCancelarPlano} sx={{ mr: 1 }}>
              Cancelar Plano
            </Button>
            <Button variant="outlined" onClick={handleEditarPagamento}>
              Editar Pagamento
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Financeiro;
