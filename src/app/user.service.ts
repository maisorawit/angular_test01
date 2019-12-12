import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    { id: 1, username: 'Sorawit.1', age: 21, gender: 'M' },
    { id: 2, username: 'Sorawit.2', age: 31, gender: 'M' },
    { id: 3, username: 'Sorawit.3', age: 26, gender: 'F' },
    { id: 4, username: 'Sorawit.4', age: 35, gender: 'F' },
    { id: 5, username: 'Sorawit.5', age: 24, gender: 'M' },
    { id: 6, username: 'Sorawit.6', age: 21, gender: 'F' },
    { id: 7, username: 'Sorawit.7', age: 25, gender: 'M' },
    { id: 8, username: 'Sorawit.8', age: 39, gender: 'F' },
    { id: 9, username: 'Sorawit.9', age: 35, gender: 'M' },
    { id: 10, username: 'Sorawit.10', age: 36, gender: 'F' },
    { id: 11, username: 'Sorawit.11', age: 21, gender: 'F' },
    { id: 12, username: 'Sorawit.12', age: 31, gender: 'M' }
  ]

  constructor() { }

  public getUser(): any[] {
    return this.users
  }

  public getPicture(gender: string, age: number): string {
    if (gender == 'M') {
      if (age > 30) {
        return "./assets/Picture/boy2.jpg"
      } else {
        return "./assets/Picture/boy1.jpg"
      }
    } else
      if (age > 30) {
        return "./assets/Picture/girl2.jpg"
      } else {
        return "./assets/Picture/girl1.jpg"
      }
  }


  
}
