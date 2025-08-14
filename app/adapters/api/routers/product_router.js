import express from 'express';
import { z } from 'zod';
import { productUseCases } from './../dependencies.js';
import { ProductCreateSchema, ProductUpdateSchema, ProductResponseSchema } from './../../../schemas/product_schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = ProductCreateSchema.parse(req.body);
        const product = await productUseCases.createProduct(data);
        res.status(201).json(ProductResponseSchema.parse(product));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await productUseCases.listProducts();
        res.json(products.map((product) => ProductResponseSchema.parse(product)));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await productUseCases.getProductById(+req.params.id);
        res.json(ProductResponseSchema.parse(product));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = ProductUpdateSchema.partial().parse(req.body);
        const product = await productUseCases.updateProduct(+req.params.id, data);
        res.json(ProductResponseSchema.parse(product));
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await productUseCases.deleteProduct(+req.params.id);
        res.json(ProductResponseSchema.parse(product));
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

export default router;