(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-equipment-add-equipment-module"],{

/***/ "./src/app/layout/add-equipment/add-equipment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/add-equipment/add-equipment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <!-- <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header> -->\n    \n        <div class=\"row\">\n            <h1>Add New Equipment</h1>  \n            <div class=\"col-lg-12\">\n                <form>\n                    <fieldset class=\"form-group\">\n                        <label>Equipment Name</label>\n                        <input class=\"form-control\" name=\"name\" #name placeholder=\"Equipment Name\">\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Equipment Type</label>\n                        <select name=\"type\" #type class=\"form-control\" >\n                            <option *ngFor=\"let type of equipmentTypes\" value=\"{{type._id}}\">{{type.typeName}}</option>\n                            \n                        </select>\n                    </fieldset>\n                    <fieldset class=\"form-group\">\n                        <label>Condition</label>\n                        <select name=\"condition\" #condition class=\"form-control\" >\n                            <option value=\"good\">Good</option>\n                            <option value=\"bad\">Bad</option>\n                        </select>\n                    </fieldset>\n                    <a class=\"btn btn-secondary\" (click)=\"addEquipment(name.value,condition.value,type.value)\" >Add Equipment</a>\n    \n                </form>\n    \n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n    "

/***/ }),

/***/ "./src/app/layout/add-equipment/add-equipment.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/add-equipment/add-equipment.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/add-equipment/add-equipment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/add-equipment/add-equipment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentComponent", function() { return AddEquipmentComponent; });
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




var AddEquipmentComponent = /** @class */ (function () {
    function AddEquipmentComponent(router, api) {
        this.router = router;
        this.api = api;
        this.equipmentTypes = [];
    }
    AddEquipmentComponent.prototype.ngOnInit = function () {
        this.getEquipmentType();
    };
    AddEquipmentComponent.prototype.getEquipmentType = function () {
        var _this = this;
        this.api.getData('/getAllEquipmentTypes').then(function (res) {
            if (res['status'] == 1) {
                _this.equipmentTypes = res['message'];
            }
        }).catch(function (err) {
        });
    };
    AddEquipmentComponent.prototype.addEquipment = function (name, condition, type) {
        var _this = this;
        console.log(name);
        this.api.postData({ name: name, condition: condition, typeId: type }, '/equipment').then(function (res) {
            if (res['status'] == 1) {
                _this.router.navigateByUrl('equipments');
            }
            else {
            }
        });
    };
    AddEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./add-equipment.component.html */ "./src/app/layout/add-equipment/add-equipment.component.html"),
            styles: [__webpack_require__(/*! ./add-equipment.component.scss */ "./src/app/layout/add-equipment/add-equipment.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"]])
    ], AddEquipmentComponent);
    return AddEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/layout/add-equipment/add-equipment.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/add-equipment/add-equipment.module.ts ***!
  \**************************************************************/
/*! exports provided: AddEquipmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentModule", function() { return AddEquipmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_equipment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-equipment.routing.module */ "./src/app/layout/add-equipment/add-equipment.routing.module.ts");
/* harmony import */ var _add_equipment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-equipment.component */ "./src/app/layout/add-equipment/add-equipment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEquipmentModule = /** @class */ (function () {
    function AddEquipmentModule() {
    }
    AddEquipmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_equipment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEquipmentRoutingModule"]],
            declarations: [_add_equipment_component__WEBPACK_IMPORTED_MODULE_3__["AddEquipmentComponent"]]
        })
    ], AddEquipmentModule);
    return AddEquipmentModule;
}());



/***/ }),

/***/ "./src/app/layout/add-equipment/add-equipment.routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/add-equipment/add-equipment.routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AddEquipmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEquipmentRoutingModule", function() { return AddEquipmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_equipment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-equipment.component */ "./src/app/layout/add-equipment/add-equipment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _add_equipment_component__WEBPACK_IMPORTED_MODULE_2__["AddEquipmentComponent"]
    }
];
var AddEquipmentRoutingModule = /** @class */ (function () {
    function AddEquipmentRoutingModule() {
    }
    AddEquipmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddEquipmentRoutingModule);
    return AddEquipmentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-equipment-add-equipment-module.js.map