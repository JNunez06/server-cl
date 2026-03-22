import { authService } from "../service/authService.js";

export const authController = {
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const data = await authService.login(email, password);
      res.json(data);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
};