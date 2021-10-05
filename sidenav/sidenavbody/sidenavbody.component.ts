import { Component, Input, OnInit } from '@angular/core'
import { SideNavMenuItem } from './SideNavMenuItem';

@Component({
  selector: 'app-sidenavbody',
  templateUrl: './sidenavbody.component.html',
  styleUrls: ['./sidenavbody.component.scss'],
})
export class SidenavbodyComponent implements OnInit {
@Input() Pages: Array<SideNavMenuItem>;
  constructor() { }

  ngOnInit() {
    console.log(this.Pages);
  }

}




