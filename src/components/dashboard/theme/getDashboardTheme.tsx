import type {} from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions, PaletteMode } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { getDesignTokens } from './themePrimitives';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
  inputsCustomizations,
  dataDisplayCustomizations,
  feedbackCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from './customizations';

export default function getDashboardTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#ffffff' : '#424242', // Fundo claro para modo claro
            color: mode === 'light' ? '#000000' : '#ffffff', // Texto escuro para modo claro
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#1976d2' : '#bb86fc', // Cor do botão
            color: '#ffffff', // Texto do botão
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode === 'light' ? '#000000' : '#ffffff', // Texto padrão
          },
        },
      },
      // Mantenha as configurações do modo escuro como estão
      ...chartsCustomizations,
      ...dataGridCustomizations,
      ...datePickersCustomizations,
      ...treeViewCustomizations,
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
      // Adicione mais componentes conforme necessário
    },
  };
}
