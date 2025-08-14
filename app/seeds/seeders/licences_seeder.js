import { LICENCES } from './../data/licences_data.js';
import { LicenceRepositoryImpl } from './../../adapters/persistence/repositories/licence_repository_impl.js';

export async function licencesSeeder() {
    const licenceRepo = new LicenceRepositoryImpl();
    const createdLicences = [];
    const licences = await licenceRepo.findAll();
    if (licences.length < 1) {
        for (const licenceData of LICENCES) {
            try {
                const licence = await licenceRepo.create(licenceData)
                createdLicences.push(licence)
            } catch (err) {
                console.error(`Error creating licence ${licenceData.name}: ${err.message}`);
            }
        }
        console.log(`Seeded ${createdLicences.length} licences.`);
        return createdLicences;
    }
    console.log(`Not seeded, ${licences.length} licences already exist.`);
    return licences;    
}