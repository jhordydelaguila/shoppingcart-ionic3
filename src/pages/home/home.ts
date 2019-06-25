import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Product } from '../../models/product';
import { ProductService } from '../../providers/product-service';
import { CartService } from '../../providers/cart-service';

import { Observable } from 'rxjs/Rx';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Observable<Product[]>;
  productsInPromotion: Observable<Product[]>;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public productService: ProductService,
    public cartService: CartService
  ) {
  }

  ionViewDidLoad() {
    this.getProducts();
    this.getProductosInPromotion();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  getProductosInPromotion() {
    this.productsInPromotion = this.productService.getProductsInPromotion();
  }

  goToProductDetailPage(item) {
    this.navCtrl.push(ProductDetailPage, { item });
  }

  addToCart(item: Product) {
    let qty = 1;
    this.cartService.addCartItem(item, qty).then(() => {
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

}
