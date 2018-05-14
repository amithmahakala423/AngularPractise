import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.compoment.css']
})
export class ProductListComponent implements OnInit{
    
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'Hello'

    _listFilter: string;


    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    get listFilter(): string{
        return this._listFilter;

    }

    onRatingClicked(message: string): void{
        this.pageTitle = "Product List: " + message;
    }


    filteredProducts: IProduct[];

    products: IProduct[]; 

    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log("In Init funciton of ngInit")
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;

    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private _productService: ProductService) {
    }
}
