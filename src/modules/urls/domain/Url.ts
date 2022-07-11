import { z } from 'zod';

export const urlSchema = z.object({
  redirectUrl: z.string()
    .url({ message: 'Url inválida' }),
  shortUrl: z.string()
    .min(3, { message: 'A URL curta precisa ter no mínimo 3 caracteres' })
    .optional()
});

export type IUrl = z.infer<typeof urlSchema>
