import * as React from 'react';

import { Drawer } from '@mui/material';
import ListForNav from './List';

const MobileDrawer = ({
  open,
  setOpen,
  setMesssages,
  newChat,
  setSelectedChat,
  chats,
  setModalOpen,
}) => {
  return (
    <Drawer open={open} onClose={() => setOpen(false)} id="drawer">
      <ListForNav
        newChat={newChat}
        setMesssages={setMesssages}
        chats={chats}
        setModalOpen={setModalOpen}
        setSelectedChat={setSelectedChat}
      />
    </Drawer>
  );
};
export default MobileDrawer;
