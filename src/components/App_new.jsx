import { useState, useEffect } from 'react';
import Answer from '../components/chatbox/Answer.jsx';
import Prompt from './chatbox/Prompt.jsx';
import Navigation from './Navigation/Navigation.jsx';
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

  const newChat = (chatName) => {
    setChats([...chats, chatName]);
    _setMessages((prevMessages) => [...prevMessages, []]);
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
                  setOpenDrawer={setOpenDrawer}
                  toggleDrawer={toggleDrawer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answers Area */}
      <div
        id="chatbox"
        className={`grid grid-rows-[calc(100vh-93px) 93px] h-[100vh] bg-[#343541] border border-red-500 transition-width ${
          openDrawer.left ? 'w-[calc(100vw-260px)]' : 'w-full'
        }`}
      >
        <div
          className="responses h-[calc(100vh-180px)]"
          style={{ position: 'relative' }}
        >
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

          {/* <button
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <span className="" data-state="closed">
              <div
                className="flex h-[72px] w-8 items-center justify-center"
                style={{ opacity: 0.25 }}
                data-projection-id="180"
              >
                <div
                  className="flex h-6 w-6 flex-col items-center"
                  data-projection-id="181"
                >
                  <div
                    className="h-3 w-1 rounded-full bg-token-text-primary"
                    style={{
                      transform:
                        'translateY(0.15rem) rotate(0deg) translateZ(0px)',
                    }}
                    data-projection-id="182"
                  ></div>
                  <div
                    className="h-3 w-1 rounded-full bg-token-text-primary"
                    style={{
                      transform:
                        'translateY(-0.15rem) rotate(0deg) translateZ(0px)',
                    }}
                    data-projection-id="183"
                  ></div>
                </div>
              </div>
              <span
                style={{
                  position: 'absolute',
                  border: '0px',
                  width: '1px',
                  height: '1px',
                  padding: '0px',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0px, 0px, 0px, 0px)',
                  whiteSpace: 'nowrap',
                  overflowWrap: 'normal',
                }}
              >
                Close sidebar
              </span>
            </span>
          </button> */}

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
        <div className="h-[88]">
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
