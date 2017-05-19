import { routing } from './app.routing';
import { HttpService } from './http-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { OverviewComponent } from './overview/overview.component';
import { AddeditComponent } from './addedit/addedit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    OverviewComponent,
    AddeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
