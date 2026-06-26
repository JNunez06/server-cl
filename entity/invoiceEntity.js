export class Invoice {
  constructor({ id, type, series_number, client_name, client_doc, date, items, subtotal, tax, total, branch, notes }) {
    this.id = id;
    this.type = type || "BOLETA";
    this.series_number = series_number || `B001-${Date.now().toString().slice(-6)}`;
    this.client_name = client_name || "Cliente General";
    this.client_doc = client_doc || "";
    this.date = date || new Date().toISOString();
    this.items = Array.isArray(items) ? items : (typeof items === "string" ? JSON.parse(items || "[]") : []);
    this.subtotal = Number(subtotal || 0);
    this.tax = Number(tax || 0);
    this.total = Number(total || 0);
    this.branch = branch || "Sucursal Principal";
    this.notes = notes || "";
  }
}
