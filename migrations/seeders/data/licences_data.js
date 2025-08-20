import { ImageType } from './../../../app/core/enums/image_type.js';
import { EntityType } from './../../../app/core/enums/entity_type.js';

export const LICENCES = [
    {
        name: 'Pokemon',
        description: 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.',
        images: [
            {
                path: 'images/pokemon/licence/pokemon_logo.webp',
                entity_type: EntityType.LICENCE,
                image_type: ImageType.LOGO,
                is_primary: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Star Wars',
        description: 'Disfruta de una saga que sigue agregando personajes a su colección.',
        images: [
            {
                path: 'images/star-wars/licence/star-wars_logo.webp',
                entity_type: EntityType.LICENCE,
                image_type: ImageType.LOGO,
                is_primary: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Harry Potter',
        description: 'Revive los recuerdos de una saga llena de magia y encanto.',
        images: [
            {
                path: 'images/harry-potter/licence/harry-potter_logo.webp',
                entity_type: EntityType.LICENCE,
                image_type: ImageType.LOGO,
                is_primary: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Naruto',
        description: 'Disfruta de la historia de un ninja adolescente',
        images: [
            {
                path: 'images/Naruto/licence/naruto_logo.webp',
                entity_type: EntityType.LICENCE,
                image_type: ImageType.LOGO,
                is_primary: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Dragon Ball',
        description: 'Disfruta de la historia de un guerrero saiyajin',
        images: [
            {
                path: 'images/dragon-ball/licence/dragon-ball_logo.webp',
                entity_type: EntityType.LICENCE,
                image_type: ImageType.LOGO,
                is_primary: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ],
        created_at: new Date(),
        updated_at: new Date()
    }
];