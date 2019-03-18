import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {path: '', component: HomeComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    entryComponents: []
})
export class HomeModule {}


