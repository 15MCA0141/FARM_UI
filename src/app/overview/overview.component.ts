import { Component } from '@angular/core';
import { ProductInterface } from './../interfaces/product-interface';
import { ProductsServiceService } from '../services/products-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  products: ProductInterface[] = [];
  selectedProduct: ProductInterface[] = [];

  constructor(
    private productsService: ProductsServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsService.getConfig().subscribe((data: any) => {
      this.products = data;
    });
  }

  goToProduct(id: number) {
    this.productsService.getConfig().subscribe((data: any) => {
      // this.selectedProduct = data[id];
      // this.productsService.selectedProduct = data[id];
      this.productsService.selectedProdId = id;
      this.router.navigate(['/product/' + id]);
    });
  }
}
