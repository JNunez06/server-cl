import { supabase } from "../supabaseClient.js";

export const invoiceRepository = {
  async getAll() {
    const { data, error } = await supabase.from("invoices").select("*").order("date", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
  },

  async findById(id) {
    const { data, error } = await supabase.from("invoices").select("*").eq("id", id).single();
    if (error) throw new Error(error.message);
    return data;
  },

  async create(invoice) {
    const { data, error } = await supabase.from("invoices").insert(invoice).select();
    if (error) throw new Error(error.message);
    return data[0];
  },

  async update(id, invoiceData) {
    const { data, error } = await supabase.from("invoices").update(invoiceData).eq("id", id).select();
    if (error) throw new Error(error.message);
    return data[0];
  },

  async delete(id) {
    const { error } = await supabase.from("invoices").delete().eq("id", id);
    if (error) throw new Error(error.message);
  }
};
