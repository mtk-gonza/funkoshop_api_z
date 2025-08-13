import { z } from 'zod';

const ProductSpecBaseSchema = z.object({
    name: z.string(),
    value: z.string()
});

export const ProductSpecCreateSchema = ProductSpecBaseSchema.extend({
    product_id: z.number()
});

export const ProductSpecUpdateSchema = ProductSpecBaseSchema.extend({
    product_id: z.number()
});

export const ProductSpecResponseSchema = ProductSpecBaseSchema.extend({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    product_id: z.number(),
});