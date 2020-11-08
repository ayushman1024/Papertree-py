webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.jurl = 'https://papertree.herokuapp.com/static/students.json';
    }
    AccountService.prototype.accounts = function () {
        return this.http.get(this.jurl);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creater_creater_component__ = __webpack_require__("./src/app/creater/creater.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ptree_sign_ptree_sign_component__ = __webpack_require__("./src/app/ptree-sign/ptree-sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login/:type', component: __WEBPACK_IMPORTED_MODULE_4__ptree_sign_ptree_sign_component__["a" /* PtreeSignComponent */] },
    { path: 'board', component: __WEBPACK_IMPORTED_MODULE_1__board_board_component__["a" /* BoardComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'creater', component: __WEBPACK_IMPORTED_MODULE_0__creater_creater_component__["a" /* CreaterComponent */] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__ptree_sign_ptree_sign_component__["a" /* PtreeSignComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-board></app-board> -->\n<!-- <app-ptree-sign></app-ptree-sign> -->\n<!-- <app-intro></app-intro> -->\n<app-homepage></app-homepage>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_module__ = __webpack_require__("./src/app/forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ptree_sign_ptree_sign_component__ = __webpack_require__("./src/app/ptree-sign/ptree-sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__creater_creater_component__ = __webpack_require__("./src/app/creater/creater.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__intro_intro_component__ = __webpack_require__("./src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_service__ = __webpack_require__("./src/app/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ptree_sign_ptree_sign_component__["a" /* PtreeSignComponent */],
                __WEBPACK_IMPORTED_MODULE_7__board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__creater_creater_component__["a" /* CreaterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__intro_intro_component__["a" /* IntroComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_1__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_0__forms_module__["a" /* FormzModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__account_service__["a" /* AccountService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    font-size: 12px;\r\n    font-family: \"Helvetica\", sans-serif;\r\n    color: #533c3c;\r\n}\r\n\r\n  .toppannel{\r\n    background-color: rgba(0, 2, 0, 0.795);\r\n    color: rgb(233, 255, 235);\r\n    text-shadow: inset 0 0 3px rgb(149, 241, 149);\r\n    min-height: auto;\r\n    position:-webkit-sticky;\r\n    position:sticky;\r\n    z-index: 1;  /* makes on top*/\r\n    top:0px\r\n  }\r\n\r\n  .board {\r\n    background-color:rgba(255, 255, 255, 0.219);\r\n    padding: 10px;\r\n    border: 2px solid rgba(255, 255, 255, 0.164);\r\n    width: 100%;\r\n    /* margin: 2 auto;\r\n    height: auto; */\r\n  }\r\n\r\n  mat-card-content{\r\n    overflow-y: scroll;\r\n    max-block-size: 120px;\r\n  }\r\n\r\n  .item {\r\n    /* margin: 12px; */\r\n    padding: 0.5em;\r\n  }\r\n\r\n  *::-webkit-scrollbar {\r\n    width: 0.3em;\r\n}\r\n\r\n  *::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.11);\r\n            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.11);\r\n}\r\n\r\n  *::-webkit-scrollbar-thumb {\r\n  background-color: rgb(118, 240, 159);\r\n  outline: 1px solid rgb(124, 117, 117);\r\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<div class=\"toppannel w3-row\">\n  <button mat-button w3-col l12 m12>nav1</button>\n  <button mat-button w3-col l12 m12 >nav2</button>\n  <button mat-button w3-col l12 m12 >nav3</button>\n  <button mat-button w3-col l12 m12 >nav4</button>\n  <button mat-button w3-col l12 m12 >nav5</button>\n</div>\n\n<div class=\"board w3-row\">\n  <div class=\"item w3-col l3 m4 s12\" *ngFor=\"let i of cards\">\n      <mat-card >\n            <mat-card-header >\n                <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                <mat-card-title>Notice Post</mat-card-title>\n                <mat-card-subtitle>Session 2</mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                Learn to enjoy every minute of your life.Learn to enjoy every minute of your life.Learn to enjoy every minute of your life.Learn to enjoy every minute of your life.Learn to enjoy every minute of your life.Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.\n                Go to this link <a href=\"https://papertree.herokuapp.com\">click</a>\n            </mat-card-content>\n            <mat-card-actions>\n                <mat-icon>favorite</mat-icon>\n                <mat-icon>done</mat-icon>\n                <mat-icon>open_in_new</mat-icon>\n            </mat-card-actions>\n      </mat-card>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {DomSanitizer } from '@angular/platform-browser';
// import {MatIconRegistry} from '@angular/material';
var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.cards = [
            { text: 'Problem set1', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Seminar announcement', cols: 1, rows: 1, color: 'lightgreen' },
            { text: 'Last year papers', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
        ];
    }
    BoardComponent.prototype.ngOnInit = function () { };
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("./src/app/board/board.component.html"),
            styles: [__webpack_require__("./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/creater/creater.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n    margin-top: 25px;\r\n    background-repeat: no-repeat;\r\n    background-image: radial-gradient(rgb(137, 255, 101), rgb(1, 7, 8));\r\n}\r\n/**\r\n * Profile image component\r\n */\r\n.profile-header-container{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.profile-header-img {\r\n    padding: 54px;\r\n}\r\n.profile-header-img > img.img-circle {\r\n    width: 120px;\r\n    height: 120px;\r\n    border: 2px solid rgb(0, 0, 0);\r\n}\r\n.profile-header {\r\n    margin-top: 43px;\r\n}\r\n/**\r\n * Ranking component\r\n */\r\n.rank-label-container {\r\n    margin-top: -19px;\r\n    /* z-index: 1000; */\r\n    text-align: center;\r\n}\r\n.label.label-default.rank-label {\r\n    background-color: rgb(0, 0, 0);\r\n    padding: 5px 10px 5px 10px;\r\n    border-radius: 27px;\r\n}"

/***/ }),

/***/ "./src/app/creater/creater.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n        <div class=\"profile-header-container\">   \n    \t\t<div class=\"profile-header-img\">\n                <img class=\"img-circle\" src = \"/static/assets/prof.jpg\" />\n                <!-- badge -->\n                <div class=\"rank-label-container\">\n                    <span class=\"label label-default rank-label\">Ayushman Srivastava</span>\n                </div>\n            </div>\n        </div> \n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/creater/creater.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreaterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreaterComponent = /** @class */ (function () {
    function CreaterComponent() {
    }
    CreaterComponent.prototype.ngOnInit = function () {
    };
    CreaterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-creater',
            template: __webpack_require__("./src/app/creater/creater.component.html"),
            styles: [__webpack_require__("./src/app/creater/creater.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreaterComponent);
    return CreaterComponent;
}());



/***/ }),

/***/ "./src/app/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormzModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormzModule = /** @class */ (function () {
    function FormzModule() {
    }
    FormzModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */]
            ]
        })
    ], FormzModule);
    return FormzModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "#titlepane {\r\n    color: rgb(198, 241, 148);\r\n    /* text-align: center; */  \r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgb(0, 8, 1)),color-stop(rgb(12, 77, 15)),to(rgb(21, 119, 21)));  \r\n    background-image: linear-gradient(rgb(0, 8, 1),rgb(12, 77, 15),rgb(21, 119, 21));\r\n}\r\n.menu1{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end; \r\n    z-index: 1;\r\n}\r\na{\r\n    margin:10px;\r\n    color:rgb(190, 240, 195);\r\n}\r\n#title1{\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 15px;\r\n    /* transform: rotateZ(0deg); */\r\n    /* animation: title1 2.7s ; */\r\n    /* animation-fill-mode: both; */\r\n    /* animation-delay: 1s; */\r\n}\r\n#title2{\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 14px;\r\n    /* transform: rotateZ(0deg); */\r\n    /* animation: title2 2s ; */\r\n    /* animation-fill-mode: both; */\r\n    /* animation-delay: 3.7s; */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"titlepane\">\n    <span id=\"title1\">DOCShare</span><br/>\n    <span id=\"title2\">..a document sharing webservice</span>\n    <span class=\"menu1 w3-row\" >\n        <a class=\"w3-col s4 l1\" routerLink=\"/board\" routerLinkActive=\"active\" ><mat-icon >dashboard</mat-icon></a>\n        <a class=\"w3-col s4 l1\" routerLink=\"/creater\" routerLinkActive=\"active\"><mat-icon>edit</mat-icon></a>\n        <a class=\"w3-col s4 l1\" routerLink=\"/creater\" routerLinkActive=\"active\"><mat-icon>favorite</mat-icon></a>\n        <a class=\"w3-col s4 l1\" routerLink=\"/login\" routerLinkActive=\"active\" ><mat-icon>person_pin</mat-icon> </a>\n    </span>\n    \n</div>\n <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/***/ (function(module, exports) {

module.exports = "main{\r\n    size:100%;\r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgb(74, 146, 206)),to(rgba(0, 0, 0, 0.863)));\r\n    background-image: linear-gradient(rgb(74, 146, 206),rgba(0, 0, 0, 0.863));\r\n}"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"main\">\n    Hi\n  </div>\n  <div class=\"controls\">\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/ptree-sign/ptree-sign.component.css":
/***/ (function(module, exports) {

module.exports = "input {\r\n    width:200px;\r\n}\r\n.btnSubmit{\r\n    background-color: rgba(189, 238, 56, 0.856);\r\n}"

/***/ }),

/***/ "./src/app/ptree-sign/ptree-sign.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"form-group\" style=\"padding:32px;\">\n  <form [formGroup]=\"signup\" (submit)=\"onsubmit()\" >\n      <mat-form-field>\n        <input matInput formControlName=\"name\" placeholder=\"Name\" type=\"text\" class=\"forms-control\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n          <input matInput formControlName=\"uname\" placeholder=\"Your Unique Username\" type=\"text\" class=\"forms-control\">\n      </mat-form-field>\n        <br/>\n      <mat-form-field>\n        <input matInput formControlName=\"email\" placeholder=\"Email ID\" type=\"email\" class=\"forms-control\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput formControlName=\"passwd\" placeholder=\"Password\" type=\"password\" class=\"forms-control\">\n      </mat-form-field>\n      <br/>\n      <button class=\"btnSubmit\"  mat-raised-button type=\"submit\">Save</button> \n      <input type=\"reset\" class=\" btn btn-danger \">\n  </form>\n</mat-card>\n<table border=\"1\">\n  <tr *ngFor=\"let j of array1\">\n    <td>{{j.name}}</td>\n    <td>{{j.id}}</td>\n    <td>{{j.groups}}</td>\n    <td>{{j.status}}</td>\n  </tr>\n</table>\n<img src=\"https://papertree.herokuapp.com/paper/static/\"/>\n\n\n"

/***/ }),

/***/ "./src/app/ptree-sign/ptree-sign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PtreeSignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("./src/app/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PtreeSignComponent = /** @class */ (function () {
    function PtreeSignComponent(fb, http, accService) {
        this.fb = fb;
        this.http = http;
        this.accService = accService;
        this.gm = 'ayush';
        this.sgnup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.signup = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            uname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(5)],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            passwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(8)],
        });
        this.signin = this.fb.group({
            uname: [''],
            passwd: ['']
        });
    }
    PtreeSignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accService.accounts().subscribe(function (data) { return _this.array1 = data; });
    };
    PtreeSignComponent.prototype.onsubmit = function () {
        console.log(this.signup.status);
    };
    PtreeSignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-ptree-sign',
            template: __webpack_require__("./src/app/ptree-sign/ptree-sign.component.html"),
            styles: [__webpack_require__("./src/app/ptree-sign/ptree-sign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]])
    ], PtreeSignComponent);
    return PtreeSignComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map