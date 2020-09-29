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
import { MatchhistoryComponent } from './components/matchhistory/matchhistory.component';
import { ExperimentationPageComponent } from './components/experimentation-page/experimentation-page.component';
import { NgxcharttestComponent } from './components/ngxcharttest/ngxcharttest.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    UserpageComponent,
    MatchhistoryComponent,
    ExperimentationPageComponent,
    NgxcharttestComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    AppRoutingModule,
    MatTableModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
