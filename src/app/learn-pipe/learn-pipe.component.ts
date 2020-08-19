import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015, 7, 7);
  person = { name: 'Khoi Nguyen', age: 20 };
  address = Promise.resolve('92 Le Hong Phong');
  constructor() { }

  ngOnInit(): void {
  }

}

