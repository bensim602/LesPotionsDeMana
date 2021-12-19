import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent} from "./components/app-home/app-home.component";
import {SecondComponent} from "./components/second/second.component";

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'test', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
