import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';

const Answer = ({ loading, answer }) => {
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      {answer.map((res, i) => (
        <p key={i}>
          {`${i + 1}) `}
          {(
            <Typewriter
              words={res?.message.content.split()}
              typeSpeed={50}
              cursor
            />
          ) || 'enter text'}{' '}
        </p>
      ))}
    </>
  );
};
export default Answer;
