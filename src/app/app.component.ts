import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{title}}</h1>
    <pm-products></pm-products>
  </div>`,
  providers: [ProductService],
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
