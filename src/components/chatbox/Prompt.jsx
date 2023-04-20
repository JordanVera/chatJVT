import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, FormControl, InputAdornment, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Prompt = ({
  questions,
  messages,
  answer,
  loading,
  setAnswer,
  setLoading,
  setQuestions,
  setMessages,
}) => {
  const { register, handleSubmit } = useForm();

  // const [imageURL, setImageURL] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const { prompt } = data;
    const promptMessage = { role: 'user', content: prompt };
    const newMessages = [...messages, promptMessage];
    setMessages(newMessages);

    const headers = {
      'Content-Type': 'Application/json',
      'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.RAPID_API_HOST,
    };

    setLoading(true);

    await axios
      .post(
        'http://localhost:5555/chat',
        { messages: newMessages },
        { headers }
      )
      .then((response) => {
        const ans = response.data.chatGptAnswer[0];
        const answerMessage = ans.message;

        setAnswer([...answer, ans]);
        setQuestions((questions) => [...questions, prompt]);
        setMessages((messages) => [...messages, answerMessage]);
      })
      .finally(() => setLoading(false));
  };

  const onError = () => {
    console.log('error');
  };

  return (
    <div id="prompt">
      <form id="promptForm" onSubmit={handleSubmit(onSubmit, onError)}>
        <FormControl required>
          <TextField
            fullWidth
            sx={{ width: '100%' }}
            className="input chatInput"
            label="Enter text"
            InputProps={{
              startAdornment: (
                <Button type="submit">
                  <InputAdornment position="start">
                    <SendIcon sx={{ color: '#fff' }} />
                  </InputAdornment>
                </Button>
              ),
            }}
            variant="standard"
            {...register('prompt', { required: true })}
          />
        </FormControl>
      </form>
    </div>
  );
};
export default Prompt;
