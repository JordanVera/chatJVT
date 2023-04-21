import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';
import InfiniteScroll from 'react-infinite-scroll-component';

const Answer = ({ loading, messages }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log('messages', messages);
  return (
    <InfiniteScroll
      dataLength={messages.length} //This is important field to render the next data
      // next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
    >
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
    </InfiniteScroll>
  );
};

export default Answer;
