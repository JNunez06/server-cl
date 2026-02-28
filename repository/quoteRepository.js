import { supabase } from "../supabaseClient.js";

export const quoteRepository = {
  async create(quote) {
    const { data, error } = await supabase
      .from("quotes")
      .insert(quote)
      .select();

    if (error) throw new Error(error.message);

    return data[0];
  },

  async findAll() {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  },

  async findById(id) {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  async update(id, updateData) {
    const { data, error } = await supabase
      .from("quotes")
      .update(updateData)
      .eq("id", id)
      .select();

    if (error) throw new Error(error.message);
    return data[0];
  },

  async delete(id) {
    const { error } = await supabase
      .from("quotes")
      .delete()
      .eq("id", id);

    if (error) throw new Error(error.message);
    return true;
  }


};