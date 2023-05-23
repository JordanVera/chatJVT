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

const Prompt = ({ messages, setLoading, setMessages, loading }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { prompt } = data;
    const promptMessage = { role: 'user', content: prompt };
    const newMessages = [...messages, promptMessage];
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
        setMessages((messages) => [...messages, ans]);
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
            disabled={loading}
            fullWidth
            className="chatInput"
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
