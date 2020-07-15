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
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      console.log(data.results);
      this.users = data.results;
    });
  }

}
