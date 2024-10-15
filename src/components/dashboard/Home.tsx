import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CodeIcon from '@mui/icons-material/Code';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

// TODO: Integração com API
// import { fetchSmartContractsData } from '../api/smartContracts';

// Dados mockados
const smartContractsMockData = [
  { nome: 'Contrato A', gasUsado: 1200000, tipo: 'DeFi' },
  { nome: 'Contrato B', gasUsado: 800000, tipo: 'NFT' },
  { nome: 'Contrato C', gasUsado: 1500000, tipo: 'DAO' },
  { nome: 'Contrato D', gasUsado: 600000, tipo: 'DeFi' },
];

const Home: React.FC = () => {
  // TODO: Implementar hook para buscar dados da API
  // const [smartContractsData, setSmartContractsData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchSmartContractsData();
  //     setSmartContractsData(data);
  //   };
  //   fetchData();
  // }, []);

  const totalGasUsado = smartContractsMockData.reduce((acc, contrato) => acc + contrato.gasUsado, 0);
  const tiposContratos = smartContractsMockData.reduce((acc, contrato) => {
    acc[contrato.tipo] = (acc[contrato.tipo] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Visão Geral dos Smart Contracts
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Consumo de Gas por Smart Contract
              </Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: smartContractsMockData.map(item => item.nome) }]}
                series={[{ data: smartContractsMockData.map(item => item.gasUsado), color: '#2196f3' }]}
                height={300}
                yAxis={[{ label: 'Gas Usado' }]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Distribuição por Tipo de Smart Contract
              </Typography>
              <PieChart
                series={[{
                  data: Object.entries(tiposContratos).map(([label, value]) => ({ label, value })),
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 2,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 270,
                }]}
                height={250}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Smart Contracts Ativos
              </Typography>
              <List>
                {smartContractsMockData.map((contrato, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#1976d2' }}>
                        <CodeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={contrato.nome}
                      secondary={`${contrato.tipo} - Gas Usado: ${contrato.gasUsado.toLocaleString()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ bgcolor: '#1976d2', height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <AccountBalanceWalletIcon sx={{ fontSize: 60, color: '#ffffff', mb: 2 }} />
              <Typography variant="h4" component="div" sx={{ mb: 1, color: '#ffffff' }}>
                {totalGasUsado.toLocaleString()} Gas
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#ffffff' }}>
                Total de Gas Consumido
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card elevation={3} sx={{ bgcolor: '#2196f3', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
                Dicas de Otimização de Gas
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: '#ffffff' }}>
                1. Utilize padrões de design eficientes para reduzir a complexidade do contrato.
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: '#ffffff' }}>
                2. Minimize o armazenamento on-chain de dados não essenciais.
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                3. Considere o uso de camadas L2 para transações de menor valor.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
