import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  products: IProduct[]; 
  errorMessage: string;
  product1: any;
  id: string;
  filteredProducts: IProduct[];

  constructor(private _route : ActivatedRoute, private _router: Router, private _productService: ProductService) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  onBack(): void{
    this._router.navigate(['./products']);
  }
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.id = `${id}`;
    this._productService.getProducts().subscribe(products =>{
          this.products = products, 
          this.filteredProducts = this.products;
        },
          error => this.errorMessage = <any>error,
        );

        console.log("All products once again" + JSON.stringify(this.filteredProducts));
  }

}
