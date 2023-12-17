import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import ListForNav from './ListForNav';
import AccountInfo from './AccountInfo';

export default function MobileNavigation({
  openMobileDrawer,
  setOpenMobileDrawer,
  messages,
  setMessages,
  chats,
  selectedChat,
  setSelectedChat,
  newChat,
  setModalOpen,
}) {
  const openDrawer = () => setOpenMobileDrawer(true);
  const closeDrawer = () => setOpenMobileDrawer(false);

  return (
    <Drawer
      open={openMobileDrawer}
      onClose={closeDrawer}
      className="p-1.5 bg-black"
    >
      <div className={`flex flex-col h-full`}>
        <ListForNav
          newChat={newChat}
          messages={messages}
          setMessages={setMessages}
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          setModalOpen={setModalOpen}
          className="black-bg"
        />

        {/* Account info at the bottom */}
        <AccountInfo setSelectedChat={setSelectedChat} newChat={newChat} />
      </div>
    </Drawer>
  );
}
