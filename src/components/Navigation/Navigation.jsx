import { Drawer, Button } from '@mui/material';
import ListForNav from './ListForNav';

export default function Navigation({
  messages,
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
          messages={messages}
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
