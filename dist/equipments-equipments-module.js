(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipments-equipments-module"],{

/***/ "./src/app/layout/equipments/equipments-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/equipments/equipments-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EquipmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsRoutingModule", function() { return EquipmentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipments.component */ "./src/app/layout/equipments/equipments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _equipments_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentsComponent"]
    }
];
var EquipmentsRoutingModule = /** @class */ (function () {
    function EquipmentsRoutingModule() {
    }
    EquipmentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EquipmentsRoutingModule);
    return EquipmentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/equipments/equipments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/equipments/equipments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <!-- <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header> -->\n    <div class=\"row\">\n        <h1>Equipments</h1>\n            <div class=\"col col-xl-12 col-lg-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-header\">\n                            Equipments\n                        </div>\n                        <div class=\"card-body table-responsive\">\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th>#</th>\n                                    <th>Equipment Name</th>\n                                    <th>Type</th>\n                                    <th>Condition</th>\n                                    <th>Status</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let type of equipments; let i= index\" >\n                                    <th scope=\"row\">{{i+1}}</th>\n                                    <td>{{type.name}}</td>\n                                    <td>{{type.typeName}}</td>\n                                    <td>{{type.condition}}</td>\n                                      <td>\n                                        <span *ngIf=\"type.isAllocated\" style=\"cursor:pointer;\" (click)=\"showDetails($event,type)\" class=\"badge badge-success\">Allocated</span>\n                                        <span *ngIf=\"!type.isAllocated\" class=\"badge badge-danger\">Not Allocated</span>\n                                      </td>\n                                    <td> \n                                        <a routerLink=\"/allocate_equipment/{{type._id}}\" *ngIf=\"!type.isAllocated\" class=\"btn btn-success\">Allocate</a> \n                                        <button type=\"button\" class=\"btn btn-warning\" *ngIf=\"type.isAllocated\" (click)=\"deallocate($event,type)\" >Deallocate</button>      \n                                    </td>\n                                </tr>\n                                \n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    \n                </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/equipments/equipments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/equipments/equipments.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/equipments/equipments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/equipments/equipments.component.ts ***!
  \***********************************************************/
/*! exports provided: EquipmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsComponent", function() { return EquipmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/api-agent.service */ "./src/app/shared/services/api-agent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EquipmentsComponent = /** @class */ (function () {
    function EquipmentsComponent(api, router) {
        this.api = api;
        this.router = router;
        this.equipments = [];
        this.equipCount = [];
    }
    EquipmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getData('/equipments').then(function (res) {
            if (res['status'] == 1) {
                console.log(res);
                _this.equipments = res['message'];
            }
        });
    };
    EquipmentsComponent.prototype.showDetails = function (e, item) {
        sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("\n            Equipment Name: " + item.name + "\n            Allocated To : " + item.allocatedTo.name + "\n            Collected By : " + item.givenTo + "\n        ");
    };
    EquipmentsComponent.prototype.deallocate = function (e, item) {
        var equipmentId = item._id;
        this.api.getData("/deallocate/" + equipmentId).then(function (res) {
            if (res['status'] == 1) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Great!', 'Equipment Deallocated Successfully', 'success').then(function () {
                    location.reload(true);
                });
            }
        });
    };
    EquipmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-types',
            template: __webpack_require__(/*! ./equipments.component.html */ "./src/app/layout/equipments/equipments.component.html"),
            styles: [__webpack_require__(/*! ./equipments.component.scss */ "./src/app/layout/equipments/equipments.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_api_agent_service__WEBPACK_IMPORTED_MODULE_2__["ApiAgentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EquipmentsComponent);
    return EquipmentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/equipments/equipments.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/equipments/equipments.module.ts ***!
  \********************************************************/
/*! exports provided: EquipmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsModule", function() { return EquipmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/layout/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.component */ "./src/app/layout/equipments/equipments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EquipmentsModule = /** @class */ (function () {
    function EquipmentsModule() {
    }
    EquipmentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_2__["EquipmentsRoutingModule"]],
            declarations: [_equipments_component__WEBPACK_IMPORTED_MODULE_3__["EquipmentsComponent"]]
        })
    ], EquipmentsModule);
    return EquipmentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=equipments-equipments-module.js.map