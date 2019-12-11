import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
import { ToastService } from '../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { element } from 'protractor';
import { UserService } from '../services/user.service';
import { config } from '../config';
import { Router } from '@angular/router'
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


  constructor(public router: Router, public _userService: UserService, public _leaveService: LeaveService, private elementRef: ElementRef, public _toastService: ToastService, private localNotifications: LocalNotifications) {
    this.leaveForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      noOfDays: new FormControl(''),
      reason: new FormControl('', [Validators.required]),
      extraHours: new FormControl(''),
      shortLeave: new FormControl('')
    });
  }

  ngOnInit() {
    $('.singleDay').show();
    $('.multiDays').hide();
    this.getUserDetail();
    console.log("curruntdate====>", this.curruntDate);
    this.nextYear = this.curruntDate.split("-")[0];
    this.nextYear = this.nextYear++;
    this.nextYear = this.nextYear + +1;
    console.log("nextyear=====>", this.nextYear)
    $(function () {
      $('input[name="daterange"]').daterangepicker({
        opens: 'center'
      }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
    });
    this.nextYear = this.nextYear + +1;
    console.log("nextyear=====>", this.nextYear)
  }

  fromDateChange(date) {
    console.log("first date", date);
    this.fromDate = date;
  }
  toDateChange(date) {
    console.log("to date", date);
    this.toDate = date;
    this.dateDifference();
  }

  dateDifference() {
    console.log()
    this.timeDiff = (new Date(this.toDate) as any) - (new Date(this.fromDate) as any);
    this.days = this.timeDiff / (1000 * 60 * 60 * 24)
    console.log(this.days)

  }

  showImageName(e) {
    var fileName = e.target.files[0].name;
    $('.attach_file').html(fileName);
  }

  leaveSelect(e) {
    console.log('e.value', e.target.value);
    if (e.target.value == 1 || e.target.value == 0.5) {
      $('.singleDay').show();
      $('.multiDays').hide();
    } else if (e.target.value == 2) {
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
  applyLeave(data) {
    this.isDisable = true
    console.log("leave application details", this.leaveForm.value)
    console.log('data===========>', data);
    if (this.leaveForm.invalid) {
      return;
    }
    console.log('data======>', data);
    this._leaveService.applyLeave(data).subscribe((res: any) => {
      console.log("res of leave==========>", res);
      this._toastService.presentToast(res.message);
      this.leaveForm.reset();
      this.isDisable = false;
      this.isValue = false;
    }, err => {
      console.log("==========>", err);
      this.isDisable = false;
    })
  }

  /**
   * Validtion of enter shortleave hour
   * @param {Number} e 
   * @param {String} data 
   */
  updateList(e, data) {
    console.log(e, data);
    if (e) {
      this.isValue = true;
    } else {
      this.isValue = false;
    }
    if (e > 3 && data === 'shortLeave') {
      // console.log("first ==========", e)
      alert("please enter value less than three")
      const element = this.elementRef.nativeElement.querySelector('#input2');
      console.log("element -----------", element);
      element.value = 3
    } else if (e < 3 && e > 1 && data === 'shortLeave') {
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = e
    } else if (e == "") {
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = ''
    } else if (e < 0 && data === 'shortLeave') {
      alert("value must be positive ")
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = 1
    }
  }
}
