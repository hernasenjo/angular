import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  formUser: FormGroup;
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.loadUser();
  }

  private buildForm() {
    this.formUser = this.formBuilder.group({
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      picture: [''],
    });
  }

  loadUser() {
    if (navigator.onLine) {
      localStorage.removeItem('users');
      console.log("online");
      this.usersService.getAllUsers().subscribe(data => {
        console.log(data['results']);
        this.users = data['results'];
      });
    } else {
      if (JSON.parse(localStorage.getItem("users")) != undefined) {
        this.users = JSON.parse(localStorage.getItem("users"));
        console.log(this.users);
      }
    }
  }

  editUser(user: any) {
    if (navigator.onLine) {
      this.usersService.updateUser(user);
    } else {
      this.users.forEach((us) => {
        if (us.email == user.email) {
          us == user;
        }
      });
    }
  }

  deleteUser(user: any) {
    if (navigator.onLine) {
      this.usersService.deleteUser(user);
    } else {
      this.users.forEach((us, i) => {
        if (us.email == user.email) {
          this.users.splice(i, 1);
        }
      });
    }
  }

  onSubmit() {
    if (this.formUser.valid) {
      if (navigator.onLine) {
        console.log(this.formUser.value);
        this.usersService.createUser(this.formUser);
        this.loadUser();
      } else {
        console.log("offline");
        console.log(this.formUser.value);
        console.log(this.users);
        this.users.push(this.formUser.value);
        localStorage.setItem("users", JSON.stringify(this.users));
      }
    }
  }

}
