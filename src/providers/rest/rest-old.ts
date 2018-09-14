import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Product} from "../../models/Product.model";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:3000";
  err: any[];

  constructor(private httpClient : HttpClient) { }

  // Sending a GET request to /products
  public getProducts(): Observable<[Product]> {
    return this.httpClient
      .get(this.baseUrl + '/products')
      .map(products => {
        //console.log(products);
        return products;

      })
      .catch((err) => {
        console.error(err);
      });
  }
// Sending a GET request to /products/:id get a single product by its id
  public getProductById(productId: number): Observable<Product> {
    return this.httpClient
      .get(this.baseUrl + '/products/' + productId)
      .map(response => {
        return new Product(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Sending a POST request to /products Creating New Products
  public createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post(this.baseUrl + '/products', product)
      .map(response => {
        return new Product(response);
      })
      .catch((err)=>{
        console.error(err);
      });
  }

  // Sending a PUT request to /products/:id Updating Existing Products
  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient
      .put(this.baseUrl + '/products/' + product.id, product)
      .map(response => {
        return new Product(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Sending a DELETE request to /products/:id for Deleting Products
  public deleteProductById(productId: number) {
    return this.httpClient
      .delete(this.baseUrl+ '/products/' + productId)
      .catch((err) => {
        console.error(err);
      });
  }

}
