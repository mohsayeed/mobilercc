(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/auth/auth-guard.guard */ 4399);
/* harmony import */ var _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth/login.guard */ 7882);





const routes = [
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
        canActivate: [_core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard]
    },
    {
        path: 'rates',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./rates/rates.module */ 4297)).then((m) => m.RatesPageModule),
        canActivate: [_core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
        canActivate: [_core_auth_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard]
    },
    {
        path: 'force-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_force-password_force-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./force-password/force-password.module */ 9997)).then((m) => m.ForcePasswordPageModule),
        canActivate: [_core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard]
    },
    {
        path: 'confirm-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_confirm-password_confirm-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirm-password/confirm-password.module */ 852)).then(m => m.ConfirmPasswordPageModule),
        canActivate: [_core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard]
    },
    {
        path: 'order',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./order/order.module */ 8865)).then(m => m.OrderPageModule),
        canActivate: [_core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuardGuard]
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 3065)).then(m => m.ReportsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ 6413);
/* harmony import */ var _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/orders/orders.service */ 4242);
/* harmony import */ var _core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/auth-guard.guard */ 4399);
/* harmony import */ var _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/login.guard */ 7882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/users/user.service */ 1554);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 1208);

















const ngxUiLoaderConfig = {
    bgsColor: 'red',
    bgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__.SPINNER.threeStrings,
    blur: 25,
    fastFadeOut: true,
    fgsColor: 'red',
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__.SPINNER.threeBounce,
    pbColor: 'red',
    pbThickness: 5,
    hasProgressBar: true,
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__.NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_14__.NgChartsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__.NgxUiLoaderHttpModule.forRoot({ showForeground: true })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService, _core_auth_auth_guard_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuardGuard, _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__.LoginGuard, _services_users_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4399:
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth-guard.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardGuard": () => (/* binding */ AuthGuardGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);



let AuthGuardGuard = class AuthGuardGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    loggedIn() {
        return !!localStorage.getItem('loginUser');
    }
};
AuthGuardGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthGuardGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthGuardGuard);



/***/ }),

/***/ 7882:
/*!******************************************!*\
  !*** ./src/app/core/auth/login.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);



let LoginGuard = class LoginGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loggedIn()) {
            return false;
        }
        else {
            return true;
        }
    }
    loggedIn() {
        return !!localStorage.getItem('loginUser');
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 289:
/*!*************************************************!*\
  !*** ./src/app/core/constants/api-constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMethod": () => (/* binding */ ApiMethod),
/* harmony export */   "AuthEndPoints": () => (/* binding */ AuthEndPoints)
/* harmony export */ });
var ApiMethod;
(function (ApiMethod) {
    ApiMethod["GET"] = "get";
    ApiMethod["POST"] = "post";
    ApiMethod["PUT"] = "put";
    ApiMethod["DELETE"] = "delete";
    ApiMethod["PATCH"] = "patch";
})(ApiMethod || (ApiMethod = {}));
var AuthEndPoints;
(function (AuthEndPoints) {
    AuthEndPoints["AUTHENTICATE"] = "TritMobileLogins/details";
    AuthEndPoints["RESET_PASSWORD"] = "TritMobileLogins/resetpassword?id=";
    AuthEndPoints["LATEST_RATES"] = "TritDailyRates/GetLatestDailyRates";
    AuthEndPoints["ISORDERPRESENT"] = "TritOrders/isOrderPresent";
    AuthEndPoints["ENTER_ORDER"] = "TritOrders/enterorder";
    AuthEndPoints["GET_USERNAME"] = "TritUsers/";
    AuthEndPoints["GET_TOP_TEN_RECORDS"] = "TritOrders/getLatestTenOrders";
})(AuthEndPoints || (AuthEndPoints = {}));


/***/ }),

/***/ 8776:
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api-constants */ 289);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








let HttpService = class HttpService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    requestCall(method, api, data = {}, queryParams = '', header = {}) {
        let response;
        switch (method) {
            case _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.GET:
                response = this.http
                    .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${api}` + queryParams, header)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleError(err, this)));
                break;
            case _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.POST:
                response = this.http
                    .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${api}` + queryParams, data, header)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleError(err, this)));
                break;
            case _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.DELETE:
                response = this.http
                    .delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${api}` + queryParams)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleError(err, this)));
                break;
            case _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.PUT:
                response = this.http
                    .put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${api}` + queryParams, data)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleError(err, this)));
                break;
            case _constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.PATCH:
                response = this.http
                    .patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${api}` + queryParams, data)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.handleError(err, this)));
                break;
            default:
                break;
        }
        //Create model for response
        return response;
    }
    handleError(error, self) {
        if (error.status == 401) {
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: error.error, status: error.status });
    }
    get(url, queryParams = '', params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${url}` + queryParams, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error, this)));
    }
    post(url, postData, queryParams = '', params) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${url}` + queryParams, postData, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error, this)));
    }
    put(url, putData, queryParams = '', params) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${url}` + queryParams, putData, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error, this)));
    }
    patch(url, patchData, queryParams = '', params) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${url}` + queryParams, patchData, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error, this)));
    }
    delete(url, queryParams = '', params) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${url}` + queryParams, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error, this)));
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], HttpService);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/http/http.service */ 8776);
/* harmony import */ var _core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/api-constants */ 289);






let AuthService = class AuthService {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this._userInfoSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    authenticateUser(userId, password) {
        return this.httpService.requestCall(_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.GET, _core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.AUTHENTICATE, {}, '?UserName=' + userId + '&Password=' + password);
    }
    resetPassword(mobileLoginid, postData) {
        return this.httpService.requestCall(_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.POST, _core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.RESET_PASSWORD, postData, mobileLoginid);
    }
    logout() {
        localStorage.removeItem('loginUser');
        localStorage.removeItem('userName');
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 4242:
/*!***************************************************!*\
  !*** ./src/app/services/orders/orders.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http.service */ 8776);
/* harmony import */ var src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-constants */ 289);





let OrdersService = class OrdersService {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    isOrderTodayPresent(userId, date) {
        return this.httpService.requestCall(src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.GET, src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.ISORDERPRESENT, {}, '?userid=' + userId + '&date=' + date);
    }
    getTopTenRecords(userId) {
        return this.httpService.requestCall(src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.GET, src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.GET_TOP_TEN_RECORDS, {}, '?userid=' + userId);
    }
    enterOrder(userId, data, date) {
        return this.httpService.requestCall(src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.POST, src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.ENTER_ORDER, data, '?id=' + userId + '&date=' + date, {});
    }
};
OrdersService.ctorParameters = () => [
    { type: src_app_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
OrdersService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ 1554:
/*!************************************************!*\
  !*** ./src/app/services/users/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/http/http.service */ 8776);
/* harmony import */ var src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/api-constants */ 289);




let UserService = class UserService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUserName(userId) {
        return this.httpService.requestCall(src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.ApiMethod.GET, src_app_core_constants_api_constants__WEBPACK_IMPORTED_MODULE_1__.AuthEndPoints.GET_USERNAME, {}, userId);
    }
};
UserService.ctorParameters = () => [
    { type: src_app_core_http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl:'https://mrcc.azure-api.net/v1/api/',
    apiUrl: 'https://rccweb.azure-api.net/v1/api/',
    // apiUrl:'https://localhost:7103/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		2312,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <div ngxUiLoaderBlurred [blur]=\"10\">\n    <!-- This page content will be blurred/frosted when foreground loader is showed -->\n  </div>\n  <ngx-ui-loader ></ngx-ui-loader>  \n  <ng-template #foregroundSpinner>\n      </ng-template>\n  \n  <ng-template #backgroundSpinner>\n\n  </ng-template>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map