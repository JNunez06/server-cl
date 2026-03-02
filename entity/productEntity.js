export class Product {
  constructor({ id, nameproduct, descripcion, price_aprox, image_url, created_at }) {
    this.id = id
    this.nameproduct = nameproduct
    this.descripcion = descripcion
    this.price_aprox = price_aprox
    this.image_url = image_url
    this.created_at = created_at
  }
}