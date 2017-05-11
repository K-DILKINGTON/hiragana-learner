webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 136;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(216),
        styles: [__webpack_require__(207)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_answer_input_answer_input_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dictionary_dictionary_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_services_get_word_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_custom_input_custom_input_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_autofocus_directive__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_hiragana_game_hiragana_game_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_hint_hint_component__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_answer_input_answer_input_component__["a" /* AnswerInputComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dictionary_dictionary_component__["a" /* DictionaryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_custom_input_custom_input_component__["a" /* CustomInputComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_autofocus_directive__["a" /* AutofocusDirective */],
            __WEBPACK_IMPORTED_MODULE_13__components_hiragana_game_hiragana_game_component__["a" /* HiraganaGameComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_hint_hint_component__["a" /* HintComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10_app_services_get_word_service__["a" /* GetWordService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_components_hiragana_game_hiragana_game_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_home_home_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1_app_components_home_home_component__["a" /* HomeComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_0_app_components_hiragana_game_hiragana_game_component__["a" /* HiraganaGameComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerInputComponent = (function () {
    function AnswerInputComponent(getWordService) {
        this.getWordService = getWordService;
    }
    AnswerInputComponent.prototype.ngOnInit = function () {
        var that = this;
        this.answer = [];
        this.subscription = this.getWordService.getChangedWordEmitter()
            .subscribe(function () {
            that.word = that.getWordService.getCurrentWord();
            that.hiragana = that.word.hiragana;
            that.romanjiArr = that.word.romanjiArr;
            that.focusOnFirst();
        });
    };
    AnswerInputComponent.prototype.focusOnFirst = function () {
        $("#answer-input_1").focus();
    };
    AnswerInputComponent.prototype.onKeyUp = function (string, char, index) {
        var _this = this;
        if (string === char.value) {
            $("#" + char.id).css("background", "lightgreen");
            $("#answer-input_" + (index + 2).toString()).focus();
            this.answer[index] = string;
            if (this.answer.join("") === this.word.romanji) {
                this.answer = [];
                this.getWordService.getWord()
                    .then(function (c) { return _this.getWordService.emitChangeWordEvent("come on an shlam"); });
            }
        }
    };
    AnswerInputComponent.prototype.shouldFocusFirst = function (index) {
        return this.answer.length < 1 && index == 1;
    };
    AnswerInputComponent.prototype.ngAfterViewChecked = function () {
        if (this.shouldFocusFirst(1)) {
            $("#answer-input_1").focus();
        }
    };
    AnswerInputComponent.prototype.debugger = function () {
    };
    return AnswerInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])('input'),
    __metadata("design:type", Object)
], AnswerInputComponent.prototype, "vc", void 0);
AnswerInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'answer-input',
        template: __webpack_require__(217),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */]) === "function" && _a || Object])
], AnswerInputComponent);

var _a;
//# sourceMappingURL=answer-input.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomInputComponent = (function () {
    function CustomInputComponent() {
    }
    CustomInputComponent.prototype.ngOnInit = function () {
    };
    return CustomInputComponent;
}());
CustomInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-custom-input',
        template: __webpack_require__(218),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], CustomInputComponent);

//# sourceMappingURL=custom-input.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DictionaryComponent = (function () {
    function DictionaryComponent(getWordService) {
        this.getWordService = getWordService;
    }
    DictionaryComponent.prototype.emitServiceEvent = function () {
        this.getWordService.emitChangeWordEvent("slap");
    };
    DictionaryComponent.prototype.startGame = function () {
        var that = this;
        this.subscription = this.getWordService.getChangedWordEmitter()
            .subscribe(function () {
            that.word = that.getWordService.getCurrentWord();
            that.joinWord(that.word.hiragana);
        });
        this.getWordService.getWord().then(function () {
            that.word = that.getWordService.getCurrentWord();
            that.emitServiceEvent();
        }).then(function (c) {
            that.joinWord(that.word.hiragana);
        });
    };
    DictionaryComponent.prototype.joinWord = function (array) {
        var tarry = [];
        array.map(function (c) {
            tarry.push(c.value);
        });
        this.joinedWord = tarry.join("");
    };
    DictionaryComponent.prototype.ngOnInit = function () {
        this.startGame();
    };
    return DictionaryComponent;
}());
DictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'dictionary',
        template: __webpack_require__(219),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */]) === "function" && _a || Object])
], DictionaryComponent);

var _a;
//# sourceMappingURL=dictionary.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HintComponent = (function () {
    function HintComponent(getWordService) {
        this.getWordService = getWordService;
    }
    HintComponent.prototype.ngOnInit = function () {
        var that = this;
        this.getWordService.getChangedWordEmitter()
            .subscribe(function (c) {
            that.word = that.getWordService.getCurrentWord();
            that.hiragana = that.word.hiragana;
            that.romanjiArr = that.word.romanjiArr;
            that.populatHintsVis();
        });
    };
    HintComponent.prototype.populatHintsVis = function () {
        this.hintsvisibility = [];
        for (var x = 0; x < this.romanjiArr.length; x++) {
            this.hintsvisibility.push(false);
        }
    };
    HintComponent.prototype.visible = function (index) {
        return this.hintsvisibility[index];
    };
    HintComponent.prototype.makeVisible = function (index) {
        this.hintsvisibility[index] = true;
    };
    return HintComponent;
}());
HintComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'hint',
        template: __webpack_require__(220),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_get_word_service__["a" /* GetWordService */]) === "function" && _a || Object])
], HintComponent);

var _a;
//# sourceMappingURL=hint.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__(223),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ;
    AutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    return AutofocusDirective;
}());
AutofocusDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[myAutofocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], AutofocusDirective);

var _a;
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "html, body {\r\n   height: 100%;\r\n   width: 100%;\r\n   margin: 0;\r\n   padding: 0;\r\n   background:beige;\r\n}\r\n@font-face {\r\n\tfont-family: 'Lane'; \r\n\tsrc: url('/assets/fonts/LANENAR_.ttf'); \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n\r\n\r\n.input-wrapper{\r\n    \r\n    margin-left: 2rem;\r\n    margin-right: 2rem;\r\n    margin-top:2rem;\r\n    background: #e8e8d0;\r\n    border-radius: 15px;\r\n    padding: 1rem;\r\n    padding-top: 1rem;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\nh1{\r\n    margin-left: 1.8rem;\r\n    font-family: 'Lane';\r\n    font-weight: 100;\r\n    margin-bottom: .5rem;\r\n    margin-top:0rem;\r\n}\r\n\r\n.input-wrapper>h1{\r\n    margin-left:0rem;\r\n}\r\n\r\nform>div{\r\n    display: inline-block;\r\n}\r\ninput{\r\n    height: 3.1rem;\r\n    width: 3.3rem;\r\n    background-color: white;\r\n    margin-left: 5px;\r\n    font-size:50px;\r\n    font-family:'Lane';\r\n    display:inline-block;\r\n    border:none;\r\n}\r\n\r\n.answer-input{\r\n    width:45%;\r\n    display:inline-block;\r\n   /* border:10px solid black;*/\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.dictionary{\r\n    height:400px;\r\n    width:45%;\r\n    display:inline-block;\r\n    border-left:6px solid #808080;\r\n    vertical-align: top;\r\n}\r\n\r\n.dictionary-inner{\r\n    position:relative;\r\n    top:60px;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n    border-bottom:solid 2px gray;\r\n}\r\n\r\n.dictionary-definition{\r\n    position:relative;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n    font-family:'Lane';\r\n    top:70px;\r\n    font-size:21px;\r\n    \r\n}\r\n.jumbo-word{\r\n    font-size:40px;\r\n    position:relative;\r\n    width:80%;\r\n    font-weight: 100;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host{\r\n    display:block;\r\n    margin-top:1rem;\r\n    \r\n}\r\n\r\n.hint-block{\r\n    height:100%;\r\n    display: inline-block;\r\n    border-left:1px solid black;\r\n    font-size:50px;\r\n    background-color:white;\r\n    padding-left:5px;\r\n    padding-right:5px;\r\n    margin-left:5px;\r\n    position:relative;\r\n    cursor:pointer;\r\n\r\n}\r\n\r\n.answer-overlay{\r\n    background:white;\r\n    display:block;\r\n    position:absolute;\r\n    width:inherit;\r\n    height:inherit;\r\n    vertical-align: top;\r\n    top:0;\r\n    width:80%;\r\n    height:80%;\r\n    font-family:'Lane';\r\n}\r\n\r\n.hint-container>div{\r\n    display:inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host{\r\n    background-image: url(\"/assets/images/Japanese-Transparent-Background.png\");\r\n    width:100%;\r\n    height:100%;\r\n    display:block;\r\n    background-size:cover;\r\n    background-position: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host{\r\n    background-image: url(\"/assets/images/Japanese-Transparent-Background.png\");\r\n    width:100%;\r\n    height:100%;\r\n    display:block;\r\n    background-size:cover;\r\n    background-position: center;\r\n}\r\n\r\n.welcome-blurb{\r\n    display:block;\r\n    width:50%;\r\n    background:#e8e8d0;\r\n    font-family:'Lane';\r\n    padding:1rem;\r\n    border-radius:30px;\r\n    margin:1rem;\r\n}\r\n\r\nbutton{\r\n    border:none;\r\n    background:#EC3923;\r\n    width:6rem;\r\n    height:3rem;\r\n    font-size:1.5rem;\r\n    border-radius:10px;\r\n    cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "\r\n@font-face {\r\n\tfont-family: 'Lane'; \r\n\tsrc: url('/assets/fonts/LANENAR_.ttf'); \r\n}\r\n\r\n.site-logo{\r\n    font-family:'Lane';\r\n    float:left;\r\n    color:black;\r\n    font-size: 50px;\r\n    display:block;\r\n    cursor:pointer;\r\n\r\n}\r\n\r\n.site-header{\r\n    border-bottom:solid 5px gray;\r\n    display:block;\r\n    overflow:auto;\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<navbar>\r\n\r\n</navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<div class = \"answer-input\">\r\n<div class = \"input-wrapper\">\r\n  <h1>Type Answer:</h1>\r\n  <form #form=\"ngForm\">\r\n    <div  *ngFor = \"let char of romanjiArr;let i = index\">\r\n      <input id = \"{{'answer-input_' + (i+1).toString()}}\" (keyup) = \"onKeyUp(char.value,$event.target,i)\" ng-disabled=\"isComplete()\" name = char myAutoFocusspastic>\r\n    </div>\r\n\r\n  </form>\r\n  <h1>Clues:</h1>\r\n  <hint></hint>\r\n</div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<input #cust>"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div class = \"dictionary\">\r\n  <div class = \"dictionary-inner\">\r\n    <span class = \"jumbo-word\">{{joinedWord}}</span>\r\n  </div>\r\n  \r\n  <div style = \"position:relative;\r\n    margin-left:5%;\r\n    margin-right:5%;\r\n    font-family:'Lane';\r\n    top:70px;\r\n    font-size:21px;\r\n    color: black;\"><span >{{word&&word.definition}}</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class = \" hint-container\"  >\r\n  <div (click) = \"makeVisible(i)\" *ngFor = \"let char of romanjiArr;let i = index\" class = \"hint-block\">{{hiragana[i].value}}\r\n    <div *ngIf =\"visible(i)\" class = \"answer-overlay\">{{romanjiArr[i].value}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<answer-input></answer-input><dictionary></dictionary>\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class = \"welcome-blurb\">\r\n<h1>Welcome to KA-MI</h1>\r\n  <h2>The simple Hiragana trainer. Just click the button below to begin,\r\n    and start typing out the word you see on the right hand side. Don't know the answer?\r\n    No problem, simply click one of the hints to reveal portions of the answer until you're confident you've figured it out. </h2>\r\n<button [routerLink]=\"['./game']\" routerLinkActive=\"active\">BEGIN</button>\r\n</div>"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class = site-header>\r\n  <div [routerLink]=\"['./']\" routerLinkActive=\"active\" class = \"site-logo\">神 KA-MI</div>\r\n</div>"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetWordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetWordService = (function () {
    function GetWordService(http) {
        this.http = http;
        this.changeWordEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.hiraToRomanMap = {
            "a": "あ",
            "i": "い",
            "u": "う",
            "e": "え",
            "o": "お",
            "ka": "か",
            "ki": "き",
            "ku": "く",
            "ke": "け",
            "ko": "こ",
            "sa": "さ",
            "shi": "し",
            "su": "す",
            "se": "せ",
            "so": "そ",
            "ta": "た",
            "chi": "ち",
            "tsu": "つ",
            "te": "て",
            "to": "と",
            "na": "な",
            "ni": "に",
            "nu": "ぬ",
            "ne": "ね",
            "no": "の",
            "ha": "は",
            "hi": "ひ",
            "hu": "ふ",
            "he": "へ",
            "ho": "ほ",
            "ma": "ま",
            "mi": "み",
            "mu": "む",
            "me": "め",
            "mo": "も",
            "ya": "や",
            "yu": "ゆ",
            "yo": "よ",
            "ra": "ら",
            "ri": "り",
            "ru": "る",
            "re": "れ",
            "ro": "ろ",
            "wa": "わ",
            "wo": "を",
            "n": "ん",
            "ga": "が",
            "gi": "ぎ",
            "gu": "ぐ",
            "ge": "げ",
            "go": "ご",
            "za": "ざ",
            "ji": "じ",
            "zu": "す゛",
            "ze": "ぜ",
            "zo": "ぞ",
            "da": "だ",
            "di": "ぢ",
            "du": "ず",
            "de": "で",
            "do": "ど",
            "ba": "ば",
            "bi": "び",
            "bu": "ぶ",
            "be": "べ",
            "bo": "ぼ",
            "pa": "ぱ",
            "pi": "ぴ",
            "pu": "ぷ",
            "pe": "ぺ",
            "po": "ぽ",
            "kya": "きゃ",
            "kyu": "きゅ",
            "kyo": "きょ",
            "gya": "ぎゃ",
            "gyu": "ぎゅ",
            "gyo": "ぎょ",
            "sha": "しゃ",
            "shu": "しゅ",
            "sho": "しょ",
            "ja": "じゃ",
            "ju": "じゅ",
            "jo": "じょ",
            "cha": "ちゃ",
            "chu": "ちゅ",
            "cho": "ちょ",
            "nya": "にゃ",
            "nyu": "にゅ",
            "nyo": "にょ",
            "hya": "ひゃ",
            "hyu": "ひゅ",
            "hyo": "ひょ",
            "bya": "びゃ",
            "byu": "びゅ",
            "byo": "びょ",
            "pya": "ぴゃ",
            "pyu": "ぴゅ",
            "pyo": "ぴょ",
            "mya": "みゃ",
            "myu": "みゅ",
            "myo": "みょ"
        };
    }
    GetWordService.prototype.getWord = function () {
        var _this = this;
        return this.http.get('../api/wordatrandom')
            .map(function (res) {
            _this.currentWord = res.json();
            _this.convertToHiragana(_this.currentWord.romanji);
            return res.json();
        }).toPromise();
    };
    GetWordService.prototype.getChangedWordEmitter = function () {
        return this.changeWordEmitter;
    };
    GetWordService.prototype.emitChangeWordEvent = function (string) {
        this.changeWordEmitter.emit(string);
    };
    GetWordService.prototype.getCurrentWord = function () {
        return this.currentWord;
    };
    GetWordService.prototype.getWordLength = function () {
        return this.wordLength;
    };
    GetWordService.prototype.convertToHiragana = function (romanjiWord) {
        var charArray = romanjiWord.split("");
        var holdOver = "";
        var hiraganaArray = [];
        var length = 0;
        this.currentWord.hiragana = [];
        this.currentWord.romanjiArr = [];
        for (var x = 0; x < charArray.length; x++) {
            var temp = holdOver != "" ? holdOver + charArray[x] : charArray[x];
            var hiraChar = "";
            holdOver = holdOver + charArray[x];
            if ((temp != "n" && this.hiraToRomanMap[temp] != undefined) || this.isN(charArray, x)) {
                hiraChar = this.hiraToRomanMap[temp];
                holdOver = "";
            }
            if (holdOver === "") {
                hiraChar = hiraChar.replace(/\s+/g, '');
                this.currentWord.hiragana.push({ value: hiraChar });
                this.currentWord.romanjiArr.push({ value: temp });
                length++;
            }
        }
        this.wordLength = length;
        return hiraganaArray;
    };
    GetWordService.prototype.isN = function (charArray, index) {
        if (charArray[index] === "n") {
            if (index === charArray.length - 1) {
                return true;
            }
            else {
                return charArray[index + 1] != ("a" || "i" || "u" || "e" || "o");
            }
        }
    };
    return GetWordService;
}());
GetWordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetWordService);

var _a;
//# sourceMappingURL=get-word.service.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiraganaGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiraganaGameComponent = (function () {
    function HiraganaGameComponent() {
    }
    HiraganaGameComponent.prototype.ngOnInit = function () {
    };
    return HiraganaGameComponent;
}());
HiraganaGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'hiragana-game',
        template: __webpack_require__(221),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], HiraganaGameComponent);

//# sourceMappingURL=hiragana-game.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(222),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

},[493]);
//# sourceMappingURL=main.bundle.js.map