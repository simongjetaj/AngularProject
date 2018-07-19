import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2009",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2010",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 3.4,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
  ];

  constructor() { 
    this.filteredProducts = this.products;
  }

  ngOnInit() {
  }

  filterProducts(filterBy: string) {

    filterBy = filterBy.toLocaleLowerCase().trim();
    // console.log(filterBy)
    if(filterBy == '') {
        this.products = this.products;
    }
    if(filterBy != null) {
      this.filteredProducts = this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } 
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
