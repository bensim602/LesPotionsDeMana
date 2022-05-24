import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";
import {SellPoint} from "../../model/sellPoint";

@Component({
  selector: 'app-sell-points',
  templateUrl: './sell-points.component.html',
  styleUrls: ['./sell-points.component.css']
})
export class SellPointsComponent implements OnInit {

  current_page = Page.SELL_POINTS;
  sell_points: SellPoint[] = [
    new SellPoint("la ferme de Goyet", "https://i.ibb.co/RvLn4mj/goyet.jpg", "goyet.md", "Photo de la ferme de Goyet"),
    new SellPoint("Paysans et Artisans", "https://i.ibb.co/4mLqr8Z/paysans-artisans.jpg", "paysans-artisans.md", "Logo Paysans et Artisans"),
    new SellPoint("Marché de Namur", "https://i.ibb.co/PrNNcr5/marche-Namur.jpg", "marcheNamur.md", "Vente de produits au marché")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
