import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  selectedProdId: number = 0;
  // selectedProduct: ProductInterface[] = [];
  selectedProduct: any = {};

  constructor(private productsService: ProductsServiceService) {}

  ngOnInit() {
    this.productsService.getConfig().subscribe((data: any) => {
      console.log(data[this.productsService.selectedProdId]);
      this.selectedProduct = data[this.productsService.selectedProdId];
    });
  }
}
