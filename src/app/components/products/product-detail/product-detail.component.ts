import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { IProduct } from '../products';
import { ProductService } from '../products.service';

@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
