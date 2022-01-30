import { Component, OnInit } from '@angular/core';
import {Page} from "../../model/page";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  current_page = Page.CONTACT;

  constructor() { }

  ngOnInit(): void {
  }

}
