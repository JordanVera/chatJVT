import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import WelcomeMessage from './WelcomeMessage.jsx';
import MobileNavigation from '../Navigation/MobileNavigation.jsx';
const Answer = ({ loading, messages, open, setOpen }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="mobileNavigation">
        <MobileNavigation open={open} setOpen={setOpen} />
      </div>

      <Box id="infiniteScroll">
        {messages.length === 0 ? (
          <InfiniteScroll
            dataLength={messages.length} //This is important field to render the next data
            // next={fetchData}
            hasMore={true}
          >
            <WelcomeMessage />
          </InfiniteScroll>
        ) : (
          <InfiniteScroll
            dataLength={messages.length} //This is important field to render the next data
            // next={fetchData}
            hasMore={true}
          >
            {messages.map((message, i) => (
              <div className="responses">
                {message.role === 'user' ? (
                  <h3 key={i}>{capitalizeFirstLetter(message.content)}</h3>
                ) : (
                  <p key={i} style={{ whiteSpace: 'pre-wrap' }}>
                    <Typewriter
                      words={message?.content.split()}
                      typeSpeed={3}
                      cursor
                      cursorStyle="_"
                    />
                  </p>
                )}
              </div>
            ))}
            {loading && <SpinnerCustom />}
          </InfiniteScroll>
        )}
      </Box>
    </>
  );
};

export default Answer;
