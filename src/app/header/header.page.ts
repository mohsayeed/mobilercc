import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  userName = '';
  vendorCode: any;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.vendorCode = localStorage.getItem('vendorCode');
  }

  logout() {
    this.userName = null;
    this.authService.logout();
  }
}
