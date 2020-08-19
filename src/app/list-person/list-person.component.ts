import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    { name: 'Khoi', age: 20 },
    { name: 'Van', age: 19 },
    { name: 'Phong', age: 9 },
    { name: 'Lan', age: 100 },
    { name: 'Minh', age: 90 },
    { name: 'Khanh', age: 20 },
    { name: 'Quoc', age: 19 },
    { name: 'Phuong', age: 9 },
    { name: 'Anh', age: 100 },
    { name: 'Mai', age: 90 },
    { name: 'Hoai', age: 30 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
