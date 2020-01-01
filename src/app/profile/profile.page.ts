import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { config } from '../config';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userDetail;
  path = config.baseMediaUrl;
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  token = JSON.parse(localStorage.getItem('accessToken'));
  files: any;
  imagePath;
  imgURL;
  urls;
  loading: boolean = false;

  constructor(public route: Router, public modalController: ModalController, public _userService: UserService, public _toastService: ToastService, public events1: Events) { }

  ionViewWillEnter() {
    this.getUserDetail();
  }
  ngOnInit() {
    console.log('this.currentUserRole', this.currentUserRole)
    console.log("current user role login", this.token);
  }

  /**
   * get user details
   */
  getUserDetail() {
    this.loading = true;
    this._userService.getUserDetail().subscribe((res: any) => {
      this.userDetail = res.data;
      this.loading = false;
      console.log("this.userDetails login", this.userDetail);
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  /**
   * Select file
   * @param {object} file 
   */
  fileSelected(event) {
    console.log("===============", event.target.files)
    this.urls = "";
    this.files = event.target.files[0];

    this._userService.updateProfile(this.files).subscribe((res: any) => {
      console.log("res=======>", res);
      this._toastService.presentToast(res.message)
      this.urls = "";
      this.userDetail.profilePhoto = res.data.profilePhoto;
      this.events1.publish('profile', res.data.profilePhoto);
    }, err => {
      console.log("err=>>>>>>>>>>>>", err);
      this._toastService.presentToast("There are some error....");
      this.urls = "";
    })
  }

  /**
  * Logout user
  */
  logOut() {
    console.log("log out");
    this._userService.logOut().subscribe((res: any) => {
      console.log("data of login yser ", res);
      this.route.navigate(['/login']);
    }, err => {
      console.log(err)
    })
  }
}
