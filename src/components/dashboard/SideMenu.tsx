import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './SelectContent';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import OptionsMenu from './OptionsMenu';
import Account from '@/provider/methods/Account';
import Provider from '@/provider/provider';
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});


export type TypeListItems = {
  context: string,
  text: string,
  icon?: React.JSX.Element,
  selected?: boolean,
  element?: React.JSX.Element,
};


export interface SideMenuProps {
  viewState: React.Dispatch<React.SetStateAction<TypeListItems | undefined>>;
}


export default function SideMenu({ viewState }: SideMenuProps) {
  const router = useRouter();
  const [account, setAccount] = React.useState<Account>()
  const hasFetched = React.useRef(false);

  const findUser = async () => {
    let accountOut = await Account.get()
    if (accountOut instanceof Account) {
      setAccount(accountOut);
    } else {
      Provider.unStore()
      router.push("/login")
    }
  }

  React.useEffect(() => {
    if (!hasFetched.current) {
      findUser()
      hasFetched.current = true;
    }

    return () => {
    }
  }, [])



  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      {/* <Box
        sx={{
          display: 'flex',
          mt: '60px',
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box> */}
      {/* <Divider /> */}
      <MenuContent viewState={viewState} render={account != undefined} />
      {/* <CardAlert /> */}
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt={`${account != null ? account.firstName : ""} ${account != null ? account.lastName : ""}`}
          // src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
            {`${account != null ? account.firstName : ""} ${account != null ? account.lastName : ""}`}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {`${account != undefined ? account.email : ""}`}
          </Typography>
        </Box>
        <OptionsMenu viewState={viewState}  />
      </Stack>
    </Drawer>
  );
}
