import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public router: Router,
    public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) {
      this.route.params.subscribe(param => {
        this.userId = param.userId;
        console.log("userId==========>", this.userId)
        
        this.getLeaveByUserId(this.userId);
        this.getUserById(this.userId);
    });
    }
    
    ngOnInit() {
      
    }
    
    
    
    
    ionViewWillEnter() {
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
      console.log("res of single user=========>", res, this.singleUser, this.singleUser.leaveType);
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
  openModal(i) {
    console.log('openModal');
    $('#open-modal-body' + i).fadeIn();
    event.stopPropagation();
    $('#open-modal-body' + i).click(function () {
      $(this).fadeOut();
    });
  }

  closeModal(i) {
    $('#open-modal-body' + i).css('display', 'none');
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
