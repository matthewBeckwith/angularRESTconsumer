import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Product {
  name: String;
  price: Number;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + environment.API_TOKEN })
};

@Injectable()
export class ProductsService {

  private URL = environment.BASE_API_URL;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product>(this.URL + 'products');
  }

  getProduct(id) {
    return this.http.get<Product>(this.URL + 'products/' + id);
  }

  deleteProduct(id) {
    return this.http.delete<Product>(this.URL + 'products/' + id, httpOptions);
  }
}
