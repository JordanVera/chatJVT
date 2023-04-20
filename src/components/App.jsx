import { useState, useEffect } from 'react';
import Prompt from './chatbox/Prompt.jsx';
import Answer from '../components/chatbox/Answer.jsx';
import Navigation from './Navigation.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats([...messages]);
    console.log('This is mounted only not updated.');
  }, [messages]);

  return (
    <div className="App container">
      <div className="Navigation">
        <Navigation setMesssages={setMessages} />
      </div>
      <div className="Chat-Box">
        <div className="chatBoxContainer">
          <div className="chatgpt-responses">
            <Answer loading={loading} messages={messages} setChats={setChats} />
          </div>
          <div className="request-form">
            <Prompt
              loading={loading}
              setLoading={setLoading}
              messages={messages}
              setMessages={setMessages}
              chats={chats}
              setChats={setChats}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
