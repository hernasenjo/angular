import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    if (navigator.onLine) {
      console.log("online");
      return this.http.get('https://randomuser.me/api/?results=10');
    } else {
      console.log("offline");
      return JSON.parse(localStorage.getItem("users"));
    }
  }

  createUser(user: any) {
    if (navigator.onLine) {
      console.log("online");
    } else {
      console.log("offline");
      this.users.push(user);
    }
  }
}
