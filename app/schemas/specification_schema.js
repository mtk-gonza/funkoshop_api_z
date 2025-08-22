import { z } from 'zod';

const SpecificationBaseSchema = z.object({
    name: z.string(),
    value: z.string()
});

export const SpecificationCreateSchema = SpecificationBaseSchema.extend({
    product_id: z.number()
});

export const SpecificationUpdateSchema = SpecificationBaseSchema.extend({
    product_id: z.number()
});

export const SpecificationResponseSchema = SpecificationBaseSchema.extend({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    product_id: z.number(),
});

export const SpecificationDeleteResponseSchema = z.object({
    success: z.boolean(),
    detail: z.string(),
});