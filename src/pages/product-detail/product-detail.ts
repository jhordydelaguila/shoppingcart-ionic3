import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';

import { Product } from '../../models/product';
import { CartService } from '../../providers/cart-service';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  qty: number = 1;
  product: Product;
  countCartItems: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public events: Events,
    public cartService: CartService
  ) {
    this.product = new Product();
    this.product = this.navParams.get('item');

    this.events.subscribe('cart:added', (countItems) => {
      this.countCartItems = countItems;
    });
  }

  ionViewDidLoad() {
    this.cartService.getCountCartItems().then((data) => {
      this.countCartItems = data;
    });
  }

  ionViewDidLeave() {
    this.events.unsubscribe('cart:added', (countItems) => {
    });
  }

  incrementQty() {
    this.qty++;
  }

  decreaseQty() {
    this.qty--;
    if (this.qty === 0) {
      this.qty = 1;
    }
  }

  addToCart(item: Product) {
    this.cartService.addCartItem(item, this.qty).then(() => {
      const toast = this.toastCtrl.create({
        message: 'This item has been added to cart',
        duration: 2000,
        position: 'bottom',
        cssClass: 'customToastClass',
        dismissOnPageChange: true,
      });
      toast.present();
    });
  }

  goToCart() {
    this.navCtrl.pop();
    this.navCtrl.parent.select(2);
  }

}
