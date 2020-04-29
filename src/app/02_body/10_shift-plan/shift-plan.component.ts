import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { Year, Day, ChangedDay } from './shift-plan.model'
import { AppService } from '../../app.service'
import { ShiftPlanService } from './shift-plan.service'
import { CalendarFunctions } from './shift-plan.Calendar.Functions'

@Component({
  selector: 'app-shift-plan',
  templateUrl: './shift-plan.component.html'
})

export class ShiftPlanComponent implements OnInit {
  year: number = 2020;
  calendar: Year;
  newMonth: boolean = false;
  yearNow: number = new Date().getFullYear()
  result: any;
  sendStatus: string

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private AppService: AppService, private ShiftPlanService: ShiftPlanService) { }

  ngOnInit(): void {
    this.calendar = CalendarFunctions.createCalendar(this.year, this.ShiftPlanService.ChangedDays)
  }

colorCode(status){
  console.log("get color")
  const colorCode = {
    Holiday: "red",
    Leave: "gray",
    Sick: "gray",
    Training: "yellow",
    Morning: "orange",
    Afternoon: "lightblue",
    Night: "blue"
  }
  console.log(status)
  return colorCode[status]
}
  changeYear(value) {
    if (value == 'NOW') {
      this.year = new Date().getFullYear();
    } else {
      this.year = this.year + value;
    };
    this.calendar = CalendarFunctions.createCalendar(this.year, this.ShiftPlanService.ChangedDays)
  };

  yearCheck() {
    return "green"
  }

  openDialog(Month, Day, day) {
    console.log("open Dialog", Month, Day, day)
    const dialogRef = this.dialog.open(ShiftPlanComponentDialog, {
      width: '600px',
      data: {
        Day: day,
        userName: "Dummy Name",
        userID: "Dummy UserID"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return }
      this.openSendSnackBar("Sending... " + result.Day.Comment)
      this.result = result;
      let color = this.colorCode(result.Day.Status)
      let changedDay: ChangedDay = new ChangedDay(new Date(result.Day.Year, result.Day.Month, result.Day.Day), result.Day.Status, result.Day.Comment, "Dummy Name", color, null)
      this.ShiftPlanService.addChangedDay(changedDay)
      this.calendar = CalendarFunctions.createCalendar(this.year, this.ShiftPlanService.ChangedDays)
      this.openSuccessSnackBar("Change Saved")
    });
  }

  openSendSnackBar(message: string) {
    this._snackBar.open(message, "OK", {
      duration: 500000,
      panelClass: ['snackbar-send'],
    });
  }
  openErrorSnackBar(message: string) {
    this._snackBar.open(message, "OK", {
      duration: 10000,
      panelClass: ['snackbar-error'],
    });
  }
  openSuccessSnackBar(message: string) {
    this._snackBar.open(message, "OK", {
      duration: 5000,
      panelClass: ['snackbar-success'],
    });
  }
}

export interface DialogData {
  Day: Day,
  comment: string,
  status: string,
  userName: string,
  userID: string
}

@Component({
  selector: 'shift-plan.component-dialog',
  templateUrl: 'shift-plan.component-dialog.html',
})
export class ShiftPlanComponentDialog {

  absent = ["Leave", "Sick", "Training"];
  shifts = ["Morning", "Afternoon", "Night"];
  actualShift: string;
  actualComment: string;

  constructor(
    public dialogRef: MatDialogRef<ShiftPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.actualShift = data.status
    if (data.status != data.comment) {
      this.actualComment = data.comment
    } else { this.actualComment = "" }
  }

  abort(): void {
    this.dialogRef.close();
  }

  monthName(i) {
    var monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",];

    return monthName[i]
  }

}
