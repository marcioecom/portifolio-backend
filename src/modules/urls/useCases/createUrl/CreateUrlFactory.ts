import { PrismaUrlRepository } from '@modules/urls/repositories/PrismaUrlRepository';
import { CreateUrl } from './CreateUrl';
import { CreateUrlController } from './CreateUrlController';

export function createUrlFactory() {
  const urlRepository = new PrismaUrlRepository();
  const createUrl = new CreateUrl(urlRepository);
  const createUrlController = new CreateUrlController(createUrl);

  return createUrlController;
}
