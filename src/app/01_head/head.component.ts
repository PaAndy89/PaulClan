import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

import { Nav, Clock } from '../app.model'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  clock: Clock
  nav: Nav
  displayLinks: boolean = false
  links: Array<string[any]> = ['Home', 'Recipes', 'Meal Plan', 'Shopping List', 'Shift Plan']

  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.nav = this.AppService.initNav()
    this.AppService.appStatus
      .subscribe(
        (nav: Nav) => {
          this.nav = nav
        }
      );

    this.clock = this.AppService.initClock()
    this.AppService.clock
      .subscribe(
        (clock: Clock) => {
          this.clock = clock
        }
      );
    this.AppService.timefunction()
  }

  onSelect(link) {
    var title = "Paul " + link
    this.AppService.appStatus.emit({ Title: title, Link: link, NavBar: true, View: this.nav.View })
  }

  liveBit() {
    if (this.clock.LiveBit) return "silver"
  }
}

