import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AdminInfluencerComponent} from './influencer/influencer.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: AdminInfluencerComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    declarations: [
        AdminInfluencerComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    entryComponents: []
})
export class AdminModule {}



