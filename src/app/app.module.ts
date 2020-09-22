import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MatchhistoryComponent } from './matchhistory/matchhistory.component';
import { ExperimentationPageComponent } from './experimentation-page/experimentation-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    UserpageComponent,
    MatchhistoryComponent,
    ExperimentationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
