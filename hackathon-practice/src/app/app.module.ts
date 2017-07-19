import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSidenavModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import {MdTabsModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { UtilsService } from './utils.service';
import { AgentComponent } from './agent/agent.component';

const routes: Routes = [
  { path: '', redirectTo: 'lead-agent', pathMatch: 'full' },
  { path: 'lead-agent', component: MainComponent },
  { path: 'agent/:id', component: AgentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AgentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MdTabsModule,
    AmChartsModule,
    BrowserAnimationsModule,
    MdSidenavModule
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
