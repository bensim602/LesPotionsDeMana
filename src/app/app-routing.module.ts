import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent} from "./components/app-home/app-home.component";
import {AboutComponent} from "./components/about/about.component";
import {ProductsComponent} from "./components/products/products.component";
import {SellPointsComponent} from "./components/sell-points/sell-points.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path: "", component: AppHomeComponent },
  { path: "a_propos", component: AboutComponent },
  { path: "produits", component: ProductsComponent },
  { path: "points_vente", component: SellPointsComponent },
  { path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
