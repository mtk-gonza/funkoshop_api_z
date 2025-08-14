import { ImageType } from './../../core/enums/image_type.js';

export const LICENCES = [
    {
        name: 'Pokemon',
        description: 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.',
        images: [
            {
                path: 'images/pokemon/licence/pokemon_logo.webp',
                image_type: ImageType.LOGO,
                is_primary: true
            }
        ]
    },
    {
        name: 'Star Wars',
        description: 'Disfruta de una saga que sigue agregando personajes a su colección.',
        images: [
            {
                path: 'images/star-wars/licence/star-wars_logo.webp',
                image_type: ImageType.LOGO,
                is_primary: true
            }
        ]
    },
    {
        name: 'Harry Potter',
        description: 'Revive los recuerdos de una saga llena de magia y encanto.',
        images: [
            {
                path: 'images/harry-potter/licence/harry-potter_logo.webp',
                image_type: ImageType.LOGO,
                is_primary: true
            }
        ]
    },
    {
        name: 'Naruto',
        description: 'Disfruta de la historia de un ninja adolescente',
        images: [
            {
                path: 'images/Naruto/licence/naruto_logo.webp',
                image_type: ImageType.LOGO,
                is_primary: true
            }
        ]
    },
    {
        name: 'Dragon Ball',
        description: 'Disfruta de la historia de un guerrero saiyajin',
        images: [
            {
                path: 'images/dragon-ball/licence/dragon-ball_logo.webp',
                image_type: ImageType.LOGO,
                is_primary: true
            }
        ]
    }
];