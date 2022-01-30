import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  current_page = Page.PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
