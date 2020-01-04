import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { config } from '../../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  notificationDetails;
  notificationDetailsCount;
  loading: boolean = false;
  path = config.baseMediaUrl;
  constructor(public router: Router,public _userService: UserService) { }

  ionViewWillEnter() {
    this.getNotification()
  }
  ngOnInit() {
  }

  /**
   * get all notifications
   */
  getNotification() {
    this.loading = true;
    this._userService.getNotification().subscribe((data: any) => {
      this.notificationDetails = data.data;
      this.notificationDetailsCount = data.data.length;
      this.loading = false;
      console.log("notification data", this.notificationDetails);
      this.loading = false;
    }, err => {
      console.log(err)
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

  redirectToReport(status){
    if(status){
      this.router.navigateByUrl('/home/leave-application')
    }
  }
}
