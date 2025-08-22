import express from 'express';
import { createLicence, getLicences, getLicenceById, updateLicence, deleteLicence } from './../controllers/licence_controller.js'

const router = express.Router();

router.post('/', createLicence);

router.get('/', getLicences);

router.get('/:id', getLicenceById);

router.put('/:id', updateLicence);

router.delete('/:id', deleteLicence);

export default router;