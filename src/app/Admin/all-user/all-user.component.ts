import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { config } from '../../config';


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
  constructor(public _userService: UserService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  /**
   * get all user
   */
  getAllUser() {
    this.loading = true;
    this._userService.getAllUser().subscribe((res: any) => {
      console.log("all user=>", res);
      this.allUser = res.data;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  changeToDarkColor() {
    this.currentColor = 'danger';
  }

  

}
