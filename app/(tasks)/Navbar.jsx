'use client';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import auth from '@/store/auth';

export default function Navbar({ onLogout }) {
  const router = useRouter();
  const logOut = async () => {
    await auth.logout();
    router.push('/login');
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo
        </Typography>

        <IconButton color="inherit" aria-label="Logout" onClick={logOut}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
