import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router:Router) {
    setTimeout(() => {
      var isTokenpresent = !!localStorage.getItem('loginUser');
    if(isTokenpresent){
      var jsonToken = JSON.parse(localStorage.getItem('loginUser'))
      var password_reset = jsonToken['passwordReset']
      console.log(password_reset)
      if(password_reset)
      {
        this.router.navigate(['/login']);
      }
      else
      this.router.navigateByUrl('')
    }
    else
      {
        this.router.navigateByUrl('')
      } 
    },2000)
  }

  ngOnInit() {
  }

}
