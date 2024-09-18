"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import getSignInSideTheme from '@/components/sign-in-side/theme/getSignInSideTheme';
import SignInCard from '@/components/sign-in-side/SignInCard';
import Content from '@/components/sign-in-side/Content';

interface SignInSideProps {
  children: React.ReactNode;
}

export default function SignInSide({ children }: SignInSideProps) {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignInSideTheme = createTheme(getSignInSideTheme(mode));

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
      <ThemeProvider theme={showCustomTheme ? SignInSideTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: 'space-between',
              height: { xs: 'auto', md: '100%' },
            },
            (theme) => ({
              backgroundImage:
                'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
              backgroundSize: 'cover',
              ...theme.applyStyles('dark', {
                backgroundImage:
                  'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
              }),
            }),
          ]}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: 2,
              m: 'auto',
            }}
          >
            <Content />
            <SignInCard />
          </Stack>
        </Stack>
      </ThemeProvider>
  );
}
