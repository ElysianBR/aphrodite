import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';

// TODO: Integração com API
// import { fetchActiveContracts } from '../api/contracts';

// Dados mockados (aumentados para ocupar mais espaço)
const smartContractsMockData = [
  { id: 1, nome: 'Contrato A', tipo: 'DeFi', dataDeployment: '2023-01-01', ultimaInteracao: '2023-12-31', gasUsado: 1200000 },
  { id: 2, nome: 'Contrato B', tipo: 'NFT', dataDeployment: '2023-02-15', ultimaInteracao: '2024-02-14', gasUsado: 800000 },
  { id: 3, nome: 'Contrato C', tipo: 'DAO', dataDeployment: '2023-03-01', ultimaInteracao: '2024-02-29', gasUsado: 1500000 },
  { id: 4, nome: 'Contrato D', tipo: 'DeFi', dataDeployment: '2023-04-01', ultimaInteracao: '2024-03-31', gasUsado: 600000 },
  { id: 5, nome: 'Contrato E', tipo: 'NFT', dataDeployment: '2023-05-01', ultimaInteracao: '2024-04-30', gasUsado: 950000 },
  { id: 6, nome: 'Contrato F', tipo: 'DeFi', dataDeployment: '2023-06-01', ultimaInteracao: '2024-05-31', gasUsado: 1100000 },
  { id: 7, nome: 'Contrato G', tipo: 'DAO', dataDeployment: '2023-07-01', ultimaInteracao: '2024-06-30', gasUsado: 750000 },
  { id: 8, nome: 'Contrato H', tipo: 'NFT', dataDeployment: '2023-08-01', ultimaInteracao: '2024-07-31', gasUsado: 850000 },
];

const Contratos: React.FC = () => {
  // TODO: Implementar hook para buscar dados da API
  // const [activeContracts, setActiveContracts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchActiveContracts();
  //     setActiveContracts(data);
  //   };
  //   fetchData();
  // }, []);

  const getChipColor = (tipo: string) => {
    switch (tipo) {
      case 'DeFi':
        return 'primary';
      case 'NFT':
        return 'secondary';
      case 'DAO':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, height: 'calc(100vh - 64px)' }}> {/* Ajuste a altura conforme necessário */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Smart Contracts Ativos
      </Typography>
      <Card elevation={3} sx={{ height: 'calc(100% - 60px)' }}> {/* Ajuste a altura conforme necessário */}
        <CardContent sx={{ height: '100%', p: 0 }}>
          <TableContainer component={Paper} sx={{ height: '100%', maxHeight: '100%', overflow: 'auto' }}>
            <Table stickyHeader aria-label="tabela de smart contracts">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Data de Deployment</TableCell>
                  <TableCell>Última Interação</TableCell>
                  <TableCell align="right">Gas Usado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {smartContractsMockData.map((contrato) => (
                  <TableRow key={contrato.id} hover>
                    <TableCell component="th" scope="row">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, bgcolor: getChipColor(contrato.tipo) }}>
                          <CodeIcon />
                        </Avatar>
                        {contrato.nome}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={contrato.tipo} color={getChipColor(contrato.tipo)} size="small" />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
                        {contrato.dataDeployment}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} />
                        {contrato.ultimaInteracao}
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <AccountBalanceWalletIcon fontSize="small" sx={{ mr: 1, color: '#ffc107' }} />
                        {contrato.gasUsado.toLocaleString()} Gas
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contratos;
