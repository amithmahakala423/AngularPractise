import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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


    filteredProducts: IProduct[];

    products: IProduct[] = [
    
           {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "https://wepushbuttons.com.au/wp-content/uploads/2012/03/twitter-logo-small.jpg"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://wepushbuttons.com.au/wp-content/uploads/2012/03/twitter-logo-small.jpg"
            }
    ]; 

    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log("In Init funciton of ngInit")
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = "cart";
    }
}
