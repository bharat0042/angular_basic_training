import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './SalesPerson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "ak@gmail.com", 5000),
    new SalesPerson("Mary", "Glide", "mg@gmail.com", 4200),
    new SalesPerson("Henery", "Parry", "hp@gmail.com", 900),
    new SalesPerson("Jonas", "Khanwald", "jk@gmail.com", 5000),
    new SalesPerson("Martha", "Nielsen", "mn@gmail.com", 1200)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
