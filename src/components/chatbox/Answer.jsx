import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';

const Answer = ({ loading, answer, questions }) => (
  <>
    {answer.map((res, i) => (
      <>
        <h4>{questions[i]}</h4>
        <p key={i}>
          {`${i + 1}) `}
          {(
            <Typewriter
              words={res?.message.content.split()}
              typeSpeed={30}
              cursor
              cursorStyle="_"
            />
          ) || 'enter text'}{' '}
        </p>
      </>
    ))}
    {loading && <SpinnerCustom />}
  </>
);

export default Answer;
