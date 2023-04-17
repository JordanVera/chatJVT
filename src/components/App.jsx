import { useState } from 'react';
import Prompt from './chatbox/Prompt.jsx';
import Answer from '../components/chatbox/Answer.jsx';
import Navigation from './Navigation.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState([]);

  return (
    <div className="App container">
      <div className="Navigation">
        <Navigation answer={answer} setAnswer={setAnswer} />
      </div>
      <div className="Chat-Box">
        <div className="chatBoxContainer">
          <div className="chatgpt-responses">
            <Answer loading={loading} answer={answer} setAnswer={setAnswer} />
          </div>
          <div className="request-form">
            <Prompt
              answer={answer}
              loading={loading}
              setAnswer={setAnswer}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
