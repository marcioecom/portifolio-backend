import { Request, Response } from 'express';
import { CreateUrl } from './CreateUrl';

class CreateUrlController {
  constructor(private createUrl: CreateUrl) {}

  async handle(req: Request, res: Response) {
    const { redirectUrl, shortUrl } = req.body;

    const url = await this.createUrl.execute({ redirectUrl, shortUrl });

    if ('error' in url) {
      return res.status(400).json({ message: url.error });
    }

    return res.status(201).json(url);
  }
}

export { CreateUrlController };
