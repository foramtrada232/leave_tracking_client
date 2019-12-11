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
  curruntDate: string = new Date().toISOString();
  noOfDays = false;
  path = config.baseMediaUrl;
  shortLeave = false
  isValue: Boolean = false;
  nextYear;
  fromDate: any;
  toDate: any;
  timeDiff: any;
  days;
  loading: boolean;
  userDetail: any;
  fileName: any = [];
  attachment: any = [];

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
    _.forOwn(this.leaveForm.value, (value, key) => {
      data.append(key, value);
    });

    if (this.attachment.length > 0) {
      console.log('GOT FILE', this.attachment.length);
      for (let i = 0; i <= this.attachment.length; i++) {
        data.append('attachment', this.attachment[i]);
      }
    }

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var days_count = 0;
    let days: any = []
    if (this.leaveForm.value.daysCount == 'more') {
      var start = new Date(this.leaveForm.value.fromDate);
      var end = new Date(this.leaveForm.value.toDate);
      while (start <= end) {
        console.log('start.getDay()', start.getDay())
        if (start.getDay() != 0) {
          days.push(start.getFullYear() + '-' + months[start.getMonth()] + '-' + start.getDate());
          days_count = days_count + 1;
        }
        var newDate = start.setDate(start.getDate() + 1);
        start = new Date(newDate);
      }
      console.log('days', days)
      data.append('totalDate', JSON.stringify(days));
      data.append('noOfDays', days.length);
    } else if(this.leaveForm.value.daysCount == 1){
      var start = new Date(this.leaveForm.value.singleDate);
      var end = new Date(this.leaveForm.value.singleDate);
      while (start <= end) {
        console.log('start.getDay()', start.getDay())
        if (start.getDay() != 0) {
          days.push(start.getFullYear() + '-' + months[start.getMonth()] + '-' + start.getDate());
          days_count = days_count + 1;
        }
        var newDate = start.setDate(start.getDate() + 1);
        start = new Date(newDate);
      }
      console.log('days', days)
      data.append('totalDate', JSON.stringify(days));
      data.append('noOfDays', '1');
    } else if (this.leaveForm.value.daysCount == 0.5){
      var start = new Date(this.leaveForm.value.singleDate);
      var end = new Date(this.leaveForm.value.singleDate);
      while (start <= end) {
        console.log('start.getDay()', start.getDay())
        if (start.getDay() != 0) {
          days.push(start.getFullYear() + '-' + months[start.getMonth()] + '-' + start.getDate());
          days_count = days_count + 1;
        }
        var newDate = start.setDate(start.getDate() + 1);
        start = new Date(newDate);
      }
      console.log('days', days)
      data.append('totalDate', JSON.stringify(days));
      data.append('noOfDays', '0.5');
    }
    console.log(this.leaveForm.value)
    this._leaveService.applyLeave(data).subscribe((res: any) => {
      console.log("GOT IT", res);
      this._toastService.presentToast(res.message);
      this.leaveForm.reset();
      $('.attach_file').html('Attach a File');
    },
      err => {
        this._toastService.presentToast(err.error);
        console.log("OOPS SOMETHING GONE WRONG", err.error);
      })
  }
}