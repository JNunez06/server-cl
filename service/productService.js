import { ProductsRepository } from "../repository/productRepository.js"
import { Product } from "../entity/product.entity.js"


export const ProductsService = {
  async createProduct(data) {
    const product = new Product(data)
    return await ProductsRepository.create(product)
  },

  async getProducts() {
    return await ProductsRepository.findAll()
  },

  async getProductById(id) {
    return await ProductsRepository.findById(id)
  },

  async updateProduct(id, data) {
    return await ProductsRepository.update(id, data)
  },

  async deleteProduct(id) {
    return await ProductsRepository.delete(id)
  }
};