import { Injectable, EventEmitter } from '@angular/core';
import { ChangedDay } from './shift-plan.model';

@Injectable({
    providedIn: 'root'
})
export class ShiftPlanService {

    constructor() { }

    public ChangedDays: ChangedDay[] = [
        new ChangedDay(new Date(2020, 2, 20), "test", "testcomment", "Andy", "green", null),
        new ChangedDay(new Date(2020, 5, 10), "test", "testcomment", "Andy", "green", null),
        new ChangedDay(new Date(2020, 4, 5), "Morning", "testcomment", "Andy", "orange", null),
        new ChangedDay(new Date(2020, 3, 30), "Night", "testcomment", "Andy", "blue", null),
        new ChangedDay(new Date(2020, 8, 10), "Leave", "Ruths Birthday", "Andy", "pink", null),
    ]

    public addChangedDay(day: ChangedDay) {
        this.ChangedDays.push(day)
    }

}
