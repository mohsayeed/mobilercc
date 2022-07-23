import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {

  constructor() { }
  orders:any ={
    liverate:100
  }
  ngOnInit() {
    
  }

}
