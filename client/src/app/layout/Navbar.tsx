import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

type NavBarProps = {
  toggleDarkMode: () => void;
  darkMode: boolean;
};

export default function Navbar({ toggleDarkMode, darkMode }: NavBarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <IconButton onClick={toggleDarkMode}>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
