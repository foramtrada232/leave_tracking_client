import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';
declare var $: any;


@Component({
  selector: 'app-single-usre',
  templateUrl: './single-usre.component.html',
  styleUrls: ['./single-usre.component.scss'],
})
export class SingleUsreComponent implements OnInit {
  userId;
  singleUser;
  userLeaves: any = [];
  path = config.baseMediaUrl;
  loading: boolean = false;
  
  constructor(private route: ActivatedRoute,
    public router:Router,
    public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) {
  }

  ngOnInit() {
  }




  ionViewWillEnter() {
    this.route.params.subscribe(param => {
      this.userId = param.userId;
      console.log("userId==========>", this.userId)
      this.getUserById(this.userId);
      this.getLeaveByUserId(this.userId);
    });
  }

  /**
   * Get user by Userid
   * @param {String} userId 
   */
  getUserById(userId) {
    this.loading = true;
    console.log("userId===========>", userId);
    this._userService.getUserById(userId).subscribe((res: any) => {
      this.singleUser = res.data;
      console.log("res of single user=========>", res, this.singleUser,this.singleUser.leaveType);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  /**
   * Get leave By userId
   * @param {String} userId 
   */
  getLeaveByUserId(userId) {
    console.log('userid=======>', userId);
    this._leaveService.getLeaveByUserId(userId).subscribe((res: any) => {
      this.userLeaves = res.data;
      console.log("res of leave by userid====>", res);
    }, err => {
      console.log(err);
    })
  }

  /**
   * open modal of leave description
   */
  openModal() {
    if ($('body').hasClass('no-scroll')) {
      $('body').removeClass('no-scroll');
      $('ion-content').removeAttr('style');
    } else {
      $('body').addClass('no-scroll');
      $('ion-content').css({ '--overflow': 'hidden' });
    }
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
}
