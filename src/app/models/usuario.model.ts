export class UsuarioModel {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
  }
}
