import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
