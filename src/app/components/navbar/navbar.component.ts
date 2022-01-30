import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../../model/page'
import {MenuItem} from "../../model/menuItem";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() current_page: Page = Page.FRONT_PAGE;
  frontPage = Page.FRONT_PAGE;
  pages: MenuItem[] = [
    new MenuItem(Page.ABOUT, "/a_propos"),
    new MenuItem(Page.PRODUCTS, "/produits"),
    new MenuItem(Page.SELL_POINTS, "/points_vente"),
    new MenuItem(Page.CONTACT, "/contact")];

  constructor() { }

  ngOnInit(): void {
  }

}
