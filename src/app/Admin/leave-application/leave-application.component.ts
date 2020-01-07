import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { ToastService } from '../../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';
import { config } from '../../config';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { stat } from 'fs';

declare const $: any;
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss'],
})
export class LeaveApplicationComponent implements OnInit {
  pendingLeaves: any = [];
  pendingLeavesCount;
  loading: boolean = false;
  lastIndex: any = [];
  path = config.baseMediaUrl;
  constructor(public router: Router, public _userService: UserService, public _leavService: LeaveService,
    public alertController: AlertController,
    public _toastService: ToastService, private localNotifications: LocalNotifications) { }

  ionViewWillEnter() {
    this.getPendingLeaves();
  }
  ngOnInit() {
    $('#open-modal').click(function () {
      $('#open-modal-body').fadeIn();
    });
    $('#open-modal-body .modal_body').click(function (event) {
      event.stopPropagation();
    });
    $('.close_btn').click(function () {
      $('#open-modal-body').css('display', 'none');
    });
    $('#open-modal-body').click(function () {
      $(this).fadeOut();
    });
  }

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
   * Get Pending Leave Application
   */
  getPendingLeaves() {
    this.loading = true;
    this._leavService.getPendingLeaves().subscribe((res: any) => {
      this.pendingLeaves = res.data;
      this.pendingLeavesCount = res.data.length;
      for (var i = 0; i < this.pendingLeaves.length; i++) {
        console.log("FOR EACH", this.pendingLeaves[i].attachment);
      }
      console.log("pending leaves=======>", this.pendingLeaves);
      this.loading = false;
      // this.lastIndex = this.pendingLeaves[0].totalDate;
      // console.log("lastIndex:", this.lastIndex)
    }, err => {
      console.log(err);
      this.loading = false;
    })
  }

  /**
   * Leave Approval
   * @param {String} id 
   */
  async leaveApproval(id, status) {
    console.log(status)

    if (status === 'Approved') {
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        inputs: [
          {
            name: 'unpaid',
            type: 'radio',
            label: 'Unpaid Leave',
            value: false,
            checked: true
          },
          {
            name: 'paid',
            type: 'radio',
            label: 'Paid Leave',
            value: true,
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Approve',
            handler: (alertData) => {
              const obj = {
                leaveId: id,
                status: status,
                paid: alertData
              }
              console.log(obj)
              this.leaveAction(obj);
            }
          }
        ]
      });
      await alert.present();
    } else if (status === 'Rejected') {
      const obj = {
        leaveId: id,
        status: status,
      }
      this.leaveAction(obj);
    }
  }

  leaveAction = obj => {
    this._leavService.leaveApproval(obj).subscribe((res: any) => {
      console.log("res========>", res);
      this._toastService.presentToast('Leave ' + res.data.status);

      console.log("pending leaves============>>>", this.pendingLeaves);
      this.getPendingLeaves();
    }, err => {
      console.log(err);
    })
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