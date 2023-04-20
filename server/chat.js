import axios from 'axios';

const chat = async (req, res, next) => {
  let chatGptAnswer;
  /*  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]*/
  const data = {
    model: 'gpt-3.5-turbo',
    messages: req.body.messages,
  };

  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST,
    },
    data: JSON.stringify(data),
  };

  await axios
    .request(options)
    .then(function (response) {
      // console.log(response.data.choices[0].message);
      chatGptAnswer = response.data.choices;
    })
    .catch(function (error) {
      console.error(error);
    });

  return res.status(200).json({ success: true, chatGptAnswer });
};

export default chat;
