import { quoteRepository } from "../repository/quoteRepository.js";
import { Quote } from "../entity/quoteEntity.js";

export const quoteService = {
  async createQuote(data) {
    if (!data.fullName || !data.email || !data.projectDescription) {
      throw new Error("Missing required fields");
    }

    const newQuote = new Quote(data);

    return await quoteRepository.create(newQuote);
  },

  async getAllQuotes() {
    return await quoteRepository.findAll();
  },

  async getQuoteById(id) {
    if (!id) throw new Error("Id is required");
    return await quoteRepository.findById(id);
  },

  async updateQuote(id, data) {
    if (!id) throw new Error("Id is required");
    return await quoteRepository.update(id, data);
  },

  async deleteQuote(id) {
    if (!id) throw new Error("Id is required");
    return await quoteRepository.delete(id);
  }

};