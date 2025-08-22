import { ZodError } from 'zod'
import { licenceUseCases } from './../dependencies.js';
import { LicenceCreateSchema, LicenceUpdateSchema, LicenceResponseSchema, LicenceDeleteResponseSchema } from './../../../schemas/licence_schema.js';

export const createLicence = async (req, res) => {
    try {
        const data = LicenceCreateSchema.parse(req.body);
        const licence = await licenceUseCases.createLicence(data);
        const response = LicenceResponseSchema.parse(licence);
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

export const getLicences = async (req, res) => {
    try {
        const licences = await licenceUseCases.listLicences();
        const response = licences.map((l) => LicenceResponseSchema.parse(l));
        return res.status(200).json(response);
    } catch (err) {
        return res.status(404).json({
            success: false,
            detail: err.message
        });
    }
};

export const getLicenceById = async (req, res) => {
    try {
        const licence = await categoryUseCases.getLicenceById(+req.params.id);
        const response = LicenceResponseSchema.parse(licence);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(404).json({
            success: false,
            detail: err.message
        });
    }
};

export const updateLicence = async (req, res) => {
    try {
        const data = LicenceUpdateSchema.parse(req.body);
        const licence = await licenceUseCases.updateLicence(+req.params.id, data);
        const response = LicenceResponseSchema.parse(licence);
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

export const deleteLicence = async (req, res) => {
    try {
        await licenceUseCases.deleteLicence(+req.params.id);

        const response = LicenceDeleteResponseSchema.parse({
            success: true,
            detail: 'Licence deleted successfully'
        });

        return res.status(200).json(response);

    } catch (err) {
        const response = LicenceDeleteResponseSchema.safeParse({
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