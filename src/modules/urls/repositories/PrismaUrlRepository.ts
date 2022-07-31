import { prisma } from '@database/client';
import { Prisma, Url } from '@prisma/client';
import { IUrlRepository } from './IUrlRepository';

class PrismaUrlRepository implements IUrlRepository {
  async create(data: Url): Promise<Url> {
    const url = await prisma.url.create({ data });

    return url;
  }

  async findOne(shortUrl: string): Promise<Url | null> {
    const url = await prisma.url.findFirst({
      where: { shortUrl }
    });

    if (!url) {
      return null;
    }

    return url;
  }

  async update(id: string, data: Prisma.UrlUpdateInput) {
    await prisma.url.update({
      where: { id },
      data
    });
  }
};

export { PrismaUrlRepository };
