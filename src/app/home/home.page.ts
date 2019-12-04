import { Component } from '@angular/core';
import { Platform, Events } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from '../services/user.service';
import { config } from '../config';
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
    public plt: Platform,
    public _toastService: ToastService,
    public events2: Events
  ) {
    this.events2.subscribe('profile', (data) => {
      console.log("data================>",data)
      this.UserDetail.profilePhoto = data;
      console.log("profile photo updated",this.UserDetail);
    });
    this._userService.currentUser.subscribe(x => this.currentUser = x);
    console.log("this.curruntUserRole====>", this.currentUserRole);
    // this.getUserDetail();
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
