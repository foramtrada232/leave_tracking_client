import { Component } from '@angular/core';
import { Platform, MenuController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router, Event, NavigationStart, RouterEvent } from '@angular/router';
import { UserService } from '../services/user.service';
import { config } from '../config';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser: any;
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  selectedPath = '';
  developerPages: any = [];
  adminpages: any = [];
  UserDetail: any;
  path = config.baseMediaUrl;

  constructor(
    public router: Router,
    public _userService: UserService,
    private menu: MenuController,
    public plt: Platform,
    private fcm: FCM,
    public _toastService: ToastService,
    private localNotifications: LocalNotifications,
    public events2: Events
  ) {
    this.events2.subscribe('profile', (data) => {
      console.log("data================>",data)
      this.UserDetail.profilePhoto = data;
      console.log("profile photo updated",this.UserDetail);
    });
    this._userService.currentUser.subscribe(x => this.currentUser = x);
    console.log("this.curruntUserRole====>", this.currentUserRole);
    this.getUserDetail();
    this.developerPages = [
      {
        title: 'Profile',
        url: 'profile',
        name:'person'
      },
      {
        title: 'Leave Form',
        url: 'leave-form',
        name:'paper'
      },
      {
        title: 'History',
        url: 'leave-history',
        name:'time'
      }
     
    ]
    this.adminpages = [
      {
        title: 'Dashboard',
        url: 'dashboard',
        name: 'pie'
      },
      {
        title: 'Report',
        url: 'report',
        name: 'alert'
      },
      {
        title: 'Leave',
        url: 'leave-application',
        name: 'apps'

      },
      {
        title: 'Notifications',
        url: 'notification',
        name: 'notifications'
      },
      {
        title: 'All Users',
        url: 'all-user',
        name: 'people'
      },
      {
        title: 'Profile',
        url: 'profile',
        name:'person'
      },
    ];
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });

  }


  /**
   * Logout user
   */
  logOut() {
    console.log("log out");
    this._userService.logOut().subscribe((res: any) => {
      console.log("data of login yser ", res);
      this.router.navigate(['/login']);
    }, err => {
      console.log(err)
    })
  }

  closeMenu() {
    this.menu.close()
  }
  /**
   * git user detail
   */
  getUserDetail() {
    this._userService.getUserDetail().subscribe((res: any) => {
      this.UserDetail = res.data;
      console.log("in home page===", this.UserDetail)

    }, err => {
      console.log(err);
    })
  }
}
