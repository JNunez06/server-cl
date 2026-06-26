export class User {
  constructor({ id, username, email, password, role, company, branch }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role || "CLIENT";
    this.company = company || "Carpintería Liviano";
    this.branch = branch || "Sucursal Principal";
  }
}