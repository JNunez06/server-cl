import { quoteService } from "../service/quoteService.js";

export const quoteController = {
  async create(req, res) {
    try {
      const quote = await quoteService.createQuote(req.body);

      res.status(201).json({
        message: "Quote submitted successfully",
        data: quote
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const quotes = await quoteService.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const quote = await quoteService.getQuoteById(req.params.id);
      res.json(quote);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await quoteService.updateQuote(
        req.params.id,
        req.body
      );
      res.json(updated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await quoteService.deleteQuote(req.params.id);
      res.json({ message: "Quote deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};