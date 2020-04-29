import { newArray } from '@angular/compiler/src/util'

// export class Year {
//     months: Month[] = []

//     constructor(year) {
//         const monthName = [
//             'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//         ]
//         var days: []
//         console.log(year)
//         if (year == NaN && year > 1900 && year > 2300) { return }

//         let dYear = new Date(year + "/" + 1 + "/" + 1)
//         if (dYear.getDay() < 5) { var calWeekStart = 1 } else { var calWeekStart = 0 }

//         for (let month = 0; month < 12; month++) {
//             let calWeek: CWeek
//             let dMonth = new Date(year, month, 1)

//             for (let dDay = new Date(year, month, 1); dDay.getMonth() == month; dDay.setDate(dDay.getDate() + 1)) {
//                 // if (dDay.getDay() == 1) { calWeek++ }
//                 calWeek = new CWeek(1, [])
//                 calWeek.Days.push("test")
//                 console.log("tag")
//             }
//             console.log("monat")
//             this.months.push({ Name: monthName[dMonth.getMonth()], CWeek: calWeek })
//         }

//     }
// }
export class Year {
    constructor(
        public Name: Number,
        public Quater = []) { }
}

export class Quater {
    constructor(
        public Name: Number,
        public Month = []) { }
}

export class Month {
    constructor(
        public Name: String,
        public Number: Number,
        public CWeek = []) { }
}

export class CWeek {
    constructor(
        public Name: Number,
        public Days = []) { }
}

export class Days {
    constructor(
        public Title: string,
        public Link: string,
        public NavBar: boolean,
        public View: string) { }
}


export class Day {
    constructor(
        public Year: Number,
        public Month: Number,
        public CWeek: Number,
        public Day: Number,
        public WeekDay: Number,
        public Status: String,
        public Comment: String,
        public Creator: String,
        public Color: String,
        public Class: String
        //public History: Day[]
    ) { }
}
// export class Day {
//     constructor(
//         public Year: Number,
//         public Month: Number,
//         public CWeek: Number,
//         public Day: Number,
//         public WeekDay: Number,
//     ) { }
// }

export class ChangedDay {
    constructor(
    public Date: Date,
    public Status: String,
    public Comment: String,
    public Creator: String,
    public Color: String,
    public Class: String
    ) {}
}

class Feiertag {

    constructor(datum, name) {
        datum = datum;
        name = name;
    }
}
export class RPFeiertage {
    tage: any;

    constructor(jahr) {
        this.tage = [];
        this.tage.push(new Feiertag(new Date(jahr, 0, 1), "Neujahr"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, -48)), "Rosenmontag"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, -2)), "Karfreitag"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, 1)), "Ostermontag"));
        this.tage.push(new Feiertag(new Date(jahr, 4, 1), "Tag der Arbeit"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, 39)), "Christi Himmelfahrt"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, 50)), "Pfingstmontag"));
        this.tage.push(new Feiertag(new Date(OsterSonntag(jahr, 60)), "Fronleichnam"));
        this.tage.push(new Feiertag(new Date(jahr, 9, 3), "Tag der Deutschen Einheit"));
        this.tage.push(new Feiertag(new Date(jahr, 10, 1), "Allerheiligen"));
        this.tage.push(new Feiertag(new Date(jahr, 11, 25), "1. Weihnachtstag"));
        this.tage.push(new Feiertag(new Date(jahr, 11, 26), "2. Weihnachtstag"));
    }
    contains(date) {
        return this.tage.some(element => {
            return (element.datum.getTime() - date.getTime() == 0)
        });
    }
    nachDatum(date) {
        return this.tage.find(element => {
            return (element.datum.getTime() - date.getTime() == 0)
        });
    }

}

function OsterSonntag(Jahr, TagesDifferenz) { // Erstellt von Ralf Pfeifer (pfeifer@arstechnica.de, http://www.arstechnica.de)

    // Falls ausserhalb des gültigen Datumsbereichs, kein Ergebnis zurueckgeben
    if ((Jahr < 1970) || (2099 < Jahr)) { return; }

    // Falls keine TagesDifferenz angegeben, TadgesDifferenz auf 0 setzen.
    if ((TagesDifferenz == "") || (TagesDifferenz == null)) { TagesDifferenz = 0; }

    let a = Jahr % 19;
    let d = (19 * a + 24) % 30;
    let Tag = d + (2 * (Jahr % 4) + 4 * (Jahr % 7) + 6 * d + 5) % 7;
    if ((Tag == 35) || ((Tag == 34) && (d == 28) && (a > 10))) { Tag -= 7; }

    var OsterDatum = new Date(Jahr, 2, 22)
    // 86400000 = 24 h * 60 min * 60 s * 1000 ms
    // Die Zahl 86400000 nicht ausklammern, sonst gibt's Probleme bei der Typumwandlung !!
    // OsterDatum.setTime(OsterDatum.getTime() + 86400000 * TagesDifferenz + 86400000 * Tag)
    OsterDatum.setDate(OsterDatum.getDate() + TagesDifferenz + Tag)

    // Uhrzeit aus dem Datum entfernen
    // OsterDatum = OsterDatum.toLocaleString()
    // OsterDatum = OsterDatum.substring(0, OsterDatum.length - 9);
    return OsterDatum;
}