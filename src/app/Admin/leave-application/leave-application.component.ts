import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { ToastService } from '../../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';
declare const $: any;
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss'],
})
export class LeaveApplicationComponent implements OnInit {
  PendingLeaves: any = [];
  pendingLeavesCount;
  loading: boolean = false;
  lastIndex: any = [];
  constructor(public _leavService: LeaveService,
    public alertController: AlertController,
    public _toastService: ToastService, private localNotifications: LocalNotifications) { }

    ngOnInit() {
      this.getPendingLeaves();
  
      $('#open-modal').click(function () {
        $('#open-modal-body').fadeIn();
      });
      $('#open-modal-body .modal_body').click(function(event){
        event.stopPropagation();
      });
      $('.close_btn').click(function () {
        $('#open-modal-body').css('display', 'none');
      });
      $('#open-modal-body').click(function(){
        $(this).fadeOut();
      });
  
    }

  /**
   * Get Pending Leave Application
   */
  getPendingLeaves() {
    this.loading = true;
    this._leavService.getPendingLeaves().subscribe((res: any) => {
      this.PendingLeaves = res.data;
      this.pendingLeavesCount = res.data.length;
      console.log("pending leaves=======>", this.PendingLeaves);
      this.loading = false;
      this.lastIndex = this.PendingLeaves[0].totalDate;
      console.log("lastIndex:", this.lastIndex)
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  /**
   * Leave Approval
   * @param {String} id 
   */
  leaveApproval(id, status) {
    console.log(id, status);
    const obj = {
      leaveId: id,
      status: status
    }
    this._leavService.leaveApproval(obj).subscribe((res: any) => {
      console.log("res========>", res);
      if (status == 'Approved') {
        this._toastService.presentToast('Leave Approved');
      } else {
        this._toastService.presentToast('Leave Rejected')
      }
      console.log("pending leaves============>>>", this.PendingLeaves);
      this.getPendingLeaves();
    }, err => {
      console.log(err);
    })
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
      $('ion-content').css({ '--overflow': 'hidden' });
    }
  }
}
