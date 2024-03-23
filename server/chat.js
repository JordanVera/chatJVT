import OpenAI from 'openai';

const chat = async (req, res, next) => {
  try {
    // const configuration = new Configuration({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);

    const openai = new OpenAI();

    const completion = await openai.chat.completions.create({
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
  } catch (error) {
    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        chatGptAnswer: 'Rate limit exceeded. Please try again later.',
      });
    }
    console.log('req');
    console.log(req.body.messages);

    console.log('ERROR');
    console.log(error);

    console.log('STACK');
    console.log(error.stack);
    console.log('MSG');
    console.log(error.message);
    // Handle the error as per your requirements
    // For example, you can log the error message and return an error response
    return res.status(500).json({ success: false, error: 'An error occurred' });
  }
};

export default chat;
