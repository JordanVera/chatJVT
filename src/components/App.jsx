import { useState, useEffect } from 'react';
import Answer from './chatbox/Answer.jsx';
import Prompt from './chatbox/Prompt.jsx';
import Navigation from './Navigation/Navigation.jsx';
import SidebarButton from './Navigation/SidebarButton.jsx';
import Topbar from './chatbox/Topbar.jsx';

import MobileDrawer from './Navigation/MobileDrawer.jsx';
import RegisterOrLoginModal from './RegisterOrLoginModal.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([[]]);
  const [isHovered, setIsHovered] = useState(false);
  const [chats, setChats] = useState(['My First Chat']);
  const [selectedChat, setSelectedChat] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const [openDrawer, setOpenDrawer] = useState({
    left: true,
  });

  const _setMessages = (newMessages) =>
    setMessages((prevMessages) => {
      if (typeof newMessages === 'function') {
        newMessages = newMessages(prevMessages[selectedChat]);
      }

      const messagesCopy = [...prevMessages];
      messagesCopy[selectedChat] = newMessages;

      return messagesCopy;
    });

  const toggleDrawer = () => {
    setOpenDrawer({ ...openDrawer, left: !openDrawer.left });
  };

  const newChat = (title) => {
    setChats([...chats, title]);
    setMessages((prevMessages) => [...prevMessages, []]);
  };

  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      <div
        id="sidebar"
        className={`dark flex-shrink-0 overflow-x-hidden gizmo:bg-black transition-width ${
          openDrawer.left ? 'w-[260px]' : 'w-0'
        }`}
      >
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <div className="flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:pb-3.5 gizmo:pt-0">
                <Navigation
                  isHovered={isHovered}
                  messages={messages}
                  setMessages={setMessages}
                  chats={chats}
                  selectedChat={selectedChat}
                  setSelectedChat={setSelectedChat}
                  newChat={newChat}
                  setModalOpen={setModalOpen}
                  openDrawer={openDrawer}
                  toggleDrawer={toggleDrawer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="chatbox"
        className={`flex flex-col h-screen bg-[#343541] transition-width ${
          openDrawer.left ? 'w-[calc(100vw-260px)]' : 'w-full'
        }`}
      >
        <div className="flex-grow relative overflow-y-auto">
          <Topbar
            messages={messages}
            selectedChat={selectedChat}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-55%)',
              marginLeft: 10,
            }}
          />

          <SidebarButton
            toggleDrawer={toggleDrawer}
            isHovered={isHovered}
            isDrawerOpen={openDrawer.left}
            setIsHovered={setIsHovered}
          />
          {/* {openDrawer.left ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />} */}

          <Answer
            loading={loading}
            setLoading={setLoading}
            selectedChat={selectedChat}
            chats={chats}
            messages={messages[selectedChat]}
            setMessages={_setMessages}
          />
        </div>

        <div className="mt-auto sticky">
          <Prompt
            messages={messages[selectedChat]}
            setMessages={_setMessages}
            setLoading={setLoading}
            loading={loading}
            selectedChat={selectedChat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
