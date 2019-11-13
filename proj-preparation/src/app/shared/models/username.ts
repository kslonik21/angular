import { IName } from './name.model';
export class UserName implements IName {
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last
  }
}
