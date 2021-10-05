import { Component } from '@angular/core';
import { SideNavMenuItem } from './sidenavbody/SideNavMenuItem';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // page = [
  //   {
  //     title: 'Notes',
  //     url: '/home',
  //     icon: 'bulb'
  //   },
  //   {
  //     title: 'Reminders',
  //     url: '/reminders',
  //     icon: 'notifications'
  //   },
  //   {
  //     title: 'Labels',
  //     url: '/labels',
  //     icon: 'add'
  //   }
  // ];

  pages : Array<SideNavMenuItem> = new Array<SideNavMenuItem> ()
  constructor() {
    this.pages.push(new SideNavMenuItem('Notes','/home','bulb-outline'))
    this.pages.push(new SideNavMenuItem('Reminders','/reminders','notifications-outline'))
    this.pages.push(new SideNavMenuItem('Labels','/labels','add-outline'))
    this.pages.push(new SideNavMenuItem('Add Note','/add-note','add-circle-outline'))
    this.pages.push(new SideNavMenuItem('Home Clone','/home-clone','accessibility-outline'))

  }

}
