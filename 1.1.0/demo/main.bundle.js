webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "<demo></demo>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/children/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



var CloukitTooltipComponent = (function () {
    function CloukitTooltipComponent(themeService) {
        this.themeService = themeService;
        this.state = {
            uiModifier: 'base',
            uiState: 'init',
            tooltipTransform: '',
        };
        this.themeSelected = this.themeService.getComponentTheme('tooltip');
    }
    CloukitTooltipComponent.prototype.getStyle = function (element) {
        if (this.themeSelected !== undefined && this.themeSelected !== null) {
            var style = this.themeSelected.getStyle(element, this.state.uiState, this.state.uiModifier);
            if (element === 'tooltip') {
                style.style['transform'] = this.state.tooltipTransform;
            }
            if (element === 'wrapper') {
                style.style[this.wrapperMargin] = this.state.uiState === 'ready' ? '5px' : '0px';
            }
            return this.themeService.prefixStyle(style);
        }
        return { style: {}, icon: {} };
    };
    CloukitTooltipComponent.prototype.ngOnInit = function () {
        var self = this;
        if (this.cloukitDropoutPlacement === __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].DOWN_CENTER || this.cloukitDropoutPlacement === __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].UP_CENTER) {
            this.state.tooltipTransform = 'translate(-50%, 0)';
        }
        if (this.cloukitDropoutPlacement === __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].LEFT_CENTER || this.cloukitDropoutPlacement === __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].RIGHT_CENTER) {
            this.state.tooltipTransform = 'translate(0, -50%)';
        }
        if (this.theme !== undefined && this.theme !== null) {
            this.themeSelected = this.themeService.getComponentTheme(this.theme);
            if (this.themeSelected === null) {
                console.log("WARN: requested theme " + this.theme + " does not exist. Falling back to default theme for tooltip.");
                this.themeSelected = this.themeService.getComponentTheme('tooltip');
            }
        }
        // Transition to ready state once component is created
        setTimeout(function () {
            self.state.uiState = 'ready';
        }, 10);
    };
    return CloukitTooltipComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitTooltipComponent.prototype, "tooltipText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('tooltip'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]) === "function" && _a || Object)
], CloukitTooltipComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitTooltipPlacement'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */]) === "function" && _b || Object)
], CloukitTooltipComponent.prototype, "cloukitDropoutPlacement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitTooltipComponent.prototype, "wrapperMargin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitTooltipComponent.prototype, "theme", void 0);
CloukitTooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-tooltip',
        template: "\n  <ng-template #tooltip>\n    <div [ngStyle]=\"getStyle('wrapper').style\">\n      <div [ngStyle]=\"getStyle('tooltip').style\">\n        {{tooltipText}}\n      </div>\n    </div>\n  </ng-template>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _c || Object])
], CloukitTooltipComponent);

var _a, _b, _c;
//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/components/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__children_tooltip_component__ = __webpack_require__("../../../../../src/components/children/tooltip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */



var CloukitTooltipDirective = (function () {
    function CloukitTooltipDirective(dropoutService, viewContainerRef, componentFactoryResolver) {
        this.dropoutService = dropoutService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    CloukitTooltipDirective.prototype._doActivate = function () {
        //
        // PLACEMENT
        //
        var placement;
        var wrapperMargin;
        if (this.cloukitDropoutPlacement === undefined || this.cloukitDropoutPlacement === 'bottom') {
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].DOWN_CENTER;
            wrapperMargin = 'marginTop';
        }
        else if (this.cloukitDropoutPlacement === 'top') {
            wrapperMargin = 'marginBottom';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].UP_CENTER;
        }
        else if (this.cloukitDropoutPlacement === 'left') {
            wrapperMargin = 'marginRight';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].LEFT_CENTER;
        }
        else if (this.cloukitDropoutPlacement === 'right') {
            wrapperMargin = 'marginLeft';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutPlacement */].RIGHT_CENTER;
        }
        //
        // TOOLTIP
        //
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__children_tooltip_component__["a" /* CloukitTooltipComponent */]);
        var tooltipRef = this.viewContainerRef.createComponent(componentFactory);
        tooltipRef.instance.tooltipText = this.cloukitDropout;
        tooltipRef.instance.cloukitDropoutPlacement = placement;
        tooltipRef.instance.wrapperMargin = wrapperMargin;
        //
        // REQUEST
        //
        var request = new __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["b" /* DropoutComponentCreationRequest */]();
        request.triggerElement = this.viewContainerRef.element.nativeElement;
        request.template = tooltipRef.instance.tooltipTemplate;
        request.placement = placement;
        this.dropoutRef = this.dropoutService.requestDropoutCreation(request);
    };
    CloukitTooltipDirective.prototype._doDeactivate = function () {
        this.dropoutService.destroyComponent(this.dropoutRef);
        this.dropoutRef = undefined;
    };
    CloukitTooltipDirective.prototype.activate = function () {
        this._doActivate();
    };
    CloukitTooltipDirective.prototype.deactivate = function () {
        this._doDeactivate();
    };
    return CloukitTooltipDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitTooltip'),
    __metadata("design:type", String)
], CloukitTooltipDirective.prototype, "cloukitDropout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cloukitTooltipPlacement'),
    __metadata("design:type", String)
], CloukitTooltipDirective.prototype, "cloukitDropoutPlacement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focusin'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloukitTooltipDirective.prototype, "activate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focusout'),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloukitTooltipDirective.prototype, "deactivate", null);
CloukitTooltipDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[cloukitTooltip]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], CloukitTooltipDirective);

var _a, _b, _c;
//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ "../../../../../src/components/tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("../../../../../src/components/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__ = __webpack_require__("../../../../../src/components/children/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tooltip_theme__ = __webpack_require__("../../../../../src/components/tooltip.theme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitTooltipModule = (function () {
    function CloukitTooltipModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('tooltip') === null) {
            this.themeService.registerComponentTheme('tooltip', new __WEBPACK_IMPORTED_MODULE_5__tooltip_theme__["a" /* CloukitTooltipComponentThemeDefault */]());
        }
    }
    return CloukitTooltipModule;
}());
CloukitTooltipModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* CloukitTooltipDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* CloukitTooltipDirective */], __WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__["a" /* CloukitTooltipComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__["a" /* CloukitTooltipComponent */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]) === "function" && _a || Object])
], CloukitTooltipModule);

var _a;
//# sourceMappingURL=tooltip.module.js.map

/***/ }),

/***/ "../../../../../src/components/tooltip.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipComponentThemeDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * The default theme
 */
var CloukitTooltipComponentThemeDefault = (function (_super) {
    __extends(CloukitTooltipComponentThemeDefault, _super);
    function CloukitTooltipComponentThemeDefault() {
        var _this = _super.call(this) || this;
        //
        // NOTE: A margin-* of 5px will be added for wrapper.ready.base on component creation.
        //       this cannot be overridden by the theme! Since the placement influences top/bottom/left/right
        //
        _this.createStyle('wrapper', 'init', 'base', {
            style: {
                transition: "\n          margin-left 200ms linear, \n          margin-right 200ms linear, \n          margin-bottom 200ms linear, \n          margin-top 200ms linear, \n          opacity 200ms ease-in-out",
                opacity: 0,
            }
        });
        _this.createStyle('wrapper', 'ready', 'base', _this.merge(_this.getStyle('wrapper', 'init', 'base'), {
            style: {
                opacity: 1,
            }
        }));
        _this.createStyle('tooltip', 'init', 'base', {
            style: {
                backgroundColor: '#333',
                padding: '4px',
                color: '#fff',
            }
        });
        _this.createStyle('tooltip', 'ready', 'base', _this.merge(_this.getStyle('tooltip', 'init', 'base'), {
            style: {}
        }));
        return _this;
    }
    return CloukitTooltipComponentThemeDefault;
}(__WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["a" /* CloukitComponentTheme */]));

//# sourceMappingURL=tooltip.theme.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<cloukit-dropout-outlet></cloukit-dropout-outlet>\n<div style=\"padding:60px;\">\n\n  <span class=\"label\">tooltip to the left:</span>\n  <span\n    class=\"tooltipTrigger\"\n    cloukitTooltip=\"delicious german sausage\"\n    cloukitTooltipPlacement=\"left\"\n  >Bratwurst</span>\n  <br><br>\n  <span class=\"label\">tooltip to the right:</span>\n  <span\n    class=\"tooltipTrigger\"\n    cloukitTooltip=\"delicious german sausage\"\n    cloukitTooltipPlacement=\"right\"\n  >Bratwurst</span>\n  <br><br>\n  <span class=\"label\">tooltip to the top:</span>\n  <span\n    class=\"tooltipTrigger\"\n    cloukitTooltip=\"delicious german sausage\"\n    cloukitTooltipPlacement=\"top\"\n  >Bratwurst</span>\n  <br><br>\n  <span class=\"label\">tooltip to the bottom:</span>\n  <span\n    class=\"tooltipTrigger\"\n    cloukitTooltip=\"delicious german sausage\"\n    cloukitTooltipPlacement=\"bottom\"\n  >Bratwurst</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/demo/demo.component.html"),
        styles: [
            '.tooltipTrigger { color:#710ECC; cursor: help; }',
            '.label { display:inline-block; width:250px; }',
        ],
    })
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__ = __webpack_require__("../../../../@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["b" /* CloukitThemeModule */],
            __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CloukitTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__["a" /* CloukitDropoutModule */],
        ],
        providers: [],
        bootstrap: []
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tooltip_module__ = __webpack_require__("../../../../../src/components/tooltip.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_tooltip_module__["a"]; });

//# sourceMappingURL=index.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map