(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-equipment-type-add-equipment-type-module"],{

/***/ "./src/app/layout/add-equipment-type/add-equipment-type-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/add-equipment-type/add-equipment-type-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddEquipmentTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentTypeRoutingModule", function() { return AddEquipmentTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_equipment_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-equipment-type.component */ "./src/app/layout/add-equipment-type/add-equipment-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _add_equipment_type_component__WEBPACK_IMPORTED_MODULE_2__["AddEquipmentTypeComponent"]
    }
];
var AddEquipmentTypeRoutingModule = /** @class */ (function () {
    function AddEquipmentTypeRoutingModule() {
    }
    AddEquipmentTypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddEquipmentTypeRoutingModule);
    return AddEquipmentTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/add-equipment-type/add-equipment-type.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/add-equipment-type/add-equipment-type.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <!-- <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header> -->\n    \n        <div class=\"row\">\n            <h1>Add New Equipment Type</h1>  \n            <div class=\"col-lg-12\">\n                <form>\n                    <fieldset class=\"form-group\">\n                        <label>Type Name</label>\n                        <input class=\"form-control\" name=\"typeName\" #typeName placeholder=\"Type Name\">\n                    </fieldset>\n                    <a class=\"btn btn-secondary\" (click)=\"addEquipmentType(typeName.value)\" >Add Equipment Type</a>\n    \n                </form>\n    \n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n    "

/***/ }),

/***/ "./src/app/layout/add-equipment-type/add-equipment-type.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/add-equipment-type/add-equipment-type.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/add-equipment-type/add-equipment-type.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/add-equipment-type/add-equipment-type.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddEquipmentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentTypeComponent", function() { return AddEquipmentTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api-agent.service */ "./src/app/shared/services/api-agent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEquipmentTypeComponent = /** @class */ (function () {
    function AddEquipmentTypeComponent(router, api) {
        this.router = router;
        this.api = api;
    }
    AddEquipmentTypeComponent.prototype.ngOnInit = function () { };
    AddEquipmentTypeComponent.prototype.addEquipmentType = function (typeName) {
        var _this = this;
        console.log('something');
        this.api.postData({ typeName: typeName }, '/addEquipmentType').then(function (res) {
            if (res['status'] == 1) {
                _this.router.navigateByUrl('equipment_types');
            }
            else {
            }
        });
    };
    AddEquipmentTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-type',
            template: __webpack_require__(/*! ./add-equipment-type.component.html */ "./src/app/layout/add-equipment-type/add-equipment-type.component.html"),
            styles: [__webpack_require__(/*! ./add-equipment-type.component.scss */ "./src/app/layout/add-equipment-type/add-equipment-type.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"]])
    ], AddEquipmentTypeComponent);
    return AddEquipmentTypeComponent;
}());



/***/ }),

/***/ "./src/app/layout/add-equipment-type/add-equipment-type.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/add-equipment-type/add-equipment-type.module.ts ***!
  \************************************************************************/
/*! exports provided: AddEquipmentTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentTypeModule", function() { return AddEquipmentTypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_equipment_type_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-equipment-type-routing.module */ "./src/app/layout/add-equipment-type/add-equipment-type-routing.module.ts");
/* harmony import */ var _add_equipment_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-equipment-type.component */ "./src/app/layout/add-equipment-type/add-equipment-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEquipmentTypeModule = /** @class */ (function () {
    function AddEquipmentTypeModule() {
    }
    AddEquipmentTypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_equipment_type_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEquipmentTypeRoutingModule"]],
            declarations: [_add_equipment_type_component__WEBPACK_IMPORTED_MODULE_3__["AddEquipmentTypeComponent"]]
        })
    ], AddEquipmentTypeModule);
    return AddEquipmentTypeModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-equipment-type-add-equipment-type-module.js.map