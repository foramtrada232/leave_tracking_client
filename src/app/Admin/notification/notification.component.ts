import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notificationDetails;
  notificationDetailsCount;
  loading: boolean = false;

  constructor(public _userService: UserService, private localNotifications: LocalNotifications) { }

  ngOnInit() {
    this.getNotification()

  }


  getNotification() {
    this.loading = true;
    this._userService.getNotification().subscribe((data: any) => {
      this.notificationDetails = data.data;
      this.notificationDetailsCount = data.data.length;
      this.loading = false;
      console.log("notification data", this.notificationDetails);
      this.loading = false;
      // this.scheduleNotification(this.notificationDetails)
    }, err => {
      console.log(err)
    })
  }
}
