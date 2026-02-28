import { supabase } from "../supabaseClient.js";

export const userRepository = {
  async getAll() {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw new Error(error.message);

    return data;
  },

  async create(user) {
    const { data, error } = await supabase
      .from("users")
      .insert(user)
      .select();

    if (error) throw new Error(error.message);

    return data[0];
  }
};