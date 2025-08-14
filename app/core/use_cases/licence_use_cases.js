import { Licence } from './../entities/licence_entity.js';

export class LicenceUseCases {
    constructor(licenceRepository) {
        this.licenceRepository = licenceRepository;
    }
    async listLicences() {
        return await this.licenceRepository.findAll();
    }

    async getLicenceById(id) {
        const licence = await this.licenceRepository.findById(id);
        if (!licence) throw new Error('Licence not found');
        return licence;
    }

    async createLicence(data) {
        if (!data.name) throw new Error('Name is required');

        const licenceEntity = new Licence({
            name: data.name,
            description: data.description,
            images: data.images
        });

        return await this.licenceRepository.create(licenceEntity);
    }

    async updateLicence(id, data) {
        const licenceEntity = new Licence({
            name: data.name,
            description: data.description,
            images: data.images
        });

        const updated = await this.licenceRepository.update(id, licenceEntity);
        if (!updated) throw new Error('Licence not found');
        return updated;
    }

    async deleteLicence(id) {
        const deleted = await this.licenceRepository.delete(id);
        if (!deleted) throw new Error('Licence not found');
        return deleted;
    }
}