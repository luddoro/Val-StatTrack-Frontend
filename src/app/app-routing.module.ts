import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { UserpageComponent } from "./userpage/userpage.component";


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'user', component: UserpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
