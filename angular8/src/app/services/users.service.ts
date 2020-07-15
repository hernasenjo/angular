import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];
  constructor() { }

  getAllUsers() {
    if (navigator.onLine) {

      return this.users;
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
      return this.users;
    }
  }

  createUser(user: any) {
    if (navigator.onLine) {

    } else {
      this.users.push(user);
    }
  }
}
