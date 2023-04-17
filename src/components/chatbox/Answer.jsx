import SpinnerCustom from '../Spinner.jsx';

const Answer = ({ loading, answer }) => {
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      {answer.map((res, i) => (
        <p key={i}>
          {`${i + 1}) `}
          {res?.message.content || 'enter text'}{' '}
        </p>
      ))}
    </>
  );
};
export default Answer;
