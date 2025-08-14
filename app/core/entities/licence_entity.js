export class Licence {
    constructor({ 
        id = null, 
        name, 
        description = null,
        images = [],
        created_at = null,
        updated_at = null, 
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
};