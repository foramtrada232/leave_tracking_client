import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../services/user.service'
import { Router } from '@angular/router';
import { config } from '../config';
import  * as _  from 'lodash';
import {ToastService} from '../services/toast.service';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  loading: boolean;
  userDetail: any;
  path = config.baseMediaUrl;
  fileProfile:any =[];
  url: any;
  constructor(public _toastService: ToastService,public router: Router,public _userService: UserService) { }

  ionViewWillEnter(){
    this.getUserDetail();
  }

  ionViewDidLeave(){
    this.url = '';
  }

  ngOnInit() { }

  edit_profile = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    profilePic: new FormControl ('', Validators.required)
  });

  /**
   * get user details
   */
  getUserDetail() {
    this.loading = true;
    this._userService.getUserDetail().subscribe((res: any) => { 
      this.userDetail = res.data;
      this.loading = false;
      console.log("IN EDIT PROFILE COMPONENT=>>>", this.userDetail);
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  // for image preview on edit click
	public addFile(event: any) {
		this.fileProfile = event.target.files;
		if (event.target.files && event.target.files[0]) {
			var reader = new FileReader();
			reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log('this.url',this.url)
			}
			reader.readAsDataURL(event.target.files[0]);
		}
  }
  
  updateProfile(userDetail){
    console.log('userDetail',userDetail)
    const data = new FormData();
		_.forOwn(this.edit_profile.value, (value, key) => {
			data.append(key, value);
		});

		if (this.fileProfile.length > 0) {
      console.log('this.fileProfile.length',this.fileProfile.length)
			for (let i = 0; i <= this.fileProfile.length; i++) {
				data.append('profilePhoto', this.fileProfile[i]);
			}
		}
    console.log('userDetail after clicking update',data);
    this._userService.updateProfile(data).subscribe((res: any)=> {
      console.log("PROFILE UPDATED", res);
      this._toastService.presentToast(res.message);
      this.router.navigateByUrl('home/profile')
    },err => {
      console.log("OOPS PROFILE NOT UPDATED",err);
    });
  }

  logout(){
    this._userService.logOut().subscribe((res: any) => {
      console.log("logout response===", res);
      this.router.navigateByUrl('login');
    })
  }
}