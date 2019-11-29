import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
declare var $: any;
@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
})
export class LeaveHistoryComponent implements OnInit {
  monthLeaveForm: FormGroup;
  yearLeaveForm: FormGroup;
  isMonthLeave = 0;
  isYearLeave = 0;
  monthlyLeaveOfUser: any = [];
  yearlyLeaveOfUser: any = [];
  loading: boolean = false;
  curruntDate: string = new Date().toISOString();
  nextYear;
  isVisible :boolean = false;
  
  constructor(public _leaveService: LeaveService) {
    this.monthLeaveForm = new FormGroup({
      month: new FormControl('', [Validators.required]),
    });

    this.yearLeaveForm = new FormGroup({
      year: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    console.log("curruntdate====>", this.curruntDate);
    this.nextYear = this.curruntDate.split("-")[0];
    this.nextYear = this.nextYear++;
    this.nextYear = this.nextYear + +1;
    console.log("nextyear=====>", this.nextYear)
  }
  /**
   * Get monthly leave history of user
   * @param {object} data 
   */
  getMounthlyLeaveByUser(data) {
    this.isVisible = true;
    $(".no-leave-of-year").css({ 'display': 'none' });
    this.loading = true;
    console.log("data==========>", data);
    this.yearlyLeaveOfUser = [];
    this._leaveService.getMounthlyLeaveByUser(data).subscribe((res: any) => {
      console.log("data===========>", res);
      this.loading = false;
      this.isVisible = false;
      this.monthlyLeaveOfUser = res.data;
      if (res.data.length > 0) {
        this.isMonthLeave = 2;
      } else {
        this.isMonthLeave = 1;
        $('.no-leaves-of-month').css({ 'display': 'block' });
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.isVisible = false;
    })
  }
  /**
   *  Get yearly leave history of user
   * @param {Object} data 
   */
  getYearlyLeaveByUser(data) {
    this.isVisible = true;
    $('.no-leaves-of-month').css({ 'display': 'none' });
    this.monthlyLeaveOfUser = [];
    this.loading = true;
    console.log("data==========>", data);
    this._leaveService.getYearlyLeaveByUser(data).subscribe((res: any) => {
      console.log("data===========>", res);
      this.loading = false;
      this.isVisible = false;
      this.yearlyLeaveOfUser = res.data;
      if (res.data.length > 0) {
        this.isYearLeave = 2;
      } else {
        this.isYearLeave = 1;
        $('.no-leave-of-year').css({ 'display': 'block' })
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.isVisible = false;
    })
  }
  getNoOfDays(days) {
    // console.log("leave details", days);
    if (days.shortLeave) {
      if (days.shortLeave == 1) {
        return days.shortLeave + ' hour';
      }
      return days.shortLeave + ' hours';
    } else {
      if (days.noOfDays < 0) {
        return 'You have no leaves..'
      } else {
        const noOfDays = Math.floor(days.noOfDays / 8)
        // console.log("Days", noOfDays);
        const noOfhours = days.noOfDays % 8;
        // console.log("noOfhours", noOfhours);
        if (!noOfDays && noOfhours) {
          if (noOfhours > 1) {
            return noOfhours + ' hours'
          } else {
            return noOfhours + ' hour'
          }
        } else if (noOfDays && !noOfhours) {
          if (noOfDays > 1) {
            return noOfDays + ' Days'
          } else {
            return noOfDays + ' Day'
          }
        } else {
          if (noOfDays > 1 && noOfhours > 1) {
            return noOfDays + ' Days ' + noOfhours + ' hours';
          } else if (noOfDays == 1 && noOfhours == 1) {
            return noOfDays + ' Day ' + noOfhours + ' hour';
          } else if (noOfDays > 1 && noOfhours == 1) {
            return noOfDays + ' Days ' + noOfhours + ' hour';
          } else {
            return noOfDays + ' Day ' + noOfhours + ' hours';
          }

        }
      }
    }
  }
}
