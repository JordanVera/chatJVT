import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';
import { url } from '../../config';
import { toast } from 'react-toastify';

const PromptIdeaButtons = ({ setMessages, messages, setLoading }) => {
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

  const onSubmit = async (msg) => {
    try {
      const promptMessage = { role: 'user', content: msg };

      console.log('ON SUBMIT TRIG');
      console.log(promptMessage);

      setMessages((prevMessages) =>
        prevMessages ? [...prevMessages, promptMessage] : [promptMessage]
      );

      const headers = {
        'Content-Type': 'Application/json',
        'X-RapidAPI-Key': import.meta.env.OPENAI_API_KEY,
      };

      setLoading(true);

      const response = await axios.post(
        `${url}/chat`,
        { messages: messages ? [...messages, promptMessage] : [promptMessage] },
        { headers }
      );
      const ans = { content: response.data.chatGptAnswer, role: 'assistant' };

      // Update messages with the API response
      setMessages((prevMessages) =>
        prevMessages ? [...prevMessages, ans] : [ans]
      );
    } catch (error) {
      console.log('________+ERROR+________');

      toast.error(error.response.data.msg, {
        position: 'bottom-right',
        theme: 'dark',
      });

      console.log(error);
    } finally {
      setLoading(false);
    }
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
            className={`border border-gray-800 w-full px-4 py-3 rounded-2xl mx-2 sm:mx-0 text-left hover:bg-gray-800 hover:bg-opacity-50 relative flex flex-row justify-between ${
              index === 0 ? 'mb-3 sm:mb-0' : ''
            }`}
            onMouseEnter={() => handleButtonHover(index)}
            onMouseLeave={handleButtonLeave}
            onClick={() => onSubmit(`${item.title} ${item.subtitle}`)}
          >
            <div>
              <h4 className="text-white text-sm font-bold">{item.title}</h4>
              <h5 className="text-[#7a7a87] text-xs">{item.subtitle}</h5>
            </div>
            {hoveredButton === index && (
              <button className="bg-gray-900 rounded-lg h-6 w-6 mt-1.5">
                <ArrowUpwardIcon
                  style={{ height: 13, width: 13, marginBottom: 3 }}
                />
              </button>
            )}
          </button>
        ))}
      </div>

      <div className="hidden sm:flex flex-row w-full space-x-2 ">
        {data.slice(2, 4).map((item, index) => (
          <button
            key={index}
            className="border border-gray-800 w-full px-4 py-3 rounded-2xl text-left hover:bg-gray-800 hover:bg-opacity-50 relative flex flex-row justify-between"
            onMouseEnter={() => handleButtonHover(index + 2)}
            onMouseLeave={handleButtonLeave}
            onClick={() => onSubmit(`${item.title} ${item.subtitle}`)}
          >
            <div>
              <h4 className="text-white text-sm font-bold">{item.title}</h4>
              <h5 className="text-[#7a7a87] text-xs">{item.subtitle}</h5>
            </div>
            {hoveredButton === index + 2 && (
              <button className="bg-gray-900 rounded-lg h-6 w-6 mt-1.5">
                <ArrowUpwardIcon
                  style={{ height: 13, width: 13, marginBottom: 3 }}
                />
              </button>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptIdeaButtons;
