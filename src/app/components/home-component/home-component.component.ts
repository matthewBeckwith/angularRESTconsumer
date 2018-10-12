import { Component, OnInit } from '@angular/core';

import { ProductsService, Product } from '../../services/products.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit {

  public products: Product;
  public product: Product;
  public apiURL: String = environment.BASE_API_URL;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data['products'];
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done loading products')
    );
  }
}
