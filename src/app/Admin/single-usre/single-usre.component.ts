import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from '../../services/toast.service';

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
  storageDirectory: string;
  public progress: any;
  downloading: boolean;
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(
    public _zone: NgZone,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
    private route: ActivatedRoute,
    public router: Router,
    public _userService: UserService,
    public _toastService: ToastService,
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
