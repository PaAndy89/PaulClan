import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Nav } from '../app.model'

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html'
})
export class FootComponent implements OnInit {

  nav: Nav
  viewArray = ["Desktop", "Mobile", "Tablet"]
  view: string = this.viewArray[0]


  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.nav = this.AppService.initNav()
    this.AppService.appStatus
      .subscribe(
        (nav: Nav) => {
          this.nav = nav
        }
      );
  }

  onSelect(view) {
    this.view = view
    this.AppService.appStatus.emit({ Title: this.nav.Title, Link: this.nav.Link, NavBar: this.nav.NavBar, View: view })
  }

  activeView(viewLink) {
    if (this.view == viewLink) { return "lightgreen" }
  }

}
