import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { AssignmentsPage } from '../assignments/assignments';
import { ListPage } from '../list/list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  assignmentsPage = AssignmentsPage;
  listPage = ListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
