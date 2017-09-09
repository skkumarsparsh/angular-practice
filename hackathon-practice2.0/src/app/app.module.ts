import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MdSidenavModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular/material';
import { PopoverModule } from 'ngx-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { routes as childRoutes, ProtectedModule } from './protected/protected.module';
import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { UtilsService } from './protected/utils.service';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logged-in', component: ProtectedComponent, children: childRoutes, canActivate: [LoggedInGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ProtectedModule,
    PopoverModule,
    FormsModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdButtonModule,
    BrowserAnimationsModule,
    AmChartsModule,
    MdSidenavModule,
    MdSelectModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
