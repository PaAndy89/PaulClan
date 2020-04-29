export class Nav {
    constructor(
        public Title: string,
        public Link: string,
        public NavBar: boolean,
        public View: string) { }
}

export class Clock {
    constructor(
        public WeekDay: string,
        public Date: string,
        public Time: string,
        //public TimeZone: date.toString().slice(25)
        public TimeZone: string,
        public LiveBit: boolean
    ) { }
};