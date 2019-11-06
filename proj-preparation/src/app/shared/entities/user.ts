import { IUser } from '../interfaces/login.model';
import { IName } from '../interfaces/name.model';

export class User implements IUser {
  id: number;
  token: string;
  name: IName;
  login: string;
  password: string;
  constructor(id: number,token: string,name: IName, login: string, password: string) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}
