import { Drawer } from '@material-tailwind/react';
import ListForNav from './ListForNav';
import AccountInfo from './AccountInfo';

export default function Navigation({
  isHovered,
  messages,
  setMessages,
  chats,
  selectedChat,
  setSelectedChat,
  newChat,
  setModalOpen,
  openDrawer,
  toggleDrawer,
}) {
  return (
    <Drawer
      id="navigation"
      anchor="left"
      open={openDrawer.left}
      onClose={() => toggleDrawer}
      variant="persistent"
      className={` ${isHovered ? 'opacity-50' : ''}  w-[260px] border-none`}
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
