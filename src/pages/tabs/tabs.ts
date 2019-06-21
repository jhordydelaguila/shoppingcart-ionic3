import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CartPage;

  constructor() {
  }

}
