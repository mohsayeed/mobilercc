import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  updateContent:boolean = true
  ngOnInit(): void {
  }
constructor(public userService:UserService){}
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.updateContent = !this.updateContent
      event.target.complete();
    }, 300);
  };
}
