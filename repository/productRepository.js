import { supabase } from "../supabaseClient.js";


export const ProductsRepository = {

  async create(productData) {
    const { data, error } = await supabase
      .from("products")
      .insert([productData])
      .select()

    if (error) throw error
    return data[0]
  },

  async findAll() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error
    return data
  },

  async findById(id) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single()

    if (error) throw error
    return data
  },

  async update(id, updateData) {
    const { data, error } = await supabase
      .from("products")
      .update(updateData)
      .eq("id", id)
      .select()

    if (error) throw error
    return data[0]
  },

  async delete(id) {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)

    if (error) throw error
  }
};