import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from './Components/main.component';
import { DirHighlightComponent } from './Components/dir-highlight.component';
import { ServiceWebAPIComponent } from './Components/service-webapi.component';


const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'dir-highlight', component: DirHighlightComponent },
    { path: 'service-webapi', component: ServiceWebAPIComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
 