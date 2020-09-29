import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    UserpageComponent,
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
