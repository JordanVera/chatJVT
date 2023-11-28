import { Drawer, Button } from '@mui/material';
import ListForNav from './List';

export default function Navigation({
  setMesssages,
  chats,
  selectedChat,
  setSelectedChat,
  newChat,
  setModalOpen,
  openDrawer,
  setOpenDrawer,
  toggleDrawer,
}) {
  return (
    <>
      <Drawer
        id="navigation"
        anchor="left"
        open={openDrawer.left}
        onClose={() => toggleDrawer}
        variant="persistent"
      >
        <ListForNav
          newChat={newChat}
          setMesssages={setMesssages}
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          setModalOpen={setModalOpen}
          className="black-bg"
        />
      </Drawer>
    </>
  );
}
