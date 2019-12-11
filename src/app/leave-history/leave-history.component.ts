import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
declare var $: any;
@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
})
export class LeaveHistoryComponent implements OnInit {
  historyByUser: any;
  constructor(public _leaveService: LeaveService) {
  }

  ionViewWillEnter(){
    this.getLeaveHistoryByUser();
  }
  ngOnInit() {
  }
  /**
   * Get history of applied leaves by user
   */
  getLeaveHistoryByUser(){
    this._leaveService.leaveHistoryByUser().subscribe((res:any)=> {
      this.historyByUser = res.data;
      console.log('getLeaveHistoryByUser=>>>>>',this.historyByUser);
    })
  }
}
