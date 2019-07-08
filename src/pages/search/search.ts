import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductService } from '../../providers/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  products: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService
    ) {
  }

  ionViewDidLoad() {
    this.initializeItems();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  initializeItems() {
    this.productService.getProducts().subscribe((item: Product[]) => {
      this.products = item;
    });
  }

  getItems(ev) {
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.products = this.products.filter(item => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToProductDetailPage(item) {
    this.navCtrl.push(ProductDetailPage, { item });
  }

}
