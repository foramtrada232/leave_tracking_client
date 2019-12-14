import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../services/leave.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
})
export class LeaveHistoryComponent implements OnInit {
  historyByUser: any;
  historyLength: any;
  loading: any;
  constructor(public router: Router,public _userService: UserService,public _leaveService: LeaveService) {
  }

  ionViewWillEnter(){
    this.loading = true;
    this.getLeaveHistoryByUser();
  }
  ngOnInit() {
  }
  /**
   * Get history of applied leaves by user
   */
  getLeaveHistoryByUser(){
    this._leaveService.leaveHistoryByUser().subscribe((res:any)=> {
      this.loading = false;
      this.historyByUser = res.data;
      this.historyLength = res.data.length;
      console.log('this.historyLength',this.historyLength)
      console.log('getLeaveHistoryByUser=>>>>>',this.historyByUser);
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
