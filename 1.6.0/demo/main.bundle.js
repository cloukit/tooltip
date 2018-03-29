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
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/children/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__ = __webpack_require__("./node_modules/@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
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



var CloukitTooltipComponent = /** @class */ (function () {
    function CloukitTooltipComponent(themeService) {
        this.themeService = themeService;
        this.state = {
            wrapper: {
                uiModifier: 'base',
                uiState: 'init',
            },
            tooltip: {
                uiModifier: 'base',
                uiState: 'init',
            }
        };
        this.themeSelected = this.themeService.getComponentTheme('tooltip');
    }
    CloukitTooltipComponent.prototype.getStyle = function (element) {
        if (this.themeSelected !== undefined && this.themeSelected !== null) {
            var style = this.themeSelected.getStyle(element, this.state[element].uiState, this.state[element].uiModifier);
            return this.themeService.prefixStyle(style);
        }
        return { style: {}, icon: {} };
    };
    CloukitTooltipComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        if (this.theme !== undefined && this.theme !== null) {
            this.themeSelected = this.themeService.getComponentTheme(this.theme);
            if (this.themeSelected === null) {
                console.log("WARN: requested theme " + this.theme + " does not exist. Falling back to default theme for tooltip.");
                this.themeSelected = this.themeService.getComponentTheme('tooltip');
            }
        }
        // Transition to ready state slightly after component is created
        setTimeout(function () {
            self.state.tooltip.uiState = 'ready';
            self.state.wrapper.uiState = 'ready';
            self.state.wrapper.uiModifier = _this.wrapperReadyModifier;
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitTooltipComponent.prototype, "tooltipText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('tooltip'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* TemplateRef */])
    ], CloukitTooltipComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitTooltipPlacement'),
        __metadata("design:type", Number)
    ], CloukitTooltipComponent.prototype, "cloukitDropoutPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitTooltipComponent.prototype, "wrapperReadyModifier", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitTooltipComponent.prototype, "theme", void 0);
    CloukitTooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-tooltip',
            template: "\n  <ng-template #tooltip>\n    <div [ngStyle]=\"getStyle('wrapper').style\">\n      <div [ngStyle]=\"getStyle('tooltip').style\">\n        {{tooltipText}}\n      </div>\n    </div>\n  </ng-template>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitTooltipComponent);
    return CloukitTooltipComponent;
}());



/***/ }),

/***/ "./src/components/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__ = __webpack_require__("./node_modules/@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__children_tooltip_component__ = __webpack_require__("./src/components/children/tooltip.component.ts");
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



var CloukitTooltipDirective = /** @class */ (function () {
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
        var wrapperReadyModifier;
        if (this.cloukitDropoutPlacement === undefined || this.cloukitDropoutPlacement === 'bottom') {
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutPlacement */].DOWN_CENTER;
            wrapperReadyModifier = 'down';
        }
        else if (this.cloukitDropoutPlacement === 'top') {
            wrapperReadyModifier = 'up';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutPlacement */].UP_CENTER;
        }
        else if (this.cloukitDropoutPlacement === 'left') {
            wrapperReadyModifier = 'left';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutPlacement */].LEFT_CENTER;
        }
        else if (this.cloukitDropoutPlacement === 'right') {
            wrapperReadyModifier = 'right';
            placement = __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["d" /* DropoutPlacement */].RIGHT_CENTER;
        }
        //
        // TOOLTIP
        //
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__children_tooltip_component__["a" /* CloukitTooltipComponent */]);
        var tooltipRef = this.viewContainerRef.createComponent(componentFactory);
        tooltipRef.instance.tooltipText = this.cloukitDropout;
        tooltipRef.instance.cloukitDropoutPlacement = placement;
        tooltipRef.instance.wrapperReadyModifier = wrapperReadyModifier;
        //
        // REQUEST
        //
        var request = new __WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["c" /* DropoutComponentCreationRequest */]();
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
    CloukitTooltipDirective.prototype.ngOnDestroy = function () {
        this._doDeactivate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitTooltip'),
        __metadata("design:type", String)
    ], CloukitTooltipDirective.prototype, "cloukitDropout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('cloukitTooltipPlacement'),
        __metadata("design:type", String)
    ], CloukitTooltipDirective.prototype, "cloukitDropoutPlacement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloukitTooltipDirective.prototype, "activate", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseleave'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CloukitTooltipDirective.prototype, "deactivate", null);
    CloukitTooltipDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[cloukitTooltip]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cloukit_dropout__["b" /* CloukitDropoutService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], CloukitTooltipDirective);
    return CloukitTooltipDirective;
}());



/***/ }),

/***/ "./src/components/tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__("./src/components/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__ = __webpack_require__("./src/components/children/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tooltip_theme__ = __webpack_require__("./src/components/tooltip.theme.ts");
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






var CloukitTooltipModule = /** @class */ (function () {
    function CloukitTooltipModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('tooltip') === null) {
            this.themeService.registerComponentTheme('tooltip', new __WEBPACK_IMPORTED_MODULE_5__tooltip_theme__["a" /* CloukitTooltipComponentThemeDefault */]());
        }
    }
    CloukitTooltipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* CloukitTooltipDirective */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* CloukitTooltipDirective */], __WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__["a" /* CloukitTooltipComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__children_tooltip_component__["a" /* CloukitTooltipComponent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["c" /* CloukitThemeService */]])
    ], CloukitTooltipModule);
    return CloukitTooltipModule;
}());



/***/ }),

/***/ "./src/components/tooltip.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitTooltipComponentThemeDefault; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
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
var CloukitTooltipComponentThemeDefault = /** @class */ (function (_super) {
    __extends(CloukitTooltipComponentThemeDefault, _super);
    function CloukitTooltipComponentThemeDefault() {
        var _this = _super.call(this) || this;
        //
        // WRAPPER
        //
        _this.createStyle('wrapper', 'init', 'base', {
            style: {
                transition: "\n          margin-left 300ms linear,\n          margin-right 300ms linear,\n          margin-top 300ms linear,\n          margin-bottom 300ms linear,\n          opacity 300ms ease-in-out",
                opacity: 0,
            }
        });
        _this.createStyle('wrapper', 'ready', 'left', _this.merge(_this.getStyle('wrapper', 'init', 'base'), {
            style: {
                marginRight: '5px',
                transform: 'translate(0, -50%)',
                opacity: 1,
            }
        }));
        _this.createStyle('wrapper', 'ready', 'right', _this.merge(_this.getStyle('wrapper', 'init', 'base'), {
            style: {
                marginLeft: '5px',
                transform: 'translate(0, -50%)',
                opacity: 1,
            }
        }));
        _this.createStyle('wrapper', 'ready', 'up', _this.merge(_this.getStyle('wrapper', 'init', 'base'), {
            style: {
                marginBottom: '5px',
                transform: 'translate(-50%, 0)',
                opacity: 1,
            }
        }));
        _this.createStyle('wrapper', 'ready', 'down', _this.merge(_this.getStyle('wrapper', 'init', 'base'), {
            style: {
                marginTop: '5px',
                transform: 'translate(-50%, 0)',
                opacity: 1,
            }
        }));
        //
        // TOOLTIP
        //
        _this.createStyle('tooltip', 'init', 'base', {
            style: {
                backgroundColor: '#333',
                padding: '5px 8px 5px 8px',
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



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<cloukit-dropout-outlet></cloukit-dropout-outlet>\n<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Tooltip Directions\" story=\"story-00-tooltip-directions\">\n    <story-00-tooltip-directions></story-00-tooltip-directions>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Tooltip Trigger Element Destroyed\" story=\"story-01-trigger-element-destroyed\">\n    <story-01-trigger-element-destroyed></story-01-trigger-element-destroyed>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [
        '.tooltipTrigger { color:#710ECC; cursor: help; }',
        '.label { display:inline-block; width:250px; }',
        '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
        '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
        '.superButtonSecondary { border-color: rgb(164, 227, 254); background-color:rgb(164, 227, 254); }',
        '.superButtonSecondary:hover { border-color:rgb(164, 227, 254); background-color:#fff; color:rgb(164, 227, 254);  }',
        '.superButton:disabled, .superButtonSecondary:disabled { border-color:#777; background-color:#777; color:#fff; cursor:not-allowed;  }',
    ];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: [],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__ = __webpack_require__("./node_modules/@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_demo_stories_story_00_tooltip_directions__ = __webpack_require__("./src/demo/stories/story-00-tooltip-directions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_01_trigger_element_destroyed__ = __webpack_require__("./src/demo/stories/story-01-trigger-element-destroyed.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_7_demo_stories_story_00_tooltip_directions__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_01_trigger_element_destroyed__["a" /* Story01Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["b" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__cloukit_dropout__["a" /* CloukitDropoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* CloukitTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-tooltip-directions.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"label\">tooltip to the left:</span>\n<span\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"left\"\n>Bratwurst</span>\n<br><br>\n<span class=\"label\">tooltip to the right:</span>\n<span\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"right\"\n>Bratwurst</span>\n<br><br>\n<span class=\"label\">tooltip to the top:</span>\n<span\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"top\"\n>Bratwurst</span>\n<br><br>\n<span class=\"label\">tooltip to the bottom:</span>\n<span\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"bottom\"\n>Bratwurst</span>\n<br><br>\n<span class=\"label\">tooltip on a button:</span>\n<button\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"bottom\"\n>Bratwurst</button>\n<br><br>\n<span class=\"label\">tooltip on a buton with click action:</span>\n<a\n  href=\"#\"\n  class=\"tooltipTrigger\"\n  cloukitTooltip=\"delicious german sausage\"\n  cloukitTooltipPlacement=\"bottom\"\n  (click)=\"counter=counter+1\"\n>Bratwurst {{counter}}</a>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-tooltip-directions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story00Component = /** @class */ (function () {
    function Story00Component() {
        this.counter = 0;
    }
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-tooltip-directions',
            template: __webpack_require__("./src/demo/stories/story-00-tooltip-directions.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-01-trigger-element-destroyed.html":
/***/ (function(module, exports) {

module.exports = "<p>Click remove last item in 2sec, hover the last item and wait. The Tooltip should disappear once the item is removed.</p>\n<div style=\"padding:10px 0 10px 0;\">\n  <button\n    class=\"superButton\"\n    type=\"button\"\n    [disabled]=\"items.length === 0\"\n    (click)=\"removeLastItem()\"\n  >remove last item in 2sec</button>\n  <button\n    class=\"superButtonSecondary\"\n    type=\"button\"\n    (click)=\"resetItems()\"\n  >reset items</button>\n</div>\n<div *ngFor=\"let item of items\" class=\"item\">\n  <span class=\"tooltipTrigger\" cloukitTooltip=\"foobar\" cloukitTooltipPlacement=\"right\">{{item}}</span>\n</div>\n\n"

/***/ }),

/***/ "./src/demo/stories/story-01-trigger-element-destroyed.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Story01Component = /** @class */ (function () {
    function Story01Component() {
        this.allItems = ['chocolate', 'chips', 'Reese\'s Pieces', 'M&M\'s'];
        this.items = [].concat(this.allItems);
    }
    Story01Component.prototype.removeLastItem = function () {
        var self = this;
        setTimeout(function () {
            self.items.pop();
        }, 2000);
    };
    Story01Component.prototype.resetItems = function () {
        this.items = [].concat(this.allItems);
    };
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-trigger-element-destroyed',
            template: __webpack_require__("./src/demo/stories/story-01-trigger-element-destroyed.html"),
            styles: [
                '.item { padding:10px 20px 10px 20px; border:1px solid rgb(164, 227, 254); }',
            ].concat(__WEBPACK_IMPORTED_MODULE_1__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story01Component);
    return Story01Component;
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

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tooltip_module__ = __webpack_require__("./src/components/tooltip.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_tooltip_module__["a"]; });



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map