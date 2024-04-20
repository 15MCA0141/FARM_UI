import { ProductsServiceService } from '../services/products-service.service';
import { ProductInterface } from './../interfaces/product-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: ProductInterface[] = [];

  constructor(private productsService: ProductsServiceService) {}

  ngOnInit() {
    this.productsService.getConfig().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }
}
