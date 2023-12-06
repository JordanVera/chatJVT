import { useState, useEffect } from 'react';
import Answer from '../components/chatbox/Answer.jsx';
import Prompt from './chatbox/Prompt.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Topbar from './chatbox/Topbar.jsx';
import MobileDrawer from './Navigation/MobileDrawer.jsx';
import RegisterOrLoginModal from './RegisterOrLoginModal.jsx';
import { Button, IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';

function App_New() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([[]]);

  const [chats, setChats] = useState(['My First Chat']);
  const [selectedChat, setSelectedChat] = useState(0);
  const [open, setOpen] = useState(false);
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
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`dark flex-shrink-0 overflow-x-hidden bg-gray-900 gizmo:bg-black transition-width ${
          openDrawer.left ? 'w-[260px]' : 'w-0'
        }`}
      >
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <div className="flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:pb-3.5 gizmo:pt-0">
                <Navigation
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
        {/* Topbar */}
        <Topbar />

        <div className="flex-grow relative">
          {/* IconButton added for the sidebar toggle */}
          <IconButton
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-55%)',
              marginLeft: 10,
            }}
            onClick={toggleDrawer}
          >
            {openDrawer.left ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </IconButton>

          <Answer
            loading={loading}
            selectedChat={selectedChat}
            chats={chats}
            messages={messages[selectedChat]}
            setMessages={_setMessages}
          />
        </div>

        {/* Prompt Section */}
        <div className="mt-auto">
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

export default App_New;
