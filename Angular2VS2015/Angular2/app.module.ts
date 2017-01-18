import { NgModule }       from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule  }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

//Directives
import { HighlightDirective } from './Directives/highlight.directive';

//Components
import { AppComponent }        from './app.component';
import { LeftNavComponent }        from './left-nav.component';
import { MainComponent }        from './Components/main.component';
import { DirHighlightComponent }   from './Components/dir-highlight.component';
import { ServiceWebAPIComponent } from './Components/service-webapi.component';



//Services
import { CategoriesService } from './Services/category.service';
import { CustomerService } from './Services/customer.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule, HttpModule, JsonpModule
    ],
    declarations: [
        HighlightDirective,
        AppComponent,
        LeftNavComponent,
        MainComponent,
        DirHighlightComponent,
        ServiceWebAPIComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CategoriesService,
        CustomerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
