import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';

const Answer = ({ loading, messages }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {messages.map((message, i) => (
        <>
          {message.role === 'user' ? (
            <h3 key={i}>{capitalizeFirstLetter(message.content)}</h3>
          ) : (
            <p key={i}>
              {`- `}
              {(
                <Typewriter
                  words={message?.content.split()}
                  typeSpeed={30}
                  cursor
                  cursorStyle="_"
                />
              ) || 'enter text'}{' '}
            </p>
          )}
        </>
      ))}
      {loading && <SpinnerCustom />}
    </>
  );
};

export default Answer;
