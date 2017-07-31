import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    ActivatedRoute,
    Router,
    Routes
} from '@angular/router';

import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent }
];

@NgModule({
    declarations: [
        MainComponent,
    ],
    exports: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ProtectedModule { }