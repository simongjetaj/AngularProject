import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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
  errorMessage: string;

  filteredProducts: IProduct[] = [];

  products: IProduct[];

  constructor(private productService: ProductService) { 
    // this.filteredProducts = this.products;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => { 
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
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
