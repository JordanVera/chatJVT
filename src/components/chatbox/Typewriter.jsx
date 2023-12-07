import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // this prevents the bug of the messagess upating when the selectedChat is changed
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval speed as needed

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [text]);

  return <h3 className="text-white">{displayedText}</h3>;
};

export default Typewriter;
