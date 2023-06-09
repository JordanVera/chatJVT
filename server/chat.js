import axios from 'axios';
import openai from 'openai';
import { Configuration, OpenAIApi } from 'openai';

const chat = async (req, res, next) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: req.body.messages,
  });
  const chatGptAnswer = completion.data.choices[0].message;
  console.log(chatGptAnswer);

  if (res.status === 503) {
    return res.status(503).json({
      success: false,
      chatGptAnswer: 'Chat servers are temporarily down for maintenance',
    });
  }

  return res.status(200).json({ success: true, chatGptAnswer });
};

export default chat;
