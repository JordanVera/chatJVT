import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

export default function ButtonAppBar({ open, setOpen, newChat, setModalOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="mobileNavigation">
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon
              className="navIcon"
              size="large"
              edge="start"
              aria-label="menu"
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              newChat(window.prompt('Set Title for CHat'));
            }}
          >
            <AddIcon
              className="navIcon"
              size="large"
              edge="start"
              aria-label="new_chat"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
