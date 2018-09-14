import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from './../../providers/login/login';
import {HttpClient} from "../../../node_modules/@angular/common/http";


/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {
  }

  token = this.loginProvider.login();

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');

    //console.log(this.loginProvider.login());
  }

}
