import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useForm, useFormContext } from 'react-hook-form';
import { url } from '../../config';

const Prompt = ({
  loading,
  setLoading,
  setMessages,
  messages,
  selectedChat,
  open,
  setOpen,
  newChat,
}) => {
  const { register, handleSubmit } = useForm();
  const formContext = useFormContext();

  useEffect(() => {
    console.log('typeof messages', typeof messages);

    console.log('_____________M__________________');
    console.log(messages);
  }, [messages]);

  const onSubmit = async (data) => {
    try {
      const { prompt } = data;
      const promptMessage = { role: 'user', content: prompt };

      setMessages((prevMessages) =>
        prevMessages ? [...prevMessages, promptMessage] : [promptMessage]
      );

      const headers = {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
      };

      setLoading(true);

      const response = await axios.post(
        `${url}/chat`,
        { messages: [...messages, promptMessage] },
        { headers }
      );
      const ans = response.data.chatGptAnswer;

      // Update messages with the API response
      setMessages((prevMessages) =>
        prevMessages ? [...prevMessages, ans] : [ans]
      );
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    console.log('errorrr');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent the default behavior of Enter in textarea
      handleSubmit(onSubmit, onError)(); // Manually trigger the form submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-[768px] mx-auto px-4"
    >
      <div className="relative flex flex-col items-stretch">
        <div className="relative flex w-full md:flex-col">
          <div className="overflow-hidden  flex flex-col w-full  flex-grow relative border border-gray-600 dark:text-white rounded-2xl bg-transparent">
            <textarea
              id="prompt-textarea"
              tabIndex="0"
              data-id="request-NEW:1-9"
              {...register('prompt', { required: true })}
              style={{
                height: '52px',
                overflowY: 'hidden',
              }}
              rows="1"
              onKeyDown={handleKeyDown}
              placeholder="Message JordanGPT…"
              className={`m-0 w-full resize-none border-0 py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent bg-transparent placeholder-gray-500 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4 ${
                loading ? 'disabled' : ''
              }`}
              disabled={loading}
            />

            {loading ? (
              <button
                type="button"
                className="absolute right-2 bottom-1.5 mb-2 mr-3  rounded-full h-6 w-6 border-2 border-gizmo-gray-950 p-1 dark:border-gray-200"
                aria-label="Stop generating"
              >
                <span className="" data-state="closed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className=" h-2 w-2 text-gizmo-gray-950 dark:text-gray-200 ml-[2px]"
                    height="16"
                    width="16"
                  >
                    <path
                      d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"
                      stroke-width="0"
                    ></path>
                  </svg>
                </span>
              </button>
            ) : (
              <button
                disabled=""
                className="bg-[#494a55] absolute md:bottom-3 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 dark:disabled:bg-white disabled:bg-black disabled:opacity-10 disabled:text-gray-400 text-white p-0.5 rounded-lg  bottom-3 transition-colors"
                data-testid="send-button"
              >
                <span className="" data-state="closed">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fillRule="none"
                    className="text-white"
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
            )}
          </div>
        </div>
        <p className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          JordanGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </form>
  );
};

export default Prompt;
