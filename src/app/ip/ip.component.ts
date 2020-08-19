import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
  configUrl = 'http://ip.jsontest.com/';
  ssdfds = 'ddd';
  brank = 'sdfsdf';
  constructor(private http: HttpClientModule) {

    
    
    
   }

  ngOnInit(): void {
  }

}
