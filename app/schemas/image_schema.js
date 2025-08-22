import { z } from 'zod';
import { EntityType } from './../core/enums/entity_type.js';
import { ImageType } from './../core/enums/image_type.js';

const entityTypeValues = Object.values(EntityType);
const imageTypeValues = Object.values(ImageType);

const ImageBaseSchema = z.object({
    path: z.string(),
    entity_id: z.number(),
    entity_type: z.enum(entityTypeValues),
    image_type: z.enum(imageTypeValues),
    is_primary: z.boolean().default(true),
});

export const ImageCreateSchema = ImageBaseSchema;

export const ImageUpdateSchema = ImageBaseSchema;

export const ImageResponseSchema = ImageBaseSchema.extend({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date()
});

export const ImageDeleteResponseSchema = z.object({
    success: z.boolean(),
    detail: z.string(),
});