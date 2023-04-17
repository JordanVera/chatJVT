import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
} from '@mui/material';
import Answer from './Answer';

const Prompt = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState([]);
  // const [imageURL, setImageURL] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const { prompt } = data;

    const headers = {
      'Content-Type': 'Application/json',
      'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.RAPID_API_HOST,
    };

    setLoading(true);
    await axios
      .post('http://localhost:5555/chat', { prompt }, { headers })
      .then((response) => {
        const answer = [response.data.chatGptAnswer[0]];
        setAnswer(answer);
        console.log(answer);
      })
      .finally(() => setLoading(false));
  };

  const onError = () => {
    console.log('error');
  };

  return (
    <div id="prompt">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormControl required>
          <TextField
            className="input"
            label="Enter text"
            variant="outlined"
            {...register('prompt', { required: true })}
          />
        </FormControl>

        <Button type="submit" variant="contained">
          Generate
        </Button>
      </form>

      <Answer loading={loading} answer={answer} setAnswer={setAnswer} />
    </div>
  );
};
export default Prompt;
