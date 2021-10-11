(self["webpackChunkapple_angular"] = self["webpackChunkapple_angular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _modules_core_Mac_mac_home_container_mac_home_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core/Mac/mac-home-container/mac-home-container.component */ 9385);


class AppComponent {
    constructor() {
        this.title = 'apple-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mac-home-container");
    } }, directives: [_modules_core_Mac_mac_home_container_mac_home_container_component__WEBPACK_IMPORTED_MODULE_0__.MacHomeContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_core_Mac_mac_home_container_mac_home_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/core/Mac/mac-home-container/mac-home-container.component */ 9385);
/* harmony import */ var _shared_components_header_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/header/header-navbar/header-navbar.component */ 8719);
/* harmony import */ var _shared_components_header_header_device_header_device_header_device_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header-device/header-device/header-device.component */ 626);
/* harmony import */ var _shared_components_header_header_device_single_device_header_single_device_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/header/header-device/single-device-header/single-device-header.component */ 5053);
/* harmony import */ var _modules_core_Mac_mac_main_container_mac_main_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/core/Mac/mac-main-container/mac-main-container.component */ 8125);
/* harmony import */ var _shared_components_main_full_size_card_full_size_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/main/full-size-card/full-size-card.component */ 6759);
/* harmony import */ var _shared_components_main_product_specs_table_product_specs_table_product_specs_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/main/product-specs-table/product-specs-table/product-specs-table.component */ 405);
/* harmony import */ var _shared_components_main_product_specs_table_product_single_specs_product_single_specs_product_single_specs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/main/product-specs-table/product-single-specs/product-single-specs/product-single-specs.component */ 9347);
/* harmony import */ var _shared_components_main_product_specs_table_product_single_specs_upper_single_specs_upper_single_specs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/main/product-specs-table/product-single-specs/upper-single-specs/upper-single-specs.component */ 6068);
/* harmony import */ var _shared_components_main_product_specs_table_product_single_specs_lower_single_specs_lower_single_specs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/main/product-specs-table/product-single-specs/lower-single-specs/lower-single-specs.component */ 1542);
/* harmony import */ var _shared_components_footer_footer_container_footer_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/footer/footer-container/footer-container.component */ 759);
/* harmony import */ var _shared_components_footer_footer_notes_footer_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/footer/footer-notes/footer-notes.component */ 9900);
/* harmony import */ var _shared_components_footer_footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/footer/footer-nav/footer-nav.component */ 7698);
/* harmony import */ var _shared_components_footer_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/footer/copyright/copyright.component */ 5193);
/* harmony import */ var _shared_components_footer_footer_nav_links_footer_nav_links_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/footer/footer-nav-links/footer-nav-links.component */ 9280);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _shared_components_header_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/header/header-container/header-container.component */ 3281);
/* harmony import */ var _shared_components_header_discount_device_discount_device_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/header/discount-device/discount-device.component */ 1774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _modules_core_Mac_mac_home_container_mac_home_container_component__WEBPACK_IMPORTED_MODULE_2__.MacHomeContainerComponent,
        _shared_components_header_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_3__.HeaderNavbarComponent,
        _shared_components_header_header_device_header_device_header_device_component__WEBPACK_IMPORTED_MODULE_4__.HeaderDeviceComponent,
        _shared_components_header_header_device_single_device_header_single_device_header_component__WEBPACK_IMPORTED_MODULE_5__.SingleDeviceHeaderComponent,
        _modules_core_Mac_mac_main_container_mac_main_container_component__WEBPACK_IMPORTED_MODULE_6__.MacMainContainerComponent,
        _shared_components_main_full_size_card_full_size_card_component__WEBPACK_IMPORTED_MODULE_7__.FullSizeCardComponent,
        _shared_components_main_product_specs_table_product_specs_table_product_specs_table_component__WEBPACK_IMPORTED_MODULE_8__.ProductSpecsTableComponent,
        _shared_components_main_product_specs_table_product_single_specs_product_single_specs_product_single_specs_component__WEBPACK_IMPORTED_MODULE_9__.ProductSingleSpecsComponent,
        _shared_components_main_product_specs_table_product_single_specs_upper_single_specs_upper_single_specs_component__WEBPACK_IMPORTED_MODULE_10__.UpperSingleSpecsComponent,
        _shared_components_main_product_specs_table_product_single_specs_lower_single_specs_lower_single_specs_component__WEBPACK_IMPORTED_MODULE_11__.LowerSingleSpecsComponent,
        _shared_components_footer_footer_container_footer_container_component__WEBPACK_IMPORTED_MODULE_12__.FooterContainerComponent,
        _shared_components_footer_footer_notes_footer_notes_component__WEBPACK_IMPORTED_MODULE_13__.FooterNotesComponent,
        _shared_components_footer_footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_14__.FooterNavComponent,
        _shared_components_footer_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_15__.CopyrightComponent,
        _shared_components_footer_footer_nav_links_footer_nav_links_component__WEBPACK_IMPORTED_MODULE_16__.FooterNavLinksComponent,
        _shared_components_header_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_17__.HeaderContainerComponent,
        _shared_components_header_discount_device_discount_device_component__WEBPACK_IMPORTED_MODULE_18__.DiscountDeviceComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule] }); })();


/***/ }),

/***/ 9385:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/Mac/mac-home-container/mac-home-container.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacHomeContainerComponent": () => (/* binding */ MacHomeContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_header_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/header/header-container/header-container.component */ 3281);
/* harmony import */ var _mac_main_container_mac_main_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mac-main-container/mac-main-container.component */ 8125);
/* harmony import */ var _shared_components_footer_footer_container_footer_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/footer/footer-container/footer-container.component */ 759);




class MacHomeContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MacHomeContainerComponent.ɵfac = function MacHomeContainerComponent_Factory(t) { return new (t || MacHomeContainerComponent)(); };
MacHomeContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MacHomeContainerComponent, selectors: [["app-mac-home-container"]], decls: 3, vars: 3, consts: [[3, "discount", "discountText", "url"]], template: function MacHomeContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-mac-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer-container");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("discount", true)("discountText", "Risparmia su un Mac per l\u2019universit\u00E0 con i prezzi Education. Avrai gli AirPods.* L\u2019offerta termina l\u201911/10")("url", "https://www.apple.com/it-edu/shop/back-to-school");
    } }, directives: [_shared_components_header_header_container_header_container_component__WEBPACK_IMPORTED_MODULE_0__.HeaderContainerComponent, _mac_main_container_mac_main_container_component__WEBPACK_IMPORTED_MODULE_1__.MacMainContainerComponent, _shared_components_footer_footer_container_footer_container_component__WEBPACK_IMPORTED_MODULE_2__.FooterContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWMtaG9tZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8125:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/Mac/mac-main-container/mac-main-container.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MacMainContainerComponent": () => (/* binding */ MacMainContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_components_main_full_size_card_full_size_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/main/full-size-card/full-size-card.component */ 6759);
/* harmony import */ var _shared_components_main_product_specs_table_product_specs_table_product_specs_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/main/product-specs-table/product-specs-table/product-specs-table.component */ 405);



class MacMainContainerComponent {
    constructor() {
        this.productMac = [
            {
                id: '1',
                imgUrl: '/assets/img/Mac/main/macbook-air-specs.png',
                title: 'MacBook Air',
                color: 'grey | dark grey | beige',
                price: 999,
                specification: [
                    {
                        name: '13.3" ',
                        title: 'Retina display',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/chip-m1-icon.png',
                        title: 'Apple M1 chip',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/memory-unified-icon-specs.png',
                        title: 'Up to 16GB unified memory',
                        description: 'For increased performance and power efficiency'
                    },
                    {
                        name: '2TB',
                        title: 'Maximum configurable storage',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/battery-icon.png',
                        title: 'Up to 18 hours battery life',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/camera-icon.png',
                        title: '720p FaceTime HD camera',
                        description: 'With the image signal processor of M1 for drastically improved performance'
                    },
                    {
                        name: '2,8 lb.',
                        title: 'weight',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/touch-id-specs.png',
                        title: 'Touch ID',
                    },
                ]
            },
            {
                id: '1',
                imgUrl: '/assets/img/Mac/main/macbook-pro13-specs.png',
                title: 'MacBook Pro 13 ',
                color: 'grey | dark grey',
                price: 1299,
                specification: [
                    {
                        name: '13.3" ',
                        title: 'Retina display',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/chip-m1-icon.png',
                        title: 'Apple M1 chip',
                        description: 'Also available with Intel Core i5 or i7 processor'
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/memory-unified-icon-specs.png',
                        title: 'Up to 16GB unified memory',
                        description: 'For increased performance and power efficiency'
                    },
                    {
                        name: '2TB',
                        title: 'Maximum configurable storage',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/battery-icon.png',
                        title: 'Up to 20 hours battery life',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/camera-icon.png',
                        title: '720p FaceTime HD camera',
                        description: 'With the image signal processor of M1 for drastically improved performance'
                    },
                    {
                        name: '3.0 lb.',
                        title: 'weight',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/touch-bar-specs.png',
                        title: 'Touch bar and Touch ID',
                    },
                ]
            },
            {
                id: '1',
                imgUrl: '/assets/img/Mac/main/macbook-pro16-specs.png',
                title: 'MacBook Pro 16',
                color: 'grey | dark grey',
                price: 2399,
                specification: [
                    {
                        name: '16" ',
                        title: 'Retina display',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/chip-intel-icon.png',
                        title: 'Up to Intel Core i9 processor',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/memory-icon.png',
                        title: 'Up to 64GB memory',
                        description: 'For increased performance and power efficiency'
                    },
                    {
                        name: '2TB',
                        title: 'Maximum configurable storage',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/battery-icon.png',
                        title: 'Up to 11 hours battery life',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/camera-icon.png',
                        title: '720p FaceTime HD camera',
                    },
                    {
                        name: '4.3 lb.',
                        title: 'weight',
                    },
                    {
                        imgUrl: '/assets/img/Mac/main/touch-bar-specs.png',
                        title: 'Touch bar and Touch ID',
                    },
                ]
            }
        ];
    }
    ngOnInit() {
    }
}
MacMainContainerComponent.ɵfac = function MacMainContainerComponent_Factory(t) { return new (t || MacMainContainerComponent)(); };
MacMainContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MacMainContainerComponent, selectors: [["app-mac-main-container"]], decls: 2, vars: 6, consts: [[3, "isNew", "productTitle", "motto", "startingPrice", "url"], [3, "productMac"]], template: function MacMainContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-full-size-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-product-specs-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isNew", true)("productTitle", "iMac")("motto", "Viva il colore.")("startingPrice", 1499)("url", "https://www.apple.com/it/shop/buy-mac/imac");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("productMac", ctx.productMac);
    } }, directives: [_shared_components_main_full_size_card_full_size_card_component__WEBPACK_IMPORTED_MODULE_0__.FullSizeCardComponent, _shared_components_main_product_specs_table_product_specs_table_product_specs_table_component__WEBPACK_IMPORTED_MODULE_1__.ProductSpecsTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWMtbWFpbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5193:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/footer/copyright/copyright.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyrightComponent": () => (/* binding */ CopyrightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CopyrightComponent {
    constructor() { }
    ngOnInit() {
    }
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 35, vars: 0, consts: [[1, "copyright-container"], [1, "container-contacts"], ["href", "#", 1, "blue-text"], [1, "copyright"], [1, "last-nav-footer"], ["href", "#"], [1, "last-nav-footer-element"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Altri modi per acquistare: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "trova l\u2019Apple Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "il rivenditore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " pi\u00F9 vicino. O chiama il numero 800 554 533.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Copyright \u00A9 2021 Apple Inc. Tutti i diritti riservati.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Italia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Norme sulla privacy |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Utilizzo dei cookie |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "condizioni d'uso |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Vendite e rimborsi |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Note Legali |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mappa del sito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".copyright-container[_ngcontent-%COMP%] {\n  background-color: #f5f5f7;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 0.8em;\n  color: #86868B;\n  display: flex;\n  flex-direction: column;\n}\n.copyright-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #515154;\n}\n.copyright-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.copyright-container[_ngcontent-%COMP%]   .container-contacts[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  padding-bottom: 0;\n}\n.copyright-container[_ngcontent-%COMP%]   .container-contacts[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.copyright-container[_ngcontent-%COMP%]   .container-contacts[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%] {\n  color: #0066CC;\n}\n.copyright-container[_ngcontent-%COMP%]   .last-nav-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 0 20px;\n}\n.copyright-container[_ngcontent-%COMP%]   .last-nav-footer[_ngcontent-%COMP%]   .last-nav-footer-element[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHlyaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esd0lBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7QUFETjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpOO0FBT0k7RUFDRSxjQUFBO0FBTE47QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFUSjtBQVlJO0VBQ0UsZ0JBQUE7QUFWTiIsImZpbGUiOiJjb3B5cmlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weXJpZ2h0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjODY4NjhCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1MTUxNTQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gIH1cblxuICAuY29udGFpbmVyLWNvbnRhY3RzIHtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5ibHVlLXRleHQge1xuICAgICAgY29sb3I6ICMwMDY2Q0M7XG4gICAgfVxuXG4gIH1cblxuXG4gIC5sYXN0LW5hdi1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cblxuICAgIC5sYXN0LW5hdi1mb290ZXItZWxlbWVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 759:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer-container/footer-container.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterContainerComponent": () => (/* binding */ FooterContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _footer_notes_footer_notes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer-notes/footer-notes.component */ 9900);
/* harmony import */ var _footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer-nav/footer-nav.component */ 7698);
/* harmony import */ var _footer_nav_links_footer_nav_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer-nav-links/footer-nav-links.component */ 9280);
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copyright/copyright.component */ 5193);





class FooterContainerComponent {
    constructor() {
        this.notesArray = [
            'La dimensione del display è misurata in diagonale.',
            '1TB = mille miliardi di byte. La capacità effettiva del supporto formattato è inferiore.',
            'Test condotti da Apple nell’ottobre 2020 utilizzando MacBook Air di pre‑produzione con chip Apple M1 e GPU 8‑core, configurati con 8GB di RAM e unità SSD da 512GB. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata a 8 tacche dallo zero. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
            'Per i modelli con processore Intel puoi scegliere fino a 32GB di memoria e fino a 4TB di archiviazione. 1TB = mille miliardi di byte. La capacità effettiva del supporto formattato è inferiore.',
            'Test condotti da Apple nell’ottobre 2020 utilizzando MacBook Pro 13" di pre‑produzione con chip Apple M1, 8GB di RAM e unità SSD da 512GB. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata a 8 tacche dallo zero. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
            'Test condotti da Apple nell’ottobre 2019 utilizzando MacBook Pro 16" di pre‑produzione con processore Intel Core i9 8‑core a 2,3GHz, 16GB di RAM e unità SSD da 1TB. Il test di navigazione web in wireless misura la durata della batteria durante la navigazione Wi‑Fi su 25 noti siti web con luminosità dello schermo impostata al 75% o a 12 tacche dallo zero. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata al 75% o a 12 tacche dallo zero. Il test di autonomia in standby misura la durata della batteria lasciando che il computer entri in modalità standby mentre è collegato a una rete wireless e a un account iCloud, con le app Safari e Mail aperte e utilizzando tutte le impostazioni di sistema predefinite. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
            'La misura effettiva della diagonale dello schermo è 23,5".',
            'Per il modello con processore Intel puoi scegliere fino a 64GB di memoria.',
            'Il valore di permuta dipende dalle condizioni, dall’anno di fabbricazione e dalla configurazione del dispositivo che restituisci. Per usufruire della permuta in cambio di una carta regalo Apple Store o di un credito devi avere compiuto almeno 18 anni. Non tutti i dispositivi danno diritto a ricevere un credito. Per maggiori dettagli sulla permuta dei dispositivi idonei puoi rivolgerti al nostro partner. Il servizio potrebbe essere soggetto a restrizioni e limitazioni. Il pagamento avverrà solo se il dispositivo ricevuto corrisponde alla descrizione fornita al momento della valutazione. Apple si riserva il diritto di rifiutare la permuta o limitarne la quantità per qualsiasi dispositivo e per qualsivoglia motivo. Il valore del tuo vecchio dispositivo potrà essere riconosciuto a fronte dell’acquisto di un nuovo dispositivo Apple. L’offerta potrebbe non essere disponibile in tutti gli store. Alcuni Apple Store potrebbero applicare restrizioni aggiuntive.',
            'La prova gratuita di Apple One include solo i servizi per i quali non hai attualmente attivato una prova gratuita o sottoscritto un abbonamento. Al termine del periodo di prova, l’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.',
            '€ 4,99 al mese dopo la prova gratuita. È possibile sottoscrivere un solo abbonamento per ciascun gruppo “In famiglia”. L’offerta è valida per 3 mesi dall’attivazione del dispositivo idoneo. L’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.',
            '€ 4,99 al mese dopo la prova gratuita. È possibile sottoscrivere un solo abbonamento per ciascun gruppo “In famiglia”. L’offerta è valida per 3 mesi dall’attivazione del dispositivo idoneo. L’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.'
        ];
        this.navLinkString = "<span class='mx-3 h4 color-lightgray'>></span> Mac";
    }
    ngOnInit() {
    }
}
FooterContainerComponent.ɵfac = function FooterContainerComponent_Factory(t) { return new (t || FooterContainerComponent)(); };
FooterContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FooterContainerComponent, selectors: [["app-footer-container"]], decls: 5, vars: 2, consts: [[1, "container", "footer-background"], [3, "notesArray"], [3, "navLinkString"]], template: function FooterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-footer-notes", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-footer-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-footer-nav-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("notesArray", ctx.notesArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("navLinkString", ctx.navLinkString);
    } }, directives: [_footer_notes_footer_notes_component__WEBPACK_IMPORTED_MODULE_0__.FooterNotesComponent, _footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_1__.FooterNavComponent, _footer_nav_links_footer_nav_links_component__WEBPACK_IMPORTED_MODULE_2__.FooterNavLinksComponent, _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_3__.CopyrightComponent], styles: [".footer-background[_ngcontent-%COMP%] {\n  background-color: #f5f5f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7XG59Il19 */"] });


/***/ }),

/***/ 9280:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer-nav-links/footer-nav-links.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterNavLinksComponent": () => (/* binding */ FooterNavLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterNavLinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterNavLinksComponent.ɵfac = function FooterNavLinksComponent_Factory(t) { return new (t || FooterNavLinksComponent)(); };
FooterNavLinksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterNavLinksComponent, selectors: [["app-footer-nav-links"]], decls: 193, vars: 0, consts: [[1, "nav-footer"], ["href", "#"], [1, "container-1"], [1, "container-2"], [1, "container-3"]], template: function FooterNavLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scopri e acquista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "iPad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "iPhone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "AirPods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "iPod touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "AirTag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Accessori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Carte regalo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Servizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Apple Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Apple TV+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Apple Fitness+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Apple Arcade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "iCloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Apple One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Apple Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Apple Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Apple Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "App Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Gestisci il tuo ID Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Account Apple Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Cloud.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Apple Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Trova uno Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Acquista online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Genius Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Today at Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Campo Estivo Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "L'app Apple Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Ricondizionati e fine serie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Finanziamenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Apple Trade In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Stato dell'ordine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Assistenza agli acquisti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Apple per il business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Acquisti per le aziende");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Apple nell'istruzione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Acquisti per l'universit\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Per la salute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Apple e la salute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Salute su Apple Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "I valori di Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Accessibilit\u00E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Ambiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Responsabilit\u00E0 dei fornitori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Info su Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Newsroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Leadership Apple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Opportunit\u00E0 di lavoro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Garanzia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Investitori");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Etica e rispetto delle norme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Eventi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Posti di lavoro in Europa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Contatti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f7;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 0.8em;\n  height: 80vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding-top: 15px;\n}\n.nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  color: #1d1d1f;\n  padding: 5px 30px;\n  margin-top: 7px;\n}\n.nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #515154;\n  list-style: none;\n  padding-bottom: 5px;\n  padding-top: 10px;\n}\n.nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #515154;\n}\n.nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.nav-footer[_ngcontent-%COMP%]   .container-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-footer[_ngcontent-%COMP%]   .container-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav-footer[_ngcontent-%COMP%]   .container-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1uYXYtbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx5QkFBQTtFQUNBLHdJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEo7QUFPSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFMTjtBQU9NO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTFI7QUFPUTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7QUFMVjtBQVlFO0VBdENBLGFBQUE7RUFDQSxzQkFBQTtBQTZCRjtBQVlFO0VBMUNBLGFBQUE7RUFDQSxzQkFBQTtBQWlDRjtBQVlFO0VBOUNBLGFBQUE7RUFDQSxzQkFBQTtBQXFDRiIsImZpbGUiOiJmb290ZXItbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZsZXhDb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi5uYXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcblxuICB1bCB7XG4gICAgY29sb3I6ICMxZDFkMWY7XG4gICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuXG4gICAgbGkge1xuICAgICAgY29sb3I6ICM1MTUxNTQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzUxNTE1NDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVyLTEge1xuICAgIEBpbmNsdWRlIGZsZXhDb2x1bW4oKTtcbiAgfVxuXG4gIC5jb250YWluZXItMiB7XG4gICAgQGluY2x1ZGUgZmxleENvbHVtbigpO1xuICB9XG5cbiAgLmNvbnRhaW5lci0zIHtcbiAgICBAaW5jbHVkZSBmbGV4Q29sdW1uKCk7XG4gIH1cblxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 7698:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer-nav/footer-nav.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterNavComponent": () => (/* binding */ FooterNavComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 8870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);



class FooterNavComponent {
    constructor() {
        this.navLinkString = "";
        this.appleIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faApple;
    }
    ngOnInit() {
    }
}
FooterNavComponent.ɵfac = function FooterNavComponent_Factory(t) { return new (t || FooterNavComponent)(); };
FooterNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterNavComponent, selectors: [["app-footer-nav"]], inputs: { navLinkString: "navLinkString" }, decls: 4, vars: 2, consts: [[1, "footer-text", "color-gray"], ["href", "#", 1, "icon"], [3, "icon"], [3, "innerHTML"]], template: function FooterNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.appleIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.navLinkString, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent], styles: [".footer-text {\n  font-size: 0.75rem;\n}\n\n.icon {\n  font-size: 1.3rem;\n  color: #86868B;\n}\n\n.icon:hover {\n  color: #535353;\n}\n\n.color-lightgray {\n  color: lightgray;\n}\n\n.color-gray {\n  color: #86868B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUNBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0FBRUQ7O0FBREM7RUFDQyxjQUFBO0FBR0Y7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0MsY0FBQTtBQUlEIiwiZmlsZSI6ImZvb3Rlci1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRleHQge1xuXHRmb250LXNpemU6IDAuNzVyZW07XG59XG4uaWNvbiB7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRjb2xvcjogIzg2ODY4Qjtcblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6IHJnYig4MywgODMsIDgzKTtcblx0fVxufVxuLmNvbG9yLWxpZ2h0Z3JheSB7XG5cdGNvbG9yOiBsaWdodGdyYXk7XG59XG4uY29sb3ItZ3JheSB7XG5cdGNvbG9yOiAjODY4NjhCO1xufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 9900:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/footer/footer-notes/footer-notes.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterNotesComponent": () => (/* binding */ FooterNotesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function FooterNotesComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 5);
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", data_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FooterNotesComponent {
    constructor() {
        this.notesArray = [];
    }
    ngOnInit() {
    }
}
FooterNotesComponent.ɵfac = function FooterNotesComponent_Factory(t) { return new (t || FooterNotesComponent)(); };
FooterNotesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterNotesComponent, selectors: [["app-footer-notes"]], inputs: { notesArray: "notesArray" }, decls: 8, vars: 1, consts: [[1, "footer-font", "color-gray"], ["href", "#", 1, "footer-link", "color-darkgray"], [1, "padding-left-1rem"], ["class", "margin-xy-05rem", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "color-gray"], [1, "margin-xy-05rem", 3, "innerHTML"]], template: function FooterNotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "* Offerta riservata ai clienti idonei che acquistano un Mac o un iPad inclusi nell\u2019iniziativa insieme a un paio di AirPods idonei attraverso i canali aderenti. Un solo prodotto in promozione per ciascun Mac o iPad incluso nell\u2019iniziativa e per ciascun cliente idoneo. Offerta soggetta a disponibilit\u00E0. Fino a esaurimento scorte. L\u2019offerta \u00E8 soggetta a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "termini e condizioni.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterNotesComponent_li_6_Template, 1, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notesArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["/* font style */\n.footer-font {\n  font-size: 0.75rem;\n}\n.footer-link {\n  text-decoration: none;\n}\n.footer-link:hover {\n  text-decoration: underline;\n  color: #515154;\n}\n/* structure style */\n.padding-left-1rem {\n  padding-left: 1rem;\n}\n.margin-xy-05rem {\n  margin: 0.5rem 0;\n}\n/* color style */\n.color-gray {\n  color: #86868B;\n}\n.color-darkgray {\n  color: #515154;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBRUE7RUFDQyxrQkFBQTtBQUFEO0FBRUE7RUFDQyxxQkFBQTtBQUNEO0FBQUM7RUFDQywwQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUVBLG9CQUFBO0FBRUE7RUFDQyxrQkFBQTtBQUFEO0FBRUE7RUFDQyxnQkFBQTtBQUNEO0FBRUEsZ0JBQUE7QUFFQTtFQUNDLGNBQUE7QUFBRDtBQUVBO0VBQ0MsY0FBQTtBQUNEIiwiZmlsZSI6ImZvb3Rlci1ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvbnQgc3R5bGUgKi9cblxuLmZvb3Rlci1mb250IHtcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xufVxuLmZvb3Rlci1saW5rIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHQmOmhvdmVyIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRjb2xvcjogIzUxNTE1NDtcblx0fVxufVxuXG4vKiBzdHJ1Y3R1cmUgc3R5bGUgKi9cblxuLnBhZGRpbmctbGVmdC0xcmVtIHtcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLm1hcmdpbi14eS0wNXJlbSB7XG5cdG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi8qIGNvbG9yIHN0eWxlICovXG5cbi5jb2xvci1ncmF5IHtcblx0Y29sb3I6ICM4Njg2OEI7XG59XG4uY29sb3ItZGFya2dyYXkge1xuXHRjb2xvcjogIzUxNTE1NDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 1774:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/header/discount-device/discount-device.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscountDeviceComponent": () => (/* binding */ DiscountDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function DiscountDeviceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Acquista ora >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.discountText, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DiscountDeviceComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiscountDeviceComponent.ɵfac = function DiscountDeviceComponent_Factory(t) { return new (t || DiscountDeviceComponent)(); };
DiscountDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountDeviceComponent, selectors: [["app-discount-device"]], inputs: { discount: "discount", discountText: "discountText", url: "url" }, decls: 2, vars: 1, consts: [[1, "container-fluid", "text-center", "d-flex", "justify-content-center"], ["id", "discount-line", 4, "ngIf"], ["id", "discount-line"], [1, "text-decoration-none", 3, "href"]], template: function DiscountDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiscountDeviceComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.discount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["div.container-fluid[_ngcontent-%COMP%] {\n  padding: 9px 0;\n  background-color: #f5f5f7;\n  color: #6e6e70;\n  font-size: 12px;\n  line-height: 1.42859;\n  font-weight: 400;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n@media screen and (max-width: 734px) {\n  #discount-line[_ngcontent-%COMP%] {\n    width: 308px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdW50LWRldmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUVBLDhGQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLFlBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImRpc2NvdW50LWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDlweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7XG4gICAgY29sb3I6ICM2ZTZlNzA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IC0uMDE2ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgXCJTRiBQcm8gSWNvbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNHB4KSB7XG4gICAgI2Rpc2NvdW50LWxpbmUge1xuICAgICAgICB3aWR0aDogMzA4cHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3281:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/header/header-container/header-container.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderContainerComponent": () => (/* binding */ HeaderContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header-navbar/header-navbar.component */ 8719);
/* harmony import */ var _header_device_header_device_header_device_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-device/header-device/header-device.component */ 626);
/* harmony import */ var _discount_device_discount_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../discount-device/discount-device.component */ 1774);




class HeaderContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderContainerComponent.ɵfac = function HeaderContainerComponent_Factory(t) { return new (t || HeaderContainerComponent)(); };
HeaderContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderContainerComponent, selectors: [["app-header-container"]], inputs: { discount: "discount", discountText: "discountText", url: "url" }, decls: 3, vars: 3, consts: [[3, "discount", "discountText", "url"]], template: function HeaderContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header-device");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-discount-device", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("discount", ctx.discount)("discountText", ctx.discountText)("url", ctx.url);
    } }, directives: [_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderNavbarComponent, _header_device_header_device_header_device_component__WEBPACK_IMPORTED_MODULE_1__.HeaderDeviceComponent, _discount_device_discount_device_component__WEBPACK_IMPORTED_MODULE_2__.DiscountDeviceComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 626:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/header/header-device/header-device/header-device.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderDeviceComponent": () => (/* binding */ HeaderDeviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _single_device_header_single_device_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../single-device-header/single-device-header.component */ 5053);


class HeaderDeviceComponent {
    constructor() {
        this.macs = [
            {
                name: "MacBook Air",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-1.svg"
            },
            {
                name: "MacBook Pro 13”",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-2.svg"
            },
            {
                name: "MacBook Pro 16”",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-3.svg"
            },
            {
                name: "iMac 24”",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-4.svg"
            },
            {
                name: "iMac 27”",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-5.svg"
            },
            {
                name: "Mac Pro",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-6.svg"
            },
            {
                name: "Mac mini",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-7.svg"
            },
            {
                name: "Compare",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-8.svg"
            },
            {
                name: "Pro Display XDR",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-9.svg"
            },
            {
                name: "Accessories",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-10.svg"
            },
            {
                name: "Big Sur",
                imageUrl: "../../../../../../assets/img/Mac/header/mac-11.svg"
            }
        ];
    }
    ngOnInit() {
    }
}
HeaderDeviceComponent.ɵfac = function HeaderDeviceComponent_Factory(t) { return new (t || HeaderDeviceComponent)(); };
HeaderDeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderDeviceComponent, selectors: [["app-header-device"]], decls: 1, vars: 1, consts: [[3, "macs"]], template: function HeaderDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-single-device-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("macs", ctx.macs);
    } }, directives: [_single_device_header_single_device_header_component__WEBPACK_IMPORTED_MODULE_0__.SingleDeviceHeaderComponent], styles: ["*[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-color: #f8f8f9;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 1156px) {\n  *[_ngcontent-%COMP%] {\n    overflow-y: hidden;\n    overflow-x: scroll;\n    justify-content: start;\n    padding-left: 33.8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1kZXZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxXQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBSOztBQVVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5kZXZpY2UtYmFyIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDkycHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAvLyNmOGY4Zjk7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4vLyB9XG5cbip7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjZjhmOGY5OyAvL3llbGxvdztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgIFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1NnB4KSB7XG4gICAgKntcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzMuOHB4O1xuICAgIH1cbn0gXG5cblxuIl19 */"] });


/***/ }),

/***/ 5053:
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/header/header-device/single-device-header/single-device-header.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleDeviceHeaderComponent": () => (/* binding */ SingleDeviceHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function SingleDeviceHeaderComponent_nav_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleDeviceHeaderComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SingleDeviceHeaderComponent_nav_0_span_5_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mac_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mac_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mac_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mac_r1.name == "iMac 24\u201D");
} }
class SingleDeviceHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SingleDeviceHeaderComponent.ɵfac = function SingleDeviceHeaderComponent_Factory(t) { return new (t || SingleDeviceHeaderComponent)(); };
SingleDeviceHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleDeviceHeaderComponent, selectors: [["app-single-device-header"]], inputs: { macs: "macs" }, decls: 1, vars: 1, consts: [["class", "single-device-container", 4, "ngFor", "ngForOf"], [1, "single-device-container"], [1, "single-device"], ["alt", "", "srcset", "", 3, "src"], [1, "caption"], ["class", "new", 4, "ngIf"], [1, "new"]], template: function SingleDeviceHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SingleDeviceHeaderComponent_nav_0_Template, 6, 3, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.macs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 50px;\n  max-height: 55px;\n}\n\n.single-device[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  white-space: nowrap;\n  margin: 1.2vw 1.2vw 1vw 1.2vw;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 12px;\n}\n\n.caption[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.new[_ngcontent-%COMP%] {\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 10px;\n  color: #bf4800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1kZXZpY2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEZBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksOEZBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InNpbmdsZS1kZXZpY2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogNTVweDtcbn1cblxuLnNpbmdsZS1kZXZpY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbjogN3B4IDVweCA3cHggMjVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbjogMS4ydncgMS4ydncgMXZ3IDEuMnZ3O1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsXCJTRiBQcm8gSWNvbnNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jYXB0aW9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ubmV3e1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsXCJTRiBQcm8gSWNvbnNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNiZjQ4MDA7XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ 8719:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/header/header-navbar/header-navbar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNavbarComponent": () => (/* binding */ HeaderNavbarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 8870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);




class HeaderNavbarComponent {
    constructor() {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSearch;
        this.faApple = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faApple;
        this.faShoppingBag = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faShoppingBag;
    }
    ngOnInit() {
    }
}
HeaderNavbarComponent.ɵfac = function HeaderNavbarComponent_Factory(t) { return new (t || HeaderNavbarComponent)(); };
HeaderNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderNavbarComponent, selectors: [["app-header-navbar"]], decls: 30, vars: 6, consts: [[1, "first-nav"], [1, "main-nav-li"], [1, "nav-icon", 3, "icon"], [1, "mob-nav"], [1, "mob-nav-li"]], template: function HeaderNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "iPad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "iPhone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faShoppingBag);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faApple);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faShoppingBag);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".first-nav[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.92);\n  color: #f5f5f7;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.first-nav[_ngcontent-%COMP%]   .main-nav-li[_ngcontent-%COMP%] {\n  list-style: none;\n  opacity: 0.8;\n  font-size: 14px;\n  padding: 0rem 3vw 0rem 2vw;\n  font-family: \"SF Pro Text\", \"Myriad Set Pro\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n.first-nav[_ngcontent-%COMP%]   .main-nav-li[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mob-nav[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.92);\n  color: #f5f5f7;\n  height: 48px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  display: none;\n}\n.mob-nav-li[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.mob-nav-li[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media screen and (max-width: 766px) {\n  .first-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mob-nav[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0hBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtBQUNSO0FBR0E7RUFDSSxlQUFBO0FBQUo7QUFHQTtFQUNJLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHQTtFQUNJLFVBQUE7QUFBSjtBQUdBO0VBQ0k7SUFDSSxhQUFBO0VBQU47O0VBRUU7SUFDSSxvQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1uYXYge1xuICAgIGhlaWdodDogNDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOTIpO1xuICAgIGNvbG9yOiAjZjVmNWY3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5tYWluLW5hdi1saXtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC8vIHBhZGRpbmc6IDBweCAzNXB4IDBweCAzNXB4O1xuICAgICAgICBwYWRkaW5nOiAwcmVtIDN2dyAwcmVtIDJ2dztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIixcIk15cmlhZCBTZXQgUHJvXCIsXCJTRiBQcm8gSWNvbnNcIixcIkhlbHZldGljYSBOZXVlXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLm1haW4tbmF2LWxpOmhvdmVye1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLm5hdi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1vYi1uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45Mik7XG4gICAgY29sb3I6ICNmNWY1Zjc7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2ItbmF2LWxpe1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLm1vYi1uYXYtbGk6aG92ZXJ7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcbiAgICAuZmlyc3QtbmF2e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iLW5hdntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 6759:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/main/full-size-card/full-size-card.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullSizeCardComponent": () => (/* binding */ FullSizeCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function FullSizeCardComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Novit\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FullSizeCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
FullSizeCardComponent.ɵfac = function FullSizeCardComponent_Factory(t) { return new (t || FullSizeCardComponent)(); };
FullSizeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullSizeCardComponent, selectors: [["app-full-size-card"]], inputs: { isNew: "isNew", productTitle: "productTitle", motto: "motto", startingPrice: "startingPrice", url: "url" }, decls: 16, vars: 6, consts: [[1, "container-fluid"], [1, "text-button", "text-center"], ["class", "new", 4, "ngIf"], [1, "productTitle"], [1, "motto"], [1, "startingPrice"], [3, "href"], [1, "btn", "btn-primary", "rounded-pill"], ["id", "discover-more"], [1, "text-decoration-none", 3, "href"], [1, "container-fluid", "main-image", "mt-5"], [1, "new"]], template: function FullSizeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullSizeCardComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Acquista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Scopri di pi\u00F9 >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.motto, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A partire da \u20AC", ctx.startingPrice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".container-fluid[_ngcontent-%COMP%] {\n  padding: 63px 0 120px 0;\n  font-weight: 600;\n}\n\n.new[_ngcontent-%COMP%] {\n  font-size: 17px;\n  background: rgba(0, 0, 0, 0);\n  border-color: #bf4800;\n  color: #f56300;\n  margin: 0;\n}\n\n.productTitle[_ngcontent-%COMP%] {\n  font-size: 56px;\n  line-height: 1.07143;\n  letter-spacing: -0.005em;\n  font-family: \"SF Pro Display\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin: 0;\n}\n\n.motto[_ngcontent-%COMP%] {\n  margin-bottom: 0.4em;\n  font-size: 28px;\n  line-height: 1.14286;\n  letter-spacing: 0.007em;\n  font-family: \"SF Pro Display\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.startingPrice[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 1.47059;\n  \n  letter-spacing: -0.022em;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  font-size: 17px;\n  line-height: 1.17648;\n  font-weight: 400;\n  letter-spacing: -0.022em;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  min-width: 28px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-radius: 980px;\n  background: #0071e3;\n  color: #fff;\n}\n\n.main-image[_ngcontent-%COMP%] {\n  width: 1070px;\n  height: 446px;\n  background-image: url(\"https://i.ibb.co/VHvdBHV/imac.png\");\n  background-position: center;\n}\n\n#discover-more[_ngcontent-%COMP%] {\n  color: #06c;\n  font-size: 17px;\n  line-height: 1.47059;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-top: 0.8em;\n}\n\n@media screen and (min-width: 735px) and (max-width: 1068px) {\n  .productTitle[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .motto[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .main-image[_ngcontent-%COMP%] {\n    width: 735px;\n    height: 308px;\n    background-image: url(\"https://i.ibb.co/VHvdBHV/imac.png\");\n    background-size: 735px 308px;\n  }\n}\n\n@media screen and (max-width: 734px) {\n  .productTitle[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  .motto[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .main-image[_ngcontent-%COMP%] {\n    width: 322px;\n    height: 472px;\n    background-image: url(\"https://i.ibb.co/Rz3Zz9V/imac-Small.png\");\n    background-size: 322px 472px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtc2l6ZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpR0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpR0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhGQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhGQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDhGQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZUFBQTtFQUNOOztFQUVFO0lBQ0ksZUFBQTtFQUNOOztFQUVFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSwwREFBQTtJQUNBLDRCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksZUFBQTtFQUFOOztFQUdFO0lBQ0ksZUFBQTtFQUFOOztFQUdFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxnRUFBQTtJQUNBLDRCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJmdWxsLXNpemUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDYzcHggMCAxMjBweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uZXcge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1jb2xvcjogI2JmNDgwMDtcbiAgICBjb2xvcjogI2Y1NjMwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICBsaW5lLWhlaWdodDogMS4wNzE0MztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIiwgXCJTRiBQcm8gSWNvbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubW90dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMS4xNDI4NjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDdlbTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gRGlzcGxheVwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnN0YXJ0aW5nUHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMS40NzA1OTtcbiAgICAvKiBmb250LXdlaWdodDogNDAwOyAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMjJlbTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMS4xNzY0ODtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMjJlbTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICBtaW4td2lkdGg6IDI4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk4MHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDcxZTM7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tYWluLWltYWdlIHtcbiAgICB3aWR0aDogMTA3MHB4O1xuICAgIGhlaWdodDogNDQ2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9WSHZkQkhWL2ltYWMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI2Rpc2NvdmVyLW1vcmUge1xuICAgIGNvbG9yOiAjMDZjO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMS40NzA1OTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzM1cHgpIGFuZCAobWF4LXdpZHRoOiAxMDY4cHgpIHtcbiAgICAucHJvZHVjdFRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIC5tb3R0byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAubWFpbi1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA3MzVweDtcbiAgICAgICAgaGVpZ2h0OiAzMDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9WSHZkQkhWL2ltYWMucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDczNXB4IDMwOHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM0cHgpIHtcbiAgICAucHJvZHVjdFRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cblxuICAgIC5tb3R0byB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB9XG5cbiAgICAubWFpbi1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0NzJweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9SejNaejlWL2ltYWMtU21hbGwucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMyMnB4IDQ3MnB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1542:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/main/product-specs-table/product-single-specs/lower-single-specs/lower-single-specs.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LowerSingleSpecsComponent": () => (/* binding */ LowerSingleSpecsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function LowerSingleSpecsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specific_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](specific_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", specific_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](specific_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](specific_r1.description);
} }
class LowerSingleSpecsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LowerSingleSpecsComponent.ɵfac = function LowerSingleSpecsComponent_Factory(t) { return new (t || LowerSingleSpecsComponent)(); };
LowerSingleSpecsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LowerSingleSpecsComponent, selectors: [["app-lower-single-specs"]], inputs: { product: "product" }, decls: 2, vars: 1, consts: [[1, "container", "list-specs", "d-flex", "flex-column", "align-items-center"], ["class", "retina-display specific-column", 4, "ngFor", "ngForOf"], [1, "retina-display", "specific-column"], ["alt", "", 3, "src"]], template: function LowerSingleSpecsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LowerSingleSpecsComponent_div_1_Template, 8, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.specification);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".list-specs[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n  margin-top: 20px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #d2d2d7;\n}\n.list-specs[_ngcontent-%COMP%]   .specific-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px;\n}\n.list-specs[_ngcontent-%COMP%]   .specific-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 14px;\n  margin: 0 auto;\n}\n.list-specs[_ngcontent-%COMP%]   .specific-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4) {\n  font-size: 14px;\n  color: #86868b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvd2VyLXNpbmdsZS1zcGVjcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUlJO0VBQ0UsZUFoQmE7RUFpQmIsY0FBQTtBQUZOO0FBSUk7RUFDRSxlQXBCYTtFQXFCYixjQXRCbUI7QUFvQnpCIiwiZmlsZSI6Imxvd2VyLXNpbmdsZS1zcGVjcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aXRsZS1kZXNjcmlwdGlvbi1jb2xvcjojODY4NjhiO1xuJHRpdGxlLXNwZWNzLXNpemU6IDE0cHg7XG5cbi5saXN0LXNwZWNze1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQ3O1xuXG4gIC5zcGVjaWZpYy1jb2x1bW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgcDpudGgtY2hpbGQoMyl7XG4gICAgICBmb250LXNpemU6ICR0aXRsZS1zcGVjcy1zaXplO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIHA6bnRoLWNoaWxkKDQpe1xuICAgICAgZm9udC1zaXplOiAkdGl0bGUtc3BlY3Mtc2l6ZTtcbiAgICAgIGNvbG9yOiAkdGl0bGUtZGVzY3JpcHRpb24tY29sb3I7XG4gICAgfVxuICB9XG5cblxufVxuIl19 */"] });


/***/ }),

/***/ 9347:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/main/product-specs-table/product-single-specs/product-single-specs/product-single-specs.component.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSingleSpecsComponent": () => (/* binding */ ProductSingleSpecsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _upper_single_specs_upper_single_specs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upper-single-specs/upper-single-specs.component */ 6068);


class ProductSingleSpecsComponent {
    constructor() {
        this.products = [];
    }
    ngOnInit() {
    }
}
ProductSingleSpecsComponent.ɵfac = function ProductSingleSpecsComponent_Factory(t) { return new (t || ProductSingleSpecsComponent)(); };
ProductSingleSpecsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductSingleSpecsComponent, selectors: [["app-product-single-specs"]], inputs: { products: "products" }, decls: 1, vars: 1, consts: [[1, "col-3", 3, "product"]], template: function ProductSingleSpecsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-upper-single-specs", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", ctx.products);
    } }, directives: [_upper_single_specs_upper_single_specs_component__WEBPACK_IMPORTED_MODULE_0__.UpperSingleSpecsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNpbmdsZS1zcGVjcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6068:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/main/product-specs-table/product-single-specs/upper-single-specs/upper-single-specs.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperSingleSpecsComponent": () => (/* binding */ UpperSingleSpecsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _lower_single_specs_lower_single_specs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lower-single-specs/lower-single-specs.component */ 1542);



function UpperSingleSpecsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", device_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](device_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("from $", device_r1.price, "");
} }
class UpperSingleSpecsComponent {
    constructor() {
        this.product = [];
    }
    ngOnInit() {
    }
}
UpperSingleSpecsComponent.ɵfac = function UpperSingleSpecsComponent_Factory(t) { return new (t || UpperSingleSpecsComponent)(); };
UpperSingleSpecsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpperSingleSpecsComponent, selectors: [["app-upper-single-specs"]], inputs: { product: "product" }, decls: 2, vars: 1, consts: [["class", "container product", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "container", "product"], ["href", "", 1, ""], ["alt", "", 3, "src"], [1, "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "justify-content-center", "circles", "mb-3"], [1, "circle-color"], [1, "pb-4", "buy-link"], ["href", "", 1, "btn", "btn-primary"]], template: function UpperSingleSpecsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UpperSingleSpecsComponent_div_0_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-lower-single-specs", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _lower_single_specs_lower_single_specs_component__WEBPACK_IMPORTED_MODULE_0__.LowerSingleSpecsComponent], styles: [".product[_ngcontent-%COMP%]   .circles[_ngcontent-%COMP%]   .circle-color[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50px;\n  margin: 5px;\n}\n.product[_ngcontent-%COMP%]   .circles[_ngcontent-%COMP%]   .circle-color[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #C7C8CA;\n}\n.product[_ngcontent-%COMP%]   .circles[_ngcontent-%COMP%]   .circle-color[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #B1B2B7;\n}\n.product[_ngcontent-%COMP%]   .circles[_ngcontent-%COMP%]   .circle-color[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #E3CCB4;\n}\n.product[_ngcontent-%COMP%]   .buy-link[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #d2d2d7;\n}\n.product[_ngcontent-%COMP%]   .buy-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 50px;\n  height: 25px;\n  line-height: 10px;\n  background-color: #0577ED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGVyLXNpbmdsZS1zcGVjcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRE47QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFNRTtFQVFFLFdBQUE7RUFDQSxnQ0FBQTtBQVhKO0FBR0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUROIiwiZmlsZSI6InVwcGVyLXNpbmdsZS1zcGVjcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0e1xuICAuY2lyY2xlc3tcbiAgICAuY2lyY2xlLWNvbG9ye1xuICAgICAgd2lkdGg6MThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBtYXJnaW46IDVweFxuICAgIH1cbiAgICAuY2lyY2xlLWNvbG9yOm50aC1jaGlsZCgxKXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDN0M4Q0E7XG4gICAgfVxuICAgIC5jaXJjbGUtY29sb3I6bnRoLWNoaWxkKDIpe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IxQjJCNztcbiAgICB9XG4gICAgLmNpcmNsZS1jb2xvcjpudGgtY2hpbGQoMyl7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNDQ0I0O1xuICAgIH1cbiAgfVxuXG5cbiAgLmJ1eS1saW5re1xuICAgIGF7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTc3RUQ7XG4gICAgfVxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQ3O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 405:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/main/product-specs-table/product-specs-table/product-specs-table.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSpecsTableComponent": () => (/* binding */ ProductSpecsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _product_single_specs_product_single_specs_product_single_specs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product-single-specs/product-single-specs/product-single-specs.component */ 9347);



function ProductSpecsTableComponent_app_product_single_specs_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-single-specs", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("products", ctx_r0.productMac);
} }
class ProductSpecsTableComponent {
    constructor() {
        this.productMac = [];
    }
    ngOnInit() {
    }
}
ProductSpecsTableComponent.ɵfac = function ProductSpecsTableComponent_Factory(t) { return new (t || ProductSpecsTableComponent)(); };
ProductSpecsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductSpecsTableComponent, selectors: [["app-product-specs-table"]], inputs: { productMac: "productMac" }, decls: 13, vars: 1, consts: [[1, "container-fluid", "pt-5", "pb-5", "product-container", "text-center"], ["href", ""], [1, "switch", "p-3"], [1, "btn"], [1, "container", "d-flex"], [3, "products", 4, "ngFor", "ngForOf"], [3, "products"]], template: function ProductSpecsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Which Mac is right for you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Compare all mac models >");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Notebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductSpecsTableComponent_app_product_single_specs_12_Template, 1, 1, "app-product-single-specs", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productMac);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _product_single_specs_product_single_specs_product_single_specs_component__WEBPACK_IMPORTED_MODULE_0__.ProductSingleSpecsComponent], styles: [".product-container[_ngcontent-%COMP%] {\n  background-color: #FAFAFA;\n}\n.product-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1C77D1;\n}\n.product-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.product-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3BlY3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0FBRUo7QUFBRTtFQUNFLGdCQUFBO0FBRUo7QUFESTtFQUNFLDhCQUFBO0FBR04iLCJmaWxlIjoicHJvZHVjdC1zcGVjcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgYXtcbiAgICBjb2xvcjogIzFDNzdEMTtcbiAgfVxuICBidXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAmOmhvdmVye1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"] });


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
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3208), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map