/* eslint-disable eqeqeq */
import { UserService } from './../services/users/user.service';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-force-password',
  templateUrl: './force-password.page.html',
  styleUrls: ['./force-password.page.scss'],
})
export class ForcePasswordPage implements OnInit {
  loginInfo: any;
  resetPasswordForm: FormGroup;
  isSubmitted = false;
  errorText = '';
  show = false;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginInfo = JSON.parse(localStorage.getItem('loginUser'));
    this.resetPasswordForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.resetPasswordForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.resetPasswordForm.valid) {
      return false;
    } else {
      const password = this.resetPasswordForm.value.newpassword;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;
      if (this.loginInfo.password == password) {
        alert('Please Enter the New Password');
        return false;
      } else {
        const postData = this.loginInfo;
        postData.passwordReset = false;
        postData.password = password;
        postData.updatedDt = new Date();
        this.authService
          .resetPassword(postData.mobileLoginId, postData)
          .pipe()
          .subscribe(
            (result: any) => {
              // eslint-disable-next-line no-underscore-dangle
              this.authService._userInfoSub$.next(postData);
              this.userService
                .getUserName(postData.userId)
                .pipe()
                .subscribe((result2) => {
                  localStorage.setItem('userName', result2.userName);
                  localStorage.setItem('vendorCode', result2.vendorCode);
                  this.resetPasswordForm.reset();
                 localStorage.setItem('loginUser', JSON.stringify(postData));
                 this.router.navigate(['tabs/tab1']);
                });

            },
            (error: any) => {}
          );
      }
    }
  }
  revealConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  revealNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }
}
