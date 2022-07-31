import { IUrlRepository } from '@modules/urls/repositories/IUrlRepository';

class GetUrl {
  constructor(private urlRepository: IUrlRepository) {}

  async execute(shortUrl: string) {
    const url = await this.urlRepository.findOne(shortUrl);

    if (!url) {
      return { error: 'Url not found' };
    }

    return url;
  }
}

export { GetUrl };
