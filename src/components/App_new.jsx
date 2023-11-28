import { useState, useEffect } from 'react';
import Answer from '../components/chatbox/Answer.jsx';
import Prompt from './chatbox/Prompt.jsx';
import Navigation from './Navigation/Navigation.jsx';
import MobileDrawer from './Navigation/MobileDrawer.jsx';
import RegisterOrLoginModal from './RegisterOrLoginModal.jsx';
import { Button } from '@mui/material';

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

  const newChat = (chatName) => {
    setChats([...chats, chatName]);
    _setMessages((prevMessages) => [...prevMessages, []]);
  };

  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      {/* Sidebar */}
      <div className="dark flex-shrink-0 overflow-x-hidden bg-gray-900 gizmo:bg-black">
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <div className="flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:pb-3.5 gizmo:pt-0">
                <Navigation
                  setMessages={setMessages} // Corrected prop name
                  chats={chats}
                  selectedChat={selectedChat}
                  setSelectedChat={setSelectedChat}
                  newChat={newChat}
                  setModalOpen={setModalOpen}
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                  toggleDrawer={toggleDrawer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answers Area */}
      <div className="Chat-Box">
        <div className="chatgpt-responses">
          <Button onClick={toggleDrawer}>
            {openDrawer.left ? 'Close Drawer' : 'Open Drawer'}
          </Button>
          <Answer
            loading={loading}
            setLoading={setLoading}
            messages={messages[selectedChat]}
            setChats={setChats}
            newChat={newChat}
            open={open}
            setOpen={setOpen}
            setMessages={setMessages}
          />
        </div>
        <div className="request-form">
          <Prompt
            messages={messages[selectedChat]}
            setMessages={_setMessages}
            setLoading={setLoading}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App_New;
