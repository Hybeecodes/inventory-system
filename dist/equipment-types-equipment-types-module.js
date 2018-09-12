(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipment-types-equipment-types-module"],{

/***/ "./src/app/layout/equipment-types/equipment-types-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/equipment-types/equipment-types-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EquipmentTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentTypesRoutingModule", function() { return EquipmentTypesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipment_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipment-types.component */ "./src/app/layout/equipment-types/equipment-types.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _equipment_types_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentTypesComponent"]
    }
];
var EquipmentTypesRoutingModule = /** @class */ (function () {
    function EquipmentTypesRoutingModule() {
    }
    EquipmentTypesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EquipmentTypesRoutingModule);
    return EquipmentTypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/equipment-types/equipment-types.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/equipment-types/equipment-types.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <!-- <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header> -->\n    <div class=\"row\">\n        <h1>Equipment Types</h1>\n            <div class=\"col col-xl-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Equipment Types\n                        </div>\n                        <div class=\"card-body table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>First Name</th>\n                                    <th>Last Name</th>\n                                    <th>Username</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Mark</td>\n                                    <td>Otto</td>\n                                    <td>@mdo</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Jacob</td>\n                                    <td>Thornton</td>\n                                    <td>@fat</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Larry</td>\n                                    <td>the Bird</td>\n                                    <td>@twitter</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    \n                </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/equipment-types/equipment-types.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/equipment-types/equipment-types.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/equipment-types/equipment-types.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/equipment-types/equipment-types.component.ts ***!
  \*********************************************************************/
/*! exports provided: EquipmentTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentTypesComponent", function() { return EquipmentTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentTypesComponent = /** @class */ (function () {
    function EquipmentTypesComponent() {
    }
    EquipmentTypesComponent.prototype.ngOnInit = function () { };
    EquipmentTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-types',
            template: __webpack_require__(/*! ./equipment-types.component.html */ "./src/app/layout/equipment-types/equipment-types.component.html"),
            styles: [__webpack_require__(/*! ./equipment-types.component.scss */ "./src/app/layout/equipment-types/equipment-types.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], EquipmentTypesComponent);
    return EquipmentTypesComponent;
}());



/***/ }),

/***/ "./src/app/layout/equipment-types/equipment-types.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/equipment-types/equipment-types.module.ts ***!
  \******************************************************************/
/*! exports provided: EquipmentTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentTypesModule", function() { return EquipmentTypesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _equipment_types_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipment-types-routing.module */ "./src/app/layout/equipment-types/equipment-types-routing.module.ts");
/* harmony import */ var _equipment_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipment-types.component */ "./src/app/layout/equipment-types/equipment-types.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EquipmentTypesModule = /** @class */ (function () {
    function EquipmentTypesModule() {
    }
    EquipmentTypesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _equipment_types_routing_module__WEBPACK_IMPORTED_MODULE_2__["EquipmentTypesRoutingModule"]],
            declarations: [_equipment_types_component__WEBPACK_IMPORTED_MODULE_3__["EquipmentTypesComponent"]]
        })
    ], EquipmentTypesModule);
    return EquipmentTypesModule;
}());



/***/ })

}]);
//# sourceMappingURL=equipment-types-equipment-types-module.js.map