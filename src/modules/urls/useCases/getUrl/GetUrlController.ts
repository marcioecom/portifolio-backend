import { Request, Response } from 'express';
import { GetUrl } from './GetUrl';

class GetUrlController {
  constructor(private getUrl: GetUrl) {}

  async handle(req: Request, res: Response) {
    const { id: shortUrl } = req.params;
    console.log(shortUrl);
    try {
      const url = await this.getUrl.execute(shortUrl);

      if ('error' in url) {
        return res.status(404).json({ message: url.error });
      }

      return res.status(200).json(url);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export { GetUrlController };
