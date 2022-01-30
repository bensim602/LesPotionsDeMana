import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  current_page = Page.ABOUT;

  constructor() { }

  ngOnInit(): void {
  }

}
