import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
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
  // const [messages, setLocalMessages] = useState(initialMessages || []);

  // useEffect(() => {
  //   setLocalMessages(initialMessages || []);
  // }, [initialMessages]);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { prompt } = data;
    const promptMessage = { role: 'user', content: prompt };

    // Check if messages is defined, otherwise initialize it as an empty array
    const newMessages = messages
      ? [...messages, promptMessage]
      : [promptMessage];

    setMessages(newMessages);

    const headers = {
      'Content-Type': 'Application/json',
      'X-RapidAPI-Key': import.meta.env.OPENAI_API_KEY,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        `${url}/chat`,
        { messages: newMessages },
        { headers }
      );
      const ans = response.data.chatGptAnswer;

      // Check if messages is defined before updating it
      setMessages((messages) => (messages ? [...messages, ans] : [ans]));
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    console.log('errorrr');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="px-10">
      <FormControl required className="w-full">
        <TextField
          disabled={loading}
          className="w-full"
          fullWidth
          placeholder="Send a message..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton
                className="submitMessageBtn"
                onClick={handleSubmit(onSubmit, onError)}
              >
                <InputAdornment position="start">
                  <SendIcon />
                </InputAdornment>
              </IconButton>
            ),
          }}
          {...register('prompt', { required: true })}
        />
      </FormControl>
    </form>
  );
};
export default Prompt;
