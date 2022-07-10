import { ZodError } from 'zod';
import { Url } from '@prisma/client';
import { randomUrl } from '@utils/index';
import { IUrl, urlSchema } from '@modules/urls/domain/Url';
import { IUrlRepository } from '@modules/urls/repositories/IUrlRepository';

class CreateUrl {
  constructor(private urlRepository: IUrlRepository) {}

  async execute({ redirectUrl, shortUrl }: IUrl):Promise<Url | { error: ZodError }> {
    const validBody = urlSchema.safeParse({ redirectUrl, shortUrl });

    if (!validBody.success) {
      return { error: validBody.error };
    }

    if (!shortUrl) {
      shortUrl = randomUrl();
    }

    const url = await this.urlRepository.create({
      redirectUrl,
      shortUrl
    });

    return url;
  }
}

export { CreateUrl };
