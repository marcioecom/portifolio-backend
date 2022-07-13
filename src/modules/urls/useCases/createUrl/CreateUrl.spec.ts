import { ZodError } from 'zod';
import { Url } from '@prisma/client';
import { CreateUrl } from './CreateUrl';
import { InMemoryUrlRepository } from '../../repositories/InMemoryUrlRepository';
import * as utils from '../../../../utils';

describe('Create Url test', () => {
  let sut: CreateUrl;

  beforeEach(() => {
    sut = new CreateUrl(new InMemoryUrlRepository());
  });

  describe('Success test', () => {
    it('should be able to create url', async() => {
      const url = await sut.execute({
        redirectUrl: 'https://google.com',
        shortUrl: 'blabla'
      });

      expect(url).toBeTruthy();
      expect(url).toHaveProperty('shortUrl');
      expect(url).toHaveProperty('redirectUrl');
    });

    it('should be able to create random url', async() => {
      const spy = jest.spyOn(utils, 'randomUrl');

      const url = await sut.execute({
        redirectUrl: 'https://google.com'
      }) as Url;

      expect(url).toBeTruthy();
      expect(url).toHaveProperty('redirectUrl');
      expect(url).toHaveProperty('shortUrl');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Fail test', () => {
    it('should return error message', async() => {
      const url = await sut.execute({
        redirectUrl: 'google.com',
        shortUrl: 'blabla'
      }) as { error: ZodError };

      expect(url).toHaveProperty('error');
      expect(url.error.issues[0].message).toBe('Url inválida');
    });

    it('should return error message', async() => {
      const url = await sut.execute({
        redirectUrl: 'https://google.com',
        shortUrl: 'bl'
      }) as { error: ZodError };

      expect(url).toHaveProperty('error');
      expect(url.error.issues[0].message).toBe('A URL curta precisa ter no mínimo 3 caracteres');
    });
  });
});
