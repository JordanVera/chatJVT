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
    const newMessages = [...messages, promptMessage];
    // setLocalMessages(newMessages);
    setMessages(newMessages);

    const headers = {
      'Content-Type': 'Application/json',
      'X-RapidAPI-Key': import.meta.env.OPENAI_API_KEY,
    };

    setLoading(true);

    await axios
      .post(`${url}/chat`, { messages: newMessages }, { headers })
      .then((response) => {
        const ans = response.data.chatGptAnswer;

        console.log('ans');
        console.log(ans);
        // setLocalMessages((messages) => [...messages, ans]);
        setMessages((messages) => [...messages, ans]);
      })
      .finally(() => setLoading(false));
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
