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
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

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
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                newChat(window.prompt('Set Title for CHat'));
              }}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="New Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setMesssages([[]])}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          {chats.map((chat, i) => (
            <Button
              key={i}
              className="chatButton"
              startIcon={<ChatBubbleOutlineIcon />}
              onClick={() => setSelectedChat(i)}
            >
              {chat.length < 15
                ? chat.substring(0, 15)
                : chat.substring(0, 15) + '...'}
            </Button>
          ))}
        </List>
      </nav>
    </Box>
  );
}
