import { useState, useEffect, useCallback } from 'react';
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
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log('_____________M__________________');
    console.log(messages);
  }, [messages]);

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
