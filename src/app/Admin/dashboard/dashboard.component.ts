import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  UserDetail;
  path = config.baseMediaUrl;
  todaysLeave: any = [];
  todayLeavesCount;
  approvedLeaves: any = [];
  approvedLeavesCount;
  pendingLeaves: any = [];
  pendingLeavesCount;
  isReasonVisible: boolean = false;
  leaveReason;
  loading: boolean = false;
  todayDate;
  todayLeave: boolean = false;
  approvedLeave: boolean = false;
  pendingLeave: boolean = false;
  constructor(public router: Router,public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.todayDate = new Date().toISOString();
    this.todayDate = this.todayDate.split("T")[0];
    this.todayDate = this.todayDate.split("-")
    console.log(this.todayDate);
    this.getUserDetail();
    $(".nav-item  a ").click(function () {
      $(".nav-item  a").removeClass("active");
      $(this).addClass("active");
    });

  }

  /**
   * Get Single user details
   */
  getUserDetail() {
    this._userService.getUserDetail().subscribe((res: any) => {
      console.log("user details==========>", res.data);
      this.UserDetail = res.data;
      console.log("data=======>", res.data, this.UserDetail);
      // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
    }, err => {
      console.log(err);
    })
  }
  /**
   * Get Approved Leaves
   */
  getApprovedLeaves() {
    console.log("approved leaves");
    this.pendingLeaves = [];
    this.todaysLeave = [];
    this.loading = true;
    this._leaveService.getApprovedLeaves().subscribe((res: any) => {
      this.approvedLeaves = res.data;
      this.approvedLeavesCount = res.data.length;
      this.todayLeave = false;
      this.pendingLeave = false;
      if (!this.approvedLeavesCount) {
        this.approvedLeave = true;
      }
      this.loading = false;
      console.log("approved leaves===", res, this.approvedLeaves, this.approvedLeavesCount);
    }, err => {
      console.log("err");
      this.loading = false;
    })
  }

  /**
   * Get Pending Leaves
   */
  getPendingLeaves() {
    console.log("Pending leaves");
    this.loading = true;
    this.approvedLeaves = [];
    this.todaysLeave = [];
    this._leaveService.getPendingLeaves().subscribe((res: any) => {
      this.pendingLeaves = res.data;
      this.pendingLeavesCount = res.data.length;
      this.loading = false;
      this.todayLeave = false;
      this.approvedLeave = false;
      if (!this.pendingLeavesCount) {
        this.pendingLeave = true
      }
      this.loading = false;
      console.log("Pending leaves", res, this.pendingLeaves, this.pendingLeavesCount);
    }, err => {
      console.log("err");
      this.loading = false;
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

  /**
   * open modal of leave description
   */
  openModal() {
    if ($('body').hasClass('no-scroll')) {
      $('body').removeClass('no-scroll');
      $('ion-content').removeAttr('style');
    } else {
      $('body').addClass('no-scroll');
      $('ion-content').css({ '--overflow': 'hidden' });
    }
  }

  /**
   * logout
   */

  logout() {
    this._userService.logOut().subscribe((res: any) => {
      console.log("logout response===", res);
      this.router.navigateByUrl('login');
    })
  }
}
