import { PrismaUrlRepository } from '@modules/urls/repositories/PrismaUrlRepository';
import { GetUrl } from './GetUrl';
import { GetUrlController } from './GetUrlController';

export function getUrlFactory() {
  const urlRepository = new PrismaUrlRepository();
  const getUrl = new GetUrl(urlRepository);
  const getUrlController = new GetUrlController(getUrl);

  return getUrlController;
};
