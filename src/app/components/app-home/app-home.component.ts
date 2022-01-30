import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  current_page = Page.FRONT_PAGE;

  constructor() { }

  ngOnInit(): void {
  }

}
