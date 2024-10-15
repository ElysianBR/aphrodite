import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// TODO: Integração com API
// import { fetchAnalyticsData } from '../api/analytics';

// Dados mockados
const analisesMockData = [
  { mes: 'Jan', gasTotal: 2000000, custoTotal: 5000 },
  { mes: 'Fev', gasTotal: 2200000, custoTotal: 5500 },
  { mes: 'Mar', gasTotal: 1800000, custoTotal: 4500 },
  { mes: 'Abr', gasTotal: 2400000, custoTotal: 6000 },
  { mes: 'Mai', gasTotal: 2100000, custoTotal: 5250 },
  { mes: 'Jun', gasTotal: 2300000, custoTotal: 5750 },
];

const Analises: React.FC = () => {
  // TODO: Implementar hook para buscar dados da API
  // const [analyticsData, setAnalyticsData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAnalyticsData();
  //     setAnalyticsData(data);
  //   };
  //   fetchData();
  // }, []);

  const calcularVariacao = (atual: number, anterior: number) => {
    const variacao = ((atual - anterior) / anterior) * 100;
    return variacao.toFixed(2);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Análises de Consumo de Gas e Custo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tendências de Consumo de Gas e Custo
              </Typography>
              <Box sx={{ height: 400, width: '100%' }}>
                <LineChart
                  xAxis={[{ 
                    data: analisesMockData.map(item => item.mes),
                    scaleType: 'band',
                    label: 'Mês'
                  }]}
                  series={[
                    { 
                      data: analisesMockData.map(item => item.gasTotal),
                      label: 'Gas Total',
                      color: '#2196f3',
                      curve: 'linear'
                    },
                    { 
                      data: analisesMockData.map(item => item.custoTotal),
                      label: 'Custo Total (ETH)',
                      color: '#4caf50',
                      curve: 'linear',
                      yAxisKey: 'rightAxis'
                    }
                  ]}
                  yAxis={[
                    { id: 'leftAxis', label: 'Gas' },
                    { id: 'rightAxis', label: 'Custo (ETH)', position: 'right' }
                  ]}
                  height={350}
                  margin={{ top: 20, right: 40, bottom: 30, left: 40 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Detalhamento Mensal
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Mês</TableCell>
                      <TableCell align="right">Gas Total</TableCell>
                      <TableCell align="right">Variação Gas</TableCell>
                      <TableCell align="right">Custo (ETH)</TableCell>
                      <TableCell align="right">Variação Custo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analisesMockData.map((row, index) => (
                      <TableRow key={row.mes}>
                        <TableCell component="th" scope="row">
                          {row.mes}
                        </TableCell>
                        <TableCell align="right">{row.gasTotal.toLocaleString()}</TableCell>
                        <TableCell align="right">
                          {index > 0 ? (
                            <>
                              {calcularVariacao(row.gasTotal, analisesMockData[index - 1].gasTotal)}%
                              {Number(calcularVariacao(row.gasTotal, analisesMockData[index - 1].gasTotal)) > 0 ? 
                                <TrendingUpIcon color="error" fontSize="small" /> : 
                                <TrendingDownIcon color="success" fontSize="small" />
                              }
                            </>
                          ) : '-'}
                        </TableCell>
                        <TableCell align="right">{row.custoTotal.toFixed(4)}</TableCell>
                        <TableCell align="right">
                          {index > 0 ? (
                            <>
                              {calcularVariacao(row.custoTotal, analisesMockData[index - 1].custoTotal)}%
                              {Number(calcularVariacao(row.custoTotal, analisesMockData[index - 1].custoTotal)) > 0 ? 
                                <TrendingUpIcon color="error" fontSize="small" /> : 
                                <TrendingDownIcon color="success" fontSize="small" />
                              }
                            </>
                          ) : '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analises;
