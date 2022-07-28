import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  userName = ''
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit() {
    let userId = JSON.parse( localStorage.getItem( 'loginUser' ) ).userId
    this.userService.getUserName(userId)
    .pipe()
    .subscribe(
      (result)=>{
        this.userName = result.userName
      }
    )
  }

  logout(){
    this.authService.logout();
  }

  
}
