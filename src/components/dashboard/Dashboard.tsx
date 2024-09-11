import * as React from 'react';
import {
  PaletteMode,
  createTheme,
  ThemeProvider,
  alpha,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import getDashboardTheme from './theme/getDashboardTheme';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import TemplateFrame from './TemplateFrame';

interface DashboardTemplateProps {
  children: React.ReactNode;
}

export default function DashboardTemplate({ children }: DashboardTemplateProps) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex' }}>
          <SideMenu />
          <AppNavbar />
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: alpha(theme.palette.background.default, 1),
              overflow: 'auto',
            })}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx: 3,
                pb: 10,
                mt: { xs: 8, md: 0 },
              }}
            >
              <Header />
              <MainGrid />
              {children} {/* Renderiza o conteúdo passado como children */}
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </TemplateFrame>
  );
}
