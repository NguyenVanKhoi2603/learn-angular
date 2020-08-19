import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: '';
  isHighlight = false;
  eventStyle = { color: 'red', fontSize: '30px' }
  oddStyle = { color: 'black', fontSize: '50px' }
  currentClass = {circle: !this.isHighlight, square: this.isHighlight};
  constructor() { }
  ngOnInit(): void {
  }
}


