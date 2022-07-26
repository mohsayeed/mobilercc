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
    private router: Router
  ) {}

  ngOnInit() {
    this.authService._userInfoSub$.subscribe((response) => {
      this.loginInfo = response;
    });
    this.resetPasswordForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get errorControl() {
    return this.resetPasswordForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.resetPasswordForm.valid) {
      console.log(this.errorControl);
      return false;
    } else {
      let password = this.resetPasswordForm.value.newpassword;
      let confirmPassword = this.resetPasswordForm.value.confirmPassword;
      if (this.loginInfo.password == password) {
        alert('Please Enter the New Password');
        return false;
      } else {
        let postData = this.loginInfo;
        postData.passwordReset = false;
        postData.password = password;
        postData.updatedDt = new Date()
        this.authService
          .resetPassword(postData.mobileLoginId, postData)
          .pipe()
          .subscribe(
            (result:any) => {
              this.authService._userInfoSub$.next(postData)
              localStorage.setItem('loginUser', JSON.stringify(postData))
              this.router.navigate(['tabs']);
            },
            (error:any) => {console.log(error)}
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
