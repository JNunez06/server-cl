import { v4 as uuidv4 } from "uuid"

export class Product {
  constructor({ id, nameproduct, descripcion, price_aprox, image_url, created_at, stock, category, branch, in_catalog }) {
    this.id = id || uuidv4()
    this.nameproduct = nameproduct
    this.descripcion = descripcion
    this.price_aprox = price_aprox
    this.image_url = image_url
    this.created_at = created_at || new Date()
    this.stock = stock !== undefined ? Number(stock) : 0
    this.category = category || "General"
    this.branch = branch || "Sucursal Principal"
    this.in_catalog = in_catalog !== undefined ? Boolean(in_catalog) : true
  }
}