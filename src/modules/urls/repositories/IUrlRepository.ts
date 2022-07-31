import { Prisma, Url } from '@prisma/client';
import { IUrl } from '../domain/Url';

export interface IUrlRepository {
  create(data: IUrl): Promise<Url>;
  findOne(id: string): Promise<Url | null>;
  update(id: string, data: Prisma.UrlUpdateInput): Promise<void>;
}
