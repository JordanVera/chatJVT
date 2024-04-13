import request from 'supertest';
import app from '../server.js';
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
    expect(res.body).toHaveProperty('chatGptAnswer', expect.any(String));
  });
});
