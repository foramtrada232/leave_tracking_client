import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  monthLeaveCount;
  yearLeaveCount;
  monthLeaveReport: any = [];
  yearLeaveReport: any = [];
  loading: boolean = false;
  curruntDate: string = new Date().toISOString();
  nextYear;
  isVisible: boolean = false;
  showingResults;
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  monthLeaveForm: FormGroup = new FormGroup({
    month: new FormControl(''),
  });

  yearLeaveForm: FormGroup = new FormGroup({
    year: new FormControl(''),
  });
  constructor(public router: Router,public _userService: UserService,public _leaveService: LeaveService) {

  }

  ionViewWillEnter() {
    this.monthLeaveReport = [];
    this.yearLeaveReport = [];
  }

  ionViewDidLeave() {
    this.showingResults = "";
    this.monthLeaveForm.reset();
    this.yearLeaveForm.reset();
    this.showingResults = "";
  }
  ngOnInit() {
    console.log("curruntdate====>", this.curruntDate);
    this.nextYear = this.curruntDate.split("-")[0];
    this.nextYear = this.nextYear++;
    this.nextYear = this.nextYear + +1;
    console.log("nextyear=====>", this.nextYear)
  }

  /**
   * Get month leave report
   * @param {object} data 
   */
  getMonthLeaveReport(data) {
    console.log('DATAAAAAAAAAAAAA', data);
    this.isVisible = true;
    console.log("MONTH DATE", new Date(data).getMonth() + 1);
    const obj = {
      month: new Date(data).getMonth() + 1,
      year: new Date(data).getFullYear()
    }
    this.showingResults = this.monthNames[obj.month - 1] + " " + obj.year;
    $(".no-leave-of-year").css({ 'display': 'none' });
    this.yearLeaveReport = [];
    this.monthLeaveReport = [];
    this.loading = true;
    console.log(obj);
    this._leaveService.getMonthLeaveReport(obj).subscribe((res: any) => {
      this.monthLeaveReport = res.data;
      this.monthLeaveCount = res.data.length;
      if (!res.data.length) {
        $(".no-leave-of-month").css({ 'display': 'flex' });
        $(".showingResults").css({ 'display': 'none' });
      } else {
        $('.no-leave-of-month').css({ 'display': 'none' });
        $(".showingResults").css({ 'display': 'block' });
      }
      console.log("month report=======>", res);
      this.yearLeaveForm.reset();
      this.monthLeaveForm.reset();
    }, err => {
      console.log(err);
      this.loading = false;
      this.isVisible = false;
    })
  }

  /**
   * Get year leave report
   * @param {Object} data 
   */
  getYearLeaveReport(data) {
    this.isVisible = true;
    console.log("MONTH DATE", new Date(data).getMonth() + 1);
    const obj = {
      year: new Date(data).getFullYear()
    }
    this.showingResults = obj.year;
    $('.no-leave-of-month').css({ 'display': 'none' });
    this.monthLeaveReport = [];
    this.yearLeaveReport = [];
    console.log('object =>>>>>>>>>>>', obj);
    this.loading = true;
    this._leaveService.getYearLeaveReport(obj).subscribe((res: any) => {
      this.yearLeaveReport = res.data;
      this.yearLeaveCount = res.data.length;
      if (!res.data.length) {
        $('.no-leave-of-year').css({ 'display': 'flex' });
        $(".showingResults").css({ 'display': 'none' });
      } else {
        $('.no-leave-of-year').css({ 'display': 'none' });
        $(".showingResults").css({ 'display': 'block' });
      }
      console.log("year report=======>", this.yearLeaveReport, this.yearLeaveCount);
      this.loading = false;
      this.yearLeaveForm.reset();
      this.monthLeaveForm.reset();
    }, err => {
      console.log(err);
      this.loading = false;
      this.isVisible = false;
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
}