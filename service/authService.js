import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userRepository } from "../repository/userRepository.js";

const SECRET = process.env.JWT_SECRET;

export const authService = {
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await userRepository.create({
      ...userData,
      password: hashedPassword
    });

    return user;
  },

  async login(email, password) {
    const users = await userRepository.getAll();
    const user = users.find(u => u.email === email);

    if (!user) throw new Error("Usuario no encontrado");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    return { token };
  }
};