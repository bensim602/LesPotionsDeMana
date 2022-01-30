import {Page} from "./page";

export class MenuItem {
  displayName: Page;
  url: string;
  constructor(displayName: Page, url:string) {
    this.displayName = displayName;
    this.url = url;
  }
}
