import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  errorText = '';
  show = false;
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      userid: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]{12}$'),
          Validators.maxLength(12),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      let userid = this.ionicForm.value.userid;
      let password = this.ionicForm.value.password;

      this.authService
        .authenticateUser(userid, password)
        .pipe()
        .subscribe(
          (result: any) => {
            this.show = false;
            this.errorText = '';
            console.log(result);
            this.authService._userInfoSub$.next(result)
            if(result.passwordReset){
              this.router.navigate(['force-password']);
            }
            else{
              this.router.navigate(['tabs'])
            }
          },
          (error: any) => {
            this.show = true;
            this.errorText = error.error.message;
            console.log(this.errorText);
          }
        );
    }
  }

}
