"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
    // {
    //   path: '',
    //   component: ForcePasswordPage
    // }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 1208);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users/user.service */ 1554);









let LoginPage = class LoginPage {
    constructor(formBuilder, authService, router, userService, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.isSubmitted = false;
        this.errorText = '';
        this.show = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            userid: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            return false;
        }
        else {
            let userid = this.ionicForm.value.userid;
            let password = this.ionicForm.value.password;
            this.authService
                .authenticateUser(userid, password)
                .pipe()
                .subscribe((result) => {
                this.show = false;
                this.errorText = '';
                this.authService._userInfoSub$.next(result);
                if (result.passwordReset) {
                    localStorage.setItem('loginUser', JSON.stringify(result));
                    this.router.navigate(['force-password']);
                }
                else {
                    this.authService._userInfoSub$.subscribe((result) => {
                        localStorage.setItem('loginUser', JSON.stringify(result));
                        this.userService
                            .getUserName(result.userId)
                            .pipe()
                            .subscribe((result) => {
                            localStorage.setItem('userName', result.userName);
                            this.ionicForm.reset();
                            this.router.navigate(['tabs/tab1']);
                        });
                    });
                }
            }, (error) => {
                this.show = true;
                this.errorText = error.error.message;
                this.toastr.error(error.error.message);
            });
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_users_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".size {\n  width: 150px;\n  height: 150px;\n}\n\n.error {\n  font-size: 0.5em;\n  color: red;\n}\n\nion-content, ion-toolbar {\n  font-family: Nunito !important;\n  font-size: 1.5em;\n}\n\nion-content {\n  --padding-top: 30%;\n}\n\n.margin-btm {\n  margin-bottom: 50px;\n}\n\nion-grid {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXple1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gICAgZm9udC1zaXplOjAuNWVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50ICxpb24tdG9vbGJhcnsgXHJcbiAgICBmb250LWZhbWlseTpOdW5pdG8gIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxLjVlbTtcclxufVxyXG4gIFxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzAlO1xyXG59XHJcbi5tYXJnaW4tYnRte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row >\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\" class=\"margin-btm\">\n        <ion-img src=\"../../assets/logo.png\" ></ion-img>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-grid>\n      \n    <ion-item lines=\"full\" style=\"margin-bottom: 5px;\">\n      <ion-label position=\"floating\">User Id</ion-label>\n      <ion-input\n      clearInput \n        formControlName=\"userid\"\n        type=\"number\"\n      ></ion-input>\n    </ion-item>\n    <span\n      class=\"error ion-padding\"\n      *ngIf=\"isSubmitted && errorControl.userid.errors?.required\"\n    >\n      User Id is required.\n    </span>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password </ion-label>\n      <ion-input\n      clearInput \n        maxlength=\"10\"\n        formControlName=\"password\"\n        type=\"password\"\n        required\n      ></ion-input>\n    </ion-item>\n    <span\n      class=\"error ion-padding\"\n      *ngIf=\"isSubmitted && errorControl.password.errors?.required\"\n    >\n      Password is required.\n    </span>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\" class=\"ion-margin-top\"\n          >Submit</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"errorText!=''\">\n      <ion-col class=\"ion-text-center\" >\n        <ion-badge color=\"medium\"class=\"ion-text-center\"> {{errorText}} </ion-badge>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map