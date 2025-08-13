import { z } from 'zod';

export const TokenSchema = z.object({
    access_token: z.string(),
    token_type: z.string()
})

export const TokenData = z.object({
    id: z.number(),
    username: z.string(),
    roles: z.array(z.string())
})