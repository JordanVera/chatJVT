import React, { useState, useEffect } from 'react';
import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import WelcomeMessage from './WelcomeMessage.jsx';

const Answer = ({ loading, chats, selectedChat, messages, setMessages }) => {
  // useEffect(() => {
  //   console.log('_____________M__________________');
  //   console.log(messages);

  //   setMessages(messages[selectedChat]?.messages);
  // }, [messages]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Box id="infiniteScroll">
      {!messages || messages.length === 0 ? (
        <InfiniteScroll dataLength={messages.length} hasMore={true}>
          <WelcomeMessage />
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          dataLength={messages.length}
          hasMore={true}
          id="answers"
        >
          {Array.isArray(messages)
            ? messages?.map((message, i) => (
                <div className="responses" key={i}>
                  {message.role === 'user' ? (
                    <h3 key={i}>
                      {message.content &&
                        capitalizeFirstLetter(message.content)}
                    </h3>
                  ) : (
                    <p key={i} style={{ whiteSpace: 'pre-wrap' }}>
                      {message.content && (
                        <Typewriter
                          words={message.content.split()}
                          typeSpeed={3}
                          cursor
                          cursorStyle="_"
                        />
                      )}
                    </p>
                  )}
                </div>
              ))
            : null}
          {loading && <SpinnerCustom />}
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default Answer;
