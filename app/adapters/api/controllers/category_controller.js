import { ZodError } from 'zod'
import { categoryUseCases } from './../dependencies.js';
import { CategoryCreateSchema, CategoryUpdateSchema, CategoryResponseSchema, CategoryDeleteResponseSchema } from './../../../schemas/category_schema.js';

export const createCategory = async (req, res) => {
    try {
        const data = CategoryCreateSchema.parse(req.body);
        const category = await categoryUseCases.createCategory(data);
        const response = CategoryResponseSchema.parse(category);
        return res.status(201).json(response);

    } catch (err) {
        if (err instanceof ZodError) {
            return res.status(400).json({
                success: false,
                detail: 'Validation error',
                issues: err.errors
            });
        }

        return res.status(500).json({
            success: false,
            detail: err.message || 'Unexpected error'
        });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryUseCases.listCategories();
        const response = categories.map((c) => CategoryResponseSchema.parse(c));
        return res.status(200).json(response);
    } catch (err) {
        return res.status(404).json({
            success: false,
            detail: err.message
        });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await categoryUseCases.getCategoryById(+req.params.id);
        const response = CategoryResponseSchema.parse(category);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(404).json({
            success: false,
            detail: err.message
        });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const data = CategoryUpdateSchema.parse(req.body);
        const category = await categoryUseCases.updateCategory(+req.params.id, data);
        const response = CategoryResponseSchema.parse(category);
        return res.status(200).json(response);
    } catch (err) {
        if (err instanceof ZodError) {
            return res.status(400).json({
                success: false,
                detail: 'Validation error',
                issues: err.errors
            });
        }
        return res.status(500).json({
            success: false,
            detail: err.message || 'Unexpected error'
        });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await categoryUseCases.deleteCategory(+req.params.id);

        const response = CategoryDeleteResponseSchema.parse({
            success: true,
            detail: 'Category deleted successfully'
        });

        return res.status(200).json(response);

    } catch (err) {
        const response = CategoryDeleteResponseSchema.safeParse({
            success: false,
            detail: err.message
        });

        if (!response.success) {
            return res.status(500).json({
                success: false,
                detail: 'Internal response validation error',
                issues: response.error.errors
            });
        }

        return res.status(404).json(response.data);
    }
};