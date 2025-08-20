'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const { LICENCES } = await import('./data/licences_data.js');

        for (const licence of LICENCES) {
            const { images, ...licenceData } = licence;

            let licenceId = await queryInterface.rawSelect(
                'licences',
                { where: { name: licenceData.name } },
                ['id']
            );

            if (!licenceId) {
                await queryInterface.bulkInsert('licences', [licenceData], {});
                licenceId = await queryInterface.rawSelect(
                    'licences',
                    { where: { name: licenceData.name } },
                    ['id']
                );
                if (images && images.length > 0) {
                    const imagesToInsert = images.map(image => ({
                        ...image,
                        entity_id: licenceId,
                    }));    
                    await queryInterface.bulkInsert('images', imagesToInsert, {});
                }
            }
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('images', null, {});
        await queryInterface.bulkDelete('licences', null, {});
    }
};