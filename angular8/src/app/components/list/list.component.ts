import { Component, OnInit } from '@angular/core';
import { FibonacciComponent } from 'src/app/pipes/fibonacci/fibonacci.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  name: string;

  users = [
    {
      name: 'Goku',
      number: 10
    },
    {
      name: 'Vegeta',
      number: 42
    },
    {
      name: 'Picolo',
      number: 26
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push({
      name: this.name,
      number: 5,
    });
    this.name = '';
  }
}
