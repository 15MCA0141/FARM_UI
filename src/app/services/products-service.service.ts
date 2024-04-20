import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from './../interfaces/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private configUrl = 'http://127.0.0.1:8000/api';
  private products: ProductInterface[] = [];
  selectedProduct: ProductInterface[] = [];
  selectedProdId: number = 0;
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<ProductInterface>(this.configUrl);
  }

  getAllProducts() {
    this.getConfig().subscribe((data: any) => {
      return data;
    });
  }

  // selectedProduct(id: number) {
  //   this.getConfig().subscribe((data: any) => {
  //     this.selectedProduct = data[id];
  //     console.log(this.selectedProduct);
  //   });
  // }
}
