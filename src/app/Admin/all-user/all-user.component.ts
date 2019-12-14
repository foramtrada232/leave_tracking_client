import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { config } from '../../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss'],
})
export class AllUserComponent implements OnInit {
  allUser;
  currentColor: string
  path = config.baseMediaUrl;
  loading: boolean = false;
  constructor(public router: Router, public _userService: UserService) {
  }

  ionViewWillEnter() {
    this.getAllUser();
  }
  ngOnInit() {
  }

  /**
   * get all user
   */
  getAllUser() {
    this.loading = true;
    this._userService.getAllUser().subscribe((res: any) => {
      this.allUser = res.data;
      console.log("all user=>", this.allUser);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  viewProfile(userId) {
    this.router.navigateByUrl('home/single-user/' + userId);
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
