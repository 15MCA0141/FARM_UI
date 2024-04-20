import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsServiceService } from './services/products-service.service';
import { OverviewComponent } from './overview/overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, OverviewComponent, ProductDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
