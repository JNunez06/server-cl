import { invoiceRepository } from "../repository/invoiceRepository.js";
import { Invoice } from "../entity/invoiceEntity.js";

export const invoiceService = {
  async getInvoices() {
    const data = await invoiceRepository.getAll();
    return data.map(item => new Invoice(item));
  },

  async getInvoiceById(id) {
    const item = await invoiceRepository.findById(id);
    return new Invoice(item);
  },

  async createInvoice(data) {
    const newInvoice = new Invoice(data);
    delete newInvoice.id;
    return await invoiceRepository.create(newInvoice);
  },

  async updateInvoice(id, data) {
    const updated = new Invoice(data);
    return await invoiceRepository.update(id, updated);
  },

  async deleteInvoice(id) {
    return await invoiceRepository.delete(id);
  }
};
