import { useState, useEffect } from 'react';
import Prompt from './chatbox/Prompt.jsx';
import Answer from '../components/chatbox/Answer.jsx';
import Navigation from './Navigation/Navigation.jsx';
import MobileDrawer from './Navigation/MobileDrawer.jsx';
import RegisterOrLoginModal from './RegisterOrLoginModal.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([[]]);
  const [chats, setChats] = useState(['My First Chat']);
  const [selectedChat, setSelectedChat] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const _setMessages = (newMessages) =>
    setMessages((messages) => {
      if (typeof newMessages === 'function') {
        newMessages = newMessages(messages[selectedChat]);
      }

      const messagesCopy = JSON.parse(JSON.stringify(messages));
      messagesCopy[selectedChat] = newMessages;
      // console.log({ messagesCopy });

      return messagesCopy;
    });

  const newChat = (chatName) => {
    setChats([...chats, chatName]);
    setMessages([...messages, []]);
  };

  return (
    <>
      <div className="App container">
        <div className="Navigation">
          <Navigation
            setMesssages={setMessages}
            chats={chats}
            setSelectedChat={setSelectedChat}
            newChat={newChat}
            setModalOpen={setModalOpen}
          />
        </div>
        <div className="Chat-Box">
          <div className="chatgpt-responses">
            <Answer
              loading={loading}
              messages={messages[selectedChat]}
              setChats={setChats}
              newChat={newChat}
              open={open}
              setOpen={setOpen}
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
      <RegisterOrLoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <MobileDrawer
        open={open}
        setOpen={setOpen}
        newChat={newChat}
        setSelectedChat={setSelectedChat}
        chats={chats}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default App;
