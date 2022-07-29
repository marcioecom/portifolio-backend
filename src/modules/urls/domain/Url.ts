import { z } from 'zod';

export const urlSchema = z.object({
  redirectUrl: z.string()
    .url({ message: 'Formato da url inválida' }),
  shortUrl: z.string().optional()
});

export type IUrl = z.infer<typeof urlSchema>
