import { Url } from '@prisma/client';
import { IUrlRepository } from './IUrlRepository';

class InMemoryUrlRepository implements IUrlRepository {
  private urls: Url[] = [];

  async create(data: Url): Promise<Url> {
    this.urls.push(data);

    return data;
  }
}

export { InMemoryUrlRepository };
