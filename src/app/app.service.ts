import { Injectable, EventEmitter } from '@angular/core';
import { Nav, Clock } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  appStatus = new EventEmitter<Nav>();
  clock = new EventEmitter<Clock>();
  liveBit: boolean = false


  initNav() {
    return new Nav("Paul Clan", "Home", true, "Desktop")
  }

  initClock() {
    let date = new Date()
    let dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return new Clock(
      dayName[date.getUTCDay()],
      date.getFullYear().toString() + " / " + date.toString().slice(4, 7) + " / " + date.getDate().toString(),
      date.toString().slice(16, 24),
      date.toString().slice(34),
      true
    )
  }


  timefunction() {

    setInterval(() => {
      //if (!this.liveBit) { console.log("click") } else { console.log("clack") }
      this.liveBit = !this.liveBit
      let date = new Date()
      let dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

      this.clock.emit(new Clock(
        dayName[date.getUTCDay()],
        date.getFullYear().toString() + " / " + date.toString().slice(4, 7) + " / " + date.getDate().toString(),
        date.toString().slice(16, 24),
        date.toString().slice(34),
        !this.liveBit
      ))
    }, 1000);
  }

}
