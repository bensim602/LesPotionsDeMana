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
    new Product('les tisanes', 'https://i.ibb.co/THC6QB1/tisane.jpg', 'tisanes.md', "Photo de tisanes"),
    new Product('Les bouquets à infuser', 'https://i.ibb.co/DzBYMv8/bouquets.jpg', 'bouquets.md', "Photo de bouquets à infuser"),
    new Product('Les aromates locaux', 'https://i.ibb.co/RjR6dz7/aromates-locaux.jpg', 'aromates_locaux.md', "Photo d'aromates locaux"),
    new Product('Les aromates frais', 'https://i.ibb.co/mcGjPsw/aromates-frais.jpg', 'aromates_frais.md', "Photo d'aromates frais"),
    new Product('Les sels aromatiques', 'https://i.ibb.co/D1fZq38/sels.jpg', 'sels.md', "Photo de sels aromatiques"),
    new Product('Les fleurs comestibles', 'https://i.ibb.co/0fcf4z2/fleurs.jpg', 'fleurs.md', "Photo de fleurs comestibles"),
    new Product('Les sirops aromatiques', 'https://i.ibb.co/pXZzcJT/sirops.jpg', 'sirops.md', "Photo de sirops aromatiques")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
