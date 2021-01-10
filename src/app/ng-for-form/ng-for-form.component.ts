import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  clients = [];

  name = '';
  address = '';
  phone = '';
  city = '';
  age = 0;

  cities = [
    {name: 'Sao Paulo', state: 'SP'},
    {name: 'Porto Alegre', state: 'RS'},
    {name: 'Curitiba', state: 'PR'},
    {name: 'Rio de Janeiro', state: 'RJ'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel(): void {
    this.name = '';
    this.address = '';
    this.city = '';
    this.phone = '';
    this.age = 0;
  }

}
