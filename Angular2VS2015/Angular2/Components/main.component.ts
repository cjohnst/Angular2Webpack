import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'main',
    template: '{{title}}'
})

export class MainComponent implements OnInit {
    title = 'Main Component';
    errorMessage: string;
    categories: any[];




    ngOnInit() {
       // this.getCategories();
    }


}  