import { ProductsService } from "../service/productService.js"

export const ProductsController = {
  async create(req, res) {
    try {
      console.log("Datos recibidos para crear producto:", req.body)
      const product = await ProductsService.createProduct(req.body)
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async findAll(req, res) {
    try {
      const products = await ProductsService.getProducts()
      res.json(products)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async findById(req, res) {
    try {
      const product = await ProductsService.getProductById(req.params.id)
      res.json(product)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async update(req, res) {
    try {
      const product = await ProductsService.updateProduct(req.params.id, req.body)
      res.json(product)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async delete(req, res) {
    try {
      await ProductsService.deleteProduct(req.params.id)
      res.json({ message: "Producto eliminado" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
};