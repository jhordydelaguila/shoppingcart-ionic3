import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ProductDetailPage } from '../product-detail/product-detail';

import { CartService } from '../../providers/cart-service';

import { CartItem } from '../../models/cart-item';
import { Cart } from '../../models/cart';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cart: Cart;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public cartService: CartService
  ) {
    this.cart = new Cart();
  }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.onLoadCart();
  }

  ionViewDidEnter() {
  }

  onLoadCart() {
    this.cartService.getContent().then((data: CartItem[]) => {
      if (data === null) {
        this.cart.cartItems = [];
        data = [];
      }

      this.cart.cartItems = data.map((cartItem: CartItem) => new CartItem().deserialize(cartItem));
    });
  }

  incrementQty(item: CartItem) {
    let qty = item.qty;
    qty++;
    this.cartService.addCartItem(item.product, qty).then(() => {
      this.onLoadCart();
    });
  }

  decreaseQty(item: CartItem) {
    let qty = item.qty;
    qty--;

    if (qty >= 1) {
      this.cartService.addCartItem(item.product, qty).then(() => {
        this.onLoadCart();
      });
    }
  }

  removeAllCart() {
    let alert = this.alertCtrl.create({
      title: 'Remove all items',
      message: 'Do you want to remove this items?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Yes',
          handler: () => {
            this.cartService.removeAllCart().then(() => {
              this.onLoadCart();
            });
          }
        }
      ]
    });
    alert.present();
  }

  removeItemOfCart(posCartItem) {
    let alert = this.alertCtrl.create({
      title: 'Remove item',
      message: 'Do you want to remove this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Yes',
          handler: () => {
            this.cartService.removeFromCart(posCartItem).then(() => {
              this.onLoadCart();
            });
          }
        }
      ]
    });
    alert.present();
  }

  goToHome() {
    this.navCtrl.parent.select(0);
  }

  gotToProductDetail(item) {
    this.navCtrl.push(ProductDetailPage, { item });
  }

}
