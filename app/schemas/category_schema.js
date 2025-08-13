import { z } from 'zod';

const CategoryBaseSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
});

export const CategoryCreateSchema = CategoryBaseSchema;

export const CategoryUpdateSchema = CategoryBaseSchema.partial();

export const CategoryResponseSchema = CategoryBaseSchema.extend({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date()
});