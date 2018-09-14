import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { RestProvider } from './../../providers/rest/rest';
import {Product} from "../../models/Product.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  private products : Product[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }
//, public restProvider: RestProvider

onCreateProduct(product) {
  this.restProvider
    .createProduct(product)
    .subscribe(
      (newProduct) => {
        this.products = this.products.concat(newProduct);
      }
    );
}

onUpdateProduct(product) {
  this.restProvider
    .updateProduct(product)
    .subscribe(
      (updatedProduct) => {
        /* You can assign back the updated product to the model holding               the form's product*/
      }
    );
}

onRemoveProduct(product) {
  this.restProvider
    .deleteProductById(product.id)
    .subscribe(
      () => {
        this.products = this.products.filter((e) => e.id !== product.id);
      }
    );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
   // this.restProvider.getProducts().subscribe((products : Product[])=>{
    //  this.products = products;
   // });
  }

}
