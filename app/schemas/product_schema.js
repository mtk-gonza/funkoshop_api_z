import { z } from 'zod';
import { ImageCreateSchema, ImageResponseSchema } from './image_schema.js';
import { SpecificationCreateSchema, SpecificationResponseSchema } from './specification_schema.js';

const ProductBaseSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
    stock: z.number().optional(),
    discount: z.number().optional(),
    sku: z.string(),
    dues: z.number().optional(),
    special: z.boolean(),
    licence_id: z.number().optional(),
    category_id: z.number().optional()
});

export const ProductCreateSchema = ProductBaseSchema.extend({
    special: z.boolean().default(false),
    images: z.array(ImageCreateSchema).default([]),
    specifications: z.array(SpecificationCreateSchema).default([])
});

export const ProductUpdateSchema = ProductBaseSchema.extend({
    special: z.boolean().optional(),
    images: z.array(ImageCreateSchema).optional(),
    specifications: z.array(SpecificationCreateSchema).optional()
}).partial();

export const ProductResponseSchema = ProductBaseSchema.extend({
    id: z.number(),
    special: z.boolean(),
    images: z.array(ImageResponseSchema),
    specifications: z.array(SpecificationResponseSchema),
    created_at: z.date(),
    updated_at: z.date()
});