import { Component, OnInit, NgZone } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { ToastService } from '../../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';
import { config } from '../../config';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
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
  downloading: boolean;
  fileTransfer: FileTransferObject = this.transfer.create();
  progress: number;
  spinner: boolean;
  constructor(public _zone: NgZone,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File, public router: Router, public _userService: UserService, public _leavService: LeaveService,
    public alertController: AlertController,
    public _toastService: ToastService, private localNotifications: LocalNotifications) {
  }

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

  download(filepath, filename, mimetype) {
    this.downloading = true;
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'Download/';

    //for showing progress-bar
    this.fileTransfer.onProgress((progressEvent) => {
      this._zone.run(() => {
        var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
        this.progress = perc;
      })
    });
    console.log("DOWNLOADING =>>>>>>>>")
    //for checking if file exists
    this.file.checkFile(ROOT_DIRECTORY + downloadFolderName, filename).then((isExist) => {
      this.openFile(ROOT_DIRECTORY + downloadFolderName + filename, mimetype);
    }).catch((notexist) => {

      //for creating Download directory
      this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
        .then((entries) => {

          //for downloading file
          this.fileTransfer.download(filepath, ROOT_DIRECTORY + downloadFolderName + '/' + filename).then((entry) => {
            this.progress = 0;
            this.downloading = false;
            this.openFile(entry.nativeURL, mimetype)
          }, (error) => {
            this.progress = 0;
            this.downloading = false;
          });
        }).catch((error) => {
          this.progress = 0;
          this.downloading = false;
        });
    })
  }

  //for opening the file
  openFile(url, mimetype) {
    this.fileOpener.open(url, mimetype)
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  }


  leaveAction = (obj, index) => {
    this._leavService.leaveApproval(obj).subscribe((res: any) => {
      console.log("res========>", res);
      this.spinner = false;
      this._toastService.presentToast('Leave ' + res.data.status);
      $('#popup' + index + ' .paidNote').val('');
      $(".paidLeave").prop("checked", false);
      console.log("pending leaves============>>>", this.pendingLeaves);
      this.getPendingLeaves();
    }, err => {
      this.spinner = false;
      $('#popup' + index + ' .paidNote').val('');
      $(".paidLeave").prop("checked", false);
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

  leaveApprove(id) {
    $('#popup' + id).css({ 'visibility': 'visible', 'opacity': 1 })
  }
  closePop(id) {
    $('#popup' + id).css({ 'visibility': 'hidden', 'opacity': 0 });
    $(".paidLeave").prop("checked", false);
  }

  changeLeaveStatus(leaveId, status, index) {
    this.spinner = true;
    if (status === 'Rejected') {
      const obj = {
        leaveId: leaveId,
        status: status,
        paidLeave: []
      }
      this.leaveAction(obj, '');
    } else {
      console.log("leave id ", leaveId, ' status ', status, ' index ', index)
      let paidLeaves = [];
      $('#popup' + index + ' input:checked').each(function () {
        paidLeaves.push($(this).attr('value'));
      });
      const paidNote = $('#popup' + index + ' .paidNote').val();
      const obj = {
        leaveId: leaveId,
        status: status,
        paidLeave: paidLeaves,
        paidNote: paidNote
      }
      console.log("FINAL OBJECT", obj)
      this.leaveAction(obj, index);
    }
  }
}