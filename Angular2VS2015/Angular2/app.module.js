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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
//Directives
var highlight_directive_1 = require('./Directives/highlight.directive');
//Components
var app_component_1 = require('./app.component');
var left_nav_component_1 = require('./left-nav.component');
var main_component_1 = require('./Components/main.component');
var dir_highlight_component_1 = require('./Components/dir-highlight.component');
var service_webapi_component_1 = require('./Components/service-webapi.component');
//Services
var category_service_1 = require('./Services/category.service');
var customer_service_1 = require('./Services/customer.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule, http_1.HttpModule, http_1.JsonpModule
            ],
            declarations: [
                highlight_directive_1.HighlightDirective,
                app_component_1.AppComponent,
                left_nav_component_1.LeftNavComponent,
                main_component_1.MainComponent,
                dir_highlight_component_1.DirHighlightComponent,
                service_webapi_component_1.ServiceWebAPIComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                category_service_1.CategoriesService,
                customer_service_1.CustomerService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map