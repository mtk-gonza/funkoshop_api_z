export class Specification {
    constructor({ 
        id = null, 
        product_id, 
        key,
        value,
        created_at = null,
        updated_at = null, 
    }) {
        this.id = id;
        this.product_id = product_id;
        this.key = key;
        this.value = value;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
};