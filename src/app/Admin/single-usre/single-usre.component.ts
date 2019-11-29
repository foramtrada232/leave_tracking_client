import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) { }

  ngOnInit() {
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
      // this.singleUser.dob = this.singleUser.dob.split("T")[0];
      console.log("res of single user=========>", res, this.singleUser);
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
  * Display leave Reason
  */
  async presentAlert(data) {
    console.log(data);
    let date = data.date
    let extrahours = data.extraHours;
    console.log(extrahours)
    let finalDate = date.date + '/' + date.month + '/' + date.year;
    console.log(finalDate);
    console.log(date)
    const alert = await this.alertController.create({
      message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
      buttons: ['OK'],
      cssClass: 'alertCustomCss'
    });
    await alert.present();
  }


  getNoOfDays(days) {
    // console.log("leave details", days);
    if (days.shortLeave) {
      if (days.shortLeave == 1) {
        return days.shortLeave + ' hour';
      }
      return days.shortLeave + ' hours';
    } else {
      if (days.noOfDays < 0) {
        return 'You have no leaves..'
      } else {
        const noOfDays = Math.floor(days.noOfDays / 8)
        // console.log("Days", noOfDays);
        const noOfhours = days.noOfDays % 8;
        // console.log("noOfhours", noOfhours);
        if (!noOfDays && noOfhours) {
          if (noOfhours > 1) {
            return noOfhours + ' hours'
          } else {
            return noOfhours + ' hour'
          }
        } else if (noOfDays && !noOfhours) {
          if (noOfDays > 1) {
            return noOfDays + ' Days'
          } else {
            return noOfDays + ' Day'
          }
        } else {
          if (noOfDays > 1 && noOfhours > 1) {
            return noOfDays + ' Days ' + noOfhours + ' hours';
          } else if (noOfDays == 1 && noOfhours == 1) {
            return noOfDays + ' Day ' + noOfhours + ' hour';
          } else if (noOfDays > 1 && noOfhours == 1) {
            return noOfDays + ' Days ' + noOfhours + ' hour';
          } else {
            return noOfDays + ' Day ' + noOfhours + ' hours';
          }

        }
      }
    }
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
      $('ion-content').css({'--overflow':'hidden'});
    }
  }
}
