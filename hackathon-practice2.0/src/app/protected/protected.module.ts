import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    ActivatedRoute,
    Router,
    Routes
} from '@angular/router';
import { MdTabsModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MdSidenavModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { PopoverModule } from 'ngx-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { Collapse } from '../collapse';

import { MainComponent } from './main/main.component';
import { MetricComponent } from './metric/metric.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { AgentComponent } from './agent/agent.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: 'lead-agent', pathMatch: 'full' },
    { path: 'lead-agent', component: MainComponent },
    { path: 'table', component: TableComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'metric', redirectTo: 'metric/1', pathMatch: 'full' },
    { path: 'metric/:id', component: MetricComponent },
    { path: 'agent', redirectTo: 'agent/1', pathMatch: 'full' },
    { path: 'agent/:id', component: AgentComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    declarations: [
        MainComponent,
        MetricComponent,
        ProfileComponent,
        TableComponent,
        AgentComponent,
        Collapse,
        SettingsComponent,
    ],
    exports: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MdTabsModule,
        HttpModule,
        PopoverModule,
        MdButtonModule,
        MdSnackBarModule,
        BrowserAnimationsModule,
        AmChartsModule,
        MdSidenavModule,
        SimpleNotificationsModule.forRoot(),
    ]
})
export class ProtectedModule { }