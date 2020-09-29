import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentationPageComponent } from "./components/experimentation-page/experimentation-page.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { UserpageComponent } from "./components/userpage/userpage.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'experiment', component: ExperimentationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
