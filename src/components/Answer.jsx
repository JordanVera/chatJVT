import SpinnerCustom from './Spinner.jsx';

const Answer = ({ loading, answer }) => {
  console.log({ answer });

  return loading ? (
    <SpinnerCustom />
  ) : (
    <p>{answer[0]?.message.content || 'enter text'} </p>
  );
};
export default Answer;
