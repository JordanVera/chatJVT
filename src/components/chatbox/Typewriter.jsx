import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset displayedText when text changes

    let currentIndex = 0;

    const typeNextCharacter = () => {
      setDisplayedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;
    };

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        typeNextCharacter();
      } else {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval speed as needed

    return () => {
      // Cleanup on component unmount
      clearInterval(intervalId);
    };
  }, [text]);

  return <h3 className="text-white">{displayedText}</h3>;
};

export default Typewriter;
