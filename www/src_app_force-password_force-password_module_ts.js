"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_force-password_force-password_module_ts"],{

/***/ 1617:
/*!*****************************************************************!*\
  !*** ./src/app/force-password/force-password-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePasswordPageRoutingModule": () => (/* binding */ ForcePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _force_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-password.page */ 2883);




const routes = [
    {
        path: '',
        component: _force_password_page__WEBPACK_IMPORTED_MODULE_0__.ForcePasswordPage
    }
];
let ForcePasswordPageRoutingModule = class ForcePasswordPageRoutingModule {
};
ForcePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForcePasswordPageRoutingModule);



/***/ }),

/***/ 9997:
/*!*********************************************************!*\
  !*** ./src/app/force-password/force-password.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePasswordPageModule": () => (/* binding */ ForcePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _force_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-password-routing.module */ 1617);
/* harmony import */ var _force_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-password.page */ 2883);







let ForcePasswordPageModule = class ForcePasswordPageModule {
};
ForcePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _force_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForcePasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_force_password_page__WEBPACK_IMPORTED_MODULE_1__.ForcePasswordPage]
    })
], ForcePasswordPageModule);



/***/ }),

/***/ 2883:
/*!*******************************************************!*\
  !*** ./src/app/force-password/force-password.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForcePasswordPage": () => (/* binding */ ForcePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _force_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-password.page.html?ngResource */ 5880);
/* harmony import */ var _force_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./force-password.page.scss?ngResource */ 2048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let ForcePasswordPage = class ForcePasswordPage {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isSubmitted = false;
        this.errorText = '';
        this.show = false;
        this.showNewPassword = false;
        this.showConfirmPassword = false;
    }
    ngOnInit() {
        this.authService._userInfoSub$.subscribe((response) => {
            this.loginInfo = response;
        });
        this.resetPasswordForm = this.formBuilder.group({
            newpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
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
        }
        else {
            let password = this.resetPasswordForm.value.newpassword;
            let confirmPassword = this.resetPasswordForm.value.confirmPassword;
            if (this.loginInfo.password == password) {
                alert('Please Enter the New Password');
                return false;
            }
            else {
                let postData = this.loginInfo;
                postData.passwordReset = false;
                postData.password = password;
                postData.updatedDt = new Date();
                this.authService
                    .resetPassword(postData.mobileLoginId, postData)
                    .pipe()
                    .subscribe((result) => {
                    this.authService._userInfoSub$.next(postData);
                    this.router.navigate(['tabs']);
                }, (error) => { console.log(error); });
            }
        }
    }
    revealConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }
    revealNewPassword() {
        this.showNewPassword = !this.showNewPassword;
    }
};
ForcePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ForcePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-force-password',
        template: _force_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_force_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForcePasswordPage);



/***/ }),

/***/ 2048:
/*!********************************************************************!*\
  !*** ./src/app/force-password/force-password.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-content, ion-toolbar {\n  font-family: Nunito !important;\n  font-size: 1.5em;\n}\n\n.size {\n  font-size: 0.5em;\n  color: red;\n}\n\n.end {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmNlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKIiwiZmlsZSI6ImZvcmNlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGlvbi1jb250ZW50ICxpb24tdG9vbGJhcnsgXHJcbiAgICBmb250LWZhbWlseTpOdW5pdG8gIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNpemV7XHJcbiAgICBmb250LXNpemU6MC41ZW07XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbi5lbmQge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 5880:
/*!********************************************************************!*\
  !*** ./src/app/force-password/force-password.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">New Password</ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"\">\n            <ion-input\n            formControlName=\"newpassword\"\n            maxlength=\"12\"\n            [type]=\"showNewPassword ? 'text' : 'password'\" \n            required\n          ></ion-input>\n          </ion-col>\n          <ion-col class=\"end\">\n            <ion-icon name=\"eye-off-outline\" class=\"end\" *ngIf=\"!showNewPassword\" (click) = \"revealNewPassword()\"></ion-icon>\n            <ion-icon name=\"eye-outline\" class=\"end\" *ngIf=\"showNewPassword\" (click) = \"revealNewPassword()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <span\n      class=\"error ion-padding size\"\n      *ngIf=\"isSubmitted && errorControl.newpassword.errors?.required\"\n    >\n      Password is required.\n    </span>\n    <span\n    class=\"error ion-padding size\"\n    *ngIf=\"isSubmitted && errorControl.newpassword.errors?.minlength\"\n  >\n    Mininum Lenght of Password is {{errorControl.newpassword.errors?.minlength.requiredLength}}\n  </span>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Confirm Password </ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-align-self-start\">\n            <ion-input\n            maxlength=\"12\"\n            formControlName=\"confirmPassword\"\n            [type]=\"showConfirmPassword ? 'text' : 'password'\" \n            required\n          ></ion-input>\n          </ion-col>\n          <ion-col class=\"end\">\n            <ion-icon name=\"eye-off-outline\" class=\"end\" *ngIf=\"!showConfirmPassword\" (click) = \"revealConfirmPassword()\"></ion-icon>\n            <ion-icon name=\"eye-outline\" class=\"end\" *ngIf=\"showConfirmPassword\" (click) = \"revealConfirmPassword()\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <span\n      class=\"error ion-padding size\"\n      *ngIf=\"isSubmitted && errorControl.confirmPassword.errors?.required\"\n    >\n      Password is required.\n    </span>\n    <span\n      class=\"error ion-padding size\"\n      *ngIf=\"isSubmitted && (errorControl.confirmPassword.value != errorControl.newpassword.value)\"\n    >\n      Password doesn't Match\n    </span>\n    \n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\"\n          >Update Password</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_force-password_force-password_module_ts.js.map