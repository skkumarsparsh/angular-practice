import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSidenavModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import {MdTabsModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { UtilsService } from './utils.service'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
