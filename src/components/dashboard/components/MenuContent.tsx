import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MainGrid from './MainGrid';

type typeListItems = {
  context: string,
  text: string,
  icon: React.JSX.Element,
  selected: boolean,
  element?: React.JSX.Element,
};


interface MenuContentProps {
  render: boolean;
  viewState: React.Dispatch<React.SetStateAction<React.JSX.Element | null | undefined>>;
}

export default function MenuContent(porps: MenuContentProps) {
  const [mainListItems, setMainListItems] = React.useState<typeListItems[]>([
    {
      context: 'main', text: 'Home', icon: <HomeRoundedIcon />, selected: true, element: <MainGrid />,
    },
    {
      context: 'main', text: 'Analises', icon: <AnalyticsRoundedIcon />, selected: false,
    },
    {
      context: 'main', text: 'Contratos', icon: <PeopleRoundedIcon />, selected: false,
    },
    {
      context: 'main', text: 'Documentação', icon: <AssignmentRoundedIcon />, selected: false,
    },
    {
      context: 'secondary', text: 'Configurações', icon: <SettingsRoundedIcon />, selected: true
    },
    {
      context: 'secondary', text: 'Ajuda', icon: <InfoRoundedIcon />, selected: false
    },
  ]);




  const selectItem = (index: number) => {
    const updatedItems = mainListItems.map((item, idx) => ({
      ...item,
      selected: idx === index,
    }));

    setMainListItems(updatedItems);
    porps.viewState(updatedItems[index].element);
  };

  React.useEffect(() => {
    if (porps.render) {
      selectItem(0);
    }
  }, [porps.render]);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {mainListItems.map((item, index) => item.context === 'main' ? (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={item.selected}
              onClick={() => selectItem(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ) : null)}
      </List>

      <List dense>
        {mainListItems.map((item, index) => item.context === 'secondary' ? (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={item.selected}
              onClick={() => selectItem(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ) : null)}
      </List>
    </Stack>
  );
}
