import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useForm, useFormContext } from 'react-hook-form';
import {
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { url } from '../../config';

const Prompt = ({
  loading,
  setLoading,
  setMessages,
  messages,
  open,
  setOpen,
  newChat,
}) => {
  const { register, handleSubmit } = useForm();
  const formContext = useFormContext();

  // useEffect(() => {
  //   console.log('_____________M__________________');
  //   console.log(messages);
  // }, [messages]);

  const onSubmit = async (data) => {
    try {
      const { prompt } = data;
      const promptMessage = { role: 'user', content: prompt };

      console.log('ON SUBMIT TRIG');
      console.log(promptMessage);

      setMessages((prevMessages) => [...prevMessages, promptMessage]);

      const headers = {
        'Content-Type': 'Application/json',
        'X-RapidAPI-Key': import.meta.env.OPENAI_API_KEY,
      };

      setLoading(true);

      const response = await axios.post(
        `${url}/chat`,
        { messages: [...messages, promptMessage] },
        { headers }
      );
      const ans = response.data.chatGptAnswer;

      // Update messages with the API response
      setMessages((prevMessages) => [...prevMessages, ans]);
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    console.log('errorrr');
  };

  const handleKeyDown = (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter' && !event.shiftKey) {
      // Prevent the default behavior of the Enter key (e.g., new line in textarea)
      event.preventDefault();

      // Trigger the form submission
      formContext.handleSubmit(onSubmit, onError)();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-[768px] mx-auto"
    >
      <div className="relative flex h-full flex-1 items-stretch md:flex-col">
        <div className="flex w-full items-center">
          <div className="overflow-hidden  flex flex-col w-full  flex-grow relative border border-gray-600 dark:text-white rounded-2xl bg-transparent shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
            <textarea
              id="prompt-textarea"
              tabIndex="0"
              data-id="request-NEW:1-9"
              {...register('prompt', { required: true })}
              style={{
                maxHeight: '200px',
                height: '52px',
                overflowY: 'hidden',
              }}
              rows="1"
              onKeyDown={handleKeyDown}
              placeholder="Message ChatGPT…"
              className="m-0 w-full resize-none border-0 py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
            />
            <button
              disabled=""
              className="bg-[#494a55] absolute md:bottom-3 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 dark:disabled:bg-white disabled:bg-black disabled:opacity-10 disabled:text-gray-400 text-white p-0.5 rounded-lg  bottom-1.5 transition-colors"
              data-testid="send-button"
            >
              <span className="" data-state="closed">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fillRule="none"
                  className="text-white dark:text-gray-500"
                >
                  <path
                    d="M7 11L12 6L17 11M12 18V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <p className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </form>
  );
};

//   <input
// disabled={loading}
// type="text"
// placeholder="Send a message..."
// className="w-full border rounded-md p-2"
// {...register('prompt', { required: true })}
// />
// <button
// type="submit"
// disabled={loading}
// className="submitMessageBtn bg-blue-500 text-white rounded-md p-2 ml-2"
// >
// Send
// </button>

export default Prompt;
