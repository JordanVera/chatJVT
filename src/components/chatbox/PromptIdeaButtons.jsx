import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const PromptIdeaButtons = ({ setMessages }) => {
  const data = [
    { title: 'Help me debug', subtitle: 'a linked list problem' },
    {
      title: 'Design a database schema',
      subtitle: 'for an online ecommerce store',
    },
    {
      title: 'Plan an itinerary',
      subtitle: 'for a fashion focused vacation to Paris',
    },
    { title: 'Create a workout plan', subtitle: 'for resistance training' },
  ];

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonHover = (index) => {
    setHoveredButton(index);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div
      id="suggestedPrompts"
      className="w-full mb-3 px-6 space-y-2 flex-grow flex flex-col justify-end"
    >
      <div className="flex flex-col sm:flex-row w-full sm:space-x-2">
        {data.slice(0, 2).map((item, index) => (
          <button
            key={index}
            className="border border-gray-500 w-full p-4 rounded-2xl mx-2 sm:mx-0 text-left hover:bg-[#40414F] relative flex flex-row justify-between"
            onMouseEnter={() => handleButtonHover(index)}
            onMouseLeave={handleButtonLeave}
            onClick={() =>
              setMessages([
                { role: 'user', content: `${item.title} ${item.subtitle}` },
              ])
            }
          >
            <div>
              <h4 className="text-white text-sm font-bold">{item.title}</h4>
              <h5 className="text-gray-500 text-xs">{item.subtitle}</h5>
            </div>
            {hoveredButton === index && (
              <button className="px-2 bg-gray-900 rounded-full h-8 w-8 pb-[3px]">
                <ArrowUpwardIcon style={{ height: 13, width: 13 }} />
              </button>
            )}
          </button>
        ))}
      </div>

      <div className="hidden sm:flex flex-row w-full space-x-2 ">
        {data.slice(2, 4).map((item, index) => (
          <button
            key={index}
            className="border border-gray-500 w-full p-4 rounded-2xl text-left hover:bg-[#40414F] relative flex flex-row justify-between"
            onMouseEnter={() => handleButtonHover(index + 2)}
            onMouseLeave={handleButtonLeave}
          >
            <div>
              <h4 className="text-white text-sm font-bold">{item.title}</h4>
              <h5 className="text-gray-500 text-xs">{item.subtitle}</h5>
            </div>
            {hoveredButton === index + 2 && (
              <button className="mt-1 bg-gray-900 rounded-full h-8 w-8 pb-[3px]">
                <ArrowUpwardIcon style={{ height: 13, width: 13 }} />
              </button>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptIdeaButtons;
