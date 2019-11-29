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
  currentUserRole = localStorage.getItem('designation');
  token = JSON.parse(localStorage.getItem('accessToken'));
  files: any;
  imagePath;
  imgURL;
  urls;
  loading: boolean = false;

  constructor(public route: Router,public modalController: ModalController, public _userService: UserService, public _toastService: ToastService, public events1: Events) { }

  ngOnInit() {
    this.getUserDetail();
    console.log("current user role login", this.token);
  }

  getUserDetail() {
    this.loading = true;
    this._userService.getUserDetail().subscribe((res: any) => {
      // this.UserDetail = res.data[0];
      console.log("login user details===", res)
      this.userDetail = res.data;
      this.loading = false;
      console.log("this.userDetails login", this.userDetail);
  this.route.navigate(['login'])
      // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
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
    // if (this.files) {
    //   // console.log("in if")
    //   let reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     this.urls = e.target.result;
    //   }
    //   reader.readAsDataURL(this.files);
    // }
    // console.log("url=>",this.urls)
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
}
