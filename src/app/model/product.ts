export class Product {
  name: string;
  img: string;
  description: string;
  imgDescr: string;

  constructor(name: string, img: string, description: string, imgDescr: string) {
    this.name = name;
    this.img = img;
    this.description = description;
    this.imgDescr = imgDescr;
  }
}
