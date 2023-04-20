import { useState, useEffect } from 'react';
import Prompt from './chatbox/Prompt.jsx';
import Answer from '../components/chatbox/Answer.jsx';
import Navigation from './Navigation.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([[]]);
  const [chats, setChats] = useState(['Main']);
  const [selectedChat, setSelectedChat] = useState(0);

  const _setMessages = (newMessages) =>
    setMessages((messages) => {
      console.log({ messages, selectedChat });
      console.log('messages[selectedChat]', messages[selectedChat]);

      if (typeof newMessages === 'function') {
        newMessages = newMessages(messages[selectedChat]);
      }

      const messagesCopy = JSON.parse(JSON.stringify(messages));
      messagesCopy[selectedChat] = newMessages;
      console.log({ messagesCopy });

      return messagesCopy;
    });

  const newChat = (chatName) => {
    setChats([...chats, chatName]);
    setMessages([...messages, []]);
  };

  return (
    <div className="App container">
      <div className="Navigation">
        <Navigation
          setMesssages={setMessages}
          chats={chats}
          setSelectedChat={setSelectedChat}
          newChat={newChat}
        />
      </div>
      <div className="Chat-Box">
        <div className="chatBoxContainer">
          <div className="chatgpt-responses">
            <Answer
              loading={loading}
              messages={messages[selectedChat]}
              setChats={setChats}
            />
          </div>
          <div className="request-form">
            <Prompt
              messages={messages[selectedChat]}
              setMessages={_setMessages}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
