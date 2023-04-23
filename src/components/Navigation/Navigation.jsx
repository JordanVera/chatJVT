import * as React from 'react';
import { useEffect } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Button,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListForNav from './List';

export default function Navigation({
  setMesssages,
  chats,
  selectedChat,
  setSelectedChat,
  newChat,
}) {
  return (
    <Box
      id="navigation"
      sx={{ width: '240px', height: '100%', bgcolor: 'background.paper' }}
    >
      <ListForNav
        newChat={newChat}
        setMesssages={setMesssages}
        chats={chats}
        setSelectedChat={setSelectedChat}
      />
    </Box>
  );
}
