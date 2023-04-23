import * as React from 'react';
import {
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

const ListForNav = ({ newChat, setMesssages, chats, setSelectedChat }) => {
  return (
    <>
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
    </>
  );
};
export default ListForNav;