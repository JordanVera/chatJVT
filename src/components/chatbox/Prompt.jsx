import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TextField, FormControl, InputAdornment, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { url } from '../../config';

const Prompt = ({ messages, setLoading, setMessages, loading }) => {
  const { register, handleSubmit } = useForm();

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
      .post(`${url}/chat`, { messages: newMessages }, { headers })
      .then((response) => {
        const ans = response.data.chatGptAnswer[0];
        const answerMessage = ans.message;

        setMessages((messages) => [...messages, answerMessage]);
      })
      .finally(() => setLoading(false));
  };

  const onError = () => {
    console.log('errorrr');
  };

  return (
    <div id="prompt">
      <form id="promptForm" onSubmit={handleSubmit(onSubmit, onError)}>
        <FormControl required>
          <TextField
            fullWidth
            className="chatInput"
            placeholder="Send a message..."
            InputProps={{
              endAdornment: (
                <Button type="submit" className="mailIcon" disabled={loading}>
                  <InputAdornment position="start">
                    <SendIcon />
                  </InputAdornment>
                </Button>
              ),
            }}
            variant="standard"
            {...register('prompt', { required: true })}
          />
        </FormControl>
      </form>

      <p className="warning">
        Powered by{' '}
        <a href="https://openai.com/" target="_blank" rel="noreferrer">
          OpenAI
        </a>{' '}
        using{' '}
        <a
          href="https://platform.openai.com/docs/guides/chat"
          target="_blank"
          rel="noreferrer"
        >
          gpt-3.5-turbo
        </a>
        . JordanGPT may produce inaccurate information aboout people, places, or
        facts
      </p>
    </div>
  );
};
export default Prompt;
