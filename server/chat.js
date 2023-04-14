import axios from 'axios';

const chat = async (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST,
    },
    data: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"what is javascript?"}]}',
  };

  await axios
    .request(options)
    .then(function (res) {
      console.log(res.data.choices[0].message);
    })
    .catch(function (error) {
      console.error(error);
    });

  res.status(200).json({
    success: true,
    res,
  });
};

export default chat;
