import { Day, Month, Quater, Year, CWeek, ChangedDay } from './shift-plan.model';

export class CalendarFunctions {
    static cWeekTemp: number = -1;
    static monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    static changedDays: ChangedDay[]

    static createCalendar(year, changedDays) {
        let days = [];
        let init: boolean = true;
        let CWeek: number;
        this.changedDays = changedDays

        for (let dDay = new Date(year, 0, 1); dDay.getFullYear() == year; dDay.setDate(dDay.getDate() + 1)) {
            if (init) {
                if (dDay.getUTCDay() < 4) { CWeek = 1 } else { CWeek = 0 }
                init = false
                days.push(new Day(dDay.getFullYear(), dDay.getMonth(), CWeek, dDay.getDate(), dDay.getUTCDay(), null, null, null, null, null))
            } else {
                if (dDay.getDay() == 1) { CWeek++ }
                days.push(new Day(dDay.getFullYear(), dDay.getMonth(), CWeek, dDay.getDate(), dDay.getUTCDay(), null, null, null, null, null))
            }
        }

        return new Year(year, this.addQuater(days))
    }

    static addQuater(days) {
        let quaters = []

        for (let quater = 1; quater < 5; quater++) {
            quaters.push(new Quater(quater, this.addMonth(quater, days)))
        }
        return quaters
    }

    static addMonth(quater, days) {
        let months = []

        if (quater == 1) {
            for (let month = 0; month < 3; month++) {
                months.push(new Month(this.monthName[month], month, this.addCWeek(month, days, true)))
            }
            return months
        }
        if (quater == 2) {
            for (let month = 3; month < 6; month++) {
                months.push(new Month(this.monthName[month], month, this.addCWeek(month, days, true)))
            }
            return months
        }
        if (quater == 3) {
            for (let month = 6; month < 9; month++) {
                months.push(new Month(this.monthName[month], month, this.addCWeek(month, days, true)))
            }
            return months
        }
        if (quater == 4) {
            for (let month = 9; month < 12; month++) {
                months.push(new Month(this.monthName[month], month, this.addCWeek(month, days, true)))
            }
            return months
        }

    }

    static addCWeek(month, days, newMonth) {
        let cWeeks = []
        let daysInMonth = days

        for (let i of daysInMonth) {
            if (i.Month == month) {
                if (newMonth) {
                    this.cWeekTemp = i.CWeek
                    cWeeks.push(new CWeek(i.CWeek, this.addDays(i, days)))
                    newMonth = false
                } else {
                    if (this.cWeekTemp < i.CWeek) {
                        this.cWeekTemp = i.CWeek
                        cWeeks.push(new CWeek(i.CWeek, this.addDays(i, days)))
                    }
                }
            }
        }

        return cWeeks
    }

    static addDays(week, days) {
        let newDays = [
            new Day(null, null, null, null, 0, null, null, null, null, null),
            new Day(null, null, null, null, 1, null, null, null, null, null),
            new Day(null, null, null, null, 2, null, null, null, null, null),
            new Day(null, null, null, null, 3, null, null, null, null, null),
            new Day(null, null, null, null, 4, null, null, null, null, null),
            new Day(null, null, null, null, 5, null, null, null, null, null),
            new Day(null, null, null, null, 6, null, null, null, null, null),
        ]
        let daysOfWeek = days

        for (let day of daysOfWeek) {

            if (day.CWeek == week.CWeek) {
                var changedDay = this.changedDays.find(obj => {
                    return obj.Date.getFullYear() == day.Year && obj.Date.getMonth() == day.Month && obj.Date.getDate() == day.Day
                })

                if (changedDay) {

                    if (day.WeekDay > 4) {
                        newDays[day.WeekDay] = (new Day(day.Year, day.Month, day.CWeek, day.Day, day.WeekDay, changedDay.Status, changedDay.Comment, changedDay.Creator, changedDay.Color, "col-xs-1"))
                    } else {
                        newDays[day.WeekDay] = (new Day(day.Year, day.Month, day.CWeek, day.Day, day.WeekDay, changedDay.Status, changedDay.Comment, changedDay.Creator, changedDay.Color, "col-xs-2"))
                    }

                } else {

                    if (day.WeekDay > 4) {
                        newDays[day.WeekDay] = (new Day(day.Year, day.Month, day.CWeek, day.Day, day.WeekDay, "Morning", "test", null, "gray", "col-xs-1"))
                    } else {
                        newDays[day.WeekDay] = (new Day(day.Year, day.Month, day.CWeek, day.Day, day.WeekDay, "Morning", "test", null, "white", "col-xs-2"))
                    }
                }

            }
        }

        return newDays
    }

    static applyShift(day) {
        return [null, null, null]
    }

}
