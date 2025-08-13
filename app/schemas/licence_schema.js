import { z } from 'zod';
import { ImageResponseSchema } from './image_schema';

const LicenceBaseSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    images: z.array(ImageResponseSchema).default([])
});

export const LicenceCreateSchema = LicenceBaseSchema;

export const LicenceUpdateSchema = LicenceBaseSchema;

export const LicenceResponseSchema = LicenceBaseSchema.extend({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date()
});