import { supabase } from "../supabaseClient.js";

export const userRepository = {
  async getAll() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw new Error(error.message);
    return data;
  },

  async findById(id) {
    const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
    if (error) throw new Error(error.message);
    return data;
  },

  async create(user) {
    const { data, error } = await supabase.from("users").insert(user).select();
    if (error) throw new Error(error.message);
    return data[0];
  },

  async update(id, updateData) {
    const { data, error } = await supabase.from("users").update(updateData).eq("id", id).select();
    if (error) throw new Error(error.message);
    return data[0];
  },

  async delete(id) {
    const { error } = await supabase.from("users").delete().eq("id", id);
    if (error) throw new Error(error.message);
  }
};