import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/users/user.service';

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
    private router: Router,
    private userService:UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      userid: [
        '',
        [
          Validators.required,
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
            this.authService._userInfoSub$.next(result);
            if (result.passwordReset) {
              localStorage.setItem('loginUser', JSON.stringify(result));
              this.router.navigate(['force-password']);
            } else {
              this.authService._userInfoSub$.subscribe((result) => {
                localStorage.setItem('loginUser', JSON.stringify(result));
                this.userService
                  .getUserName(result.userId)
                  .pipe()
                  .subscribe((result) => {
                    localStorage.setItem('userName',result.userName)
                    this.router.navigate(['tabs/tab1']);
                  });
              });
            }
          },
          (error: any) => {
            this.show = true;
            this.errorText = error.error.message;
            this.toastr.error(error.error.message);
          }
        );
    }
  }
}
