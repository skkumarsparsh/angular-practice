webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__protected_protected_module__ = __webpack_require__("../../../../../src/app/protected/protected.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logged_in_guard__ = __webpack_require__("../../../../../src/app/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__protected_protected_component__ = __webpack_require__("../../../../../src/app/protected/protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__protected_utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    // basic routes
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: 'logged-in', component: __WEBPACK_IMPORTED_MODULE_14__protected_protected_component__["a" /* ProtectedComponent */], children: __WEBPACK_IMPORTED_MODULE_9__protected_protected_module__["a" /* routes */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__logged_in_guard__["a" /* LoggedInGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__protected_protected_component__["a" /* ProtectedComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_9__protected_protected_module__["b" /* ProtectedModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AUTH_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_12__logged_in_guard__["a" /* LoggedInGuard */],
            __WEBPACK_IMPORTED_MODULE_15__protected_utils_service__["a" /* UtilsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthService);

var AUTH_PROVIDERS = [
    { provide: AuthService, useClass: AuthService }
];
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/collapse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Collapse; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Collapse = (function () {
    function Collapse(el) {
        this.el = el;
        this.measureHeight();
    }
    Object.defineProperty(Collapse.prototype, "collapse", {
        set: function (value) {
            if (value !== undefined) {
                if (value) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }
            //
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.measureHeight = function () {
        var elem = this.el.nativeElement;
        //lets be sure the element has display:block style
        elem.className = elem.className.replace('collapse', '');
        this.h = elem.scrollHeight;
    };
    Collapse.prototype.hide = function () {
        var _this = this;
        this.height = this.h + 'px';
        setTimeout(function () {
            _this.height = '100px';
            _this.isCollapsing = true; //apply 'collapsing' class
        }, 1);
    };
    Collapse.prototype.show = function () {
        var _this = this;
        this.height = '0px';
        setTimeout(function () {
            _this.height = _this.h + 'px';
            _this.isCollapsing = true; //apply 'collapsing' class
        }, 1);
    };
    return Collapse;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsing'),
    __metadata("design:type", Boolean)
], Collapse.prototype, "isCollapsing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.height'),
    __metadata("design:type", String)
], Collapse.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], Collapse.prototype, "collapse", null);
Collapse = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[collapse]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Collapse);

var _a;
//# sourceMappingURL=collapse.js.map

/***/ }),

/***/ "../../../../../src/app/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["b" /* AuthService */]) === "function" && _a || Object])
], LoggedInGuard);

var _a;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\n.background-image {\n  background-image: url('https://wallpaperscraft.com/image/abstraction_geometry_shapes_colors_93400_1920x1080.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  display: block;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 1;\n}\n\n.content {\n  border-radius: 20px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  top: 10px;\n  left: 0;\n  margin-left: 20px;\n  margin-right: 20px;\n  bottom:15px;\n  right: 0;\n  z-index: 2;\n}\n\nbody {\n  background: #e9e9e9;\n  color: #666666;\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.form-module {\n  background: #ffffff;\n  width: 100%;\n  border-top: 30px solid rgb(63,81,181);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\n  margin: 0 auto;\n}\n.form-module .form {\n  display: none;\n  padding: 50px;\n}\n.form-module .form:nth-child(2) {\n  display: block;\n}\n.form-module h2 {\n  margin: 0 0 20px;\n  color: rgb(63,81,181);\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1;\n}\n.form-module button {\n  cursor: pointer;\n  width: 100%;\n}\n.form-module .cta {\n  background: #f2f2f2;\n  width: 100%;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  color: #666666;\n  font-size: 12px;\n  text-align: center;\n}\n.form-module .cta a {\n  color: #333333;\n  text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css\">\n<link rel='stylesheet prefetch'\n      href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900|RobotoDraft:400,100,300,500,700,900'>\n<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css '>\n<div class=\"background-image\"></div>\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <header class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">IPF LOGIN PAGE</span>\n    </div>\n  </header>\n</div>\n<div align=\"center\">\n  <main class=\"mdl-layout__content\" style=\"padding-top:14%;align-content: center;\">\n    <div class=\"page-content\" style=\"text-align:center;\">\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\n        {{ message }}\n      </div>\n    <div style=\"padding:15px\">\n        <div class=\"mdl-card mdl-shadow--6dp content\" style=\"width:400px;min-height:300px\">\n          <form class=\"form-inline\" *ngIf=\"!authService.getUser()\">\n            <div class=\"module form-module\">\n              <div class=\"toggle\">\n              </div>\n              <div class=\"form\">\n                <h2>Login to your account</h2>\n                <form>\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                    <input class=\"mdl-textfield__input\" type=\"text\" id=\"sample3\" name=\"username\" #username>\n                    <label class=\"mdl-textfield__label\" for=\"sample3\">Username</label>\n                  </div>\n                  <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                    <input class=\"mdl-textfield__input\" type=\"password\" id=\"sample3\" name=\"password\" #password>\n                    <label class=\"mdl-textfield__label\" for=\"sample3\">Password</label>\n                  </div>\n                  <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\" (click)=\"login(username.value, password.value)\">\n                    LOGIN\n                  </button>\n                </form>\n              </div>\n              <div class=\"cta\"><a href=\"#\">Forgot your password?</a></div>\n            </div>\n            <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>\n            <script src=\"js/index.js\"></script>\n          </form>\n        </div>\n    </div>\n      </div>\n    <div class=\"well\" *ngIf=\"authService.getUser()\">\n      Logged in as <b>{{ authService.getUser() }}</b>\n      <a href (click)=\"logout()\">Log out</a>\n      <a href (click)=\"dashboard()\">Dashboard</a>\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, route) {
        this.authService = authService;
        this.route = route;
        this.message = '';
        if (authService.getUser()) {
            this.route.navigate(['/logged-in']);
            window.location.reload();
        }
    }
    LoginComponent.prototype.login = function (username, password) {
        this.message = '';
        if (!this.authService.login(username, password)) {
            this.message = 'Incorrect credentials.';
            setTimeout(function () {
                this.message = '';
            }.bind(this), 2500);
        }
        else {
            this.route.navigate(['/logged-in']);
            window.location.reload();
        }
        return false;
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent.prototype.dashboard = function () {
        this.route.navigate(['/logged-in']);
        window.location.reload();
        return false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["b" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/agent/agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, material-app, md-sidenav-container, .my-content {\n  margin: 0;\n  height: 100%;\n}\n\nmd-sidenav {\n  width: 18%;\n}\n\n.graph1 {\n  height: 500px;\n  border: 1px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/agent/agent.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group [dynamicHeight]=true [disableRipple]=true>\n  <md-tab label=\"Graph\">\n    <div style=\"padding:10px\">\n      <div class=\"mdl-card mdl-shadow--4dp\" style=\"width: 100%;\">\n        <div id=\"{{chartdiv}}\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n      </div>\n    </div>\n  </md-tab>\n\n\n  <md-tab label=\"Table\">\n    <h4 style=\"text-align: center\">\n      {{agent}} Table\n    </h4>\n    <br>\n    <div *ngIf=\"data\" align=\"center\">\n      <table style=\"width: 60%;\" class=\"mdl-data-table mdl-js-data-table mdl-shadow--4dp\">\n        <thead>\n          <tr>\n            <th colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">Metric</th>\n            <th>Month</th>\n            <th>Value</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let metric of metrics\">\n          <tr>\n            <td rowspan=\"3\" colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">{{ metric}}</td>\n            <td>Jan-17</td>\n            <td>{{ data[agent][metric][\"Jan-17\"] }}</td>\n          </tr>\n          <tr>\n            <td>Feb-17</td>\n            <td>{{ data[agent][metric][\"Feb-17\"] }}</td>\n          </tr>\n          <tr>\n            <td>Mar-17</td>\n            <td>{{ data[agent][metric][\"Mar-17\"] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <br>\n    <br>\n  </md-tab>\n</md-tab-group>\n\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/protected/agent/agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgentComponent = (function () {
    function AgentComponent(route, http, AmCharts, utils, _service) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.AmCharts = AmCharts;
        this.utils = utils;
        this._service = _service;
        this.max = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthreshold = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthreshold = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.j = 0;
        this.i = 0;
        this.options = {
            timeOut: 2000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true
        };
        route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.agent = "Agent " + _this.id;
            _this.utils.titleChanged.emit(_this.agent + " Dashboard");
            _this.assignData();
        });
        this.utils.loaded.emit(false);
        this.utils.titleChanged.emit("Agent " + this.id + " Dashboard");
        this.agent = "Agent " + this.id;
        // this.assignData();
    }
    AgentComponent.prototype.assignData = function () {
        var _this = this;
        this.chartdiv = "chartdiv" + this.id;
        this.metaData = new Object({
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Agencies No",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Customer No",
                    "type": "column",
                    "valueField": "column-2"
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-3",
                    "title": "New Customer No",
                    "valueField": "column-3",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-4",
                    "title": "Paid Up No",
                    "valueField": "column-4",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-5",
                    "title": "Sales No",
                    "valueField": "column-5",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-6",
                    "title": "Sales Value",
                    "valueField": "column-6",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-7",
                    "title": "Parallel No",
                    "valueField": "column-7",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-8",
                    "title": "Refinance No",
                    "valueField": "column-8",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-9",
                    "title": "Real Misses No",
                    "valueField": "column-9",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-10",
                    "title": "Recent New Customers No 13 Weeks",
                    "valueField": "column-10",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-11",
                    "title": "Consecutive Misses 1",
                    "valueField": "column-11",
                    "type": "column",
                },
                {
                    "balloonText": "[[title]] in [[category]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-12",
                    "title": "Scheduled Visit No",
                    "valueField": "column-12",
                    "type": "column",
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Number"
                }
            ],
            "allLabels": [],
            "balloon": {
                "disableMouseEvents": false,
                "hideBalloonTime": 1000,
                "fixedPosition": true
            },
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Agent " + this.id + " Metric"
                }
            ],
            "dataProvider": []
        });
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            _this.metrics = _this.utils.getHeaderNames(_this.data);
            _this.agents = _this.utils.getAgents(_this.data);
            _this.agents = _this.agents.slice(0, _this.agents.length - 1);
            _this.months = _this.utils.months;
            _this.chart = _this.afterAssignDataForLeadAgent();
            console.log(_this.data);
        });
    };
    AgentComponent.prototype.warnmet = function () {
        var _this = this;
        var that = this;
        for (var i = 0; i < that.months.length; i++) {
            this._service.success("Check being performed", "Checking values of each agent in " + that.months[i]);
            this.utils.notificationAdded.emit(["Checking values of each agent in " + that.months[i], "green", "check_circle"]);
            that.i = 0;
            that.agents.forEach(function (agent) {
                that.j = 0;
                that.metrics.forEach(function (metric) {
                    if (that.maxagentjan[that.i][that.j] < parseInt(that.data[agent][metric][that.months[i]])) {
                        that.maxagentjan[that.i][that.j] = parseInt(that.data[agent][metric][that.months[i]]);
                    }
                    that.j++;
                });
                that.i++;
            });
            that.i = 0;
            that.agents.forEach(function (agent) {
                that.j = 0;
                that.metrics.forEach(function (metric) {
                    that.redthresholdagentjan[that.i][that.j] = ((parseInt(that.data[agent][metric][that.months[i]]) * 3) / 10);
                    that.warnthresholdagentjan[that.i][that.j] = ((parseInt(that.data[agent][metric][that.months[i]]) * 5) / 10);
                    that.j++;
                });
                that.i++;
            });
            that.i = 0;
            that.agents.forEach(function (element) {
                that.j = 0;
                that.metrics.forEach(function (metric) {
                    if (parseInt(that.data[element][metric][that.months[i]]) <= that.warnthresholdagentjan[that.i][that.j]) {
                        if (parseInt(that.data[element][metric][that.months[i]]) <= that.redthresholdagentjan[that.i][that.j]) {
                            //agent below 30% turn red and warn
                            _this._service.error("Warning", element + " has a downtrend in " + metric + " for " + that.months[i]);
                            _this.utils.notificationAdded.emit([element + " has a downtrend in " + metric + " for " + that.months[i], "red", "error"]);
                            console.log(that.months[i]);
                        }
                        else {
                            //agent below 50% send warn
                            console.log("agent below 50% send warn " + element + " " + metric);
                        }
                    }
                    that.j++;
                });
                that.i++;
            });
        }
    };
    AgentComponent.prototype.ngOnInit = function () { };
    AgentComponent.prototype.afterAssignDataForLeadAgent = function () {
        var headers = this.utils.getHeaderNames(this.data);
        console.log(headers);
        var months = this.utils.months;
        for (var i = 0; i < months.length; i++) {
            var j = 0;
            this.metaData["dataProvider"].push({
                "category": months[i],
                "column-1": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-2": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-3": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-4": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-5": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-6": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-7": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-8": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-9": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-10": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-11": parseInt(this.data[this.agent][headers[j++]][months[i]]),
                "column-12": parseInt(this.data[this.agent][headers[j++]][months[i]])
            });
        }
        if (this.utils.firstLoad2) {
            this.warnmet();
            this.utils.firstLoad2 = false;
        }
        this.utils.loaded.emit(true);
        return this.AmCharts.makeChart(this.chartdiv, this.metaData);
    };
    AgentComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    return AgentComponent;
}());
AgentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agent',
        template: __webpack_require__("../../../../../src/app/protected/agent/agent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/agent/agent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _e || Object])
], AgentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=agent.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/agents/agents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-1 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-2 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-1.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-3 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-2.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-4 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-3.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-5 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-4.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-6 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-5.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-7 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-6.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-8 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-7.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-9 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-8.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-10 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-9.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-11 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-10.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-12 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-11.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-13 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/AgentPic-12.png') bottom right 15% no-repeat #46B6AC;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/agents/agents.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%\">\n  <div class=\"row\" style=\"padding-top:1%;\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-1 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-1</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/1']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-1 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-2 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-2</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/2']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-2 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-3 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-3</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/3']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-3 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n        <div class=\"card-4 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-4</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/4']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-4 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:1%;padding-left:13%;padding-right:13%\">\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-5 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-5</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/5']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-5 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-6 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-6</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/6']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-6 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-right:15px\">\n        <div class=\"card-7 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-7</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/7']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-7 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:1%;\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-8 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-8</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/8']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-8 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-9 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-9</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/9']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-9 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-10 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-10</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/10']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-10 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n        <div class=\"card-11 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-11</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/11']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-11 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:1%;padding-bottom:2%\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-12 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-12</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/12']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-12 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-13 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agent-13</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agent/13']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Go to Agent-13 Metrics\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/protected/agents/agents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgentsComponent = (function () {
    function AgentsComponent(utils) {
        this.utils = utils;
        this.utils.loaded.emit(true);
        this.utils.titleChanged.emit("Individual Agents");
    }
    AgentsComponent.prototype.ngOnInit = function () {
    };
    return AgentsComponent;
}());
AgentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agents',
        template: __webpack_require__("../../../../../src/app/protected/agents/agents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/agents/agents.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], AgentsComponent);

var _a;
//# sourceMappingURL=agents.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo-card1 > .mdl-card__title {\n    color: #fff;\n    background:\n      url('/angular-practice/assets/detective.png') bottom right 15% no-repeat #46B6AC;\n  }\n\n  .demo-card2 > .mdl-card__title {\n    color: #fff;\n    background:\n      url('/angular-practice/assets/metrics.png') bottom right 15% no-repeat #46B6AC;\n  }\n\n  .demo-card3 > .mdl-card__title {\n    color: #fff;\n    background:\n      url('/angular-practice/assets/speedometer.png') bottom right 15% no-repeat #46B6AC;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding:1%; padding-top:2%\">\n  <div class=\"col-sm-3\">\n    <div style=\"padding-top:15px;padding-left:15px\">\n      <div class=\"mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:100px;text-align:center;padding:10px;background-color:#D48CF8\">\n        <div>Max <br><span style=\"font-size:large;font-weight:800\">{{metricname1}}</span> :</div>\n        <div style=\"font-size:30px\">{{metric1}}</div>\n        <div>in <span style=\"font-weight:700\">{{metricmonth1}}</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n      <div class=\"mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:100px;text-align:center;padding:10px;background-color:#FFA726\">\n        <div>Max <br><span style=\"font-size:large;font-weight:800\">{{metricname2}}</span> :</div>\n        <div style=\"font-size:30px\">{{metric2}}</div>\n        <div>in <span style=\"font-weight:700\">{{metricmonth2}}</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n      <div class=\"mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:100px;text-align:center;padding:10px;background-color:#FF3B3F\">\n        <div>Max <br><span style=\"font-size:large;font-weight:800\">{{metricname3}}</span> :</div>\n        <div style=\"font-size:30px\">{{metric3}}</div>\n        <div>in <span style=\"font-weight:700\">{{metricmonth3}}</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div style=\"padding-top:15px; padding-right:15px\">\n      <div class=\"mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:100px;text-align:center;padding:10px;background-color:#9E9E9E\">\n        <div>Based on <br><span style=\"font-size:large;font-weight:800\">{{metricname4}}</span> :</div>\n        <div style=\"font-size:30px\">{{metric4}}</div>\n        <div>best month is <span style=\"font-weight:700\">{{metricmonth4}}</span></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" style=\"padding:1%\">\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"demo-card1 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:400px;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agents</h2>\n          </div>\n          <div class=\"mdl-card__supporting-text\">\n            <h5> Click here to see performance of Individual Agents. </h5>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/agents']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n              Go to Individual Agents\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"demo-card2 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:400px;\">\n            <div class=\"mdl-card__title mdl-card--expand\">\n              <h2 class=\"mdl-card__title-text\">Metrics</h2>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n                <h5> Click here to see Individual Metrics for all Agents. </h5>\n              </div>\n            <div class=\"mdl-card__actions mdl-card--border\">\n              <button [routerLink]=\"['/logged-in/metrics']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                Go to Individual Metrics\n              </button>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div style=\"padding-top:15px;padding-right:15px\">\n        <div class=\"demo-card3 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:400px;\">\n            <div class=\"mdl-card__title mdl-card--expand\">\n              <h2 class=\"mdl-card__title-text\">Dashboard</h2>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n                <h5> Click here to see the Dashboard with the Core Metrics. </h5>\n              </div>\n            <div class=\"mdl-card__actions mdl-card--border\">\n              <button [routerLink]=\"['/logged-in/lead-agent']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                Go to Dashboard\n              </button>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/protected/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(utils, http, _service) {
        this.utils = utils;
        this.http = http;
        this._service = _service;
        this.options = {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true
        };
        this.utils.loaded.emit(true);
        this.utils.titleChanged.emit("Home");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.utils.firstLoad3) {
            var that_1 = this;
            setTimeout(function () {
                that_1._service.success("Hi, Lead Agent! Welcome back!");
                // this.utils.notificationAdded.emit(["Hi, Lead Agent! Welcome back!", "green", "check_circle"])
            }, 200);
            this.utils.firstLoad3 = false;
        }
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
            _this.calValue();
        });
        this.utils.coreMetricsChanged.subscribe(function (res) {
            _this.calValue();
        });
    };
    HomeComponent.prototype.calValue = function () {
        var lead = "Lead Agent";
        var core = this.utils.coreMetrics;
        var months = this.utils.months;
        this.metricname1 = core[0];
        this.metricname2 = core[1];
        this.metricname3 = core[2];
        var lar = this.data[lead][core[0]][months[0]];
        this.metricmonth2 = months[0];
        this.metric2 = lar;
        for (var i = 1; i < 3; i++) {
            var val = this.data[lead][core[0]][months[i]];
            if (val > lar) {
                lar = val;
                this.metricmonth1 = months[i];
                this.metric1 = val;
            }
        }
        lar = this.data[lead][core[1]][months[0]];
        this.metricmonth2 = months[0];
        this.metric2 = lar;
        for (var i = 1; i < 3; i++) {
            var val = this.data[lead][core[1]][months[i]];
            if (val > lar) {
                lar = val;
                this.metricmonth2 = months[i];
                this.metric2 = val;
            }
        }
        lar = this.data[lead][core[2]][months[0]];
        this.metricmonth3 = months[0];
        this.metric3 = lar;
        for (var i = 1; i < 3; i++) {
            var val = this.data[lead][core[2]][months[i]];
            if (val > lar) {
                lar = val;
                this.metricmonth3 = months[i];
                this.metric3 = val;
            }
        }
        this.metricname4 = "Sales Value";
        lar = this.data[lead]["Sales Value"][months[0]];
        this.metricmonth4 = months[0];
        this.metric4 = lar;
        for (var i = 1; i < 3; i++) {
            var val = this.data[lead]["Sales Value"][months[i]];
            if (val > lar) {
                lar = val;
                this.metricmonth4 = months[i];
                this.metric4 = val;
            }
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/protected/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group [dynamicHeight]=true [disableRipple]=true>\n  <md-tab label=\"Graph\">\n    <div style=\"padding:10px\">\n      <div class=\"mdl-card mdl-shadow--6dp\" style=\"width: 100%;\">\n        <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n      </div>\n    </div>\n  </md-tab>\n  <md-tab label=\"Table\">\n    <h4 style=\"text-align: center\">\n      Lead agent\n    </h4>\n    <br>\n    <div *ngIf=\"data\" align=\"center\">\n      <table style=\"width: 60%;\" class=\"mdl-data-table mdl-js-data-table mdl-shadow--4dp\">\n        <thead>\n          <tr>\n            <th colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">Metric</th>\n            <th>Month</th>\n            <th>Value</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let metric of metrics\">\n          <tr>\n            <td rowspan=\"3\" colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">{{ metric}}</td>\n            <td>Jan-17</td>\n            <td>{{ data[agent][metric][\"Jan-17\"] }}</td>\n          </tr>\n          <tr>\n            <td>Feb-17</td>\n            <td>{{ data[agent][metric][\"Feb-17\"] }}</td>\n          </tr>\n          <tr>\n            <td>Mar-17</td>\n            <td>{{ data[agent][metric][\"Mar-17\"] }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <br>\n    <br>\n  </md-tab>\n</md-tab-group>\n\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/protected/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = (function () {
    function MainComponent(http, AmCharts, utils, route, _service) {
        this.http = http;
        this.AmCharts = AmCharts;
        this.utils = utils;
        this.route = route;
        this._service = _service;
        this.isCollapsed = true;
        this.isCollapsed2 = true;
        this.agent = "Lead Agent";
        this.max = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthreshold = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthreshold = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.maxagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.redthresholdagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentjan = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentfeb = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.warnthresholdagentmar = new Array(20).fill(0).map(function () { return new Array(20).fill(0); });
        this.j = 0;
        this.i = 0;
        this.options = {
            timeOut: 2000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true
        };
        this.isCollapsed = !this.isCollapsed;
        this.utils.loaded.emit(false);
        this.isCollapsed2 = !this.isCollapsed2;
        this.utils.titleChanged.emit("Dashboard");
        this.metaData = new Object({
            "responsive": {
                "enabled": true
            },
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "fontSize": 13,
            "balloon": {
                "disableMouseEvents": false,
                "hideBalloonTime": 1000,
                "fixedPosition": true
            },
            "categoryAxis": {},
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Jan 2017",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Feb 2017",
                    "type": "column",
                    "valueField": "column-2"
                },
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-3",
                    "title": "Mar 2017",
                    "type": "column",
                    "valueField": "column-3"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "logarithmic": true,
                    "id": "ValueAxis-1",
                    "title": "Number",
                    "labelFrequency": 2
                }
            ],
            "allLabels": [],
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Core Metrics"
                }
            ],
            "dataProvider": []
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
            _this.metrics = _this.utils.getHeaderNames(_this.data);
            _this.agents = _this.utils.getAgents(_this.data);
            _this.agents = _this.agents.slice(0, _this.agents.length - 1);
            _this.months = _this.utils.months;
            _this.chart = _this.afterAssignDataForLeadAgent();
        });
        this.utils.coreMetricsChanged.subscribe(function (res) {
            _this.AmCharts.destroyChart(_this.chart);
            _this.chart = _this.afterAssignDataForLeadAgent();
            _this.chart.invalidateSize();
        });
    };
    MainComponent.prototype.test = function (n) {
        this.route.navigate(['/logged-in/agent', n]);
    };
    MainComponent.prototype.test2 = function (n) {
        this.route.navigate(['/logged-in/metric', n]);
    };
    MainComponent.prototype.afterAssignDataForLeadAgent = function () {
        var lead = "Lead Agent";
        this.metaData["dataProvider"] = [];
        var core = this.utils.coreMetrics;
        var months = this.utils.months;
        var k;
        for (var i = 0; i < core.length; i++) {
            k = 0;
            this.metaData["dataProvider"].push({
                "category": core[i],
                "column-1": parseInt(this.data[lead][core[i]][months[k++]]),
                "column-2": parseInt(this.data[lead][core[i]][months[k++]]),
                "column-3": parseInt(this.data[lead][core[i]][months[k++]]),
            });
        }
        if (this.utils.firstLoad) {
            this.warnmet();
            this.utils.firstLoad = false;
        }
        this.utils.loaded.emit(true);
        return this.AmCharts.makeChart("chartdiv", this.metaData);
    };
    MainComponent.prototype.warnmet = function () {
        var _this = this;
        var that = this;
        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 3; j++) {
                that.max[i][j] = 0;
            }
        }
        for (that.i = 0; that.i < that.metrics.length; that.i++) {
            for (that.j = 0; that.j < that.months.length; that.j++) {
                if (that.max[that.i][that.j] < parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]])) {
                    that.max[that.i][that.j] = parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]);
                }
            }
            ;
        }
        ;
        for (that.i = 0; that.i < that.metrics.length; that.i++) {
            for (that.j = 0; that.j < that.months.length; that.j++) {
                that.redthreshold[that.i][that.j] = (((that.max[that.i][that.j]) * 3) / 10);
                that.warnthreshold[that.i][that.j] = (((that.max[that.i][that.j]) * 5) / 10);
            }
            ;
        }
        ;
        var testVar = 23;
        for (that.i = 0; that.i < that.metrics.length; that.i++) {
            for (that.j = 0; that.j < that.months.length; that.j++) {
                if (parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]) <= that.warnthreshold[that.i][that.j]) {
                    if (parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]) <= that.redthreshold[that.i][that.j]) {
                        that._service.error("Warning", "Your values " + that.metrics[that.i] + " for " + that.months[that.j] + " are facing a downfall, please check them.");
                        this.utils.notificationAdded.emit(["Your values " + that.metrics[that.i] + " for " + that.months[that.j] + " are facing a downfall, please check them.", "red", "error"]);
                        //that is how you print it in notification.
                        //make the color of graph red or amber and send a warning saying its gone wayyy tooo down
                    }
                    else {
                        // that._service.success("Happy", "I'm so happy");
                        //send notification or warning and if necessary changing color...
                    }
                }
            }
            ;
        }
        ;
        var k = 0;
        for (that.i = 0; that.i < that.months.length; that.i++) {
            that.j = 0;
            that.metrics.forEach(function (metric) {
                if (parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) > parseInt(that.data["Lead Agent"][metric][that.months[that.i + 1]])) {
                    //special case where data is compared with previous months data to check decreasing trend
                    /*calci 30%*/
                    k = ((parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) * 3) / 10);
                    if ((parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) - k) > parseInt(that.data["Lead Agent"][metric][that.months[that.i + 1]])) {
                        //send warning sayin values are less than 30% than prev months
                        _this._service.warn("Warning", "The values of " + metric + " has faced a set-back in " + that.months[that.i] + " when compared to the previous month");
                        _this.utils.notificationAdded.emit(["The values of " + metric + " has faced a set-back in " + that.months[that.i] + " when compared to the previous month", "orange", "warning"]);
                    }
                }
                that.j++;
            });
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/protected/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _e || Object])
], MainComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/metric/metric.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/metric/metric.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group [dynamicHeight]=true [disableRipple]=true>\n  <md-tab label=\"Graph\">\n    <div style=\"padding:10px\">\n      <div class=\"mdl-card mdl-shadow--4dp\" style=\"width: 100%;\">\n        <div id=\"{{chartdiv}}\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\n      </div>\n    </div>\n  </md-tab>\n\n\n  <md-tab label=\"Table\">\n    <div *ngIf=\"agents\">\n      <h3 align=\"center\">{{metric}}</h3>\n      <hr>\n      <div *ngFor=\"let agent of agents\" align=\"center\" style=\"margin-bottom: 40px\">\n        <table style=\"width: 60%;\" class=\"mdl-data-table mdl-js-data-table mdl-shadow--4dp\">\n          <thead>\n            <tr>\n              <th colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">Agent</th>\n              <th>Month</th>\n              <th>Value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"3\" colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">{{agent}}</td>\n              <td>Jan-17</td>\n              <td>{{ data[agent][metric][\"Jan-17\"] }}</td>\n            </tr>\n            <tr>\n              <td>Feb-17</td>\n              <td>{{ data[agent][metric][\"Feb-17\"] }}</td>\n            </tr>\n            <tr>\n              <td>Mar-17</td>\n              <td>{{ data[agent][metric][\"Mar-17\"] }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/protected/metric/metric.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MetricComponent = (function () {
    function MetricComponent(route, http, AmCharts, utils) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.AmCharts = AmCharts;
        this.utils = utils;
        this.metrics = ['dummy', 'Agencies No', 'Consecutive Misses 1', 'Customer No', 'New Customer No', 'Paid Up No', 'Parallel No', 'Refinance No', 'Sales Value', 'Scheduled Visit No', 'Real Misses No', 'Sales No', 'Recent New Customers No 13 Weeks'];
        route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.metric = _this.metrics[_this.id];
            _this.utils.titleChanged.emit(_this.metric);
            _this.assignData();
        });
        this.utils.loaded.emit(false);
        this.metric = this.metrics[this.id];
        this.utils.titleChanged.emit(this.metric);
    }
    MetricComponent.prototype.assignData = function () {
        var _this = this;
        this.chartdiv = "chartdiv" + this.id;
        this.metaData = new Object({
            "type": "serial",
            "categoryField": "category",
            "startDuration": 1,
            "categoryAxis": {
                "gridPosition": "start"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Jan 2017",
                    "type": "column",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-2",
                    "title": "Feb 2017",
                    "type": "column",
                    "valueField": "column-2"
                },
                {
                    "balloonText": "[[category]] in [[title]]:[[value]]",
                    "fillAlphas": 1,
                    "id": "AmGraph-3",
                    "title": "Mar 2017",
                    "type": "column",
                    "valueField": "column-3"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Number"
                }
            ],
            "allLabels": [],
            "balloon": {
                "disableMouseEvents": false,
                "hideBalloonTime": 1000,
                "fixedPosition": true
            },
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": this.metric + " Metric"
                }
            ],
            "dataProvider": []
        });
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            _this.chart = _this.afterAssignDataForLeadAgent();
            console.log(_this.data);
        });
    };
    MetricComponent.prototype.afterAssignDataForLeadAgent = function () {
        this.agents = this.utils.getAgents(this.data);
        var headers = this.utils.getHeaderNames(this.data);
        var months = this.utils.months;
        for (var i = 0; i < this.agents.length; i++) {
            var j = 0;
            this.metaData["dataProvider"].push({
                "category": this.agents[i],
                "column-1": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
                "column-2": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
                "column-3": parseInt(this.data[this.agents[i]][this.metric][months[j++]])
            });
        }
        this.utils.loaded.emit(true);
        return this.AmCharts.makeChart(this.chartdiv, this.metaData);
    };
    MetricComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    MetricComponent.prototype.ngOnInit = function () {
    };
    return MetricComponent;
}());
MetricComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-metric',
        template: __webpack_require__("../../../../../src/app/protected/metric/metric.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/metric/metric.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */]) === "function" && _d || Object])
], MetricComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=metric.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/metrics/metrics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-1 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-2 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-1.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-3 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-2.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-4 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-3.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-5 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-4.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-6 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-5.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-7 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-6.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-8 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-7.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-9 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-8.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-10 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-9.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-11 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-10.png') bottom right 15% no-repeat #46B6AC;\n}\n.card-12 > .mdl-card__title {\n  color: #fff;\n  background:\n    url('/angular-practice/assets/MetricPic-11.png') bottom right 15% no-repeat #46B6AC;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%\">\n  <div class=\"row\" style=\"padding-top:1%;\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-1 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Agencies No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/1']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Agencies No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-2 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Consecutive Misses 1</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/2']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Consecutive Misses 1\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-3 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Customer No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/3']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Customer No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n        <div class=\"card-4 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">New Customer No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/4']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show New Customer No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:1%;\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-5 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Paid Up No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/5']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Paid Up No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-6 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Parallel No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/6']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Parallel No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-7 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Refinance No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/7']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Refinance No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n        <div class=\"card-8 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Sales Value</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/8']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Sales Value\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top:1%;margin-bottom:2%\">\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:15px\">\n        <div class=\"card-9 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Scheduled Visit No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/9']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Scheduled Visit No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-10 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Real Misses No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/10']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Real Misses No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px;padding-left:7.5px;padding-right:7.5px\">\n        <div class=\"card-11 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Sales No</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/11']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Sales No\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div style=\"padding-top:15px; padding-right:15px\">\n        <div class=\"card-12 mdl-card mdl-shadow--6dp\" style=\"width:100%;min-height:200px;text-align:center;\">\n          <div class=\"mdl-card__title mdl-card--expand\">\n            <h2 class=\"mdl-card__title-text\">Recent New Customers</h2>\n          </div>\n          <div class=\"mdl-card__actions mdl-card--border\">\n            <button [routerLink]=\"['/logged-in/metric/12']\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" >\n              Show Recent New Customers\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/protected/metrics/metrics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetricsComponent = (function () {
    function MetricsComponent(utils) {
        this.utils = utils;
        this.utils.loaded.emit(true);
        this.utils.titleChanged.emit("Individual Metrics");
    }
    MetricsComponent.prototype.ngOnInit = function () {
    };
    return MetricsComponent;
}());
MetricsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-metrics',
        template: __webpack_require__("../../../../../src/app/protected/metrics/metrics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/metrics/metrics.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], MetricsComponent);

var _a;
//# sourceMappingURL=metrics.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  /* background-image: url('http://labcenter.com.br/wp-content/uploads/2016/08/gradiente-azul-claro-fundo-1024x768.jpg'); */\n\tbackground-size:100vh;\n\tbackground-color: #f0f8ff;\n\tfont-family:\"Open Sans\", sans-serif;\n}\na.nostyle{\n\tcolor:inherit;\n\ttext-decoration:none;\n\tpadding:0;\n\tmargin:0;\n}\ndiv.portfoliocard{\n\tposition:relative;\n\theight:450px;\n\twidth:400px;\n\tbackground:rgba(255,255,255,1);\n\tborder:1px solid rgba(0,0,0,0.7);\n\tbox-shadow:0px -1px 3px rgba(0,0,0,0.1),\n\t\t\t\t0px 2px 6px rgba(0,0,0,0.5);\n\tborder-radius:6px;\n\tmargin:10% auto;\n\toverflow:hidden;\n\tz-index:100;\n}\ndiv.portfoliocard div.coverphoto{\n\twidth:100%;\n\theight:120px;\n\tbackground:url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFhUWGBoaGBgYGBgYHxcZGhgaGhsfGhgaHiggHx0lIB4bITEhJyktLi4vFx8zODMtNygtLisBCgoKDg0OGxAQGzImICYuMi8tMi0tLS8tLS0vLzAvMC0wLS0vLTUtMC8tMi0vLy8vLS8tLS8tMC0tLS0tLS0vLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADwQAAECBQIEBQIFBAIBAwUAAAECEQADEiExBEEFIlFhBhMycYGR8CNCobHBFFLh8TPRYgdDclOCkqKy/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAQCAwUBBgf/xAA4EQABAwIEAwYFBAICAgMAAAABAAIRAyEEEjFBUWHwEyJxgZGxBaHB0eEUIzLxM0JickNSFTRE/9oADAMBAAIRAxEAPwDzvh6/xJaAhKClNJIBBXc3V1O30j3FABsBYVdvcc4kmTPhbZbrw5weamauapQlpcIUki6mvm/bEGIrMIgXm4XmsfjKTqQptGY6g8Eb8WyknTTTSFEIJbt3baE8M4h8LN+GOcMSwTF15HwOWkLlqmoUZRW1QSWKgDapm3cgdBBh9ZPEr3mMcSxzaZGaNJ24x7LeeIP6GYlKEqloOSomgU3cW2JBDgWi8Z8ru0Nl5jA/rabi5wJ5RJnz6KxvAOLzNOJglKS5SCDLQFF70oJZJJfJuej7o4V4DS2zgOC9DjcIzEFpqAxO5jxO+2mnNFuCeKV+amZOSTVMYs9nADBPUKub/m7Q3SrirTy6bJDGfCmdkWUjEDoz4eyd4k45L1GsppmU+WQllKavKVFCehAF3HM9mhdzhTrNpO4baef35rnw/Avw+EzSJzXsNNCJPr5K1wjX6JWnoSmXL1DKSanIxdRKnF8+5i6nUBMTbhuqMVQxja+Ykup2Nva3Bd0eurSkCXLSGSHSk/lGQ+H/AIhqjcAorUMjiS4nU3PH7IdqdD+HOJUE7h/zcwsO8L4ml3Hnimqdf9xgifpZZ1EhfkoPmpIVOtLrClAhyVEflwehuOt8JrXdm2/+2krWL2ds4ZSIbrEDw5+y2sxSUS00nmUygUqLpDNSRa5/aPQE92y860OfUM6C1xrzVvQplUrTMWU35WBN97C7/wDUTdI081RWNQOaaYnj4IMNPUVkKC6SC5spfN+Xdy7t/wBQnknRaHaZA0ERPoLb+CHcb1Or1IVNUsiVJmpADgFBKmSQAxKg7VZjMxHa1L6AHr3TmDp4XDEUwO89p21tfwHJC+MgyZs2XMllU1NCUrKy0n8wYAMXD294WxDsr3ZhJtBnROYSK1Nj6boaZJEDvba7Xi62a5k6VpQiiXRNKFhUu4BpHL0B5Y1WS1g+i8+G0q2KLpOZsiDrrr81TMtc1aJaEEkCkEksFHmdOADtd945VBc8ADqFeHMpMc9xtr5aX4qxK0Bl+YCQVBwSLgn3MX0KOVriqnV+0ykaKHTSkzJpnahQKUsV1EJcAswbs3T+YUyAzUqFWVHOp0+yoC50i+u6Zwnjmn0v9QuXJmHzZpMgjASDQQpRswUx3soXdxC1PEMohxaNT1fx91LE4GviuzZUeO63v8Z1sOYt5aLRaLi4StE3VOlS0gpsKQk3w7/vDgrAMBfaQsmtgy5rqeGuAb8ZQjW8XMzUakSEJnyTQqYQFOyUj82U3DdIR7YuqPyAFtvZP0cGKVCl2xLHiQLjc8N1S8NSilKpvlpUkzghlnNQAsOx6d+kGF7oLo/2+yYx7g5wpZiDlm3L7rVzdKBp6QqxWXADuq2Dhh/MaZYHAhYjapNfMRoLeCKafVtLCVPygC27ZvF3ZQZSVSlNQubuhJ9SxVygVDOSDfHT9oqIu7wT3+rTF9Pwguu8Rz1yij+1SWIBLkKdjserRhV8dVexwAuCLieOi0aPw6jTqB/EH2Vbg+pmTJgc1EuSaBsSLHNLHH6WjuCqPfVbmM67dWV2Kp06dMxYePV1utPMKZfKC4y9949BlBN15mo0Pqd7yWf4khSioqDBRBww37fbRTUEStTDlrQA3ZU+C6yVK1avMS9Q5S2COn7Rnh7W4gh2+iYxdGrWwoyHTXr5oP414oJxKUf8Y9ILCklSXP6fEVYqt2h5fkJ/4RhTRGZ38jrzsYWQVJJux+kIkXW+HgBGuEU+YlzQkkOc0irLO9gehdjePcUzeeSz8VIpmBJ97dfZX5WoWrVIQiapaRMBAJPOoqNwg74/f2M3fvwSrqbW4ZznsAMcrCBaevvpPFuuWlExMtSwChlAs9s/EQa0CkXECdlj/DKDHua54BvZYnhylykJ1aZkpTKUDLUbpUoFIPlpIsdiMD2jJZULGGpM39Lx1bRejrhtV5wzmuFhcCxAvqZ851VSWs+TNIQAldTsCKAVOBY2xYF8CI0nOdhnnYz5K9wAqsBNxHnbXn5KfhEtStPqF8wlYNKRc3IqAIGLi2QcbmAAdScTp81XinNbXps/22k+VtfPy1TpCkcqZa1FHmchVSVJB2YKYPa+1+jRfhsuUBhtNlx4ddzwAYvEwfUT9/NP4uhSdYkTAlFNKVLSymDU7KYqAuwYxViL4pp+f06uo4VzXYQlhmZIBtz4abcFY4fOTJJWgqmLUVgylJdJkpNivJ6NYAUno0XNhjramfSVVXYawyOAaBHeBuHHh85uZlaXg2lIRKqQElQqSQokqDDlABLPlzD9J0N6ssbF1QXvyumLG2nPb5K8eKypMmZVLqCjZ2LbCOYkZIeTYfNLDCVK9VuV0QvMpQJIIv8Ai4bAJzcdT+ntHmx3iCP/AGXsnQ0EH/1XocmSVJ8sJG2MnFielnaPTZBcleUc8Ndnn10U3E0JtSlSQSHquXAOIIOW6rw7nf7EE8kd4RweWlKJg5V0pIFTsW2f7vCZqES0BZmKxlR7nMNxJ2j2Xnvi3hiv6glZKSV8qiLNsCUgDdyrMIYulmeHSvV/DMS39PDL2v0fkFn9e5Wq4KlBrsdgLlWPftaEMR/M8euK1aEBgtYX6j29VptPLSZLSpS/LARzqKg6qSVW9JOwYfk3zGlQgshgMc1jVHOFX9x4zXsI0m19efmu6ifMQopTMWgZJBIA5Sl2F3Ys/wCkGJc5roBj+kMp03jM5oJ5+MrT8A0JmSXQAlKktdlkW6sLnq29oapOaKQndYuNrinVhxkg7WH9KhN4YhICbLIvMSohmBcgKtdnLWLN8wfSAYRromm4p7iTps0jWTy8VhZwSpajL/CTMWK0uppaCpJS/wDcAb4Jjz7oN22n5aL0zMzWAP7xaLG0kwZ8D5rQ6+QfLTSorTSGLKDOC29t2Dxp1WE0hF7LJo1BnOYQZ5Knw3TBAVLUpUqcVgVWCaCh2JTcqLs3/kmM+i3L3CYdI8I4dckxiKhfFRoDmAG28zE32HHkU/hrBLBBM4zUlJfCQAfSL36nY2iykNovmEeijXkuknuZTNt/Hl/a1Xh6SZq5spQpoTysG9SnNR62t2EaNF57R4Og+qxMc8UmMqNvJv5DZaHUSAygOWkYd/pGgH8d1lMqGQTeUJVMlMuxegA3s7Htj/qKTo7wTwbUkX3KyaNSJSZikEicFApWCkgD26/5jzLqgpB7m/ykXtELcNM1XNa7+BBkXlE/Ds1cny5oUhRmCYCLkp5wS4wP8wxgi5pa4kHNPuEnj2srZqZBAbHnZbvhyBQd3jdqG4Xma5OZO1HD0LDERHOYgqLMQ9hsvP8AjmnMjWoYfmqCurCzPa38xmVm5cS3mZXqsHUFfBuk7RCA66bKYzFiorUakXSE84JKVuXt1xV2il5bcnjp58Vp0WVJ7NlgBY2JNtx1ohes1UsrUZYpQ/KlkrYf/IhzCzz3jl0TtKlUDAHmTudPkjOiVp1ywr/jmoASAOYTea6ltdJAza7vePaU6gKz6wrsqFv8mkzwLbaDj9OSqaJVOqQoZSpywBDg2xsbX7iAXeAr6wzYZwOhHnzWp8WzkzErmBIACU1AnJKthk/H1jrmmnRLXX+yxfhjHU3BhO5j0XmiVuWLllOnJIYh7A4p/wD5EeUJl5B4268F7CIE8r9ePuiMrUr8taarKBqpJALJSASAWJzc7qVuY0qLnGiR46deqUdTZnBi40nW5PXgBspOCa/ykTgUpmJVLpCFF6VG1VIb+3P/AMesQwNQsa4bRp69eihjMP2rmEGCHTI3HCfP34K/4X4cqalnZCFpSVOgB1KcO9yGqZt1WZzDWBb3PBLfEcQ2iZ1JBMQdh6cPTwUniiSmRr0okioIoISpplS77dDa2/xFdYk4hh5T7qHw57q+BLqtpm4tA/HyVPWoUiaB6VBC3IcfnYsGBFrNFtT/ACDwPuExRc19KdRI9vOeK0nh1IBSQcYPsQbjIjQojuLIx5JBB81Z8Sa/8CYkpDLI9AAYhQve7WOGurvFONaGUt+CpwGH/eaQdOPh7/ZZfg+qkUolJlEqM11rV1csEtcMGe7HcWEZOEfTkMA3W1iqVbMajnWy2A+vj6jY6r0zhHJUsp5Rk2/3/uNnEd6Gg3XjcV34YDdWuOKeVUhV3cN/dgXAJ+IXpAyQQqcGIqZXjx8F53rfF81UsSFVImylNUlgCE2T3d7n22yM84w3aLOXrKPwikx/bCC1w0PPX8K2kzdVRLWolSjyk02Khcm13SD8w0QXsAKoPZYXM9ggDXXbYefyVHjvAZcmaoTpwS1PJLClLUi5K+awYZ2ZP1RxFGnOZztdhr19kzgsfUr0gaTJ1u4gAHYWvf6rR/8Ap/pErQpbqqO5LlmbPcGG8KQ2jmF5O6yfjlVzHhsWS8aadEsgBhY3ZybUsNmb2xnAjuJIdTDjzXPhNR9QEn8az17K34Y1C0adSk00pAcF3Vbbb73iyllNMAqn4jTY+uGumTw2UXiCdpV6SYpI/EUzBnIU5Z+oz7xTizNJ3h/VlLAsxLMUwH+I9uvRefrnSa01y1gO0ylZJoARYA78pNyRcWtGJUc0ESLb32svVBlXIcrhMWkb3v4X2vzutmnSsiUoB0lFQBY8ob1HbpG6yCxkcF541Ze8E3Bg+PJZ2bKLrUoKTJEyWVFGxwCxOWB+sYtRpDnE/wAZGi1muENaCC/KYnrTRF+C+INPp1ELlKWsrqSssORQAHcYFsdIZp4qnRJaQZJ1tofbwSGL+H18S2WuAbEEcx1qjiuKSlr1C5ZQVKASkNcgB1HYhsP2hxlZhc7Kb6ddbLNGFqMZTa8GBc3tyHBEtDNmeWL5HqPt1P3eHgGloJ1SdZjO0002CpzPKAmc1SqEszMSx/Qd7xQXfy8PomG9oS20CSsfOlprmiWXBKWs136KOAbOTHmagGaoGHh78+a32OOVheOPVuSu8JlnzTUDUCXZiHe+LZ394uwYJrd7X8pfFOHZDLotYOJGU7+lkvbF7/zHoKrwwSdAsI4YVfG6g4h4kUkL8khQGFEHo572hSriRkLmCY9FbQ+Ghxb2tidlk9br5s7UyxMWCA9IcFnBOBfpmE+0e/ENzHqFuUcPSo4dxYLnX15oXreDzigzAk0l2a55VAEge5EQfSdBdHUp2jjKQf2ZN/uPwg05gWtZhcKBsGuNjbELm1loMkieN9lY0CGmdbKDkEgdwR2v1sY9HRP7nkqq5mn6LQeGtfLGoTL1CgJaXKWbKs1kXboDi3UQ4Khu1utoWX8Qw9Q0C+iJcYnwHAfb7op4xnS1A0AAJDYse5O8WFjxRObUpH4Ux7SM+pXnszTKTNMtZCFowqoBIYVC4GSHu9yoYvHl3NPaFrjBB12Xq21Wuph7RIO0X4HXoAIho534CE+UQfxHmAqFaSWpuKbdQ+I08GZo5Y4+/XolarP3i7NP8bWsdZ4+sKXRcNYLLBXIcPgew3w+Rc5i6jhg0E8lXWxMlomL9dbqhpZqULlqKCQkgkOxUQXcFrHFrwuwmmG+KaqMdUY4A6+cff5KVXFJy5kuctbrRSAopHKEjkuE5Fz36G8UtqPNRr3c1AYWiym6k0WM2nWdd9/lyVyZq1zZgnrFRKCVEgEEukXAYfEOZszmu/4n6JdtJlKmaLbXtfx8Vq/CsgKpuBZnJb3e324jQZ3aUrE+JVMs2lVfEE0CWkFi6mdRICb5tnaxt2iv4g4Bgncq7AsLqhI4ban7eOvNZvw/LKpxWE3qCiLJSHayUtso2HQRi4Fs1c3Na+NcGUQwnaOJ8SfAa8VtuL8Zn6YDyqRUfSsO6m5X3Dlg+I1sa7K0ECSvOYXBUcSf3JtuOG/opuB+Iqq9JqEJROrUDinFRuDsO8UU62d/es4bcd7eSrxnw7LlxNAksgePBYTU6ZKZ8xKDygZP5yFUlmzcEi+B1jOcwCs4DT8r09Oo51Fpdr7WkT5a8+SK6lYlSUzEzGWFCwBcNkvjuIcrOyUpBSNNva1ixzZEIZ4hSszlEzSvzEJUlZKXKC7BQBsp2sDZsGM7Eh2c31Ajw+ScwJYKQAbGUkEQYnkeHPdTaHxFN0zJlkEqNy9j6WtZgbuTcu5wYk3FupAMbBlV1vh1PEy6oNPXeeOnAeWqs8b4hOXOUic1SQLBSVeoAu4P+niytXe9+V1o4KrCYeiykHUtCeBGiIaDQTJpRLRuxPMyWDXtkh+9nhgscQ2EpWr06IdUf7X/AApZ2nko8+VqQsLI5KADdlX/AMYNviFVrO81+/VlBlSs8U6mHIjefLrks0dOsqYJqJJS1r1UkUpDHN7WuPnLqtdIAEnT22Wx2jQ2SYAv6Tqfldek6fgC6JZUBZNx3aN9gAa0E3AheQfj2Z3Abn6rFcSmAzptQCarUpAo5UgJ5agygXuX9Xa+HUP7r5/FvS87r0WHbFJmUzG51ub3g2jbl6VeI6SWiaJkpS16eyFTBZ1MCpL4IxEazWipmbJboT9PZX4erUfSyVAA+5A5TYo0qdKmamYuUmlFIYGlPyEgXHfuIbY5j65LNI8Pks4Mq08O1tUyZ5n5rYaSbJEoOfUMNg9o1pMBYFVlY1LDRC9LpUmp1pFQ6OxbB6H2ioAd7rZO1KrhENNlnTNl0TUhJKlWtYA1ONzVv7MMx5uo5mWoALn723MrWyvzsJNh66X2EbIjwOQlS0UO93B/LezHe0NYJjXVRl8+SUxlRzWOzae603GeFqUhRFyQH+sbFZvaMLW6rGwmKa14B0WP1EppMwXszjoXjLLYoOC32Oms0punol6xClg2UxDMwIN83wQQ28TIDcQ0nq2qk/PUwjms3H10UHH+IoSuYvTKUlCqQQ6g4BJIDGwJH67RGs8SX0yrMFh3uY1tcSRPDwQqRxnS0iuTOqYPStJD+6r/AF3iptWlFwZ8U8/B4nMcjmxzBn5WXfC/AZmpnWKUilyXTYHHKC8blBgb+47h9Vz4jj6eGo3BN+fuucc4NMkatMpQqUpSSkpc1C4YDqT+0WOaDVa9uh+i7g8bTr4U1RYAGZ2R7jOmVQXSQyb9o1KkPYYWXhKjS8X3Xn6UoCXCzWFgJTTegvzA4BB2fJcYePHFrQDfvTYcpXqSXF0EWiSZ3tbrhdGeE6sSqiZSZgUkpBW7IDi4GHcp+zGzhjkCz8VRNWAHlsGbb9X6COuDKVYhVBck2Lk4DWEaTP4nwWbcVBwlZmZxIqlIkliJait1F6ntSDlI7A37MIxH1pd2caLYGGDapqjcRbbnz89PNUzILglJAKSQ4yMC9nD2f39opI77TyKvziIBvMea0OgTLnKS6lecqWs0hPLVWCwYixS7v1PvGjSAeWkm+X7LKrl9FpgDIHC83iNdOOi9B4DwUy5YUQ5AcA/paGX1QP2wV5bG40VahANlmfGSCiWhbhRMzmQLWJuCBkEEggbPFOPfFMQLAjz63Wx8JcH1HMiBFj9fEe6D+HNakTfOZvxitSb25zjJsDuTCODcHS7iT81oY+iTT7L/AIwD5I5/6i8RlTZTodxd2z739usXYxuSgQSsz4Fh6tKpDtPFZPgmjmsJwSQlMwpKnsFNgwjhWO/lzW7jK1Keym5ExyTOHL51OEqJckk3B5hn4drguI5R/meuKlXHcEW6COcSSKEgB2IBFQIJu7KBsD79bw/iB+2s3Dk5yTvyvHgderIHrtKkJLFyX7AXa/3tGbVpDKYWlRquLhIUPF9amaEDyUoKUAOinnL3Uu1rVW9jgRRXqB8DLEcIVmFoOpFxzkgmbzYcBx2ujnDtKgy2Xq5bKR5tISKitqQkqZ6ruXN6n7lui0RBeL35ys2vVcKktpGxyzNo1mOHDwhE53GRKTI8lIQsMlSnd37fH6wzUrlgaG8gkm4LtXVO1MtNwOCocamlcxalEknf4P8AiKsTd5TWEYKdNoboh2pW0wKSSGNrMwDNudvsxnYgkOBb1om6Ylha7rVekcN8UVS0hSDXSKi1gSMe9o16FUVIkXi68jiPheWoS02mywvEnmTJtKXKlAU5d1A2a/SMutLqj4GpHuvS4eKdNmYwANfJD5OnX5iwUKDepJDpSoqYVCwSDgC/p72raw5yI8eH4TbqjDTBBF9DuQBtx/KI8DloExSXG7KzcdGODe7HA6mLcIGiqR4pPGOcaYdHC3W612lmhBSshwGsL/f+Y3XHK2SsKow1AWhP4hxKVMC2SQkjZs0kBx2hd1RrmFQoYarSLZN/pKzJTZeQCRTa+TdxctcAF8x56o3+flHrqtoG7eO/poj/AAmYZBBAepwtLXlsXYnreNDCnsneOo3CysS0VwQdtDOqL6/j6TKUUgFqXBtZSgPj3h12IY1he28R80hQ+HuFUB3P5CVlk69QkzPUQqxSR6r2D9fobWhMOPYulbf6dpqs4jdVNbOkjWhRTVKDGlBLXTkqLXBLY/yPjtwdvwr6TKpwZbMO4nx4c4QjWTAtKylLJyEpFgKiA7E4JZySbtaKiQWEjq6fpNLHNBN+J8NrDgg6PLAZSwlQsQZQUzd4WgCx9loHObtEj/tCIcN4rM0k4qkgPSQXu+cBxbD5Zn3aPQurCkQyJBH1SmIwtPGUctXSeuP0+qlTxifq9VLnKaqpKUt+U5DMX63iWEr9s5sCAPsoHB0cHhnUm6QSef08l6vxDTpTpFhSQ9N3vf5i5jya1jb6Lw1CoXYoFp3XhGsYqs4AsEkuU3LuWAd3PzGLiYNUx1cr6bSkNv8A2jSZKVSkqC01848ukksCnc7mom3T3jXpgFous8vc2oWlpixmbb/YC6NImqRLWARzIY4LjoW9oeA7pWcWte9s7GR4rJZNTkqcO9xuzvnEYcA1vRbugy7deink6dKpgQqamWkAmpVZAthgDdycdTeJvaBWAJgQVU+o5tMva0k8BHr1yUslRSULYAJQ7VdwLAlzd/3xFzDlcx3Bv2UHgODmcTGnjwHXivTeE+LkLlISLrVYD3LAXhnJTqHOHWK8bivhD2VXE6BBvEOmE2nzD5aXBKwCQkE2JbfGDvE8VTa+nBOhWhgappTk7xgwOJQfgvCWpEtSJySUmsBYDubKBLv1bt3dHC0AG90yOK0MXi5k1AWG9rT5R8kW8e8FMuRUm4CQFX6fxE8We0ouI29kh8Fxoq18p42We8GaE6iZ5daEhKSpiVB2dPpBAKma/QDqXRwQLjc2HD7dbLW+LVxhqeeCSTG3jrw+/gqEqWUzF1XDkBQwWJFizEA7D2tEWty1CCmnOD6YjqUZ4ggCUUhlF7kflIfc5DNfv2h6uP2lnUCTVk2+qryNOOYLslr3Bfo172LvFDWAyDorn1DYt1TvEEpCCZklSiEFNClJBuBh8BthEMWwNbnauYFz3jJVAEzIBUfANbo/6wrmEpkH/wComo1Mn+0EC4z0zmFqFWkKxdttPFSx1HF/pMrLv5GBEnjy24oz4m10mZOQZDUuNgzno4cbQ3XqBzmQZus/4fQrU6LhW1UXEtKUzCxCsOpN8hvgX7RLEN7xjkp4eqHME28UP1enKlMlLBFySbDAufSHZha5O8Z+IYS6BsmqVQNbLjr1bf7DgjnCpspYloRUSlP/ACKABLhPKc2DKa5hvBOY5zQOGqzcS2qwuc6ACdB539tkGnagSlzVJUpMypPlq5QEqqDlROAzwpVdke+Debeq0WUzVawES2DIvcRtzQ6XrVzpvmFRKyHWbB1XILA3bqwwIqY81HzvF026iyjSyAW28PS3qinhyQTNan+7u5cs72/1F2CYTVjxSWPeG0pngt9M4Eoyxh+jfviNp5a4ZV5duPaHqvw/gkwoUlTC7u17BmeKW0srSHHVW18cwODmoRqZFKZyFBAYhTmyicMk77WjKxFMtFRpiLHn5J+nUzOY9s8OXmouD8PXNWQgDlZ7taK8LSLn22hTxWIZSZL91W4rJVL8xBDEAP3v+mesTqsLQ5p5K7DPbUyvCoORKUC5F/qzA9P8CJgfslNW7UEapSyoapKVKTL3dQpAs4NgCOxHURL/AMgmy47KcMXNBPgZP5QtRJlligM2GHps/uSTj+IqH+NOiBUEg/2hM/SlRBAcFKWJv+UWdtsNszQsWynmVMog8T7or41/p/OSmSAALGYCSldxcC5YXD3x2jb+JZZaDr7XCR+Edv2JdVNztaR7a+SH8K1BlrTNlnmSysE0tYlXuT1+jgRDAuAII319k3iaYqMNN+ht4+Hl1qtJxrxBq9UUymspIJSnBGXJwBGo9wpuDaY1WRhPh+FwgNXgdSshLmKYhIsWB5QTlxdnDkbNuIwQ5wJA319VvFrZBOuuvLhuiug1aZdbKUJiuRIpSpNK7Ld8KsGI67Rp0qjWOPElJVqLquWQMoubkGRppqFotPLJQsXZrsHLNgD/AC0ajR3Ssl7oeDzWW4fpjNWQmpUykUgMwSn1VlTWpw3S8YjQDiCN7dFbVeoKTJdAbN/E6RG86/JLVSyVugZDgPUWIZmAyzn29osxDC51kU3AMh/2Hj9PFW9NUoBrJTLUogBwkEBJUxszMMxYBLR/1+yoqZWkzqXAX33hQ8IlWJBdLs4tex3u9/0PSFsJZlirMU68HXrr+16BxPVheily0SlGoB3SSSexGbhut40nsJBdrO33XlsPRLMY573C3PrZZrher1UvSKSkoCJc02ZlhbubEYBcG2X2hCgajKRjaR81r4mlhquKDiCS5vlHjzTOLeINRMlrQqYKVJpU7XGWdixMRr13OYW2Cnhvh9CnUa9rbgyPH5LO6egTUJmTJiZYUvmTzZDOlJaxIv8A4jPaQ14DiQJK1X5jTcWNBdAsbepvoNEV4bN8zzZs2aPOl+WmUHCCpIOQAkVClr2N3hmg7OXOe6402sksQzs8lOm3uOzF24B4STa+y0eqkJ8hIWoISVOVkKP5SaWBwTGtiGNFISVkU6ju2JYJMaW463VXhvAp8zzOUgoF6rYFgPjaFGUjeVfiMfRp5b6nb3Q3istkEO1i9wHuLXN/a/tFWLbFNN4Z3fQHSzUpQpKkuonlsClLsFVPd2AZiGvGS0gNIIv1P4WpUY5zgQbb8Twj6zqt6mVpf6aSpKk+dUklILs7BQpew/WNdgplrYIm3rabLzBdif1Dw4HJBv7GeKMK4PJVIM1KjUABkAOM2aGalME9bLPGMqtrCmRZZPiYUhdsKIcPYhwbt3jJxktcFuYfK9t9QrvheSy0n/wB/mLPhrYqD/ql/iL5YRzQ3jelUpE5WyFXdh6lBgDknJY7CKMS0kvPA/VN4OqGupt3I9ghHBkDzO9OxtjDdYpwwHaeSfxTj2fmt/4OXUt5inCHTLxYA1KGO4+sauELiXSeQ+q8v8VGVkMFzc+w9lreK8VlyUVEjsIuMNbmfYLBw2EfXdlChHGUpCq+UhiQSNw8SdkGpiFb+ic4jJcLJcU4kmatRCQQS2SkGwNy4+xGTisQyo6GiRprC3MNhnUmAE/VQSNQUrBC1C4O4csXdjnbf4ium8teCD1zVr6YcwghVNdq1zAorUVD6OH/AMD6DpEnPc9pLjP9q+jSZTIDRH9Kx/TgaZbPcuz/AEewGD+8OsYP0zlV2h/UNlBJkubqJzepZBNyAwSATc7ABmeFoc9/NaLXUsNRnQff8lMHFkp05l+RLCiKPMBNWS5IfJx7GICp+1EBT/SOdXz5zGsbbdeKGy0ygkVIU7B2TMVduoUB8NbF2eKIG/1TjjUJMER4gfQ/nVDjODqqAJILEvYkpNgLPn/8ibw46pJ73VwmshgZTHR68k+QSABb1eoA3pChtZna5DknOYnhSQ5reeo5SovAJnlp4xx+/krPEpV0l3sNi92Z7M5DnO2Y0cU2XNhU4d0AiN+XVlVTMUlQpSKrMlqkm9gUEGrbrgO8Zr81N4jX5eivLWuacxtx0Prtup6CuakJHM5OQBh25ujHJvb5aIzVhHFVZgykS7Trh9lstJMR5E10XKGSQWCS2S5+2jcaHFtvP0Xn6rX9syDab81i1yR5lCQ6izHlILA1AFJIvhwTjIciPPVf/sgDePrK9EHns8508/LWOvJWpqFIBWagDZKkvZTG1lCmxUfg2N4ertIaSqGua85RB4g8J8DOg+4sjHEtFKRJk8qpcwySVG6kzEsPSR0JAc274iZDQ0Dl9Lys/D1qj61S4c3NbYg8/wAX5If4depJClMnG5SxJw7AVEHpzHJBhXAtsACm8dGUyBf5/mPO2wW1meMZI06pTHzGIFQPNcgkH3B+kN1KtMVC6fJedb8GrGuKk93ltyWb4HIK5bBJJKVOwYqvVds++7CKcKwOYtfGVAx8k7jytCu646USpq5o8ma6vLlpNioAB0tdurlnfpEKvZtBz2PWiWojEmoxlM522zE6xz5/OIWT4tw7ygitMxMxS1WUBTSwYgi9Q3Sbj5jLxFLJEgyT5Lcw2I7UnKQWgDQ3n7cDoo+FpKpwTLSplOGupyHL4FwG23OHiOHE1QGjVTxJDaRLzp5L1Xj/AAeSnREzCp0pcUt6mtbpiN3EVM7S06BeJwWMquxgFMCCd+CxEvxBqBLGnSumWAzAAE3PqVnfrtGcK7wcoXo3fD6Bea5Eu60Cn4osrlCWpOC4O5Jy+C1wQXZwcva/EgvZlVeHaGVS8Hl6fLx+m+anJUZglFgEqLEhKWBFRqL3G9zbtGO4EuycFsNIDDU3I5nkI/ARXgLL1KBKUco5lkBTtSQGPpyLbAO0XYeHVwW8tdUjjZZh3GoONhpxnTX8wtRxHTmRrEpUsUmkkEEpLgvYdLfWHazsuIBmx/KxcPUGIwhLW3uOeyueJhplpSZRFSfVc2w3z/1Bi8jxqJB2S/w/9QxxFQWOiXAOHstATzPLSp2I6v6gHG4McwTQx4P/ABCMbiJY4utDiNvpKB+J9OuUpQVUlJVUzllkEEWAZ774eFcWC1xJ0JnxWn8OqMqtBbcxHMT15oT4c0yVTykliU8l05t6id2ttfpFeFaDV8k9j6jmUM3A31+XWi7NmmXOmgqZSSQwAGCdxY5Jdz0jjpFR17rjWipSaQLHr7LszXzpwKalqpBJDE2AyWdrE3P1iD6lSoIJJhcbQo0SDAE2216/pWJepR5ICq/NKnByKWAL7v37RElvZw7VVOpP7aWxljzlENJrQBMlgJ/EIFSnUzAem1nN+0SD8uZg3tfw68ErUoSWvJPdvAt63V6dpCmYETFhBA/M7Czs4cX+8xcaeV4DjCWZVDqZewT4KvNlywgALWoqSkqFJACs7m/KTdv3iUN7OJ2Gyta55fJAEExfb+1o5adL/RqZbuDc5cYs9oeGTsSAbfVZLjif1YkfZYXWzkyFomIKJigxUkpLJL4Idjj9faEnENgi69LRY6uxzHS0aAzrz5IZPmO6wzqUDyuAkl7N9cW/WKtWzzTjG5YZwG+8deKG83U/WKE3ZQzhjJDt2BJwD9D9feG6gnL4qxm6fow6hYHrm2cEWDm2NxE8IJqtt1dcqmGq7qA6kvhhuAcdWb6/61sQ2KjZSzLAqvPCXcGwYqtgCkZ6kvjt8JYoDPJ8/BXMJiD5fPrq93UpkmdyrPlPYlPMBdmTU5ze+28Muaw1RGiWpmsKVx3/ABtPjC1ZkTJSF/lUkZBBY0jBGc7RsNA7MrDD6dV7dwfusWtRQtK0myWKVBKgmsAHB3H0tho8/VBFcEafVeiAD2FrtTM3Ex5bH1vxRjiEtSgkJv6ScAEBurdhm/zGliRLAs+g5rSS7nHV0O0kwrWUzJqkASzTWFkUkVAWdQT6WFxvGdSqF1Qhx2t5hN1WhjZptm94jXSdgTrOh2RnwXNlS5hTqCaDZmbnF7jNnIc94YwndaePNZ/xZtWowGhr9Pa/JCtcANSpUo2rUU0u6WPLfrg2w43sFq4/elqeoycOG1OAmYg8fLZaXwnxMaZNdNSeYHuxs36WhqjAo3WP8TwpxTskwbIX4r4l/VUTBpggFbCYATWU1OAQWLWwDjIa6GKqdoAQLTr1+d078Nw36WWGpNtDtMQeXqPNZ9GmXMncqalLUQMJc3LgAhmy2LfEJZHPqWvJWqajKdLvGAB4/wB+/ur3AOL/ANLOlzTLdnYYCg1Kiz+q2WyLxOjW7J8kenWqWxuE/VUXUw6J9RuPK/potB4w8RmagJQmhK1hTXJcD+5w3Vh0EP42uRTAG6yvhXw4Un5nGSBHQ3QIh1OLg3xubse9up/eF9XStPRsddeiNKQXcO4vazdGbuRD7xdZwIi+iyeqArULNUXPSwI7hjkgbnMYVQd4+K3KZ7g8Fa4UaJyClW4uHD3DjA3iVG1VpHV1TiRnpODgjK9Uo6hVXOfq3UvcswI7O8XPee3vdZ7aTRQGW3XXsrKJ3MUkppfHOXApulyznm+qsWiJd+4Qfr1x+apLO6CNfLedfl8tUZ8L8emJIrdSQlg+wDWBOwi3A4hzu67RZ/xHAU3A5LGZP5Q3xVxRepVNCfSnYcwCUkOSUg7t2irEVnVcwGg+m6b+G4VmGaydT5XPigsqUhM2lAmA08xWAnmYOAlsAvcn4DRykAKlp03Wi9zjTl0a2i9tr+CIaLhCJi54M5H4QsSSUqDEskuCd/qYmykHvffT0StbFvpMpkMPePmPFCkTtQQqYicQSopUPMCSp0uWTblpSB/9oHQQtmeRmDvnyTpZQkMcy0SO7IF+N7ySfMniVLLSSAU4Bs+ACbOTygP1LXgcDYhQcQCQevqfJEdW1TMLWdBcEhr9Ljp2PaCsBP2661SlOYn39vX7KwCSxJfG7l2OX2z1xFgEkE9aqqAJA60UUmcESpgLEqszElJCi4JsRYHDuNxE6fdY7n91N7C+o0jbnrbzn6J2hStUlRAKkpcEgelyWf8AeLqV6ZXKxY2qAbE/NBuIICSoEFnzv2t2yz/MQeAJWhQcXQQnSNMuWUpmoCHWkvMQTYhnYXIu7Ddo4AWtuNxquPqNqAupmbHQj32UY181XqUHHL6QLJ5RZugEVS46qXYUx/Ec9TvdBpiQC7h2cMbgvbbbLRe8AQStBpJER8l3SLT5iTsDZxkAFnA3LfUxZhHNFVjhpP0K5VBLCN+vZG+NcUGpmBZSiWaQkJSLHqX22+I1alRri0e91nYTCnC08gJdcmSepQnVTFJJLDmG6UlwpwWJFt8QjjZBPXFPU2tcAOHM7R1dXdJokrmBJWAkMCoAl7tyjLEtcgAVB2cCHqVMFzZS9Ws5jC4C+sfO/hyk23uV6yPD8sadQFypDHN7Xu7ud/mGP1JNTKdF4X/5Coa4J0BXkfFNIZUyhSRYVchBJQouASHuO4cPfaEcQyK0dar3mGqirTztOtr8Ryt8rHZFfE2iMqXLTMVzPzIT6khuuC4JaL8aR2SR+H1hVqOLBbYnQn8IFp5qVTCWCXRgCySABsBlnsD6iIyqDw6oTyWm9rmsA1v69eOy0PBOCvphq1KDBXo9NXNs2B7D/GhhqQyNd58llYzG5cR+mA211iyEeYoTFoCzSSSUgkB7hyGbFrQqSe1IlPZW9m1xFwIlHpegWnTBRHKQTULgOxvs+zO4Lw6GRRhZjq7HYnKNR11sVlFzZigyphoQrlQpRObcoxjJt+0YRLnG5sDotwNY0yG3IuQPf6JszTErU1JAyo2SOZhctY/zi0ReyXmFJtQNaJ9N9OXXO6RH4iqpj5BUGb1G6WuUuyrDBNrRE/yMnrq6Ae4Ibwtv58DFrnzRnjMjklFRYE5ZzYMGBa20aOMaMjJWdhH994CdoE/iCoO46dsvn7MFEfuCVyue4YR/XU1hJpQks6mchn6Xu/7dI0cQAHQVl0c2QuFzw4rFcQDTFXc1vsbM+QTcvcNZvePO1rPPivRUDLB4ddbqbhR/GSQQ4UD6UgWIGD22b/sFC9URxVeJtRIPDiUZ0cpP9UlK7AuCXLAFJu4yBnoRFxA/UX6ss+q536Ylv930v6cU6bLKZygzlJJuM4LsRhr32it4isVxrg6iDx6j1V/gMtRRclgOUP6XIOCbPl98xdgBYyfDrmlca4B1h48494QHUJUKmdisgtuMsbh/aEb3jif6WnTLTE8OipuDylKWWJIA7sLW/mGsMCXnwUMU9rWidVS1ZUhajjLWCtj1777fEUVLOJTFLK9g66+qbOklIQqoCpQICVEFLGxLuU9QTsXjjmkAFdY8OLmxoIuNfvwPoicwyvLB/wDcDppFgAEpSFBQyXDt3MXODco49XSbe07Q/wDrrO+pMRsrenUAqxtZwWzSMfwfaJMjN1wVFQHLfq6sarUvNCT6f7fSxAIwLPZnIvFjjNSNlVTpxSLt+OqCVlnf8xY4ZsX+kUtBylaMCfJHeD6mmUtTWOUuaSQ2cv8A5h6h/icVm4qlmqNG/wA7+yo+IuP/ANSbJpKCGTYpe225JF32AzFVWsagPJMYDAfpRczO++/XqpxI0y9EuYqa08qekkm5uO9xuTEQGGiST3uvcbqsvxDMY1jW9yNeuHAIJoaaA4lvf1ec+Tmm0VNiP7WlVzZzE+WX63QudLYCYlaSarp3SzM4IYg9nxeLqrYa1wO+nXXzTrHSSwg6a7H04eXJLRylGixYm1nFTG36CJYUGWeP3XKrgJ6sik7US0TJc2Ugs3pmJSpJWGqcVY9Vm2T1toPqMa5jmjiEmynUex1Oo7zaSDG23hedzwVHUzUl3Sl3DXI3x0b6en604yo3NccEzTY4aHrr3V/jPFJKkyfIllBQlCVvcKLhe5w4ewu57PPE4xpaMmsjaIHW6VwmFrNc/tnSCSRy29vT2JL8VzVSzLC2RSwZ1ECl2cn1Pm5yekO0sUyo0vAv+EmPhNJr85befCTPss0DzF1EXZRANwTcnBY2zn4jKNYmoSTw91sR3RA8NPTrREOIgmVl7gZ/8S2SLWzt9IdxhJopXDwKunU8uiqGmtMdQADF6QFDD4JYnsTGXQMPk/JNVLsga87KzwrVArHrpIACAXYsWIKgbVAWBBa0Twtb9wawbQqcTSIZtIuT/RG3G03UvmHzSOUpBdsXOXu4dgLMLDeLi49sRsq8o7Kd+ur3R3ScamJ0ypCuaWQoAWsXDsewfteGg/uLNq4Km7ECsLOt7LHab/lsDdxtuKd7NfO0Ybf8q36n+K/W6dOVzMQzEsQGOOsdee8QuMHdn+kkKLBITYO/pLqpIcKbobC+AdogCYgDqEECZJv56TwnrRaLibpEtVL0qAKLuWyGILPf2vu0a2KOUNMaEWWTh+8XNmJGvUSjc3icnWUTEEImgAKkhBw5vW328XUqzK7hBvw3Wc3DVsHmY8S3ZxPyhP4xpFJJUQxD2O/y/v8AeGcUJ7wUMLVa4QFjdboVhal0ko8wpqCS1RGLhwbggFjcYePPVKbg4mLSvQ0a7C0Nm8TE7deSm8Nzkony1TEVISq7EBnIDk5Z2zbPeI4dwbVaXaT77qGPY59BzWGCR4olxvWInTyZSaUKKWTZ3FtsG37RPEvFSp3dLJLB0X0aMVDJE3TtIgGbZdAqLKLkpFr8vQftEWgGprC5VJFLSTGnE+aN+DuJy5FfmOoWAa+D0+YtwNVtMOBPBZ3xXDVK+XJZB+J8QQrzEUp8tUwqBA5kECzYAd//ANYofWaS4R3SZ5/RaGHw7m5XT3g2OR9+irHhnjPkzVLKEGsEMSwT6T9H/mL8NWyvJO/NVfEMH21IMBNvnqhXE/xFqISSpaxSEuRd3+SwYdAbYMVVu+4mNSncP+2wAmwF56646qLVqWtKphkgBaqSyEhI8tIJoV+VVi7DByXiDszgXRqeFrBTpBjHCnn0E3Jm5tI3HDnsuTSnlKS4IU6TVy4YEi30P5Yk6LRzQ3NJDhwva/X1RfRJIBVb/kSEmpIygEg3BZmu3W4i5g708/okapBOXkZsePhx5qwZKKpapswhy9ud0mqpSgDUGLC/WLcozguPV1UHvyubTbMW4XtAG1xJQqVwxZkzJwA8tKyl3Ygtls/DbxU2mcjnDROuxLG1W0j/ACIn8K7w2ckyVGlgahSLsDi5uS/6NeGqJ/Zcl8Qxwqi8myp6fhc2ZKnzEkBLJrBBCky3JqDABSSLlswu1hc1xCvfiqVKpTY4XvHAm1t4PDgguj1ARWqhK8UhblmVgpAZTj4HUFoXaQJK0qtMvytkjjHhx2j18l1IIsoMQS4ZmL3DbN0iYBUSQbi4T+NytMma0iaFIChSSnaz1WD7G9mB3cQ3jOxzgsI25jrT5rmDdiHU/wB5sGLwfbqZ5XVTQ8RXLVLUkhBSQQpObVBzkOxO28K0q7mFpt6eI++yvrYdlRrmuEzNj5daqQzDUCBUQ6jeoOLqPQhxciz42hk1C5zTrqeuoUA0ZSNJtwPL8brmtnOvLEsAwADXcF2cOQL7ZeJYx8vjwXaLIb116b6QqpXTm6gsuCAUnq5yf4zvZLNlmdQfJXZc2mkeauaKZyEAJYOpi1yQxG1mHpf2zGhgj+0Y8fkqKze/N+HWvqodLOQZgMxKlJJDmo1AVB772fPWFKNRnaS8W/PzVlRjxTIYYN9rTFka8QzpBDyQtKHFDlJIIG7bW69+0aeNe00ZHy4rOwLKwMVoJ316+XJCuHTUCrzAopKFMElIJWoVJqJ5lItfvjvmYZ7QTm0jz4+P5TtdjyBkImRrOgsY2B6Ki0RKZyGY3dhcb2O9v43EQod2s2OtVZVGak6ev76utT4a0OmXqZo1E3yykYIAc8xurqBsWP0jUpNb2zuPD1WJ8Qr4hmGaaDc0/jb7W9VBqZSAT5agpLqKTbDlnHx9iLXgDRWU3PIGcQbSs3W63sHVcC1hTtZ36AuWc4eMOZf5/br3WxEM8vv1pyHBS61PNMUUi+CkEJ36Fg4BsRttHao7zjCrpHutAPrr+VxApy9ZChYAUuA4KWBfItjaI6a6/hSPe00t534/NG+NSiZaAHGCewDuSOj/AE7xp41pyNWbhHAPJKXgviaZOpCnKEKTSoE1WYOLD8xHZu8K4Go1tW9gR180fFsM6th8upBkbfXYeM8l6D4n41IVLKEEFZswIcfSNYnICCbleV+HYKs2pncLLyzVzjUQKghZ5r2UpB75s1r3NugwnuOYgaE+y9tSYMsm5GnIHrW1teKmRxCqaichCZS6k+gJpcFiQgm1m7EviI9pLw8CDI0+yrOHy0nUnEuEHWZ8J6PirknSAkKE1JS6alXBSSAVOnNKXurDkAZgyAmQ61vLj6cdEu6qQC0tM3jnwvxPDXirc+SEzCEKCwCwUl2Jth4k9ozHKZ6CXY8uYC4QeB1CtcDQlbp5ElRSKiSKC4pUL9WG/wD3zDQ4EaafSPmqcY4s71zE246yPS6Da6SyqQpKjUocr5qI6b59iIWIvHM6eK0KL5bJEWGvgr/B9KqYs+W5X5Zul7kpu79XYn/cOUGFxtrCWxVVtNgz6Tv49HqEP4vp1IWoLTSrDMBjt8Z3vFdZpDjKawtRr2gtMhUASpg7hN7qCbAHDvdrADpFQumbNvx5Si87hs+UtKlIJNNYBYlQ9QJBdxYk53ho03tIJG0pFuJo1WlrXWmN7bRt5KObq1TZpmqSE1/2hgVUpdu+/wAxEOL6mY9WCk2i2lS7MGY46xJj7KKbMfUDd3JCbWZzt26R0/5VY1sUPv19VX03FZktxLWpKJlSFAsqxuWS2znA3PWICq5v8TYyCramEp1ILxJEEbfNaHh2lKZKihVTEspNSXwxBIt+8P0RFF0LJxFUOqgOETsYPkspMnrQtQTMUh2BLqDX/wDG7C0ZxJDjBhbjWMewFzQeGn1UJUXUVFL1JdwM3uwz37tHJ1lWQLBvAotptdKpTyKdmNCyhLixIS1nz/1FzXAjRI1KFTMbjzEn1WdlTCG5lBiSG2LbXHQXhZrjIvC1XNBmynlKcpCSp2ySbKuSQwdhc9d+0WtMkAT678erqtwgEmPxw8/TbmpP6pBRLSJQCkO63LrcgiodAHFmzFgrNyNYG3G6h2Tw9zi6xi3Dw8VzVTT6ds9y4a59v3ieLec0LtNo1USphLlyXJZySQ5d3wTb/EUZyQT91MNAgI3wHgk2fJmzEMRLBJdV2Aw0avw+lmomTqYHos7G42lQqtY7V2lkEWlSQ+AoFiGchyD3AuQ2/wARl1GuYPEfVaILXHw/tE58hatLUlJpQU1kYDks/wC3xGlWYThbckmx7G4mCbmYVXhWokAnzkrVykChnqYhJKibAYYZt0hDC1KTXfuDrx+SvxNOsQOyIF7zw3sPf7p/B9KqbOkpQLkgBRFId1HOPm2IMK0uqsjrUqOKqtpUXucdvHgoeLqUJsxJ2UXOXI77tdj3McxhLazgp4UA0muHBaXRaYqlJolnlBCl1VJURcqB9IDNa8bFFhNIQPNZFaqG1TmdroIgjlx13We0sozJ4QCKioBLBgouAAwADnLlt3vGO0Z60StWo8U6JeRYCTy65eyl4nolyZykTEXSVP0JpBaoZGLA77PEqzCyoQerKGHrMrUQ9hsY9+Ci0yQVdQz5Aa3VTux9yWitgBcpvJDeuPL+gvRPHyJUvSSFISgLKkkEXsA/yI1sc6KZPAiF5P4IatTFVGuJiD14rzzRFIIL3tQCk7KuTs3qGTg4jIpRmB9F6uqHER635e+n5V+ZMqn23x8tbbr+kMkzXSzW5aF1DN1M3TalQUzpUSRyqckM9Qe7Oxuz9CYpc91KqZ4qxtOnicOCNCOY+VvPSfIKHQ6oBQUUpIKhUjAUmoLap3Fw1th7xQ10EGOplWVqZc0gHax3BiNPn4qwqmo4AapmU4uWT+oue14g8DMfzzt/apGbKPTb1RCVMUUhSlPU+4PpYXALg33F3eLGlxbJPXX3SrmtDiGjT69baaJylAIU9KiwFz6cDr6hcM1gAcRW61N2/UeoXAJeNh7/AC0PHy1VWtw5xUx5uYixY7dLtmIMuJ5+fXkrogxy4W681e0sxICympNh+YEtZ9g+9v1h6mRBIslqjSS0Og+X9pa3WmapXmTCp7ksA4SCkZA5gDHHPLycxXaNAUmjI2PXe58pQKYgpAVuFDLFzf8AKdrF3tFEWWk0hxy8urq7M4jPQhC0zSSsKl+sLXQWFBDlk7iwLkjaLc7wAQb6ayY4dXS4w1F7y1zbCDpAm9/HjcjfdP0rAAFRy9iCGKRhJYguLn2+bKYuOtlCpJJIHU8fbqOr4oROSQgJoF6CpJIwouLAkGlyMMIC/wDc8EDCg0iCZnjB8PSJshsyYCoeUkSw61pqWKvzMygAbUsB1PeKSQTa2qca0tb+4cxgAwLbbX43PDwW54J4gRI0RlEAqIU4BYoNwygRmz2h+jVDKMb3XmsZ8PfXxnaAwLefgsRxGWuYVrCSSeclIfkY35bJuFO9/YCEHgmSvR0HNphrSYGl+PnrtEe6rJmPU9KWpBKMt6VNzBJcfX6xwHVXFsRqddfUbSPor2i10qhIXKKlAM9QDgWFm2DD4ibHCLhLVaFTOcroHh1ugSSxB6XuAf0NjC4tdaREiF1o6uKTTSypQSMkgD5iyi0veGjcqNR2VpJRPj/DJmnm+VNZwAWCgQxGRtgfoIdx1LK8XkR/evgk8FiaeIpdpT08OCoBSiwKjTb1EsGcB+loTBJgE2TRAEmL8lPptYtCKUzFAKJqSCQGIHdi+MflHwzh8Q9jMrTvp5KqpRY90uaLaHfr7qoRc/e8LEST1ur1oeKcIny9NKUsFCZiwHKmBwxUNhu5/iNjF0nNoBs7ifysrD4ujUxD2tMlo4X8vss4LEW+C9+uG3jDFndfha+o1V3g8jzJ8pAISCQHWxAexN7fYhjCDNXaAlsU/s6D3kTHBSeJ9IZWqmIK0rILlScOb4Fh7CJY9mWseah8Oq9rhmuAI5HVarwr4vlSpCdLNlqKVWKkhzzMwA3MPYbF02sa06gRyWL8S+D1Ktc4mm4SNjyWO1M1BnFUupKH5dyAMHa+/Z+0ZlR7TVzNsJst+m14pBr4Ji/Dr3Tkrc3dRN3Km2cgv8h3jubMZN/6XCMotYeCSiCUtbGWDfTs185iJMxCBIBlO1k9SiAVYYC5IZ87/pHaz3OdBOijSptaJAUWl/5Euq2HDmzdLFtohT/mLqyp/jMBaLgvCjqtQJaKUkJJck3Znh+nTz1jtAWTi8UMLh87pN0B4rpzKnrQblKiDc3A/iEqzSyqWnYrTw1QVaLXDcSotOoW6uMfL/feK27Kbwp0zbuST783s/X7ttFZ4lVlloH2RThmpl8xmpLUqCPLCQy2SxVvTj6lt4tpObfMPTjbVJYinUt2Z3EzOl9OfRTpKR5RUf7g+Tv7xBrB2JeeIXHn9wNHBQS5pYgMx7B8Dc3EVsNoCsc0TJRDSp5TvYlhsAzu2N/pD1Md0pWoe8EPmtvjfqzYGzxSU02dlVnJAyeWxfBa4NILVXt8HvBZXsJOmvWvBVloYXd0nmIuA+Gs12d3uB2jhFlcDfx0615RCKS9WFTCpKQkEMAHsGpb1HIyHhpjpfISTqWVmVxk/XXgqWoX+LvYHf73u0VP/wAqYYP2lRTMPKHFiQAQGD7km31iiUyWi9ka4fqEkFc4KIKW5aUlwkANZmFviG6bpYS5Z9emQQylGu8ne6F+YxWLOogE7hIuR0INrZsIXJuU5lnKeHv72Us/U1AJBJZqbFSgbMlyzgknYs24jpdIgKDKeUyfPYePkOgVJppswpFpZswKkynYWHqD7RJrjG3yUajGBxufIu+iE2bv97xRsnd11KrEdfb946DaEEXldQfrA0xouEKxPmqU5JJBAF1FRF7ObX5TY7fWGKlR7+8TNuM9aKpjQ2w25R1r6pgVZun3fqe8VTZSi67JF/nJDt3IY2+IspT8/oVx2i6GINi4GzM9YuegYt7t1aOWIPh9UXBF9/p15IjxHxFPmyESFqdCDy4w2/eGa+NfUplpA580nQ+HUaNY1mi51QcKx272hAG4WhCe9NKklQUL9GL2KT9I7pBGqj/KQdOtU2Yo2B2DD2d/5J+YHuJN1JoG3WyepIAu7nZmYMkg9S4fYbXMSIEdclAEk8v76+yanb76ffxEFIqwn2ODv0B/izRYFUVNUSUuEubOQEguyX2FuvUEneJSTE9bKuAJgn35+N+HoucQQkTFBBKkg2JDE/Dn945WADzl0RQc40wXCD6qORKNaeUhwCH32cdiXiLB32qb3DKbq1rNRMkzXQSlQcP+8X1nvpVZbYqmlTp16cOEhDa1KNyTfc7n36/xCskm6bytaLKTTTEgoKkuAeYAkFQd8swtb4jrSLSo1GuIMHw5fdJBtEIsuEK1JmAMbKSFglJsSzPcXANxYwaeEql7SZGhjXr7ItIvIUdnDtsHi/8A/OfFIvtXAVdABALh3IpYiwAY9L33exhZgkeatcSDEdcERQtZqcuVJAschgwYewt2h5pJB8EoWtEW0PR/KG6mZtj27hj94ilxTlNqozHYlgQCP2Ld+sRhMtiY62VSYoi4JFTuzhx09oieKvaAbHZG9EQsiiUUGlIZyupQYlTlmcX3/V4apEEiyzq0sBzOm55QOHkolhEud+IFggKwEnmblBSoNTsQXeIuIFXvKYL6lH9uNuOm9xvwQeaSU1FiSo7Xtf2u/wCkLHSU+2Aco4deyJ8Plig1FQSWcgO1xs4ezwzTjszKTruIf3dVW4uJaZyxLmeakj1qSUkksSQCXfue8U1Muc5TIV2F7R1JpqNyngDKqpJZRGwGBgAjLd2v1aI8VcQLStFw3USUS0pmplBYd6qwclnCQ2Ghhj2tEGPmsqvTqvqF1MujlEfNZgk42/7aFjOi2I3TkyzSVNZwH7kE/wAR2DlzbLhcM2XdcEA1QpTjAtZx3qN+p79hE9uuajv1ySG8C4pdOpr3e7MAXLFgQcgmxHSLadh1wPy4qDxPXV+CjSAb46fptnHt/EQsb9ddclMkhOODYfuR8wE2IXN1GlLEEFu/T2ittnBSJkGU0OphzKYYywubdt/rHBLiALrtmydE7UWUQyhgMvIxn7xEqlnEQfPVcZdoPtouFgbDYZL3I7d7t9Y5pou3K6j+P5gC4Vb04G6mBC7vkhJswvcsLsM/FzY35+ypeTsJ099fJKg01MWch+7A/wAvEYOWVyRmjdKcbhxduZw132bs1zuT7xx2oQ3Tlt14/TwUnBNcJE5EwoCgkvSd47h6nZVA+JhQxdA16TqYMTurfjDjKNVOM1KAgYp3tudr/wARZi67argRtbn4qj4Xg3YWkKbjPWiBS1MXs4INw/1Bs3ZoVC0yJCdJLlnLEglg+Hwlw7OYBquOECevVOCg272v9HAH8vtBZcgz118lJIUMEB9s2uO/bp+Y9mBpCg8HrrqFptHrJSdGuWqW8xSgUqf0426wwHNGGLSLkrGq0arsW17XQ0C44odIZ826/wAtCtMXTj9FdkelTbB/iHGDulLP/kFQ1SyHS+SCRYiwLF/kxU61k1TaDdUJswUkWdwcXwfzZ+O77REkQmWt709en1VaZgfe8QOgVzdVofB/HE6ZYmLTUA9uzd/iGcNXFI5isr4pgXYphY0wm8X4pJ1Wr8yY8qWo8xSKiLZA3gqVW1auY2C7hcLVwuFyM7zhpNlnZzVFi4BYHqBYQsdVrNnKJWy4XxrSI0S5S5dU0h0qawJA37Q7Tr0m0Swi/h9eS8/icFin4ttRroaNQsdMmXLb9QOoNulxttCUrfDbCVPLmSwiYlRWT/7dLBLkiqoG7MB8gRKRBB8lW5ry5rmxznWLxHmqcQV66pROS+3wLCOkk6rgAGiTxxdSEAXE9JiYNlwhPT84+37R0KJXfv8A3HUJJEHNcKkI7xwqEpkxm/xHDoptlQAxAFWJyFFxfsN/0iQJlcIEFSA57sByjA37Gwxcub9ehRjqeuvkpYuHLDtdviOt1uuONrKUly7AOcDA9u0SJm6hECE8O332guo7poFwPvMR3C6q8yInRXBRmIqSUsgG4cdMQDVBBIsmwLqcDAuKWUrZhdr3ce0AKg4IvKUPKPvb67xd/wCLzSLge0TJc1ntl/j2ippAXXNlTS5tle0MNNiq3NuFT1Sw9sFyNyBdn7teK3HgmKYMXVTUTHL2u2G6dse0QcZV7GwIUKzYRE6BWDUrv5fmJf6rn+ya4bF7uX2s1vr9Y4uwZTI4pLpMC4kk36wIK6SL7dB/swIumwLqUCEoELsC4nJMSBXCnpMdBXCE4ff395jsqKlSBErFQKS1PfMRN0AKFXTMcjZWBRiIhTSdjaDwRqLp6CLXuDhrN9eu3eJBRMqSWb5sWctgWe0dBuonRPSLt/iJBQKe/wB/SBRUajEVIKBURKtCaNrtfvbH38Rxd8kkrKVODjB/3BMGyCA4QUyOKS7AhSyCAQTgEO3TfNoBrdQeCQYRQ2QXy97Mx3DdjaLjamktXquFRUArYRPhiZBlzjNmFKwn8MAPWeh6Q1SyFrsxvsk8QawqMFNsib8ggc2aXyemdmb6NaFXFaTWiFATHFYAuqwI7sFwalO/L8x3/Vc/2TEAXctbvftaIhSJTYF1dMC4uQLq6IELkCEoEJQIXYEJQLiclbff8x0OhcIUiVRJRITwqOyowuFUcldhMU9iD9Mhj+kF9VIbhRiIqS68CEoFxPcfftElG6ekwKJCeVR0lchNWe8C6Aq6jEFaFwmOIXIF1dAgQuQIT0mObqJRFJ/C+Yv/APElCP3FWripXQmiYxuHHRyP2vHZUsshQExFWBNgXU9WB8x06BRGpVtWuT5Ak+WlwurzL1EM1PRt4ln7mWN9VQKB7ftcxiIjbx8VSEQTK5AhOW+/QbNtAVwJsC6lAhdJgQuQISgQlAhdgQkIELoMC4niYWIcsWcdWw4iQcVHKJlNJgXYXCY5K7C4CLv8e8csgylAupPAhOeOricFR2VGE5UwbWsN3uwf6m8dJC4GlNTMIIILEFwehEck6hdLQRBUZMRUklM9sfWBA5rkC6lAhds3eBc3XUwIK1g4bp/6DzfOHnVf8bjD/XvDeWn+nnN3uEjjw10usM4mv+u7PJ3I1WWMK7raTTAuppjikuQITibCOzZcAumxxdXRHELhjqF1Sicl/wDFhAuAAaLkC6lAhKBCUCEoEJQISgQlAhKBC68EoXIEJQISgQutHYXJSaCF2UoEJPBK4k8EoSeOLq5AhKBCUCEoEJQISgQn+acPAo5QuPHZXYXCqCUQuRxdSgQreoRJEuWUKUZhfzARYX5aTvbMSOXKI13VDDVNRwcBltHE8ZVSIq9KBCUCEoEJQISgQlAhKBCUCEoEJQISgQlAhKBCUCF0CAITo6uJR2EJQIXDAhNiK6lAhKBCUCEoEJQISgQlAhKBCUCEoEJQISgQlAhKBCUCEoEJQISgQlAhKBCUCEoEJQISgQlAhKBCUCEoEJQITo6uJwiS4V2Ori60CEwiIrqaY4VJcjiEoEJQISgQlAhKBCUCEoEJQISgQlAhKBCUCEoELoECEqYIXJXIF1KBCUCEoEJQIX//2Q==');\n\tbackground-position:center center;\n\tborder-top-right-radius:5px;\n\tborder-top-left-radius:5px;\n\tborder-bottom:1px solid rgba(0,0,0,0.1);\n\tbox-shadow:inset 0px 3px 20px rgba(255,255,255,0.3),\n\t\t\t\t1px 0px 2px rgba(255,255,255,0.7);\n\tz-index:99;\n}\ndiv.portfoliocard div.left_col, div.portfoliocard div.right_col{\n\tfloat:left;\n\theight:340px;\n}\ndiv.portfoliocard div.left_col{\n\twidth:40%;\n\tpadding-top:85px;\n\tbox-sizing:border-box;\n}\ndiv.portfoliocard div.right_col{\n\twidth:60%;\n\tbackground:rgba(245,245,245,1);\n\tborder-left:1px solid rgba(230,230,230,1);\n\tbox-shadow:inset 0px 1px 1px rgba(255,255,255,0.7);\n\tmargin-left:-1px;\n\tborder-bottom-right-radius:5px;\n}\ndiv.portfoliocard div.profile_picture{\n\twidth:110px;\n\theight:110px;\n\tbackground:rgba(255,255,255,1);\n\tposition:absolute;\n\ttop:65px;\n\tleft:40px;\n\tborder-radius:100%;\n\tbackground-image: url('https://st.depositphotos.com/2704315/3185/v/450/depositphotos_31854223-stock-illustration-vector-user-profile-avatar-man.jpg');\n\tbackground-size:100% 100%;\n\tpadding:7px;\n\tborder:4px solid rgba(255,255,255,1)\n}\ndiv.portfoliocard div.right_col h2.name{\n\tfont-size:30px;\n\tfont-weight:300;\n\tcolor: rgba(30,30,30,1);\n\tpadding:0;\n\tmargin:20px 10px 0px 30px;\n}\ndiv.portfoliocard div.right_col h3.location{\n\tfont-size:15px;\n\tfont-weight:300;\n\tcolor:rgba(170,170,170,1);\n\tpadding:0;\n\tmargin:10px 10px 10px 30px;\n}\ndiv.portfoliocard ul.contact_information{\n\tmargin-top:20px;\n\tpadding-left:30px;\n\tlist-style-type:none;\n}\ndiv.portfoliocard ul.contact_information li{\n\theight: 39px;\n\twidth:180px;\n\tline-height:25px;\n\tfont-weight:300;\n\tfont-size:15px;\n\tcolor:rgba(140,140,140,1);\n\ttext-shadow:1px 1px 1px rgba(255,255,255,0.8);\n\tpadding:5px 0px;\n\tbackground-repeat:no-repeat;\n\tbackground-size:18px 18px;\n\tborder-bottom:1px solid rgba(0,0,0,0.1);\n\tbox-shadow:0px 1px 1px rgba(255,255,255,0.6);\n\tcursor:default;\n}\ndiv.portfoliocard ul.contact_information li:before{\n\tcontent:\"\";\n\twidth:25px;\n\theight:25px;\n\tdisplay:block;\n\tfloat:left;\n\tbackground-position:center;\n\tbackground-size:18px 18px;\n\tbackground-repeat:no-repeat;\n\tmargin-right:5px;\n\topacity:0.7;\n}\ndiv.portfoliocard ul.contact_information li:hover:before{\n\topacity:1;\n}\ndiv.portfoliocard ul.contact_information li.work:before{\n\tbackground-image: url('http://schulzmarcel.de/x/icons/case_24.png');\n}\ndiv.portfoliocard ul.contact_information li.website:before{\n\tbackground-image: url('http://schulzmarcel.de/x/icons/globe_24.png');\n}\ndiv.portfoliocard ul.contact_information li.mail:before{\n\tbackground-image: url('http://schulzmarcel.de/x/icons/paper_plane_24.png');\n}\ndiv.portfoliocard ul.contact_information li.phone:before{\n\tbackground-image: url('http://schulzmarcel.de/x/icons/phone_24.png');\n}\ndiv.portfoliocard ul.contact_information li.resume:before{\n\tbackground-image: url('http://schulzmarcel.de/x/icons/inbox_24.png');\n}\ndiv.portfoliocard div.followers, div.portfoliocard div.following{\n\tmargin:15px 0px 0px 35px;\n\tfont-weight:300;\n\tfont-size:16px;\n\tcolor:rgba(30,30,30,1);\n}\ndiv.portfoliocard div.follow_count{\n\tfont-weight:400;\n\tfont-size:25px;\n\tcolor:rgba(140,140,140,1);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700,800' rel='stylesheet'\n    type='text/css'>\n</head>\n\n<body>\n  <div class=\"portfoliocard\">\n    <div class=\"coverphoto\"></div>\n    <div class=\"profile_picture\"></div>\n    <div class=\"left_col\">\n      <div class=\"followers\">\n        <div class=\"follow_count\">13</div>\n        Agents under-look\n      </div>\n\n    </div>\n    <div class=\"right_col\">\n      <h2 class=\"name\">John Herbert</h2>\n      <h3 class=\"location\">San Francisco, CA</h3>\n      <ul class=\"contact_information\">\n        <li class=\"work\">Lead Agent</li>\n        <li class=\"website\"><a class=\"nostyle\" href=\"#\">www.ipf.com</a></li>\n        <li class=\"mail\">john.herbert@ipf.com</li>\n        <li class=\"phone\">1-(732)-757-2923</li>\n\n      </ul>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/protected/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(utils) {
        this.utils = utils;
        this.utils.titleChanged.emit("Profile");
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/protected/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/protected.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body, material-app, md-sidenav-container, .my-content {\n  margin: 0;\n  height: 100%;\n}\n\nmd-sidenav {\n  width: 18%;\n}\n\n.graph1 {\n  height: 500px;\n  border: 1px solid black;\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n    background-color: #6495ed;\n}\n\n#overlay {\n  position: fixed; /* Sit on top of the page content */\n  display: block; /* Hidden by default */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 3px; \n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.2); /* Black background with opacity */\n  z-index: 10; /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n}\n\n#loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -2.7em;\n  margin-left: -2.7em;\n  width: 5.4em;\n  height: 5.4em;\n  background-color: rgb(0,0,0,0.2);\n}\n\n#hill {\n  position: absolute;\n  width: 7.1em;\n  height: 7.1em;\n  top: 1.7em;\n  left: 1.7em;\n  background-color: transparent;\n  border-left: .25em solid black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n#hill:after {\n  content: '';\n  position: absolute;\n  width: 7.1em;\n  height: 7.1em;\n  left: 0;\n  background-color: rgb(0,0,0,0.2);\n}\n\n#box {\n  position: absolute;\n  left: 0;\n  bottom: -.1em;\n  width: 1em;\n  height: 1em;\n  background-color: transparent;\n  border: .25em solid black;\n  border-radius: 15%;\n  -webkit-transform: translate(0, -1em) rotate(-45deg);\n          transform: translate(0, -1em) rotate(-45deg);\n  -webkit-animation: push 2.5s cubic-bezier(.79, 0, .47, .97) infinite;\n          animation: push 2.5s cubic-bezier(.79, 0, .47, .97) infinite;\n}\n\n@-webkit-keyframes push {\n  0% {\n    -webkit-transform: translate(0, -1em) rotate(-45deg);\n            transform: translate(0, -1em) rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: translate(0, -1em) rotate(-50deg);\n            transform: translate(0, -1em) rotate(-50deg);\n  }\n  20% {\n    -webkit-transform: translate(1em, -2em) rotate(47deg);\n            transform: translate(1em, -2em) rotate(47deg);\n  }\n  25% {\n    -webkit-transform: translate(1em, -2em) rotate(45deg);\n            transform: translate(1em, -2em) rotate(45deg);\n  }\n  30% {\n    -webkit-transform: translate(1em, -2em) rotate(40deg);\n            transform: translate(1em, -2em) rotate(40deg);\n  }\n  45% {\n    -webkit-transform: translate(2em, -3em) rotate(137deg);\n            transform: translate(2em, -3em) rotate(137deg);\n  }\n  50% {\n    -webkit-transform: translate(2em, -3em) rotate(135deg);\n            transform: translate(2em, -3em) rotate(135deg);\n  }\n  55% {\n    -webkit-transform: translate(2em, -3em) rotate(130deg);\n            transform: translate(2em, -3em) rotate(130deg);\n  }\n  70% {\n    -webkit-transform: translate(3em, -4em) rotate(217deg);\n            transform: translate(3em, -4em) rotate(217deg);\n  }\n  75% {\n    -webkit-transform: translate(3em, -4em) rotate(220deg);\n            transform: translate(3em, -4em) rotate(220deg);\n  }\n  100% {\n    -webkit-transform: translate(0, -1em) rotate(-225deg);\n            transform: translate(0, -1em) rotate(-225deg);\n  }\n}\n\n@keyframes push {\n  0% {\n    -webkit-transform: translate(0, -1em) rotate(-45deg);\n            transform: translate(0, -1em) rotate(-45deg);\n  }\n  5% {\n    -webkit-transform: translate(0, -1em) rotate(-50deg);\n            transform: translate(0, -1em) rotate(-50deg);\n  }\n  20% {\n    -webkit-transform: translate(1em, -2em) rotate(47deg);\n            transform: translate(1em, -2em) rotate(47deg);\n  }\n  25% {\n    -webkit-transform: translate(1em, -2em) rotate(45deg);\n            transform: translate(1em, -2em) rotate(45deg);\n  }\n  30% {\n    -webkit-transform: translate(1em, -2em) rotate(40deg);\n            transform: translate(1em, -2em) rotate(40deg);\n  }\n  45% {\n    -webkit-transform: translate(2em, -3em) rotate(137deg);\n            transform: translate(2em, -3em) rotate(137deg);\n  }\n  50% {\n    -webkit-transform: translate(2em, -3em) rotate(135deg);\n            transform: translate(2em, -3em) rotate(135deg);\n  }\n  55% {\n    -webkit-transform: translate(2em, -3em) rotate(130deg);\n            transform: translate(2em, -3em) rotate(130deg);\n  }\n  70% {\n    -webkit-transform: translate(3em, -4em) rotate(217deg);\n            transform: translate(3em, -4em) rotate(217deg);\n  }\n  75% {\n    -webkit-transform: translate(3em, -4em) rotate(220deg);\n            transform: translate(3em, -4em) rotate(220deg);\n  }\n  100% {\n    -webkit-transform: translate(0, -1em) rotate(-225deg);\n            transform: translate(0, -1em) rotate(-225deg);\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/protected.component.html":
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700,800'\r\nrel='stylesheet'\r\ntype='text/css'>\r\n\r\n<div *ngIf=\"!loaded\" id=\"overlay\">\r\n<div id=\"loader\">\r\n<div id=\"box\"></div>\r\n<div id=\"hill\"></div>\r\n</div>\r\n</div>\r\n\r\n<!-- Always shows a header, even in smaller screens. -->\r\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer\">\r\n<div class=\"mdl-layout__header\">\r\n<div class=\"mdl-layout__header-row\" style=\"padding-right: 10px !important\">\r\n<!-- Title -->\r\n<span class=\"mdl-layout-title\">{{title}}</span>\r\n<!-- Add spacer, to align navigation to the right -->\r\n<div class=\"mdl-layout-spacer\"></div>\r\n<!-- Navigation. We hide it in small screens. -->\r\n<nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n  <!-- <a class=\"mdl-navigation__link\" href=\"\">Link</a>  -->\r\n</nav>\r\n<div>\r\n  <popover-content #myPopover [closeOnClickOutside]=\"true\" placement=\"bottom\" [animation]=\"true\">\r\n    <div id=\"testify\" style=\"overflow-y:auto; max-height:80vh; margin-right:-9px; margin-left:-5px\">\r\n      <span style=\"color:black\">\r\n        <div style=\"padding-bottom:20px\">\r\n          <div class=\"pull-left\" style=\"display:inline;font-size:x-large\">Notifications</div>\r\n          <button *ngIf=\"z!=0\" class=\"mdl-button mdl-js-button mdl-button--icon pull-right\"\r\n                  (click)=\"clearall()\"><i class=\"material-icons\">clear_all</i></button>\r\n        </div>\r\n      </span>\r\n      <hr>\r\n      <div *ngIf=\"z==0\" style=\"color:black;padding-bottom: 8px;\">No Notifications to show!</div>\r\n    </div>\r\n  </popover-content>\r\n  <!-- <div class=\"mdl-navigation__link\"> -->\r\n  <span [popover]=\"myPopover\" class=\"mdl-badge mdl-badge--overlap\" count=\"$dataBadge\"\r\n        style=\"margin-left: 4px; margin-right:70px; display:block; cursor:pointer\">\r\n      <img style=\"height:18px; width: auto; display:block; margin-top:10%; margin-right:30%\"\r\n           src=\"/angular-practice/assets/notification-bell.png\">\r\n    </span>\r\n  <!-- </div> -->\r\n</div>\r\n<button id=\"demo-menu-lower-right\" [popover]=\"mypopover2\" class=\"mdl-button mdl-js-button mdl-button--icon\"\r\n        style=\"margin-right: 2%\">\r\n  <i class=\"material-icons\" style=\"font-size: 28px;\">account_box</i>\r\n</button>\r\n\r\n<popover-content #mypopover2 [closeOnClickOutside]=\"true\" placement=\"auto bottom\" [animation]=\"true\"\r\n                 style=\"margin-right: 50px\">\r\n  <div id=\"testify2\">\r\n      <span style=\"color:black\">\r\n        <div style=\"padding-bottom:20px\">\r\n          <div class=\"pull-left\" style=\"display:inline;font-size:x-large\">Settings</div>\r\n\r\n        </div>\r\n      </span>\r\n    <hr>\r\n    <div style=\"color:black\">\r\n      <table style=\"width: 100%\">\r\n        <tr>\r\n          <td rowspan=\"3\"><img class=\"img-circle\" height=\"100\" width=\"100\"\r\n                               src=\"https://lh4.googleusercontent.com/-KrUpjv4wae8/AAAAAAAAAAI/AAAAAAAAHhM/iGPGrEMUnwQ/photo.jpg\">\r\n          </td>\r\n          <td>Theme\r\n            <md-slide-toggle>Dark mode</md-slide-toggle>\r\n          </td>\r\n        </tr>\r\n        <hr>\r\n        <tr>\r\n          <td><button md-raised-button data-toggle=\"modal\" data-target=\"#myModal\">Choose Metrics</button></td>\r\n        </tr>\r\n        <br>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button (click)=\"logout()\" md-button style=\"background-color: #6495ed\">LOG OUT</button>\r\n          </td>\r\n        </tr>\r\n\r\n      </table>\r\n    </div>\r\n  </div>\r\n</popover-content>\r\n\r\n\r\n</div>\r\n</div>\r\n<div class=\" mdl-layout__drawer\" style=\"background: rgb(63,81,181)\">\r\n<span class=\"mdl-layout-title\" style=\"padding-left: 33.5%\"><span style=\"color:white\">Welcome</span></span>\r\n<nav class=\"mdl-navigation\">\r\n\r\n<button class=\"mdl-navigation__link\" md-button [routerLink]=\"['./profile']\"><img class=\"img-circle\" height=\"100\" style=\"width:auto;display:block;margin-left:22%\" src=\"https://lh4.googleusercontent.com/-KrUpjv4wae8/AAAAAAAAAAI/AAAAAAAAHhM/iGPGrEMUnwQ/photo.jpg\">\r\n  <span style=\"color:white;align-self: center;font-weight:400;font-size:20px\">John Herbert</span>\r\n</button>\r\n<hr>\r\n<button class=\"mdl-navigation__link\" md-button [routerLink]=\"['./home']\"><img\r\n  style=\"height:70px; width: auto; display:block; margin-left:28%\" src=\"/angular-practice/assets/line-chart.png\"><span\r\n  style=\"color:white;font-weight:400;font-size:20px\">Home</span></button>\r\n<button class=\"mdl-navigation__link\" md-button [routerLink]=\"['./table']\"><img\r\n  style=\"height:70px; width: auto; display:block; margin-left:28%\" src=\"/angular-practice/assets/table-grid.png\"><span\r\n  style=\"color:white;font-weight:400;font-size:20px\">Table</span></button>\r\n\r\n</nav>\r\n</div>\r\n<main class=\"mdl-layout__content\">\r\n<div>\r\n<router-outlet></router-outlet>\r\n</div>\r\n</main>\r\n</div>\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" style=\"width:400px\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\" style=\"font-weight:600;font-size:20px\">Core Metrics</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <label for=\"sel1\">Core Metric 1:</label>\r\n          <select class=\"form-control\" id=\"sel1\" (change)=\"onChange1($event.target.value)\">\r\n            <option *ngFor=\"let metric of metrics\" [selected]=\"metric==core1\">{{metric}}</option>\r\n          </select>\r\n          <br>\r\n          <br>\r\n          <label for=\"sel2\">Core Metric 2:</label>\r\n          <select class=\"form-control\" id=\"sel2\" (change)=\"onChange2($event.target.value)\">\r\n            <option *ngFor=\"let metric of metrics\" [selected]=\"metric==core2\">{{metric}}</option>\r\n          </select>\r\n          <br>\r\n          <br>\r\n          <label for=\"sel3\">Core Metric 3:</label>\r\n          <select class=\"form-control\" id=\"sel3\" (change)=\"onChange3($event.target.value)\">\r\n            <option *ngFor=\"let metric of metrics\" [selected]=\"metric==core3\">{{metric}}</option>\r\n          </select>\r\n          <br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modalclosed()\">OK</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/protected/protected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProtectedComponent = (function () {
    function ProtectedComponent(utils, authService, route, snackBar, http) {
        var _this = this;
        this.utils = utils;
        this.authService = authService;
        this.route = route;
        this.snackBar = snackBar;
        this.http = http;
        this.loaded = false;
        this.k = 0;
        this.z = 0;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitter.subscribe(function (res) { return _this.z--; });
        this.utils.loaded.subscribe(function (res) { return _this.loaded = res; });
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
            _this.metrics = _this.utils.getHeaderNames(_this.data);
        });
        this.core1 = this.utils.coreMetrics[0];
        this.core2 = this.utils.coreMetrics[1];
        this.core3 = this.utils.coreMetrics[2];
        this.title = this.utils.title;
        this.utils.titleChanged.subscribe(function (res) { return _this.title = res; });
        var color = "red";
        this.utils.notificationAdded.subscribe(function (res) {
            var divNode = document.createElement("span");
            divNode.setAttribute("id", "" + _this.k);
            divNode.setAttribute("style", "cursor:pointer;");
            divNode.setAttribute("title", "Click to dismiss this notification!");
            divNode.innerHTML = "\n              <div style=\"color:" + res[1] + "\">\n                <span style=\"padding-top: 4px;\" class=\"pull-left\"><i class=\"material-icons\">" + res[2] + "</i></span>\n                <br>\n                <br>" + res[0] + "\n              </div>\n            <hr>";
            var that = _this;
            var k = _this.k;
            divNode.addEventListener("click", function () {
                var div = document.getElementById("" + k);
                if (div) {
                    div.parentNode.removeChild(div);
                }
                that.snackBar.open("Notification Cleared!", "Close", {
                    duration: 2000,
                });
                that.emitter.emit("");
            });
            document.getElementById("testify").appendChild(divNode);
            _this.k++;
            _this.z++;
        });
    }
    // <button id="button" class="mdl-button mdl-js-button mdl-button--icon pull-right"><span class="material-icons">close</span></button>
    ProtectedComponent.prototype.logout = function () {
        this.authService.logout();
        this.route.navigate(['/login']);
        window.location.reload();
        console.log("Logged Out");
    };
    ProtectedComponent.prototype.settings = function () {
        // this.route.navigate(['/logged-in/settings']);
        return false;
    };
    ProtectedComponent.prototype.clearall = function () {
        for (var x = 0; x <= this.k; x++) {
            var div = document.getElementById("" + x);
            if (div) {
                div.parentNode.removeChild(div);
            }
        }
        this.k = 0;
        this.z = 0;
        this.snackBar.open("All Notifications Cleared!", "Close", {
            duration: 2000,
        });
    };
    ProtectedComponent.prototype.onChange1 = function (change) {
        this.utils.coreMetrics[0] = change;
    };
    ProtectedComponent.prototype.onChange2 = function (change) {
        this.utils.coreMetrics[1] = change;
    };
    ProtectedComponent.prototype.onChange3 = function (change) {
        this.utils.coreMetrics[2] = change;
    };
    ProtectedComponent.prototype.modalclosed = function () {
        this.utils.coreMetricsChanged.emit();
    };
    return ProtectedComponent;
}());
ProtectedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-protected',
        template: __webpack_require__("../../../../../src/app/protected/protected.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/protected.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object])
], ProtectedComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=protected.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/protected.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collapse__ = __webpack_require__("../../../../../src/app/collapse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__("../../../../../src/app/protected/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__metric_metric_component__ = __webpack_require__("../../../../../src/app/protected/metric/metric.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/protected/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_table_component__ = __webpack_require__("../../../../../src/app/protected/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agent_agent_component__ = __webpack_require__("../../../../../src/app/protected/agent/agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/protected/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agents_agents_component__ = __webpack_require__("../../../../../src/app/protected/agents/agents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__metrics_metrics_component__ = __webpack_require__("../../../../../src/app/protected/metrics/metrics.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProtectedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'lead-agent', component: __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_13__table_table_component__["a" /* TableComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] },
    { path: 'metric', redirectTo: 'metric/1', pathMatch: 'full' },
    { path: 'metric/:id', component: __WEBPACK_IMPORTED_MODULE_11__metric_metric_component__["a" /* MetricComponent */] },
    { path: 'agent', redirectTo: 'agent/1', pathMatch: 'full' },
    { path: 'agent/:id', component: __WEBPACK_IMPORTED_MODULE_14__agent_agent_component__["a" /* AgentComponent */] },
    { path: 'agents', component: __WEBPACK_IMPORTED_MODULE_16__agents_agents_component__["a" /* AgentsComponent */] },
    { path: 'metrics', component: __WEBPACK_IMPORTED_MODULE_17__metrics_metrics_component__["a" /* MetricsComponent */] }
];
var ProtectedModule = (function () {
    function ProtectedModule() {
    }
    return ProtectedModule;
}());
ProtectedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__metric_metric_component__["a" /* MetricComponent */],
            __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_14__agent_agent_component__["a" /* AgentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__collapse__["a" /* Collapse */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__agents_agents_component__["a" /* AgentsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__metrics_metrics_component__["a" /* MetricsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
        ]
    })
], ProtectedModule);

//# sourceMappingURL=protected.module.js.map

/***/ }),

/***/ "../../../../../src/app/protected/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/protected/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data\">\n  <div *ngFor=\"let agent of agents\" align=\"center\" style=\"margin-bottom: 40px\">\n    <h3>{{agent}}</h3>\n    <table style=\"width: 60%;\" class=\"mdl-data-table mdl-js-data-table mdl-shadow--4dp\">\n      <thead>\n        <tr>\n          <th colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">Metric</th>\n          <th>Month</th>\n          <th>Value</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let metric of headers\">\n        <tr>\n          <td rowspan=\"3\" colspan=\"2\" class=\"mdl-data-table__cell--non-numeric\">{{ metric}}</td>\n          <td>Jan-17</td>\n          <td>{{ data[agent][metric][\"Jan-17\"] }}</td>\n        </tr>\n        <tr>\n          <td>Feb-17</td>\n          <td>{{ data[agent][metric][\"Feb-17\"] }}</td>\n        </tr>\n        <tr>\n          <td>Mar-17</td>\n          <td>{{ data[agent][metric][\"Mar-17\"] }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/protected/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_service__ = __webpack_require__("../../../../../src/app/protected/utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(http, utils) {
        this.http = http;
        this.utils = utils;
        this.utils.titleChanged.emit("Table");
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
            _this.afterDataReceived();
        });
    };
    TableComponent.prototype.afterDataReceived = function () {
        this.agents = this.utils.getAgents(this.data); // this function gives you all the agent names that the data contains
        this.headers = this.utils.getHeaderNames(this.data);
    };
    return TableComponent;
}());
TableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/protected/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/protected/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */]) === "function" && _b || Object])
], TableComponent);

var _a, _b;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/protected/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
        this.titleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.notificationAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.coreMetrics = ["Sales No", "New Customer No", "Real Misses No"];
        this.months = ["Jan-17", "Feb-17", "Mar-17"];
        this.firstLoad = true;
        this.firstLoad2 = true;
        this.firstLoad3 = true;
        this.coreMetricsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.title = "Dashboard";
    }
    UtilsService.prototype.getAgents = function (data) {
        var agents = [];
        var k = 0;
        for (var i in data) {
            agents[k++] = i;
        }
        return agents;
    };
    UtilsService.prototype.getHeaderNames = function (data, agents) {
        if (agents === void 0) { agents = this.getAgents(data); }
        var headers = [];
        var k = 0;
        data = data[agents[0]];
        while (Object.keys(data)[k]) {
            headers[k] = Object.keys(data)[k];
            k++;
        }
        return headers;
    };
    UtilsService.prototype.getValuesForMonthsOfEachData = function (data) {
        var monthValues = [];
        var k = 0;
        for (var i in data) {
            monthValues[k++] = data[i];
        }
        return monthValues;
    };
    return UtilsService;
}());
UtilsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map