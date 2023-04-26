import * as React from 'react';

import { Box } from '@mui/material';
import ListForNav from './List';

export default function Navigation({
  setMesssages,
  chats,
  setSelectedChat,
  newChat,
  setModalOpen,
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
        setModalOpen={setModalOpen}
      />
    </Box>
  );
}
