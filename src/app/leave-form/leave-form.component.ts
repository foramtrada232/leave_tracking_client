import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
import { ToastService } from '../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { element } from 'protractor';
// let format = require("date-fns/format");

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnInit {
  leaveForm: FormGroup;
  isDisable: Boolean = false;
  curruntDate: string = new Date().toISOString();
  noOfDays = false;
  shortLeave = false
  isValue: Boolean = false;
  nextYear;

  constructor(public _leaveService: LeaveService, private elementRef: ElementRef, public _toastService: ToastService, private localNotifications: LocalNotifications) {
    this.leaveForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      noOfDays: new FormControl(''),
      reason: new FormControl('', [Validators.required]),
      extraHours: new FormControl(''),
      shortLeave: new FormControl('')
    });
  }

  ngOnInit() {
    console.log("curruntdate====>",this.curruntDate);
    this.nextYear = this.curruntDate.split("-")[0];
    this.nextYear = this.nextYear++;
    this.nextYear = this.nextYear+ +1;
    console.log("nextyear=====>",this.nextYear)
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
    console.log(e,data);
    if (e) {
      this.isValue = true;
    }else{
      this.isValue =false;
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
    } else if (e < 0 && data==='shortLeave') {
      alert("value must be positive ")
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = 1
    }
  }
}
