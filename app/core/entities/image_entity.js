export class Image {
  constructor({
    id = null,
    path,
    entity_type,
    entity_id,
    image_type = null,
    is_primary,
    created_at = null,
  }) {
    this.id = id;
    this.path = path;
    this.entity_type = entity_type;
    this.entity_id = entity_id;
    this.image_type = image_type;
    this.is_primary = is_primary;
    this.created_at = created_at;
  }

  // Puedes agregar métodos de negocio si necesitas
}