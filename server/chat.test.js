import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe('POST /chat', () => {
  it('should return a successful response when chat is submitted', async () => {
    const res = await request(app)
      .post('/chat')
      .send({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Who won the world series in 2020?' },
        ],
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('success', true);
  });

  it('should return a failure response when rate limit is exceeded', async () => {
    // Mock the OpenAI API to simulate a rate limit exceeded error
    jest.mock('openai', () => ({
      chat: {
        completions: {
          create: jest.fn().mockImplementation(() => {
            throw { status: 429 };
          }),
        },
      },
    }));

    const res = await request(app)
      .post('/chat')
      .send({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Who won the world series in 2020?' },
        ],
      });

    expect(res.statusCode).toEqual(429);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty(
      'msg',
      'Rate limit exceeded. Please try again later.'
    );
  });
});
