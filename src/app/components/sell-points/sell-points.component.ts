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
    new SellPoint("la ferme de Goyet", "goyet.jpg", "goyet.md"),
    new SellPoint("Paysans et Artisans", "paysans-artisans.jpg", "paysans-artisans.md"),
    new SellPoint("Marché de Namur", "marcheNamur.jpg", "marcheNamur.md")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
