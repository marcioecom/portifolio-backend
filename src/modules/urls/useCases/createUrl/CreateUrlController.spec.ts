import request from 'supertest';
import { app } from '../../../../app';

describe('Create Url Controller test', () => {
  describe('Success test', () => {
    it('should return url created', async() => {
      const response = await request(app)
        .post('/urls')
        .send({ redirectUrl: 'http://google.com', shortUrl: 'aksjdl' });

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('redirectUrl');
      expect(response.body).toHaveProperty('shortUrl');
    });
  });

  describe('Fail test', () => {
    it('should return error message', async() => {
      const response = await request(app)
        .post('/urls')
        .send({ redirectUrl: 'google.com' });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message');
    });
  });
});
