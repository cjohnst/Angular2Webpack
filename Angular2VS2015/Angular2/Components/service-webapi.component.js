"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_service_1 = require('../Services/customer.service');
var ServiceWebAPIComponent = (function () {
    function ServiceWebAPIComponent(customerService) {
        this.customerService = customerService;
        this.customer = {};
        this.selectedCustomer = {};
        this.customersWorking = false;
    }
    ServiceWebAPIComponent.prototype.ngOnInit = function () {
        this.getList();
        this.getDetail();
    };
    ServiceWebAPIComponent.prototype.getList = function () {
        var _this = this;
        this.customersWorking = true;
        this.customerService.List()
            .subscribe(function (data) {
            _this.customersWorking = false;
            console.log("List");
            console.log(data);
            _this.customers = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    ServiceWebAPIComponent.prototype.getDetail = function () {
        var _this = this;
        this.customerService.Detail(2)
            .subscribe(function (data) {
            console.log("Detail");
            console.log(data);
            _this.customer = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    ServiceWebAPIComponent = __decorate([
        core_1.Component({
            selector: 'service-webapi',
            templateUrl: 'service-webapi.component.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], ServiceWebAPIComponent);
    return ServiceWebAPIComponent;
}());
exports.ServiceWebAPIComponent = ServiceWebAPIComponent;
//# sourceMappingURL=service-webapi.component.js.map