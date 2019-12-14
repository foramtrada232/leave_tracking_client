import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
import { ToastService } from '../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { element } from 'protractor';
import { UserService } from '../services/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
import * as _ from 'lodash';

declare var $: any;

// let format = require("date-fns/format");

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnInit {
  leaveForm: FormGroup;
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  isDisable: Boolean = false;
  path = config.baseMediaUrl;
  loading: boolean;
  userDetail: any;
  fileName: any = [];
  attachment: any = [];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  days_count = 0;
  days: any = [];
  today: string;
  nextYear: any;
  fromDate: any;
  toDate: any;
  timeDiff: number;
  toDateMin: any;
  fromDateMax: any;
  toDateMax: any;
  spinner: boolean;

  constructor(public router: Router, public _userService: UserService, public _leaveService: LeaveService, private elementRef: ElementRef, public _toastService: ToastService, private localNotifications: LocalNotifications) {
    this.leaveForm = new FormGroup({
      daysCount: new FormControl(''),
      leaveType: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      singleDate: new FormControl(''),
      reason: new FormControl(''),
      compansate: new FormControl(''),
      attachment: new FormControl('')
    });
  }

  ionViewWillEnter() {
    this.getUserDetail();
    this.setDateValidations();
  }
  ngOnInit() {
    $('.singleDay').show();
    $('.multiDays').hide()
  }

  showImageName(e) {
    this.attachment = e.target.files;
    this.fileName = e.target.files[0].name;
    $('.attach_file').html(this.fileName);
  }

  setDateValidations() {
    this.today = new Date().toISOString();
    this.fromDateMax = this.today.split("-")[0];
    this.fromDateMax = this.fromDateMax++;
    this.fromDateMax = this.fromDateMax + +1;
    this.toDateMax = this.fromDateMax;
    // this.today = new Date().toJSON().split('T')[0];
    console.log('today', this.today)
  }

  fromDateChange(date) {
    console.log("first date", date);
    this.toDateMin = date;
    this.fromDate = date;
  }

  dateDifference() {
    console.log()
    this.timeDiff = (new Date(this.toDate) as any) - (new Date(this.fromDate) as any);
    this.days = this.timeDiff / (1000 * 60 * 60 * 24)
    console.log(this.days)
  }

  leaveSelect(e) {
    console.log('e.value', e.target.value);
    if (e.target.value == 1 || e.target.value == 0.5) {
      $('.singleDay').show();
      $('.multiDays').hide();
    } else if (e.target.value == 'more') {
      $('.singleDay').hide();
      $('.multiDays').show();
    }
  }

  /**
   * get user details
   */
  getUserDetail() {
    this.loading = true;
    this._userService.getUserDetail().subscribe((res: any) => {
      console.log("login user details===", res)
      this.userDetail = res.data;
      this.loading = false;
      console.log("this.userDetails login", this.userDetail);
      // this.route.navigate(['login'])
    }, err => {
      console.log(err);
      this.loading = false;
    })
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

  /**
   * Apply leave
   * @param {Object} data 
   */
  applyLeave() {
    const data = new FormData();

    if (this.attachment.length > 0) {
      console.log('GOT FILE', this.attachment.length);
      for (let i = 0; i <= this.attachment.length; i++) {
        data.append('attachment', this.attachment[i]);
      }
    }

    if (this.leaveForm.value.daysCount == 'more') {
      var start = new Date(this.leaveForm.value.fromDate);
      var end = new Date(this.leaveForm.value.toDate);
      this.daysCountFun(start, end);

      data.append('totalDate', JSON.stringify(this.days));
      data.append('noOfDays', this.days.length);
    } else if (this.leaveForm.value.daysCount == 1) {
      var start = new Date(this.leaveForm.value.singleDate);
      var end = new Date(this.leaveForm.value.singleDate);
      this.daysCountFun(start, end);
      data.append('totalDate', JSON.stringify(this.days));
      this.leaveForm.controls['fromDate'].setValue(this.leaveForm.value.singleDate);
      console.log(this.leaveForm.value)
      data.append('noOfDays', '1');
    } else if (this.leaveForm.value.daysCount == 0.5) {
      var start = new Date(this.leaveForm.value.singleDate);
      var end = new Date(this.leaveForm.value.singleDate);
      this.daysCountFun(start, end);
      this.leaveForm.controls['fromDate'].setValue(this.leaveForm.value.singleDate);
      data.append('totalDate', JSON.stringify(this.days));
      data.append('noOfDays', '0.5');
    }
    _.forOwn(this.leaveForm.value, (value, key) => {
      data.append(key, value);
    });
    this.spinner = true;
    $('.submit_btn').attr("disabled", true);
    console.log(this.leaveForm.value)
    this._leaveService.applyLeave(data).subscribe((res: any) => {
      this.spinner = false;
      $('.submit_btn').attr("disabled", false);
      console.log("GOT IT", res);
      this._toastService.presentToast(res.message);
      this.leaveForm.reset();
      this.days = [];
      // this.router.navigateByUrl('home/leave-history')
      $('.attach_file').html('Attach a File');
    },
      err => {
        $('.submit_btn').attr("disabled", false);
        this.spinner = false;
        this._toastService.presentToast(err.error);
        console.log("OOPS SOMETHING GONE WRONG", err.error);
      })
  }

  daysCountFun(s, e) {
    while (s <= e) {
      console.log('s.getDay()', s.getDay())
      if (s.getDay() != 0) {
        this.days.push(s.getFullYear() + '-' + this.months[s.getMonth()] + '-' + s.getDate());
        this.days_count = this.days_count + 1;
      }
      var newDate = s.setDate(s.getDate() + 1);
      s = new Date(newDate);
    }
    console.log('days', this.days)
  }
}