export class Product {
    constructor({
        id = null,
        name,
        description = null,
        price,
        stock = null,
        discount = 0,
        sku,
        dues,
        special = false,
        licence_id = null,
        category_id = null,
        specifications = [],
        images = [],
        created_at = null,
        updated_at = null,
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.discount = discount;
        this.sku = sku;
        this.dues = dues;
        this.special = special;
        this.licence_id = licence_id;
        this.category_id = category_id;
        this.specifications = specifications;
        this.images = images;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    priceWithDiscount() {
        return this.price - (this.price * this.discount) / 100;
    }

    isInStock() {
        return (this.stock ?? 0) > 0;
    }
};