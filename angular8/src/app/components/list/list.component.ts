import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public name: string;
  public number: number;

  users = [];

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.countName(this.name);
    this.users.push({
      name: this.name,
      number: this.number,
    });
    this.name = '';
  }

  countName(name: string) {
    let characters = name.length;
    this.number = characters;
  }
}
