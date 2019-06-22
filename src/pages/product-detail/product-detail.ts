import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Product } from '../../models/product';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product: Product;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.product = this.navParams.get('item');
  }

  addToCart() {
    const toast = this.toastCtrl.create({
      message: 'Its item has been added to cart.',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  goToCart() {
    this.navCtrl.pop();
    this.navCtrl.parent.select(2);
  }

}
