import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, Navbar } from 'ionic-angular';
import { ItemProvider } from './itemProvider';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  @ViewChild(Navbar) navBar: Navbar;

  selectedItem: any;
  selectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemProvider: ItemProvider) {
    this.selectedIndex = navParams.get('index');
    this.selectedItem = itemProvider.items[this.selectedIndex];
  }

  ionViewDidEnter() {
    this.navBar.backButtonClick = () => this.goToOverview();
  }

  goBack() {
    this.navCtrl.pop();
  }

  goToOverview() {
    this.navCtrl.goToRoot({});
  }

  goToNext() {
    this.navCtrl.push(ItemDetailsPage, { index: ++this.selectedIndex }, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
  }

  goToPrevious() {
    this.navCtrl.push(ItemDetailsPage, { index: --this.selectedIndex }, { animate: true, animation: 'transition', duration: 500, direction: 'back' });
  }
}
