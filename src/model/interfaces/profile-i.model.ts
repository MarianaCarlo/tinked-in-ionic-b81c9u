// NUEVA INTERFACE PARA EDITAR
export interface ClientProfileI {
  editPassword(password: String): String;

  editEmail(email: String): String;

  editCountry(country: String): String;

  editCity(city: String): String;

  editSkills(skills: Array<string>): Array<string>;
}
