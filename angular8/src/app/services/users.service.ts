import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  createUser(user: any) {
    console.log("Create ok");
  }

  updateUser(user: any) {
    console.log("Update ok");
  }

  deleteUser(user: any) {
    console.log("Delete ok");
  }
}
