import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AssignmentsProvider } from './assignmentsProvider';
import { Assignment } from './assignment.class';

@Component({
  template: `
  <ion-list>
    <ion-list-header>Options</ion-list-header>
    <button ion-item (click)="addAssignment()">Add new assignment</button>
    <button ion-item (click)="removeAllSelected()">Remove selected</button>
  </ion-list>`
})
export class PopoverPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public assignmentsProvider: AssignmentsProvider,
    public alertCtrl: AlertController) {
  }

  addAssignment() {
    let alert = this.alertCtrl.create({
      title: 'Add assignment',
      inputs: [
        { name: 'title', placeholder: 'Title' },
        { name: 'content', placeholder: 'Content' }
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Add', handler: data => {
            this.assignmentsProvider.addAssignment(data.title, data.content);
          }
        }
      ]
    });
    alert.present();
    this.viewCtrl.dismiss();
  }

  removeAllSelected() {
    let alert = this.alertCtrl.create({
      title: 'Remove all checked?',
      message: 'Remove all checked assignments? This cannot be undone.',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete', role: 'delete',
          handler: () => {
            this.assignmentsProvider.removeUncheckedAssignments();
          }
        }
      ]
    });
    alert.present();
    this.viewCtrl.dismiss(); 
  }
}
