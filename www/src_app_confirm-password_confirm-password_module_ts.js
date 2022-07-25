"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_confirm-password_confirm-password_module_ts"],{

/***/ 7301:
/*!*********************************************************************!*\
  !*** ./src/app/confirm-password/confirm-password-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordPageRoutingModule": () => (/* binding */ ConfirmPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _confirm_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-password.page */ 6977);




const routes = [
    {
        path: '',
        component: _confirm_password_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPasswordPage
    }
];
let ConfirmPasswordPageRoutingModule = class ConfirmPasswordPageRoutingModule {
};
ConfirmPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPasswordPageRoutingModule);



/***/ }),

/***/ 852:
/*!*************************************************************!*\
  !*** ./src/app/confirm-password/confirm-password.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordPageModule": () => (/* binding */ ConfirmPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _confirm_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-password-routing.module */ 7301);
/* harmony import */ var _confirm_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-password.page */ 6977);







let ConfirmPasswordPageModule = class ConfirmPasswordPageModule {
};
ConfirmPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPasswordPageRoutingModule
        ],
        declarations: [_confirm_password_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPasswordPage]
    })
], ConfirmPasswordPageModule);



/***/ }),

/***/ 6977:
/*!***********************************************************!*\
  !*** ./src/app/confirm-password/confirm-password.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPasswordPage": () => (/* binding */ ConfirmPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _confirm_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-password.page.html?ngResource */ 6229);
/* harmony import */ var _confirm_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-password.page.scss?ngResource */ 5294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ConfirmPasswordPage = class ConfirmPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmPasswordPage.ctorParameters = () => [];
ConfirmPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-password',
        template: _confirm_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirm_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmPasswordPage);



/***/ }),

/***/ 5294:
/*!************************************************************************!*\
  !*** ./src/app/confirm-password/confirm-password.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6229:
/*!************************************************************************!*\
  !*** ./src/app/confirm-password/confirm-password.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>confirm-password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_confirm-password_confirm-password_module_ts.js.map