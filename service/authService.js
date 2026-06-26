import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userRepository } from "../repository/userRepository.js";

const SECRET = process.env.JWT_SECRET || "supersecretkey";

export const authService = {
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await userRepository.create({
      role: "CLIENT",
      branch: "Sucursal Principal",
      ...userData,
      password: hashedPassword
    });

    return user;
  },

  async login(identifier, password) {
    const users = await userRepository.getAll();
    const user = users.find(u => u.email === identifier || u.username === identifier);
    if (!user) throw new Error("Usuario no encontrado");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET,
      { expiresIn: "24h" }
    );

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role || "CLIENT",
        branch: user.branch || "Sucursal Principal"
      }
    };
  }
};