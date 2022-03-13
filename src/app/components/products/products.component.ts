import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";
import {Product} from "../../model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  current_page = Page.PRODUCTS;
  products: Product[] = [
    new Product('les tisanes', 'tisanes.JPG', 'tisanes.md'),
    new Product('Les bouquets à infuser', 'bouquets.JPG', 'bouquets.md'),
    new Product('Les aromates locaux', 'aromates_locaux.JPG', 'aromates_locaux.md'),
    new Product('Les aromates frais', 'aromates_frais.JPG', 'aromates_frais.md'),
    new Product('Les sels aromatiques', 'sels.JPG', 'sels.md'),
    new Product('Les fleurs comestibles', 'fleurs.JPG', 'fleurs.md'),
    new Product('Les sirops aromatiques', 'sirops.JPG', 'sirops.md')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
