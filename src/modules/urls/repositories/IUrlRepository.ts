import { Url } from '@prisma/client';
import { IUrl } from '../domain/Url';

export interface IUrlRepository {
  create(data: IUrl): Promise<Url>;
}
