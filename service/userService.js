import { userRepository } from "../repository/userRepository.js";
import { User } from "../entity/userEntity.js";

export const userService = {
  async getUsers() {
    const users = await userRepository.getAll();
    return users.map(user => new User(user));
  },

  async createUser(userData) {
    const newUser = new User(userData);
    return await userRepository.create(newUser);
  }
};