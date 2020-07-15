import { User } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private UsersService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.UsersService.getAllUsers();
  }

}
