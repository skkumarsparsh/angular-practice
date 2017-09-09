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
import { MdCardModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { PopoverModule } from 'ngx-popover';
import { DragulaModule } from 'ng2-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Collapse } from '../collapse';

import { MainComponent } from './main/main.component';
import { MetricComponent } from './metric/metric.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component';
import { AgentsComponent } from './agents/agents.component';
import { MetricsComponent } from './metrics/metrics.component';
import { CompareagentsComponent } from './compareagents/compareagents.component';
import { CompareagentComponent } from './compareagent/compareagent.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'lead-agent', component: MainComponent },
    { path: 'table', component: TableComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'metric', redirectTo: 'metric/1', pathMatch: 'full' },
    { path: 'metric/:id', component: MetricComponent },
    { path: 'agent', redirectTo: 'agent/1', pathMatch: 'full' },
    { path: 'agent/:id', component: AgentComponent },
    { path: 'agents', component: AgentsComponent },
    { path: 'compare-agents', component: CompareagentsComponent },
    { path: 'metrics', component: MetricsComponent }
];

@NgModule({
    declarations: [
        MainComponent,
        MetricComponent,
        ProfileComponent,
        TableComponent,
        AgentComponent,
        Collapse,
        HomeComponent,
        AgentsComponent,
        MetricsComponent,
        CompareagentsComponent,
        CompareagentComponent
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
        MdCardModule,
        DragulaModule,
        NgxChartsModule,
        MdButtonModule,
        MdSnackBarModule,
        BrowserAnimationsModule,
        AmChartsModule,
        MdSidenavModule,
        SimpleNotificationsModule.forRoot(),
    ]
})
export class ProtectedModule { }