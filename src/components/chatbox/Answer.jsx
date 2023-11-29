import React, { useState } from 'react';
import SpinnerCustom from '../Spinner.jsx';
import { Typewriter } from 'react-simple-typewriter';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import WelcomeMessage from './WelcomeMessage.jsx';
import MobileNavigation from '../Navigation/MobileNavigation.jsx';

const Answer = ({ loading, messages, open, setOpen, newChat }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Box id="infiniteScroll">
        {messages.length === 0 ? (
          <InfiniteScroll dataLength={messages.length} hasMore={true}>
            <WelcomeMessage />
          </InfiniteScroll>
        ) : (
          <InfiniteScroll dataLength={messages.length} hasMore={true}>
            {Array.isArray(messages) &&
              messages.map((message, i) => (
                <div className="responses" key={i}>
                  {message.role === 'user' ? (
                    <h3 key={message.content.slice(0, 10)}>
                      {capitalizeFirstLetter(message.content)}
                    </h3>
                  ) : (
                    <p
                      key={message.content.slice(0, 10)}
                      style={{ whiteSpace: 'pre-wrap' }}
                    >
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
