import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';

const Answer = ({ loading, messages }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log('messages', messages);
  return (
    <>
      {messages.map((message, i) => (
        <>
          {message.role === 'user' ? (
            <h3 key={i}>{capitalizeFirstLetter(message.content)}</h3>
          ) : (
            <Typewriter
              words={message?.content.split()}
              typeSpeed={3}
              cursor
              cursorStyle="_"
            />
          )}
        </>
      ))}
      {loading && <SpinnerCustom />}
    </>
  );
};

export default Answer;
