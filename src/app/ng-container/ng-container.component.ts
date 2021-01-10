import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: 'bob', role: 'admin', lastLogin: new Date('2/1/2021')},
    {login: 'lia', role: 'user', lastLogin: new Date('4/30/2021')},
    {login: 'jhon', role: 'admin', lastLogin: new Date('2/23/2021')},
    {login: 'robin', role: 'user', lastLogin: new Date('2/12/2021')},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
