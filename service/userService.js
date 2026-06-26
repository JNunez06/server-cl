import { userRepository } from "../repository/userRepository.js";
import { User } from "../entity/userEntity.js";
import bcrypt from "bcrypt";

export const userService = {
  async getUsers() {
    const users = await userRepository.getAll();
    return users.map(user => new User(user));
  },

  async getUserById(id) {
    const user = await userRepository.findById(id);
    return new User(user);
  },

  async createUser(userData) {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }
    const newUser = new User(userData);
    return await userRepository.create(newUser);
  },

  async updateUser(id, updateData) {
    if (updateData.password && updateData.password.trim() !== "") {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    } else {
      delete updateData.password;
    }
    return await userRepository.update(id, updateData);
  },

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
};