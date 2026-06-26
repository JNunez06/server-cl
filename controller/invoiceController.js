import { invoiceService } from "../service/invoiceService.js";

export const invoiceController = {
  async getInvoices(req, res) {
    try {
      const data = await invoiceService.getInvoices();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getInvoiceById(req, res) {
    try {
      const data = await invoiceService.getInvoiceById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createInvoice(req, res) {
    try {
      const data = await invoiceService.createInvoice(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateInvoice(req, res) {
    try {
      const data = await invoiceService.updateInvoice(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteInvoice(req, res) {
    try {
      await invoiceService.deleteInvoice(req.params.id);
      res.json({ message: "Comprobante eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
