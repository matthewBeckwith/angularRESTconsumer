import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsService } from './services/products.service';
import { AddProductComponent } from './components/add-product/add-product.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'addproduct', component: AddProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
