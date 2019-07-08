import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';

import { CartService } from '../../providers/cart-service';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CartPage;
  countCartItems: number;

  constructor(
    public events: Events,
    public cartService: CartService
  ) {
    this.events.subscribe('cart:added', (countItems) => {
      this.countCartItems = countItems;
    });
  }

  ionViewDidLoad() {
    this.cartService.getCountCartItems().then((data) => {
      this.countCartItems = data;
    });
  }

}
