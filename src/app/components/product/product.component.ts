import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService, Product } from '../../services/products.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public productId: String;
  public dataLoaded: Boolean = false;
  public apiURL: String = environment.BASE_API_URL;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;

    this.getProduct(this.productId);
  }

  getProduct(id) {
    this.productService.getProduct(id).subscribe(
      data => {
        this.product = data['product'];
        console.log(data);
      },
      err => console.log(err),
      () => {
        console.log('got product: ' + id);
      }
    );
  }
}
