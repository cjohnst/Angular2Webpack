import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { Customer } from '../Classes/customer';


@Component({
    selector: 'service-webapi',
    templateUrl: 'service-webapi.component.html'
})


export class ServiceWebAPIComponent implements OnInit {

    errorMessage: string;
    customers: any[];
    customer: any = {};
    selectedCustomer: any = {};
    customersWorking: boolean = false;
    

    constructor(private customerService: CustomerService) { }

    ngOnInit() {

        this.getList();
        this.getDetail();

    }

    getList() {

        this.customersWorking = true;

        this.customerService.List()
            .subscribe(
            data => {
                this.customersWorking = false;

                console.log("List");
                console.log(data);
                this.customers = data;
            },
            error => this.errorMessage = <any>error);
    }


    getDetail() {
        this.customerService.Detail(2)
            .subscribe(
            data => {
                console.log("Detail");
                console.log(data);
                this.customer = data;
            },
            error => this.errorMessage = <any>error);
    }


}




