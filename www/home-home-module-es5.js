(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/all-user/all-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img \"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>All Users</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"all_user_pic row\">\r\n    <div class=\"user_profile card text-center\" routerLink=\"/home/single-user/{{user._id}}\" *ngFor=\"let user of allUser\">\r\n      <div class=\"card-body\">\r\n        <div class=\"profile_img\" *ngIf=\"!user.profilePhoto\">\r\n          <img src=\"../../assets/images/person.png\" class=\"rounded-circle\">\r\n        </div>\r\n        <div class=\"profile_img\" *ngIf=\"user.profilePhoto\">\r\n          <img src=\"{{path}}{{user.profilePhoto}}\" class=\"rounded-circle\">\r\n        </div>\r\n        <p class=\"text-center allUser\">{{user.name}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Dashboard</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n    <div class=\"user_profile text_center\" *ngIf=\"UserDetail\">\r\n        <div class=\"profile_img\">\r\n            <img *ngIf=\"!UserDetail.profilePhoto\" src=\"../../assets/images/person.png\">\r\n            <img *ngIf=\"UserDetail.profilePhoto\" src=\"{{path}}{{UserDetail.profilePhoto}}\">\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"all_content\">\r\n        <div class=\"title_text\">\r\n            <p class=\"text-center\">leave tracking</p>\r\n        </div>\r\n        <div class=\"leave_status\">\r\n            <ul class=\"nav nav-tabs w-100\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active \" href=\"javascript:void(0);\" (click)=\"todayNotPresentUser()\">\r\n                        <p class=\"text-center\">Today</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link \" href=\"javascript:void(0);\" (click)=\"getApprovedLeaves()\">\r\n                        <p class=\"text-center\">Aproved</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"getPendingLeaves()\">\r\n                        <p class=\"text-center\">Pending</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"loader\" *ngIf=\"loading\">\r\n            <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n        </div>\r\n\r\n        <div class=\"absent_emp_text text-white\" *ngIf=\"todaysLeave.length\">\r\n            Absent Employee\r\n        </div>\r\n\r\n        <div *ngIf=\"todaysLeave.length\">\r\n            <div *ngFor=\"let user of todaysLeave; let i=index\">\r\n                <div class=\"card\" style=\"cursor:pointer\">\r\n                    <label for=\"o{{i}}\">\r\n                        <div class=\"card-content w-100\">\r\n                            <div class=\"absent_user_name\">\r\n                                <a class=\"float-left\">{{user.userId.name}}</a>\r\n                                <a class=\"float-right\">{{user.date.date}}/{{user.date.month}}/{{user.date.year}}</a>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason :</p>\r\n                                        <div class=\"reason_text text-white\"> {{user.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Date :</p>\r\n                                        <div class=\"reason_text text-white\">\r\n                                            {{user.date.date}}/{{user.date.month}}/{{user.date.year}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"user.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{user.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"todayLeave\" class=\"dataNotAvalible text-center mt-4\">\r\n            <span>Everyone is Present</span>\r\n        </div>\r\n        <div *ngIf=\"approvedLeaves.length\">\r\n            <div *ngFor=\"let leave of approvedLeaves; let i=index\">\r\n                <div class=\"card\" style=\"cursor: pointer;\">\r\n                    <label for=\"o{{i}}\">\r\n                        <div class=\"card-content  w-100 aproved_leaves\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4\">\r\n                                    <span>{{leave.userId.name}}</span>\r\n                                </div>\r\n                                <div class=\"col-4 text-center\">\r\n                                    <span>\r\n                                        {{getNoOfDays(leave)}}\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"col-4 text-right\">\r\n                                    <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </label>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason:</p>\r\n                                        <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Date :</p>\r\n                                        <div class=\"reason_text text-white\" *ngFor=\"let date of leave.totalDate\">\r\n                                            {{date}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Approved By :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.approvedBy}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"approvedLeave\" class=\"dataNotAvalible text-center mt-4\">\r\n            <span class=\"text-center\">No Approved Leaves Yet</span>\r\n        </div>\r\n\r\n        <div *ngIf=\"pendingLeaves.length\">\r\n            <div *ngFor=\"let leave of pendingLeaves ;let i=index\">\r\n                <div class=\"card\" style=\"cursor: pointer;\">\r\n                    <label for=\"o{{i}}\">\r\n                        <div class=\"card-content  w-100 aproved_leaves\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4\">\r\n                                    <span>{{leave.userId.name}}</span>\r\n                                </div>\r\n                                <div class=\"col-4 text-center\">\r\n                                    <span>\r\n                                        {{getNoOfDays(leave)}}\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"col-4 text-right\">\r\n                                    <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason :</p>\r\n                                        <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Date :</p>\r\n                                        <div class=\"reason_text text-white\" *ngFor=\"let date of leave.totalDate\">\r\n                                            {{date}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"pendingLeave\" class=\"dataNotAvalible text-center mt-4\">\r\n            <span class=\"text-center\">No Pending Leaves Yet</span>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/leave-application/leave-application.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Leave Application</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n        <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div class=\"contect_class\">\r\n        <div *ngIf=\"PendingLeaves.length\">\r\n            <div *ngFor=\"let leave of PendingLeaves ;let i=index\">\r\n                <div class=\"card\" style=\"cursor: pointer;\">\r\n                    <div class=\"card-content  w-100 pending_leaves\">\r\n                        <div class=\"profile_div\">\r\n                            <div class=\"image_profile\">\r\n                                <img src=\"../../../assets/images/person.png\" alt=\"profil image\">\r\n                            </div>\r\n                            <div class=\"application_detail\">\r\n                                <strong>{{leave.userId.name}}</strong>\r\n                                <div *ngIf=\"leave.totalDate.length > 1\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6 pr-0\">\r\n                                            <p><span>From:</span>{{leave.totalDate[0]}}</p>\r\n                                        </div>\r\n                                        <div class=\"col-6 p-0\">\r\n                                            <p><span>To:</span> {{leave.totalDate[leave.totalDate.length-1]}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <p *ngIf=\"leave.totalDate.length == 1\"><span>Date:</span>{{leave.totalDate[0]}}</p>\r\n                                <p><span>Applied On:</span>{{leave.appliedOn}}</p>\r\n                                <p><span>Day:</span>{{getNoOfDays(leave)}}</p>\r\n                                <p><span>Reason:</span>{{leave.reason}}</p>\r\n                                <p *ngIf=\"leave.extraHours\"><span>Compensation:</span>{{leave.extraHours}}</p>\r\n                                <!-- <div class=\"reason_text text-white\"></div> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"accept_reject_btngroup\">\r\n                            <button class=\"btn accept\" (click)=\"leaveApproval(leave._id,'Rejected')\">Accept</button>\r\n                            <button class=\"btn reject\" (click)=\"leaveApproval(leave._id,'Approved')\">Reject</button>\r\n                        </div>\r\n                        <!-- <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <label for=\"o{{i}}\">\r\n                  <span class=\"text-center user_name\">{{leave.userId.name}}</span>\r\n                </label>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <label for=\"o{{i}}\">\r\n                  <span class=\"text-center number_of_days\">{{getNoOfDays(leave)}}</span>\r\n                </label>\r\n                            </div>\r\n\r\n                            <div class=\"col-4  text-center\">\r\n                                <span (click)=\"leaveApproval(leave._id,'Rejected')\" class=\"float-right check_cross  ml-3 \">\r\n                  <ion-img src=\"../../assets/images/cancel.png\"></ion-img>\r\n                </span>\r\n                                <span (click)=\"leaveApproval(leave._id,'Approved')\" class=\"float-right check_right\">\r\n                  <ion-img src=\"../../assets/images/right.png\"></ion-img>\r\n                </span>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Date :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"pendingLeavesCount == 0\" class=\" text-center mt-4\">\r\n        <p style=\"font-size: 25px;\">There are no leaves...</p>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/notification/notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Notification</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n        <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div class=\"all_notification\" *ngFor=\"let item of notificationDetails\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content \">\r\n                <div class=\"notify_name w-100\">\r\n                    <span class=\"user_name float-left\">{{item.body}}</span>\r\n                    <span class=\"float-right applied_date\">{{item.createdAt | date}} | {{item.createdTime}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"notificationDetailsCount == 0\" class=\"dataNotAvalible\">\r\n        <p>Sorry You have no new notifications</p>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/reports/reports.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Report</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <div class=\"apply_leave\">\r\n        <div class=\"apply_leave_text text-white\">\r\n            Apply Leave\r\n        </div>\r\n\r\n        <div class=\"select_time\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 pr-2\">\r\n                    <form [formGroup]='monthLeaveForm'>\r\n                        <ion-item>\r\n                            <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\" (ionChange)=getMonthLeaveReport(monthLeaveForm.value) max=\"{{nextYear}}\" [disabled]=\"isVisible\">\r\n                            </ion-datetime>\r\n                        </ion-item>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-6 pl-2\">\r\n                    <form [formGroup]='yearLeaveForm'>\r\n                        <ion-item>\r\n                            <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\" (ionChange)=getYearLeaveReport(yearLeaveForm.value) max=\"{{nextYear}}\" [disabled]=\"isVisible\">\r\n                            </ion-datetime>\r\n                        </ion-item>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"loader\" *ngIf=\"loading\">\r\n            <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n        </div>\r\n        <div *ngIf=\"monthLeaveReport.length\">\r\n            <div class=\"leave_details\" *ngFor=\"let leave of monthLeaveReport; let i=index\">\r\n                <div class=\"card\" style=\"cursor: pointer;\">\r\n                    <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-right\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason :</p>\r\n                                        <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">No of Days :</p>\r\n                                        <div class=\"reason_text text-white\"> {{getNoOfDays(leave)}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"monthLeaveCount == 0\" class=\"no-leaves-of-month\">\r\n            <p class=\"text-center\">There are No leaves</p>\r\n        </div>\r\n        <div *ngIf=\"yearLeaveReport.length\">\r\n            <div class=\"leave_details\" *ngFor=\"let leave of yearLeaveReport ; let i=index\">\r\n                <div class=\"card\" style=\"cursor: pointer;\">\r\n                    <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-right\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n                    <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                    <div class=\"modal\">\r\n                        <div class=\"modal-body\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">Reason :</p>\r\n                                        <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                                    </div>\r\n                                    <div class=\"col-12\">\r\n                                        <p class=\"text-white\">No of Days :</p>\r\n                                        <div class=\"reason_text text-white\"> {{getNoOfDays(leave)}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                        <p class=\"text-white\">Compensation :</p>\r\n                                        <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ok_btn text-center mt-3\">\r\n                                    <label for=\"o{{i}}\">Ok</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"close_btn\">\r\n                                <label for=\"o{{i}}\">X</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"yearLeaveCount == 0\" class=\"no-leave-of-year\">\r\n            <p class=\"text-center\">There are No leaves</p>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/single-usre/single-usre.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Profile</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n        <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div class=\"user_detail\">\r\n        <div *ngIf=\"singleUser\">\r\n            <div class=\"single_user_profile text-center\">\r\n                <div class=\"single_user\">\r\n                    <div class=\"profile_img\">\r\n                        <img *ngIf=\"!singleUser.profilePhoto\" src=\"../../assets/images/person.png\">\r\n                        <img *ngIf=\"singleUser.profilePhoto\" src=\"{{path}}{{singleUser.profilePhoto}}\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"usee_name_text\">\r\n                <p class=\"text-center\">{{singleUser.name}}</p>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4\"><span class=\"user_heading\">Name : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_name\">{{singleUser.name}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4\"><span class=\"user_heading\">email : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_email\">{{singleUser.email}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4\"><span class=\"user_heading\">DOB : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_name\">{{singleUser.dob}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4\"><span class=\"user_heading\">Phone No. : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_name\">{{singleUser.phone}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4\"><span class=\"user_heading\">Location : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_name\">{{singleUser.location}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-content row\">\r\n                    <div class=\"col-4 pr-0\"><span class=\"user_heading\">Designation : </span></div>\r\n                    <div class=\"col-8\">\r\n                        <span class=\"single_user_name\">{{singleUser.designation}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"leave_report\">\r\n            <div class=\"leave_report_text text-white\">\r\n                Leave Report\r\n            </div>\r\n            <div *ngIf=\"userLeaves.length\">\r\n                <div class=\"leave_details\" *ngFor=\"let leave of userLeaves; let i=index\">\r\n                    <div class=\"card\" style=\"cursor:pointer\">\r\n                        <label for=\"o{{i}}\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span style=\" color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span style=\" color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span style=\" color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-4 text-center\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span style=\"cursor: pointer; color: #FF0000;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span style=\"cursor: pointer; color: #3998C5;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span style=\"cursor: pointer; color: #FFAA00;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-4 text-right\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </label>\r\n                        <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden (click)=\"openModal()\">\r\n                        <div class=\"modal\">\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-12\">\r\n                                            <p class=\"text-white\">Reason :</p>\r\n                                            <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                                        </div>\r\n                                        <div class=\"col-12\">\r\n                                            <p class=\"text-white\">Date :</p>\r\n                                            <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                                            <p class=\"text-white\">Compensation :</p>\r\n                                            <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"ok_btn text-center mt-3\">\r\n                                        <label for=\"o{{i}}\">Ok</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"close_btn\">\r\n                                    <label for=\"o{{i}}\">X</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!userLeaves.length\" class=\"no_leaves\">\r\n                <p style=\"text-align:center;\">No leaves yet...</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-split-pane> -->\r\n<ion-menu contentId=\"content\" side=\"end\">\r\n  <ion-header>\r\n    <div class=\"header\" style=\"position: relative;\">\r\n      <ion-toolbar class=\"toolbar-color1\">\r\n\r\n        <div class=\"logo_img text-center\">\r\n          <ion-img src=\"../../assets/images/1.png\"></ion-img>\r\n        </div>\r\n      </ion-toolbar>\r\n      <div *ngIf=\"UserDetail\" class=\"user_profile text-center\">\r\n        <div class=\"profile_img\">\r\n          <img *ngIf=\"UserDetail.profilePhoto\" class=\"rounded-circle\" src=\"{{path}}{{UserDetail.profilePhoto}}\"\r\n            routerLink=\"/home/profile\" (click)=\"closeMenu()\">\r\n          <img *ngIf=\"!UserDetail.profilePhoto\" class=\"rounded-circle\" src=\"../../assets/images/person.png\"\r\n            (click)=\"closeMenu()\" routerLink='/home/profile'>\r\n        </div>\r\n        <p class=\"text-center\">{{UserDetail.name}}</p>\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <div class=\"menu_content\">\r\n      <div *ngIf=\"currentUserRole == 'Admin'\" class=\"developer_menu\">\r\n        <div *ngFor=\"let p of adminpages\" class=\"developer_page\">\r\n          <div class=\"page_list\" (click)=\"closeMenu()\" [routerLink]=\"p.url\" routerDirection=\"root\"\r\n            [class.active-item]=\"selectedPath.startsWith(p.url)\">\r\n            {{ p.title }} </div>\r\n        </div>\r\n        <div class=\"logout\" (click)=\"logOut()\" style=\"cursor: pointer\">\r\n          Logout\r\n        </div>\r\n        <div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"currentUserRole == 'Developer'\" class=\"developer_menu\">\r\n        <div *ngFor=\"let p of developerPages\" class=\"developer_page\">\r\n          <div class=\"page_list\" (click)=\"closeMenu()\" [routerLink]=\"p.url\" routerDirection=\"root\"\r\n            [class.active-item]=\"selectedPath.startsWith(p.url)\">\r\n            {{ p.title }}\r\n          </div>\r\n        </div>\r\n        <div class=\"logout\" (click)=\"logOut()\" style=\"cursor: pointer\">\r\n          Logout </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-form/leave-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Leave Aplication</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"all_content\">\r\n        <form [formGroup]='leaveForm'>\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"select_date text-white\">Select Date</div>\r\n                    <ion-item>\r\n                        <ion-datetime formControlName=\"date\" placeholder=\"Select Leave Date\" min={{curruntDate}} max=\"{{nextYear}}\"></ion-datetime>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"select_date text-white\">Days</div>\r\n                    <ion-item>\r\n                        <ion-input type=\"number\" id=\"field1\" formControlName=\"noOfDays\" placeholder=\"Enter Number of days\" step=\"0.5\" min=\"0\" max=\"30\" id=\"input1\" [disabled]=\"leaveForm.controls.shortLeave.value\" ngModel=\"{{noOfDays}}\" (keyup)=\"updateList($event.target.value,'days')\">\r\n                        </ion-input>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"or_text w-100 text-center\">OR</div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"select_date text-white\">Hours</div>\r\n                    <ion-item>\r\n                        <ion-input formControlName=\"shortLeave\" type=\"number\" (keyup)=\"updateList($event.target.value,'shortLeave')\" placeholder=\"Enter your Leave hours...\" id=\"input2\" min=\"0\" [disabled]=\"leaveForm.controls.noOfDays.value\" ngModel=\"{{shortLeave}}\"></ion-input>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"select_date text-white\">Reason</div>\r\n                    <ion-item>\r\n                        <ion-textarea rows=\"1\" formControlName=\"reason\" placeholder=\"Enter your reason here...\"></ion-textarea>\r\n                    </ion-item>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <div class=\"select_date text-white\">Compansate</div>\r\n                    <ion-item>\r\n                        <ion-input formControlName=\"extraHours\" placeholder=\"Enter your compensate...\"></ion-input>\r\n                    </ion-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center text-white\">\r\n                <ion-button type=\"submit\" (click)=\"applyLeave(leaveForm.value)\" [disabled]=\"(this.leaveForm.invalid || !isValue)  || isDisable  \">\r\n                    Submit</ion-button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-history/leave-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>History</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"leave_history\">\r\n        <div class=\"apply_leave_text text-white\">\r\n            Apply Leave\r\n        </div>\r\n        <div class=\"select_time\">\r\n            <div class=\"row\">\r\n                <div class=\"col-6 pr-2\">\r\n                    <form [formGroup]='monthLeaveForm'>\r\n                        <ion-item>\r\n                            <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\" (ionChange)=getMounthlyLeaveByUser(monthLeaveForm.value) max=\"{{nextYear}}\" [disabled]=\"isVisible\">\r\n                            </ion-datetime>\r\n                        </ion-item>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-6 pl-2\">\r\n                    <form [formGroup]='yearLeaveForm'>\r\n                        <ion-item>\r\n                            <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\" (ionChange)=getYearlyLeaveByUser(yearLeaveForm.value) max=\"{{nextYear}}\" [disabled]=\"isVisible\">\r\n                            </ion-datetime>\r\n                        </ion-item>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"loader\" *ngIf=\"loading\">\r\n            <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n        </div>\r\n        <div *ngIf=\"isMonthLeave == 2\">\r\n            <div class=\"leave_details\" *ngFor=\"let leave of monthlyLeaveOfUser\">\r\n                <div class=\"card\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <div *ngIf=\"leave.status == 'Rejected'\">\r\n                                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\">\r\n                                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Approved'\">\r\n                                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                            <div *ngIf=\"leave.status == 'Rejected'\">\r\n                                <span style=\"color: #FF0000;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\">\r\n                                <span style=\"color: #FFAA00;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Approved'\">\r\n                                <span style=\"color: #3998C5;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"isMonthLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"text-center no-leaves-of-month\">There\r\n        are No\r\n        leaves</span></div>\r\n\r\n        <div *ngIf=\"isYearLeave == 2\">\r\n            <div class=\"leave_details\" *ngFor=\"let leave of yearlyLeaveOfUser\">\r\n                <div class=\"card\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <div *ngIf=\"leave.status == 'Rejected'\">\r\n                                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\">\r\n                                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Approved'\">\r\n                                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4 text-center\">\r\n                            <div *ngIf=\"leave.status == 'Rejected'\">\r\n                                <span style=\"color: #FF0000;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\">\r\n                                <span style=\"color: #FFAA00;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Approved'\">\r\n                                <span style=\"color: #3998C5;\">{{getNoOfDays(leave)}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                            </div>\r\n                            <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isYearLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"no-leave-of-year\">There are No\r\n        leaves</span></div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"toolbar-color1\">\r\n        <ion-row>\r\n            <ion-col size='4'>\r\n                <div class=\"rao_logo\">\r\n                    <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"middle_sec text-center\">\r\n                    <span>Profile</span>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size='4'>\r\n                <div class=\"icon_sec\">\r\n                    <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n                </div>\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n        <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div *ngIf=\"userDetail\" class=\"user_detail\">\r\n        <div class=\"single_user_profile text-center\">\r\n            <div class=\"user_img\">\r\n                <div class=\"profile_img\">\r\n                    <img *ngIf=\"!userDetail.profilePhoto\" class=\"circle-ronded\" src=\"../../assets/images/person.png\">\r\n                    <img *ngIf=\"userDetail.profilePhoto\" class=\"circle-ronded\" src=\"{{path}}{{userDetail.profilePhoto}}\">\r\n                </div>\r\n                <input type=\"file\" name=\"files\" value=\"files\" id=\"customFile\" accept=\"image/png, image/jpeg, image/jpg\" hidden (change)=\"fileSelected($event)\">\r\n                <label for=\"customFile\" class=\"profile_and_cover_edit text-center\" title=\"Change Profile\"><i\r\n            class=\"fa fa-camera\" aria-hidden=\"true\"></i></label>\r\n            </div>\r\n            <!-- <ion-img *ngIf=\"urls\" [src]=\"urls\"></ion-img> -->\r\n        </div>\r\n        <div class=\"usee_name_text\">\r\n            <p class=\"text-center\">{{userDetail.name}}</p>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4\"><span class=\"user_heading\">first Name : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_name\">{{userDetail.name}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4\"><span class=\"user_heading\">email : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_email\">{{userDetail.email}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4\"><span class=\"user_heading\">DOB : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_name\">{{userDetail.dob}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4\"><span class=\"user_heading\">Phone No. : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_name\">{{userDetail.phone}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4\"><span class=\"user_heading\">Location : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_name\">{{userDetail.location}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-content row\">\r\n                <div class=\"col-4 pr-0\"><span class=\"user_heading\">Designation : </span></div>\r\n                <div class=\"col-8\">\r\n                    <span class=\"single_user_name\">{{userDetail.designation}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\nion-content {\n  padding: 10px;\n}\n\nion-content .row {\n  margin: 0px !important;\n}\n\n.all_user_pic {\n  width: 100%;\n}\n\n.all_user_pic .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n}\n\n.all_user_pic .card p {\n  margin-bottom: 0px;\n}\n\n.all_user_pic .user_profile {\n  width: calc(100%/3 - 14px);\n  border-radius: 8px;\n  background-color: #fff;\n  color: #3998C5;\n  margin: 11px 0px 0px 11px;\n  cursor: pointer;\n}\n\n.all_user_pic .user_profile .card-body {\n  padding: 10px 5px;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.all_user_pic .user_profile .allUser {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.all_user_pic .user_profile:hover {\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.all_user_pic .user_profile:hover .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile:hover .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user_profile:focus {\n  box-shadow: none;\n  outline: none;\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.user_profile:focus .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile:focus .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9BZG1pbi9hbGwtdXNlci9hbGwtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vYWxsLXVzZXIvYWxsLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0k7RUFDRSxzQkFBQTtBQ05OOztBRGFJO0VBQ0UsaUNBQUE7QUNWTjs7QURpQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2RKOztBRGtCQTtFQUNFLGdDQUFBO0FDZkY7O0FEa0JBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ2ZGOztBRG1CQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hCRjs7QURrQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2hCSjs7QURxQkE7RUFDRSxlQWhFYztFQWlFZCxXQUFBO0VBQ0EsZ0JBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNsQkY7O0FEdUJBO0VBQ0UsYUFBQTtBQ3BCRjs7QURzQkU7RUFDRSxzQkFBQTtBQ3BCSjs7QUR3QkE7RUFDRSxXQUFBO0FDckJGOztBRHVCRTtFQUNFLG9DQUFBO0FDckJKOztBRHNCSTtFQUNFLGtCQUFBO0FDcEJOOztBRHdCRTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDdEJOOztBRHlCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUN2Qk47O0FEd0JLO0VBQ0csZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3RCUjs7QUQwQkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3hCTjs7QUQ0QkU7RUFDRSx5QkFuSVk7RUFvSVosV0FBQTtFQUNBLGtCQUFBO0FDMUJKOztBRDRCSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUMxQk47O0FENEJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQzFCUjs7QURnQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkE1SmM7RUE2SmQsV0FBQTtFQUNBLGtCQUFBO0FDN0JGOztBRCtCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUM3Qko7O0FEK0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQzdCTiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2FsbC11c2VyL2FsbC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgLS1jb2xvciAgICAgICAgOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlYyB7XHJcbiAgei1pbmRleCA6IC0xO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodCAgIDogMTdweDtcclxuICB0b3AgICAgIDogMTBweDtcclxufVxyXG5cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnQgaGVyZVxyXG5pb24tY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFsbF91c2VyX3BpYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIHB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyX3Byb2ZpbGUge1xyXG4gICAgd2lkdGggICAgICAgICAgIDogY2FsYygxMDAlLzMgLSAxNHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjMzk5OEM1O1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogMTFweCAwcHggMHB4IDExcHg7XHJcbiAgICBjdXJzb3IgICAgICAgICAgOiBwb2ludGVyO1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgbWFyZ2luIDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZV9pbWcge1xyXG4gICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgICB3aWR0aCAgICAgICAgOiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWxsVXNlciB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51c2VyX3Byb2ZpbGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogOHB4O1xyXG5cclxuICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgIGhlaWdodCAgICAgICA6IDYwcHg7XHJcbiAgICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xyXG5cclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGggOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnVzZXJfcHJvZmlsZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdyAgICAgIDogbm9uZTtcclxuICBvdXRsaW5lICAgICAgICAgOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogOHB4O1xyXG5cclxuICAucHJvZmlsZV9pbWcge1xyXG4gICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xyXG5cclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGggOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn0iLCIjZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnJvdyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGxfdXNlcl9waWMge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hbGxfdXNlcl9waWMgLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG59XG4uYWxsX3VzZXJfcGljIC5jYXJkIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGUge1xuICB3aWR0aDogY2FsYygxMDAlLzMgLSAxNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgbWFyZ2luOiAxMXB4IDBweCAwcHggMTFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlIC5wcm9maWxlX2ltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlIC5wcm9maWxlX2ltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGUgLmFsbFVzZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZTpob3ZlciAucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZTpob3ZlciAucHJvZmlsZV9pbWcgaW9uLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnVzZXJfcHJvZmlsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4udXNlcl9wcm9maWxlOmZvY3VzIC5wcm9maWxlX2ltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnVzZXJfcHJvZmlsZTpmb2N1cyAucHJvZmlsZV9pbWcgaW9uLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.ts ***!
  \******************************************************/
/*! exports provided: AllUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserComponent", function() { return AllUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




var AllUserComponent = /** @class */ (function () {
    function AllUserComponent(_userService) {
        this._userService = _userService;
        this.path = _config__WEBPACK_IMPORTED_MODULE_3__["config"].baseMediaUrl;
        this.loading = false;
    }
    AllUserComponent.prototype.ngOnInit = function () {
        this.getAllUser();
    };
    /**
     * get all user
     */
    AllUserComponent.prototype.getAllUser = function () {
        var _this = this;
        this.loading = true;
        this._userService.getAllUser().subscribe(function (res) {
            console.log("all user=>", res);
            _this.allUser = res.data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    AllUserComponent.prototype.changeToDarkColor = function () {
        this.currentColor = 'danger';
    };
    AllUserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    AllUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-user',
            template: __webpack_require__(/*! raw-loader!./all-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html"),
            styles: [__webpack_require__(/*! ./all-user.component.scss */ "./src/app/Admin/all-user/all-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AllUserComponent);
    return AllUserComponent;
}());



/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n  padding: 6px 0px;\n}\n\n.nav-link:hover {\n  padding: 6px 0px;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar {\n  height: 107px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_profile {\n  position: absolute;\n  left: 0;\n  right: 0px;\n  z-index: 1111;\n  bottom: -34px;\n}\n\n.user_profile .profile_img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile .profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.all_content {\n  padding: 10px;\n  z-index: 100;\n}\n\n.leave_status {\n  margin-bottom: 15px;\n}\n\n.title_text {\n  margin-top: 42px;\n}\n\n.title_text p {\n  text-transform: uppercase;\n  color: #01023F;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.leave_status ul li {\n  list-style: none;\n  display: inline-block;\n  width: 33.33%;\n}\n\n.nav-tabs {\n  border: 1px solid #3998C5;\n  border-radius: 30px;\n  padding: 0px;\n}\n\n.nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  padding: 6px 0px;\n  font-size: 15px;\n  color: #000;\n}\n\n.nav-link:hover {\n  border: none !important;\n}\n\n.nav-item a.active {\n  border: 1px solid #3998C5 !important;\n  text-decoration: none;\n  background-color: #3998C5;\n  border-radius: 30px;\n  border-color: #3998C5;\n  color: #fff;\n  font-weight: bold;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: 0px !important;\n}\n\n.aproved_leaves span {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.absent_user_name a {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.dataNotAvalible span {\n  font-size: 15px;\n  color: #000;\n  font-weight: 300;\n}\n\n.absent_emp_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 6px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n  pointer-events: auto;\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.alertCustomCss {\n  background-color: #01023F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9BZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FEU1E7RUFDSSxzQkFBQTtBQ05aOztBRGFRO0VBQ0ksaUNBQUE7QUNWWjs7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxnQ0FBQTtBQ1pKOztBRGVBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ1pKOztBRGdCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNaUjs7QURnQkE7RUFDSSxlQTdFUTtFQThFUixXQUFBO0VBQ0EsZ0JBQUE7QUNiSjs7QURnQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2JKOztBRGlCQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ2RKOztBRGVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2JSOztBRGNRO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1paOztBRGlCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDZEo7O0FEaUJBO0VBQ0ksbUJBQUE7QUNkSjs7QURpQkE7RUFDSSxnQkFBQTtBQ2RKOztBRGVJO0VBQ0kseUJBQUE7RUFDQSxjQTlIUTtFQStIUixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2JSOztBRGlCQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDZEo7O0FEaUJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNkSjs7QURpQkE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZEo7O0FEaUJBO0VBQ0ksdUJBQUE7QUNkSjs7QURpQkE7RUFDSSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBL0pTO0VBZ0tULG1CQUFBO0VBQ0EscUJBaktTO0VBa0tULFdBQUE7RUFDQSxpQkFBQTtBQ2RKOztBRGlCQTtFQUNJLDZCQUFBO0FDZEo7O0FEa0JJO0VBQ0ksZUFBQTtFQUNBLGNBN0tLO0FDOEpiOztBRG1CQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNoQko7O0FEb0JJO0VBQ0ksZUFBQTtFQUNBLGNBMUxLO0FDeUtiOztBRHNCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNuQlI7O0FEdUJBO0VBQ0kseUJBdk1TO0VBd01ULGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQko7O0FEdUJBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDcEJKOztBRHVCQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDcEJKOztBRHVCQTtFQUNJLFlBQUE7RUFDQSx5QkE3T1k7RUE4T1osbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxvQ0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSxnQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSx5QkFqUVM7RUFrUVQsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxtQkFBQTtBQ3BCSjs7QURxQkk7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0E1UUs7RUE2UUwsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNuQlI7O0FEd0JJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3JCUjs7QUR5QkE7RUFDSSx5QkF0U1k7QUNnUmhCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplOiAxNXB4O1xyXG4kdGV4dF9jb2xvcjogIzM5OThDNTtcclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG51bCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxufVxyXG5cclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmxvZ29faW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRfc2l6ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2VjIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnQgXHJcbi51c2VyX3Byb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMTExO1xyXG4gICAgYm90dG9tOiAtMzRweDtcclxuICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWxsX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmxlYXZlX3N0YXR1cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGVfdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWF2ZV9zdGF0dXMgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbn1cclxuXHJcbi5uYXYtdGFicyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIGEuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXh0X2NvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFwcm92ZWRfbGVhdmVzIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hYnNlbnRfdXNlcl9uYW1lIHtcclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRhTm90QXZhbGlibGUge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYnNlbnRfZW1wX3RleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2tlcjpjaGVja2VkKy5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3IhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWFzb25fdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLm9rX2J0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZV9idG4ge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFsZXJ0Q3VzdG9tQ3NzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG59IiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDEwN3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlcl9wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMTExO1xuICBib3R0b206IC0zNHB4O1xufVxuLnVzZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi51c2VyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmFsbF9jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubGVhdmVfc3RhdHVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnRpdGxlX3RleHQge1xuICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuLnRpdGxlX3RleHQgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVfc3RhdHVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMuMzMlO1xufVxuXG4ubmF2LXRhYnMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW0gYS5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5OEM1ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMzk5OEM1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFwcm92ZWRfbGVhdmVzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OEM1O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWJzZW50X3VzZXJfbmFtZSBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuLmRhdGFOb3RBdmFsaWJsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFic2VudF9lbXBfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm1vZGFsLWJvZHkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVhc29uX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ub2tfYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5va19idG4gbGFiZWwge1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNsb3NlX2J0biBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5hbGVydEN1c3RvbUNzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG59Il19 */"

/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_userService, _leaveService, alertController) {
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.todaysLeave = [];
        this.approvedLeaves = [];
        this.pendingLeaves = [];
        this.isReasonVisible = false;
        this.loading = false;
        this.todayLeave = false;
        this.approvedLeave = false;
        this.pendingLeave = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.todayDate = new Date().toISOString();
        this.todayDate = this.todayDate.split("T")[0];
        this.todayDate = this.todayDate.split("-");
        console.log(this.todayDate);
        this.getUserDetail();
        this.todayNotPresentUser();
        $(".nav-item  a ").click(function () {
            $(".nav-item  a").removeClass("active");
            $(this).addClass("active");
        });
    };
    /**
     * Get Single user details
     */
    DashboardComponent.prototype.getUserDetail = function () {
        var _this = this;
        this._userService.getUserDetail().subscribe(function (res) {
            console.log("user details==========>", res.data);
            _this.UserDetail = res.data;
            console.log("data=======>", res.data, _this.UserDetail);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Get user whose not present today
     */
    DashboardComponent.prototype.todayNotPresentUser = function () {
        var _this = this;
        this.loading = true;
        this.approvedLeaves = [];
        this.pendingLeaves = [];
        console.log("today not present user");
        this._leaveService.todayNotPresentUser().subscribe(function (res) {
            console.log("not present user", res);
            _this.todaysLeave = res.data;
            _this.todayLeavesCount = res.data.length;
            _this.approvedLeave = false;
            _this.approvedLeave = false;
            if (!_this.todayLeavesCount) {
                _this.todayLeave = true;
            }
            _this.loading = false;
            console.log("not present user=======>", res, _this.todaysLeave, _this.todayLeavesCount);
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    /**
     * Get Approved Leaves
     */
    DashboardComponent.prototype.getApprovedLeaves = function () {
        var _this = this;
        console.log("approved leaves");
        this.pendingLeaves = [];
        this.todaysLeave = [];
        this.loading = true;
        this._leaveService.getApprovedLeaves().subscribe(function (res) {
            _this.approvedLeaves = res.data;
            _this.approvedLeavesCount = res.data.length;
            _this.todayLeave = false;
            _this.pendingLeave = false;
            if (!_this.approvedLeavesCount) {
                _this.approvedLeave = true;
            }
            _this.loading = false;
            console.log("approved leaves===", res, _this.approvedLeaves, _this.approvedLeavesCount);
        }, function (err) {
            console.log("err");
            _this.loading = false;
        });
    };
    /**
     * Get Pending Leaves
     */
    DashboardComponent.prototype.getPendingLeaves = function () {
        var _this = this;
        console.log("Pending leaves");
        this.loading = true;
        this.approvedLeaves = [];
        this.todaysLeave = [];
        this._leaveService.getPendingLeaves().subscribe(function (res) {
            _this.pendingLeaves = res.data;
            _this.pendingLeavesCount = res.data.length;
            _this.loading = false;
            _this.todayLeave = false;
            _this.approvedLeave = false;
            if (!_this.pendingLeavesCount) {
                _this.pendingLeave = true;
            }
            _this.loading = false;
            console.log("Pending leaves", res, _this.pendingLeaves, _this.pendingLeavesCount);
        }, function (err) {
            console.log("err");
            _this.loading = false;
        });
    };
    /**
     * Display leave Reason
     */
    DashboardComponent.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, extrahours, finalDate, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        date = data.date;
                        extrahours = data.extraHours;
                        console.log(extrahours);
                        finalDate = date.date + '/' + date.month + '/' + date.year;
                        console.log(finalDate);
                        console.log(date);
                        return [4 /*yield*/, this.alertController.create({
                                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                                buttons: ['OK'],
                                cssClass: 'alertCustomCss'
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getNoOfDays = function (days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                var noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                var noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    };
    /**
     * open modal of leave description
     */
    DashboardComponent.prototype.openModal = function () {
        if ($('body').hasClass('no-scroll')) {
            $('body').removeClass('no-scroll');
            $('ion-content').removeAttr('style');
        }
        else {
            $('body').addClass('no-scroll');
            $('ion-content').css({ '--overflow': 'hidden' });
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Admin/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.contect_class {\n  padding: 10px;\n}\n\n.contect_class .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.contect_class .pending_leaves span {\n  font-size: 12px;\n}\n\n.contect_class .pending_leaves .user_count,\n.contect_class .pending_leaves .user_name {\n  color: #3998C5;\n}\n\n.contect_class .pending_leaves .check_cross,\n.contect_class .pending_leaves .check_right {\n  cursor: pointer;\n  margin-top: 3px;\n}\n\n.contect_class .number_of_days {\n  color: #01023F;\n  text-align: center;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.image_profile {\n  width: 20%;\n  overflow: hidden;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}\n\n.image_profile img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.application_detail {\n  padding-left: 25%;\n}\n\n.application_detail p {\n  margin-bottom: 0px;\n}\n\n.application_detail span {\n  font-size: 16px !important;\n  color: #3998C5;\n}\n\n.accept_reject_btngroup button {\n  width: 43%;\n  color: #000;\n  padding: 5px;\n  margin: 10px;\n  text-align: center;\n  border-radius: 30px;\n  font-weight: bold;\n}\n\nbutton.btn.accept {\n  border: 2px solid #489448;\n  color: #489448;\n}\n\nbutton.btn.reject {\n  border: 2px solid #aa1010;\n  color: #aa1010;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9BZG1pbi9sZWF2ZS1hcHBsaWNhdGlvbi9sZWF2ZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vbGVhdmUtYXBwbGljYXRpb24vbGVhdmUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1E7RUFDSSxzQkFBQTtBQ05aOztBRGFRO0VBQ0ksaUNBQUE7QUNWWjs7QURnQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2JSOztBRGlCQTtFQUNJLGdDQUFBO0FDZEo7O0FEaUJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ2RKOztBRGtCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZFI7O0FEa0JBO0VBQ0ksZUE3RFE7RUE4RFIsV0FBQTtFQUNBLGdCQUFBO0FDZko7O0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNmSjs7QURtQkE7RUFDSSxhQUFBO0FDaEJKOztBRGlCSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNmUjs7QURrQlE7RUFDSSxlQUFBO0FDaEJaOztBRGtCUTs7RUFFSSxjQUFBO0FDaEJaOztBRGtCUTs7RUFFSSxlQUFBO0VBQ0EsZUFBQTtBQ2hCWjs7QURtQkk7RUFDSSxjQWpHUTtFQWtHUixrQkFBQTtBQ2pCUjs7QURxQkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNsQko7O0FEcUJBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNsQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLHlCQS9IWTtFQWdJWixtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRHFCQTtFQUNJLG9DQUFBO0FDbEJKOztBRHFCQTtFQUNJLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQW5KUztFQW9KVCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNJLG1CQUFBO0FDbEJKOztBRG1CSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQTlKSztFQStKTCxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2pCUjs7QURzQkk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkJSOztBRHVCQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ3BCSjs7QURxQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ25CUjs7QUR1QkE7RUFDSSxpQkFBQTtBQ3BCSjs7QURxQkk7RUFDSSxrQkFBQTtBQ25CUjs7QURxQkk7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUNuQlI7O0FEd0JJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3JCUjs7QUR5QkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbGVhdmUtYXBwbGljYXRpb24vbGVhdmUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZTogMTVweDtcclxuJHRleHRfY29sb3I6ICMzOTk4QzU7XHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYW9fbG9nbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDQ3cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubG9nb19pbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAkZm9udF9zaXplO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWMge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLy8gY29udGVudCBzdGFydCBoZXJlXHJcbi5jb250ZWN0X2NsYXNzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBlbmRpbmdfbGVhdmVzIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlcl9jb3VudCxcclxuICAgICAgICAudXNlcl9uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja19jcm9zcyxcclxuICAgICAgICAuY2hlY2tfcmlnaHQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubnVtYmVyX29mX2RheXMge1xyXG4gICAgICAgIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja2VyOmNoZWNrZWQrLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlYXNvbl90ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ub2tfYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlX2J0biB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzM5OThDNTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1hZ2VfcHJvZmlsZSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcGxpY2F0aW9uX2RldGFpbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMzk5OEM1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWNjZXB0X3JlamVjdF9idG5ncm91cCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MyU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uLmJ0bi5hY2NlcHQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ4OTQ0ODtcclxuICAgIGNvbG9yOiAjNDg5NDQ4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLnJlamVjdCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYWExMDEwO1xyXG4gICAgY29sb3I6ICNhYTEwMTA7XHJcbn0iLCIjZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmNvbnRlY3RfY2xhc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRlY3RfY2xhc3MgLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRlY3RfY2xhc3MgLnBlbmRpbmdfbGVhdmVzIC51c2VyX2NvdW50LFxuLmNvbnRlY3RfY2xhc3MgLnBlbmRpbmdfbGVhdmVzIC51c2VyX25hbWUge1xuICBjb2xvcjogIzM5OThDNTtcbn1cbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyAuY2hlY2tfY3Jvc3MsXG4uY29udGVjdF9jbGFzcyAucGVuZGluZ19sZWF2ZXMgLmNoZWNrX3JpZ2h0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uY29udGVjdF9jbGFzcyAubnVtYmVyX29mX2RheXMge1xuICBjb2xvcjogIzAxMDIzRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFzb25fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5va19idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9rX2J0biBsYWJlbCB7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2xvc2VfYnRuIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmltYWdlX3Byb2ZpbGUge1xuICB3aWR0aDogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuLmltYWdlX3Byb2ZpbGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYXBwbGljYXRpb25fZGV0YWlsIHtcbiAgcGFkZGluZy1sZWZ0OiAyNSU7XG59XG4uYXBwbGljYXRpb25fZGV0YWlsIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uYXBwbGljYXRpb25fZGV0YWlsIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzOTk4QzU7XG59XG5cbi5hY2NlcHRfcmVqZWN0X2J0bmdyb3VwIGJ1dHRvbiB7XG4gIHdpZHRoOiA0MyU7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYnV0dG9uLmJ0bi5hY2NlcHQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDg5NDQ4O1xuICBjb2xvcjogIzQ4OTQ0ODtcbn1cblxuYnV0dG9uLmJ0bi5yZWplY3Qge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWExMDEwO1xuICBjb2xvcjogI2FhMTAxMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.ts ***!
  \************************************************************************/
/*! exports provided: LeaveApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApplicationComponent", function() { return LeaveApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LeaveApplicationComponent = /** @class */ (function () {
    function LeaveApplicationComponent(_leavService, alertController, _toastService, localNotifications) {
        this._leavService = _leavService;
        this.alertController = alertController;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.PendingLeaves = [];
        this.loading = false;
        this.lastIndex = [];
    }
    LeaveApplicationComponent.prototype.ngOnInit = function () {
        this.getPendingLeaves();
    };
    /**
     * Get Pending Leave Application
     */
    LeaveApplicationComponent.prototype.getPendingLeaves = function () {
        var _this = this;
        this.loading = true;
        this._leavService.getPendingLeaves().subscribe(function (res) {
            _this.PendingLeaves = res.data;
            _this.pendingLeavesCount = res.data.length;
            console.log("pending leaves=======>", _this.PendingLeaves);
            _this.loading = false;
            _this.lastIndex = _this.PendingLeaves[0].totalDate;
            console.log("lastIndex:", _this.lastIndex);
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    /**
    * Display leave Reason
    */
    LeaveApplicationComponent.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, extrahours, finalDate, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        date = data.date;
                        extrahours = data.extraHours;
                        console.log(extrahours);
                        finalDate = date.date + '/' + date.month + '/' + date.year;
                        console.log(finalDate);
                        console.log(date);
                        return [4 /*yield*/, this.alertController.create({
                                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                                buttons: ['OK'],
                                cssClass: 'alertCustomCss'
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Leave Approval
     * @param {String} id
     */
    LeaveApplicationComponent.prototype.leaveApproval = function (id, status) {
        var _this = this;
        console.log(id, status);
        var obj = {
            leaveId: id,
            status: status
        };
        this._leavService.leaveApproval(obj).subscribe(function (res) {
            console.log("res========>", res);
            if (status == 'Approved') {
                _this._toastService.presentToast('Leave Approved');
            }
            else {
                _this._toastService.presentToast('Leave Rejected');
            }
            console.log("pending leaves============>>>", _this.PendingLeaves);
            _this.getPendingLeaves();
        }, function (err) {
            console.log(err);
        });
    };
    LeaveApplicationComponent.prototype.getNoOfDays = function (days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                var noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                var noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    };
    /**
       * open modal of leave description
       */
    LeaveApplicationComponent.prototype.openModal = function () {
        if ($('body').hasClass('no-scroll')) {
            $('body').removeClass('no-scroll');
            $('ion-content').removeAttr('style');
        }
        else {
            $('body').addClass('no-scroll');
            $('ion-content').css({ '--overflow': 'hidden' });
        }
    };
    LeaveApplicationComponent.ctorParameters = function () { return [
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] }
    ]; };
    LeaveApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-application',
            template: __webpack_require__(/*! raw-loader!./leave-application.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html"),
            styles: [__webpack_require__(/*! ./leave-application.component.scss */ "./src/app/Admin/leave-application/leave-application.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])
    ], LeaveApplicationComponent);
    return LeaveApplicationComponent;
}());



/***/ }),

/***/ "./src/app/Admin/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.card-content {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.dataNotAvalible p {\n  text-align: center;\n  font-size: 15px;\n  margin-top: 30px;\n  color: #000;\n}\n\n.all_notification {\n  padding: 10px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 8px;\n  padding: 5px;\n}\n\n.card .card-content {\n  min-height: 34px;\n}\n\n.notify_name {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.notify_name span {\n  font-size: 12px;\n  margin-bottom: 0px !important;\n}\n\n.notify_name .user_name {\n  color: #01023F;\n}\n\n.notify_name .applied_date {\n  color: #3998C5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9BZG1pbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFRO0VBQ0ksc0JBQUE7QUNQWjs7QURjUTtFQUNJLGlDQUFBO0FDWFo7O0FEaUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNkUjs7QURrQkE7RUFDSSxnQ0FBQTtBQ2ZKOztBRGtCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNmSjs7QURpQkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURnQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2RSOztBRG1CQTtFQUNJLGVBN0RZO0VBOERaLFdBQUE7RUFDQSxnQkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2hCTjs7QURzQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDbkJKOztBRHVCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3BCUjs7QUR3QkE7RUFDSSxhQUFBO0FDckJKOztBRHdCQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDckJKOztBRHVCSTtFQUNJLGdCQUFBO0FDckJSOztBRHlCQTtFQUNJLHFCQUFBO0VBQ0EsdUNBQUE7QUN0Qko7O0FEd0JJO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FDdEJSOztBRHlCSTtFQUNJLGNBbkhRO0FDNEZoQjs7QUQwQkk7RUFDSSxjQXJIUTtBQzZGaEIiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZGVyIGRlc2lnbiBzdGFydCBcclxuJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAgICAgIH1cclxuLnJhb19sb2dvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gICAgLmxvZ29faW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgICAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgICAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgICAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgICAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICAgIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2Vje1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE3cHg7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcblxyXG4vLyAgY29udGVudCBkZXNpZ24gc3RhcnRcclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3AgICA6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5kYXRhTm90QXZhbGlibGUge1xyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBjb2xvciAgICAgOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWxsX25vdGlmaWNhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93ICAgOiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nICAgICAgOiA1cHg7XHJcblxyXG4gICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzRweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vdGlmeV9uYW1lIHtcclxuICAgIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplICAgIDogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlcl9uYW1lIHtcclxuICAgICAgICBjb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcGxpZWRfZGF0ZSB7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgfVxyXG59IiwiI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZGF0YU5vdEF2YWxpYmxlIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hbGxfbm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcmQgLmNhcmQtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDM0cHg7XG59XG5cbi5ub3RpZnlfbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xufVxuLm5vdGlmeV9uYW1lIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLm5vdGlmeV9uYW1lIC51c2VyX25hbWUge1xuICBjb2xvcjogIzAxMDIzRjtcbn1cbi5ub3RpZnlfbmFtZSAuYXBwbGllZF9kYXRlIHtcbiAgY29sb3I6ICMzOTk4QzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Admin/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(_userService, localNotifications) {
        this._userService = _userService;
        this.localNotifications = localNotifications;
        this.loading = false;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getNotification();
    };
    NotificationComponent.prototype.getNotification = function () {
        var _this = this;
        this.loading = true;
        this._userService.getNotification().subscribe(function (data) {
            _this.notificationDetails = data.data;
            _this.notificationDetailsCount = data.data.length;
            _this.loading = false;
            console.log("notification data", _this.notificationDetails);
            _this.loading = false;
            // this.scheduleNotification(this.notificationDetails)
        }, function (err) {
            console.log(err);
        });
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"] }
    ]; };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/Admin/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/Admin/reports/reports.component.scss":
/*!******************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.apply_leave {\n  padding: 10px;\n}\n.apply_leave .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 12px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n.modal-content {\n  background-color: #01023F !important;\n}\n.modal-footer {\n  overflow: hidden;\n}\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n.ok_btn {\n  margin-bottom: 10px;\n}\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZV9maW5hbC9zcmMvYXBwL0FkbWluL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNRWjtFQUNFLHNCQUFBO0FETk47QUNhSTtFQUNFLGlDQUFBO0FEVk47QUNnQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRGJKO0FDaUJBO0VBQ0UsZ0NBQUE7QURkRjtBQ2lCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QURkRjtBQ2tCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRGZGO0FDaUJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURmSjtBQ29CQTtFQUNFLGVBL0RjO0VBZ0VkLFdBQUE7RUFDQSxnQkFBQTtBRGpCRjtBQ29CQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FEakJKO0FDb0JBO0VBQ0UsYUFBQTtBRGpCRjtBQ21CRTtFQUNFLHlCQWhGWTtFQWlGWixrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGpCSjtBQ3NCQTtFQUNFLGdCQUFBO0FEbkJGO0FDcUJFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRG5CSjtBQ3FCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURuQk47QUN5QkU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRHRCSjtBQ3dCSTtFQUNFLGVBQUE7RUFDQSxjQW5IVTtBRDZGaEI7QUMyQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRHhCRjtBQzJCQTtFQUNFLFlBQUE7RUFDQyxrQkFBQTtFQUNELFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FEeEJGO0FDMEJDO0VBQ0QsdUJBQUE7QUR2QkE7QUN5QkM7RUFDRSxlQUFBO0FEdEJIO0FDeUJDO0VBQ0MscUJBQUE7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7QUR0Qkg7QUN3QkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QURyQkY7QUN1QkE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUFRLGFBQUE7RUFDVixvQ0FBQTtBRG5CQTtBQ3FCQTtFQUNFLFlBQUE7RUFDQSx5QkF2S2M7RUF3S2QsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRGxCRjtBQ29CQTtFQUNLLG9DQUFBO0FEakJMO0FDbUJBO0VBQ0UsZ0JBQUE7QURoQkY7QUNrQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBRGZGO0FDaUJBO0VBQ0UseUJBeExjO0VBeUxkLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURkRjtBQ2dCQTtFQUNFLG1CQUFBO0FEYkY7QUNjRTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQWxNVTtFQW1NVixtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRFpOO0FDaUJFO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRGROIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5hcHBseV9sZWF2ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uYXBwbHlfbGVhdmUgLmFwcGx5X2xlYXZlX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlbGVjdF90aW1lIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5zZWxlY3RfdGltZSBpb24taXRlbSB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLnNlbGVjdF90aW1lIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5sZWF2ZV9kZXRhaWxzIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGVhdmVfZGV0YWlscyAuY2FyZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTQwcHg7XG59XG5cbmlvbi1kYXRldGltZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogNHB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNGO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlYXNvbl90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm9rX2J0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ub2tfYnRuIGxhYmVsIHtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jbG9zZV9idG4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSIsIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcblxyXG4vLyBoZWFkZXIgc3RhcnRcclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlY3tcclxuICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXBwbHlfbGVhdmUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIC5hcHBseV9sZWF2ZV90ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNHB4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDdweCAxOHB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNlbGVjdF90aW1lIHtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBib3gtc2hhZG93ICAgOiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI0Q5RDlEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBoZWlnaHQgICAgICAgOiAzOHB4O1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yICAgICA6ICNEOUQ5RDk7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGVhdmVfZGV0YWlscyB7XHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdyAgIDogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogMTBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvciAgICA6ICR0ZXh0X2NvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBjb2xvciAgICAgOiAjRDlEOUQ5O1xyXG4gIGZvbnQtc2l6ZSA6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJ1xcMjc2Ric7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogNHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29sb3I6ICNEOUQ5RDk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gfVxyXG4gLml0ZW0tbmF0aXZle1xyXG5wYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLmRhdGV0aW1lLXRleHR7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuXHJcbiBsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO3BhZGRpbmc6IDI1cHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcbi5tb2RhbC1ib2R5IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufVxyXG4ucmVhc29uX3RleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLm9rX2J0bntcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGxhYmVse1xyXG4gICAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2VfYnRue1xyXG4gIGxhYmVse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBjb2xvcjogIzM5OThDNTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(_leaveService) {
        this._leaveService = _leaveService;
        this.monthLeaveReport = [];
        this.yearLeaveReport = [];
        this.loading = false;
        this.curruntDate = new Date().toISOString();
        this.isVisible = false;
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ReportsComponent.prototype.ngOnInit = function () {
        console.log("curruntdate====>", this.curruntDate);
        this.nextYear = this.curruntDate.split("-")[0];
        this.nextYear = this.nextYear++;
        this.nextYear = this.nextYear + +1;
        console.log("nextyear=====>", this.nextYear);
    };
    /**
     * Get month leave report
     * @param {object} data
     */
    ReportsComponent.prototype.getMonthLeaveReport = function (data) {
        var _this = this;
        this.isVisible = true;
        $(".no-leave-of-year").css({ 'display': 'none' });
        this.yearLeaveReport = [];
        this.loading = true;
        console.log(data);
        this._leaveService.getMonthLeaveReport(data).subscribe(function (res) {
            _this.monthLeaveReport = res.data;
            _this.monthLeaveCount = res.data.length;
            if (!res.data.length) {
                $('.no-leaves-of-month').css({ 'display': 'block' });
            }
            console.log("month report=======>", res);
            _this.loading = false;
            _this.isVisible = false;
            _this.monthLeaveForm.reset();
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.isVisible = false;
        });
    };
    /**
     * Get year leave report
     * @param {Object} data
     */
    ReportsComponent.prototype.getYearLeaveReport = function (data) {
        var _this = this;
        this.isVisible = true;
        $('.no-leaves-of-month').css({ 'display': 'none' });
        this.monthLeaveReport = [];
        console.log(data);
        this.loading = true;
        this._leaveService.getYearLeaveReport(data).subscribe(function (res) {
            _this.yearLeaveReport = res.data;
            _this.yearLeaveCount = res.data.length;
            if (!res.data.length) {
                $('.no-leave-of-year').css({ 'display': 'block' });
            }
            console.log("year report=======>", _this.yearLeaveReport, _this.yearLeaveCount);
            _this.loading = false;
            _this.isVisible = false;
            _this.yearLeaveForm.reset();
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.isVisible = false;
        });
    };
    /**
     * Get number of days
     * @param {String} days
     */
    ReportsComponent.prototype.getNoOfDays = function (days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                var noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                var noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    };
    /**
       * open modal of leave description
       */
    ReportsComponent.prototype.openModal = function () {
        if ($('body').hasClass('no-scroll')) {
            $('body').removeClass('no-scroll');
            $('ion-content').removeAttr('style');
        }
        else {
            $('body').addClass('no-scroll');
            $('ion-content').css({ '--overflow': 'hidden' });
        }
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] }
    ]; };
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/Admin/reports/reports.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023f !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n}\n\n.single_user {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nlabel.profile_and_cover_edit {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023f;\n  z-index: 111;\n  line-height: 19px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023f;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023f;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998c5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023f;\n  text-transform: capitalize;\n}\n\n.card .single_user_email {\n  font-size: 12px;\n  color: #01023f;\n}\n\n.leave_report {\n  margin-top: 15px;\n}\n\n.leave_report .leave_report_text {\n  background-color: #3998c5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.leave_details span {\n  font-size: 12px;\n  color: #3998c5;\n}\n\n.no_leaves p {\n  font-size: 15px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023f;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023f !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998c5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998c5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998c5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vc2luZ2xlLXVzcmUvc2luZ2xlLXVzcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0kscUJBQUE7QUNKSjs7QURTUTtFQUNJLHNCQUFBO0FDTlo7O0FEYVE7RUFDSSxpQ0FBQTtBQ1ZaOztBRGdCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDYlI7O0FEaUJBO0VBQ0ksZ0NBQUE7QUNkSjs7QURpQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDZEo7O0FEa0JBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZko7O0FEZ0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkUjs7QURrQkE7RUFDSSxlQTFFUTtFQTJFUixXQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2ZKOztBRGtCQTtFQUNJLGFBQUE7QUNmSjs7QURrQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2ZKOztBRG1CQTtFQUNJLGFBQUE7QUNoQko7O0FEbUJBO0VBQ0ksZUFBQTtBQ2hCSjs7QURtQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNoQko7O0FEbUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2hCSjs7QURpQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDZlI7O0FEbUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQTNJWTtFQTRJWixZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ2hCSjs7QURvQkk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQXpKUTtFQTBKUixpQkFBQTtFQUNBLGVBQUE7QUNqQlI7O0FEcUJBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURtQkk7RUFDSSxlQUFBO0VBQ0EsY0FuS0s7RUFvS0wsZ0JBQUE7RUFDQSwwQkFBQTtBQ2pCUjs7QURtQkk7RUFDSSxlQUFBO0VBQ0EsY0EzS1E7RUE0S1IsMEJBQUE7QUNqQlI7O0FEbUJJO0VBQ0ksZUFBQTtFQUNBLGNBaExRO0FDK0poQjs7QURxQkE7RUFDSSxnQkFBQTtBQ2xCSjs7QURtQkk7RUFDSSx5QkFyTEs7RUFzTEwsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2pCUjs7QURzQkk7RUFDSSxlQUFBO0VBQ0EsY0FsTUs7QUMrS2I7O0FEdUJBO0VBQ0ksZUFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNwQko7O0FEdUJBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7QUNwQko7O0FEdUJBO0VBQ0ksWUFBQTtFQUNBLHlCQXJPWTtFQXNPWixtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDcEJKOztBRHVCQTtFQUNJLG9DQUFBO0FDcEJKOztBRHVCQTtFQUNJLGdCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLHlCQXpQUztFQTBQVCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDcEJKOztBRHVCQTtFQUNJLG1CQUFBO0FDcEJKOztBRHFCSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQXBRSztFQXFRTCxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ25CUjs7QUR3Qkk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckJSIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vc2luZ2xlLXVzcmUvc2luZ2xlLXVzcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzZjtcclxuJGZvbnRfc2l6ZTogMTVweDtcclxuJHRleHRfY29sb3I6ICMzOTk4YzU7XHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxudWwge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTAyM2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhb19sb2dvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNDdweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5sb2dvX2ltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgICBmb250LXNpemU6ICRmb250X3NpemU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5tZW51X2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51X2ljb246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmljb25fc2VjIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnQgIGhlcmVcclxuLnVzZXJfZGV0YWlsIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGVfdXNlcl9wcm9maWxlIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnNpbmdsZV91c2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDhweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGVfaW1nIHtcclxuICAgIHdpZHRoOiAxMDhweDtcclxuICAgIGhlaWdodDogMTA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxubGFiZWwucHJvZmlsZV9hbmRfY292ZXJfZWRpdCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIHotaW5kZXg6IDExMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLnVzZWVfbmFtZV90ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIC51c2VyX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIC5zaW5nbGVfdXNlcl9uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZV91c2VyX2VtYWlsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGVhdmVfcmVwb3J0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAubGVhdmVfcmVwb3J0X3RleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMThweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxlYXZlX2RldGFpbHMge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLm5vX2xlYXZlcyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja2VyOmNoZWNrZWQrLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlYXNvbl90ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ub2tfYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlX2J0biB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzM5OThjNTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59IiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzZiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubWVudV9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA0MHB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5tZW51X2ljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlcl9kZXRhaWwge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2luZ2xlX3VzZXJfcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNpbmdsZV91c2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDEwOHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wcm9maWxlX2ltZyB7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZmlsZV9pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5sYWJlbC5wcm9maWxlX2FuZF9jb3Zlcl9lZGl0IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM2Y7XG4gIHotaW5kZXg6IDExMTtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTAyM2Y7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4udXNlZV9uYW1lX3RleHQgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMTAyM2Y7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHBhZGRpbmc6IDlweDtcbn1cbi5jYXJkIC51c2VyX2hlYWRpbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OGM1O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jYXJkIC5zaW5nbGVfdXNlcl9uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAxMDIzZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZCAuc2luZ2xlX3VzZXJfZW1haWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDEwMjNmO1xufVxuXG4ubGVhdmVfcmVwb3J0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5sZWF2ZV9yZXBvcnQgLmxlYXZlX3JlcG9ydF90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThjNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sZWF2ZV9kZXRhaWxzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OGM1O1xufVxuXG4ubm9fbGVhdmVzIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNmICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlYXNvbl90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThjNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm9rX2J0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ub2tfYnRuIGxhYmVsIHtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OGM1O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jbG9zZV9idG4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThjNTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.ts ***!
  \************************************************************/
/*! exports provided: SingleUsreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUsreComponent", function() { return SingleUsreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var SingleUsreComponent = /** @class */ (function () {
    function SingleUsreComponent(route, _userService, _leaveService, alertController) {
        this.route = route;
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.userLeaves = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
        this.loading = false;
    }
    SingleUsreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.userId = param.userId;
            console.log("userId==========>", _this.userId);
            _this.getUserById(_this.userId);
            _this.getLeaveByUserId(_this.userId);
        });
    };
    /**
     * Get user by Userid
     * @param {String} userId
     */
    SingleUsreComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.loading = true;
        console.log("userId===========>", userId);
        this._userService.getUserById(userId).subscribe(function (res) {
            _this.singleUser = res.data;
            // this.singleUser.dob = this.singleUser.dob.split("T")[0];
            console.log("res of single user=========>", res, _this.singleUser);
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    /**
     * Get leave By userId
     * @param {String} userId
     */
    SingleUsreComponent.prototype.getLeaveByUserId = function (userId) {
        var _this = this;
        console.log('userid=======>', userId);
        this._leaveService.getLeaveByUserId(userId).subscribe(function (res) {
            _this.userLeaves = res.data;
            console.log("res of leave by userid====>", res);
        }, function (err) {
            console.log(err);
        });
    };
    /**
    * Display leave Reason
    */
    SingleUsreComponent.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, extrahours, finalDate, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        date = data.date;
                        extrahours = data.extraHours;
                        console.log(extrahours);
                        finalDate = date.date + '/' + date.month + '/' + date.year;
                        console.log(finalDate);
                        console.log(date);
                        return [4 /*yield*/, this.alertController.create({
                                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                                buttons: ['OK'],
                                cssClass: 'alertCustomCss'
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleUsreComponent.prototype.getNoOfDays = function (days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                var noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                var noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    };
    /**
     * open modal of leave description
     */
    SingleUsreComponent.prototype.openModal = function () {
        if ($('body').hasClass('no-scroll')) {
            $('body').removeClass('no-scroll');
            $('ion-content').removeAttr('style');
        }
        else {
            $('body').addClass('no-scroll');
            $('ion-content').css({ '--overflow': 'hidden' });
        }
    };
    SingleUsreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    SingleUsreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-usre',
            template: __webpack_require__(/*! raw-loader!./single-usre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html"),
            styles: [__webpack_require__(/*! ./single-usre.component.scss */ "./src/app/Admin/single-usre/single-usre.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], SingleUsreComponent);
    return SingleUsreComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../leave-form/leave-form.component */ "./src/app/leave-form/leave-form.component.ts");
/* harmony import */ var _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../leave-history/leave-history.component */ "./src/app/leave-history/leave-history.component.ts");
/* harmony import */ var _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/dashboard/dashboard.component */ "./src/app/Admin/dashboard/dashboard.component.ts");
/* harmony import */ var _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Admin/all-user/all-user.component */ "./src/app/Admin/all-user/all-user.component.ts");
/* harmony import */ var _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Admin/single-usre/single-usre.component */ "./src/app/Admin/single-usre/single-usre.component.ts");
/* harmony import */ var _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Admin/reports/reports.component */ "./src/app/Admin/reports/reports.component.ts");
/* harmony import */ var _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Admin/leave-application/leave-application.component */ "./src/app/Admin/leave-application/leave-application.component.ts");
/* harmony import */ var _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Admin/notification/notification.component */ "./src/app/Admin/notification/notification.component.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");

















var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                        children: [
                            {
                                path: '',
                                redirectTo: 'profile',
                                pathMatch: 'full'
                            },
                            {
                                path: 'profile',
                                component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
                            },
                            {
                                path: 'leave-form',
                                component: _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"]
                            },
                            {
                                path: 'leave-history',
                                component: _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"]
                            },
                            {
                                path: 'dashboard',
                                component: _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
                            },
                            {
                                path: 'all-user',
                                component: _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"]
                            },
                            {
                                path: 'single-user/:userId',
                                component: _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"]
                            },
                            {
                                path: 'report',
                                component: _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"]
                            },
                            {
                                path: 'leave-application',
                                component: _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"]
                            },
                            {
                                path: 'notification',
                                component: _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
                            }
                        ]
                    }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
                _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"],
                _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"],
                _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"],
                _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"],
                _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"],
                _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"],
                _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
            ],
            providers: [
                _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\nion-toolbar .toolbar-color1 {\n  height: 98px;\n}\n.logo_img {\n  width: 184px;\n  height: 83px;\n  margin: auto;\n  padding: 6px;\n}\n.logo_img img {\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user_profile {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  z-index: 1111;\n  bottom: -32px;\n  height: 72px;\n  width: 100%;\n  margin: auto;\n}\n.profile_img {\n  height: 72px;\n  width: 72px;\n  overflow: hidden;\n  margin: auto;\n  cursor: pointer;\n  outline: none !important;\n}\n.profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  border-radius: 50%;\n  outline: none !important;\n}\np {\n  color: #01023F;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n.menu_content {\n  margin-top: 50px;\n}\n.developer_menu {\n  margin-top: 62px;\n}\n.developer_page {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  position: relative;\n}\n.developer_page:nth-child(odd) {\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px;\n  margin: 12px 35px 12px 0px;\n}\n.developer_page:nth-child(even) {\n  border-top-left-radius: 35px;\n  border-bottom-left-radius: 35px;\n  margin: 12px 0px 12px 35px;\n}\n.logout {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  border-top-left-radius: 35px !important;\n  border-bottom-left-radius: 35px !important;\n  margin: 12px 0px 12px 35px !important;\n  position: relative;\n}\n.page_list:focus,\n.logout:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n.developer_page::after,\n.logout::after,\n.notification::after,\n.logout::after {\n  content: \"❯\";\n  position: absolute;\n  right: 26px;\n  top: 10px;\n  z-index: 1;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEREo7QUNLSTtFQUNJLFlBQUE7QURGUjtBQ01BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBREhKO0FDSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FERlI7QUNNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREhKO0FDTUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBREhKO0FDSUk7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBREZSO0FDTUE7RUFDSSxjQTFEWTtFQTJEWix5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURISjtBQ01BO0VBQ0ksZ0NBQUE7QURISjtBQ09BO0VBQ0ksZ0JBQUE7QURKSjtBQ09BO0VBQ0ksZ0JBQUE7QURKSjtBQ09BO0VBQ0ksV0FBQTtFQUNBLHlCQTlFUztFQStFVCxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREpKO0FDT0E7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QURKSjtBQ09BO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FESko7QUNPQTtFQUNJLFdBQUE7RUFDQSx5QkFwR1M7RUFxR1QsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ09BOztFQUVJLDJCQUFBO0VBQ0Esd0JBQUE7QURKSjtBQ09BOzs7O0VBSUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBREpKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA5OHB4O1xufVxuXG4ubG9nb19pbWcge1xuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogODNweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA2cHg7XG59XG4ubG9nb19pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udXNlcl9wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDExMTE7XG4gIGJvdHRvbTogLTMycHg7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogNzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlX2ltZyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgY29sb3I6ICMwMTAyM0Y7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51X2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZGV2ZWxvcGVyX21lbnUge1xuICBtYXJnaW4tdG9wOiA2MnB4O1xufVxuXG4uZGV2ZWxvcGVyX3BhZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGV2ZWxvcGVyX3BhZ2U6bnRoLWNoaWxkKG9kZCkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbjogMTJweCAzNXB4IDEycHggMHB4O1xufVxuXG4uZGV2ZWxvcGVyX3BhZ2U6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDM1cHg7XG59XG5cbi5sb2dvdXQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogOHB4IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAzNXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZ2VfbGlzdDpmb2N1cyxcbi5sb2dvdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRldmVsb3Blcl9wYWdlOjphZnRlcixcbi5sb2dvdXQ6OmFmdGVyLFxuLm5vdGlmaWNhdGlvbjo6YWZ0ZXIsXG4ubG9nb3V0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI2cHg7XG4gIHRvcDogMTBweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG59IiwiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemU6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yOiAjMzk5OEM1O1xyXG51bCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgICAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvX2ltZyB7XHJcbiAgICB3aWR0aDogMTg0cHg7XHJcbiAgICBoZWlnaHQ6IDgzcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlcl9wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMTExO1xyXG4gICAgYm90dG9tOiAtMzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZV9pbWcge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0XHJcbi5tZW51X2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmRldmVsb3Blcl9tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbn1cclxuXHJcbi5kZXZlbG9wZXJfcGFnZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRldmVsb3Blcl9wYWdlOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbiAgICBtYXJnaW46IDEycHggMzVweCAxMnB4IDBweDtcclxufVxyXG5cclxuLmRldmVsb3Blcl9wYWdlOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcclxuICAgIG1hcmdpbjogMTJweCAwcHggMTJweCAzNXB4O1xyXG59XHJcblxyXG4ubG9nb3V0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmc6IDhweCAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4IWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTJweCAwcHggMTJweCAzNXB4IWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBhZ2VfbGlzdDpmb2N1cyxcclxuLmxvZ291dDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGV2ZWxvcGVyX3BhZ2U6OmFmdGVyLFxyXG4ubG9nb3V0OjphZnRlcixcclxuLm5vdGlmaWNhdGlvbjo6YWZ0ZXIsXHJcbi5sb2dvdXQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDI3NkYnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI2cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");









var HomePage = /** @class */ (function () {
    function HomePage(router, _userService, menu, plt, fcm, _toastService, localNotifications, events2) {
        var _this = this;
        this.router = router;
        this._userService = _userService;
        this.menu = menu;
        this.plt = plt;
        this.fcm = fcm;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.events2 = events2;
        this.currentUserRole = JSON.parse(localStorage.getItem('designation'));
        this.selectedPath = '';
        this.developerPages = [];
        this.adminpages = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
        this.events2.subscribe('profile', function (data) {
            console.log("data================>", data);
            _this.UserDetail.profilePhoto = data;
            console.log("profile photo updated", _this.UserDetail);
        });
        this._userService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
        console.log("this.curruntUserRole====>", this.currentUserRole);
        this.getUserDetail();
        this.developerPages = [
            {
                title: 'Leave Form',
                url: '/home/leave-form'
            },
            {
                title: 'History',
                url: '/home/leave-history'
            },
            {
                title: 'Profile',
                url: '/home/profile'
            },
        ];
        this.adminpages = [
            {
                title: 'Dashboard',
                url: '/home/dashboard'
            },
            {
                title: 'Report',
                url: '/home/report'
            },
            {
                title: 'Leave Application',
                url: '/home/leave-application'
            },
            {
                title: 'Notifications',
                url: '/home/notification'
            },
            {
                title: 'All Users',
                url: '/home/all-user'
            }
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    /**
     * Logout user
     */
    HomePage.prototype.logOut = function () {
        var _this = this;
        console.log("log out");
        this._userService.logOut().subscribe(function (res) {
            console.log("data of login yser ", res);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.closeMenu = function () {
        this.menu.close();
    };
    /**
     * git user detail
     */
    HomePage.prototype.getUserDetail = function () {
        var _this = this;
        this._userService.getUserDetail().subscribe(function (res) {
            _this.UserDetail = res.data;
            console.log("in home page===", _this.UserDetail);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/leave-form/leave-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.all_content {\n  padding: 10px;\n}\n\n.select_date {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px 18px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.or_text {\n  color: #01023F;\n  font-size: 19px;\n  font-weight: bold;\n  padding: 5px 0px;\n}\n\nion-item {\n  height: 30px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #01023F !important;\n  background-color: #fff;\n}\n\nion-datetime,\nion-input,\nion-textarea {\n  color: #01023F;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: 1!important;\n  margin-left: 15px !important;\n}\n\n.sc-ion-textarea-md-h {\n  margin-left: 15px !important;\n  --padding-top: 0px!important;\n  --placeholder-opacity: 1!important;\n}\n\nion-button {\n  --background: #01023F !important;\n  --border-radius: 30px;\n  font-size: 14px;\n  -webkit-appearance: none !important;\n}\n\nion-button:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9sZWF2ZS1mb3JtL2xlYXZlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlYXZlLWZvcm0vbGVhdmUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0FDSko7O0FET0E7RUFDSSxxQkFBQTtBQ0pKOztBRFNRO0VBQ0ksc0JBQUE7QUNOWjs7QURhUTtFQUNJLGlDQUFBO0FDVlo7O0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNiUjs7QURpQkE7RUFDSSxnQ0FBQTtBQ2RKOztBRGlCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNkSjs7QURrQkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNmSjs7QURnQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2RSOztBRGtCQTtFQUNJLGVBMUVRO0VBMkVSLFdBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDZko7O0FEbUJBO0VBQ0ksYUFBQTtBQ2hCSjs7QURtQkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJKOztBRG1CQTtFQUNJLGNBdEdZO0VBdUdaLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRG1CQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUNoQko7O0FEbUJBOzs7RUFHSSxjQXRIWTtFQXVIWixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0FDaEJKOztBRG1CQTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ2hCSjs7QUQ4QkE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDM0JKOztBRDhCQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7QUMzQkoiLCJmaWxlIjoic3JjL2FwcC9sZWF2ZS1mb3JtL2xlYXZlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZTogMTVweDtcclxuJHRleHRfY29sb3I6ICMzOTk4QzU7XHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxudWwge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhb19sb2dvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNDdweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5sb2dvX2ltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgICBmb250LXNpemU6ICRmb250X3NpemU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlYyB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0ICBoZXJlXHJcbi5hbGxfY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0X2RhdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm9yX3RleHQge1xyXG4gICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRhcHBfYmFyX2NvbG9yIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSxcclxuaW9uLWlucHV0LFxyXG5pb24tdGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjLWlvbi10ZXh0YXJlYS1tZC1oIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4IWltcG9ydGFudDtcclxuICAgIC0tcGFkZGluZy10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAuYWRkX2xlYXZlX2J0biBidXR0b24ge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gfVxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b246Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmFkZF9sZWF2ZV9idG4gYnV0dG9uOmZvY3VzIHtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4vLyAgICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbi8vIH0iLCJ1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5hbGxfY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWxlY3RfZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3JfdGV4dCB7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTAyM0YgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWRhdGV0aW1lLFxuaW9uLWlucHV0LFxuaW9uLXRleHRhcmVhIHtcbiAgY29sb3I6ICMwMTAyM0Y7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tdGV4dGFyZWEtbWQtaCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDBweCFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/leave-form/leave-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.ts ***!
  \****************************************************/
/*! exports provided: LeaveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveFormComponent", function() { return LeaveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






// let format = require("date-fns/format");
var LeaveFormComponent = /** @class */ (function () {
    function LeaveFormComponent(_leaveService, elementRef, _toastService, localNotifications) {
        this._leaveService = _leaveService;
        this.elementRef = elementRef;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.isDisable = false;
        this.curruntDate = new Date().toISOString();
        this.noOfDays = false;
        this.shortLeave = false;
        this.isValue = false;
        this.leaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            extraHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            shortLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LeaveFormComponent.prototype.ngOnInit = function () {
        console.log("curruntdate====>", this.curruntDate);
        this.nextYear = this.curruntDate.split("-")[0];
        this.nextYear = this.nextYear++;
        this.nextYear = this.nextYear + +1;
        console.log("nextyear=====>", this.nextYear);
    };
    /**
     * Apply leave
     * @param {Object} data
     */
    LeaveFormComponent.prototype.applyLeave = function (data) {
        var _this = this;
        this.isDisable = true;
        console.log("leave application details", this.leaveForm.value);
        console.log('data===========>', data);
        if (this.leaveForm.invalid) {
            return;
        }
        console.log('data======>', data);
        this._leaveService.applyLeave(data).subscribe(function (res) {
            console.log("res of leave==========>", res);
            _this._toastService.presentToast(res.message);
            _this.leaveForm.reset();
            _this.isDisable = false;
            _this.isValue = false;
        }, function (err) {
            console.log("==========>", err);
            _this.isDisable = false;
        });
    };
    /**
     * Validtion of enter shortleave hour
     * @param {Number} e
     * @param {String} data
     */
    LeaveFormComponent.prototype.updateList = function (e, data) {
        console.log(e, data);
        if (e) {
            this.isValue = true;
        }
        else {
            this.isValue = false;
        }
        if (e > 3 && data === 'shortLeave') {
            // console.log("first ==========", e)
            alert("please enter value less than three");
            var element_1 = this.elementRef.nativeElement.querySelector('#input2');
            console.log("element -----------", element_1);
            element_1.value = 3;
        }
        else if (e < 3 && e > 1 && data === 'shortLeave') {
            var element_2 = this.elementRef.nativeElement.querySelector('#input2');
            element_2.value = e;
        }
        else if (e == "") {
            var element_3 = this.elementRef.nativeElement.querySelector('#input2');
            element_3.value = '';
        }
        else if (e < 0 && data === 'shortLeave') {
            alert("value must be positive ");
            var element_4 = this.elementRef.nativeElement.querySelector('#input2');
            element_4.value = 1;
        }
    };
    LeaveFormComponent.ctorParameters = function () { return [
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] }
    ]; };
    LeaveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-form',
            template: __webpack_require__(/*! raw-loader!./leave-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html"),
            styles: [__webpack_require__(/*! ./leave-form.component.scss */ "./src/app/leave-form/leave-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])
    ], LeaveFormComponent);
    return LeaveFormComponent;
}());



/***/ }),

/***/ "./src/app/leave-history/leave-history.component.scss":
/*!************************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\np {\n  margin: 0px;\n}\na:hover {\n  text-decoration: none;\n}\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.leave_history {\n  padding: 10px;\n}\n.leave_history .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 1px 1px 4px 1px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\n.no_leaves span {\n  font-size: 15px;\n  color: #000;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZV9maW5hbC9zcmMvYXBwL2xlYXZlLWhpc3RvcnkvbGVhdmUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNPaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRExGO0FDUUE7RUFDRSxXQUFBO0FETEY7QUNRQTtFQUNFLHFCQUFBO0FETEY7QUNVSTtFQUNFLHNCQUFBO0FEUE47QUNjSTtFQUNFLGlDQUFBO0FEWE47QUNpQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRGRKO0FDa0JBO0VBQ0UsZ0NBQUE7QURmRjtBQ2lCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QURkRjtBQ2lCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRGRGO0FDZ0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURkSjtBQ21CQTtFQUNFLGVBNUVjO0VBNkVkLFdBQUE7RUFDQSxnQkFBQTtBRGhCRjtBQ21CQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FEaEJKO0FDbUJBO0VBQ0ksYUFBQTtBRGhCSjtBQ2lCSTtFQUNJLHlCQTFGUTtFQTJGUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGZSO0FDbUJBO0VBQ0ksZ0JBQUE7QURoQko7QUNrQkk7RUFDSSxtQ0FBQTtFQUNPLHlCQUFBO0VBQ1AsbUJBQUE7RUFDQSxZQUFBO0FEaEJSO0FDa0JRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGhCWjtBQ3NCSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEbkJSO0FDcUJRO0VBQ0ksZUFBQTtFQUNBLGNBNUhJO0FEeUdoQjtBQ3dCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FEckJSO0FDd0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURyQkY7QUN3QkE7RUFDRSxZQUFBO0VBQ0Msa0JBQUE7RUFDRCxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBRHJCRjtBQ3VCQztFQUNELHVCQUFBO0FEcEJBO0FDc0JDO0VBQ0UsZUFBQTtBRG5CSCIsImZpbGUiOiJzcmMvYXBwL2xlYXZlLWhpc3RvcnkvbGVhdmUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmxlYXZlX2hpc3Rvcnkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxlYXZlX2hpc3RvcnkgLmFwcGx5X2xlYXZlX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlbGVjdF90aW1lIHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbn1cbi5zZWxlY3RfdGltZSBpb24taXRlbSB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjZGNkY2RjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG59XG4uc2VsZWN0X3RpbWUgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmxlYXZlX2RldGFpbHMgLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sZWF2ZV9kZXRhaWxzIC5jYXJkIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OEM1O1xufVxuXG4ubm9fbGVhdmVzIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuaW9uLWRhdGV0aW1lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxudWwge1xyXG4gIG1hcmdpbiA6IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlY3tcclxuICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcbi8vIGNvbnRlbnQgc3RhcnQgIGhlcmVcclxuLmxlYXZlX2hpc3Rvcnl7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLmFwcGx5X2xlYXZlX3RleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDRweDtcclxuICAgICAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICA6IDdweCAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdF90aW1lIHtcclxuICAgIG1hcmdpbjogMTVweCAwcHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJveC1zaGFkb3cgICA6IDFweCAxcHggNHB4IDFweCAjZGNkY2RjO1xyXG4gICAgICAgICAgICAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgI0Q5RDlEOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodCAgICAgICA6IDM4cHg7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yICAgICA6ICNEOUQ5RDk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGVhdmVfZGV0YWlscyB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdyAgIDogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICBwYWRkaW5nICAgICAgOiAxMHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvciAgICA6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubm9fbGVhdmVze1xyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuaW9uLWRhdGV0aW1lIHtcclxuICBjb2xvciAgICAgOiAjRDlEOUQ5O1xyXG4gIGZvbnQtc2l6ZSA6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZTo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJ1xcMjc2Ric7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogNHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29sb3I6ICNEOUQ5RDk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gfVxyXG4gLml0ZW0tbmF0aXZle1xyXG5wYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gfVxyXG4gLmRhdGV0aW1lLXRleHR7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/leave-history/leave-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.ts ***!
  \**********************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");




var LeaveHistoryComponent = /** @class */ (function () {
    function LeaveHistoryComponent(_leaveService) {
        this._leaveService = _leaveService;
        this.isMonthLeave = 0;
        this.isYearLeave = 0;
        this.monthlyLeaveOfUser = [];
        this.yearlyLeaveOfUser = [];
        this.loading = false;
        this.curruntDate = new Date().toISOString();
        this.isVisible = false;
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    LeaveHistoryComponent.prototype.ngOnInit = function () {
        console.log("curruntdate====>", this.curruntDate);
        this.nextYear = this.curruntDate.split("-")[0];
        this.nextYear = this.nextYear++;
        this.nextYear = this.nextYear + +1;
        console.log("nextyear=====>", this.nextYear);
    };
    /**
     * Get monthly leave history of user
     * @param {object} data
     */
    LeaveHistoryComponent.prototype.getMounthlyLeaveByUser = function (data) {
        var _this = this;
        this.isVisible = true;
        $(".no-leave-of-year").css({ 'display': 'none' });
        this.loading = true;
        console.log("data==========>", data);
        this.yearlyLeaveOfUser = [];
        this._leaveService.getMounthlyLeaveByUser(data).subscribe(function (res) {
            console.log("data===========>", res);
            _this.loading = false;
            _this.isVisible = false;
            _this.monthlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                _this.isMonthLeave = 2;
            }
            else {
                _this.isMonthLeave = 1;
                $('.no-leaves-of-month').css({ 'display': 'block' });
            }
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.isVisible = false;
        });
    };
    /**
     *  Get yearly leave history of user
     * @param {Object} data
     */
    LeaveHistoryComponent.prototype.getYearlyLeaveByUser = function (data) {
        var _this = this;
        this.isVisible = true;
        $('.no-leaves-of-month').css({ 'display': 'none' });
        this.monthlyLeaveOfUser = [];
        this.loading = true;
        console.log("data==========>", data);
        this._leaveService.getYearlyLeaveByUser(data).subscribe(function (res) {
            console.log("data===========>", res);
            _this.loading = false;
            _this.isVisible = false;
            _this.yearlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                _this.isYearLeave = 2;
            }
            else {
                _this.isYearLeave = 1;
                $('.no-leave-of-year').css({ 'display': 'block' });
            }
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.isVisible = false;
        });
    };
    LeaveHistoryComponent.prototype.getNoOfDays = function (days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                var noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                var noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    };
    LeaveHistoryComponent.ctorParameters = function () { return [
        { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] }
    ]; };
    LeaveHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-history',
            template: __webpack_require__(/*! raw-loader!./leave-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html"),
            styles: [__webpack_require__(/*! ./leave-history.component.scss */ "./src/app/leave-history/leave-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"]])
    ], LeaveHistoryComponent);
    return LeaveHistoryComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n  z-index: 12;\n}\n\n.user_img {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  margin: auto;\n  overflow: hidden;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nlabel.profile_and_cover_edit {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023F;\n  z-index: 111;\n  line-height: 23px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023F;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023F;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998C5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023F;\n  text-transform: capitalize;\n}\n\n.card .single_user_email {\n  font-size: 12px;\n  color: #01023F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVfZmluYWwvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURPQTtFQUNJLHFCQUFBO0FDSko7O0FEU1E7RUFDSSxzQkFBQTtBQ05aOztBRGFRO0VBQ0ksaUNBQUE7QUNWWjs7QURnQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2JSOztBRGlCQTtFQUNJLGdDQUFBO0FDZEo7O0FEaUJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ2RKOztBRGtCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZFI7O0FEa0JBO0VBQ0ksZUExRVE7RUEyRVIsV0FBQTtFQUNBLGdCQUFBO0FDZko7O0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNmSjs7QURrQkE7RUFDSSxhQUFBO0FDZko7O0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNmSjs7QURtQkE7RUFDSSxhQUFBO0FDaEJKOztBRG1CQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDaEJKOztBRG1CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ2hCSjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRGlCSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNmUjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EseUJBNUlZO0VBNklaLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDaEJKOztBRG9CSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBMUpRO0VBMkpSLGlCQUFBO0VBQ0EsZUFBQTtBQ2pCUjs7QURxQkE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDbEJKOztBRG1CSTtFQUNJLGVBQUE7RUFDQSxjQXBLSztFQXFLTCxnQkFBQTtFQUNBLDBCQUFBO0FDakJSOztBRG1CSTtFQUNJLGVBQUE7RUFDQSxjQTVLUTtFQTZLUiwwQkFBQTtBQ2pCUjs7QURtQkk7RUFDSSxlQUFBO0VBQ0EsY0FqTFE7QUNnS2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplOiAxNXB4O1xyXG4kdGV4dF9jb2xvcjogIzM5OThDNTtcclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG51bCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA0N3B4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmxvZ29faW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnRfc2l6ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1lbnVfaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIHRvcDogMTVweDtcclxufVxyXG5cclxuLm1lbnVfaWNvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaWNvbl9zZWMge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLy8gY29udGVudCBzdGFydCAgaGVyZVxyXG4udXNlcl9kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNpbmdsZV91c2VyX3Byb2ZpbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcbi51c2VyX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIHdpZHRoOiAxMDhweDtcclxuICAgIGhlaWdodDogMTA4cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wcm9maWxlX2ltZyB7XHJcbiAgICB3aWR0aDogMTA4cHg7XHJcbiAgICBoZWlnaHQ6IDEwOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxhYmVsLnByb2ZpbGVfYW5kX2NvdmVyX2VkaXQge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICB6LWluZGV4OiAxMTE7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGFwcF9iYXJfY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnNcclxufVxyXG5cclxuLnVzZWVfbmFtZV90ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIC51c2VyX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIC5zaW5nbGVfdXNlcl9uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZV91c2VyX2VtYWlsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgfVxyXG59IiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubWVudV9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA0MHB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5tZW51X2ljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlcl9kZXRhaWwge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2luZ2xlX3VzZXJfcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgei1pbmRleDogMTI7XG59XG5cbi51c2VyX2ltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2ZpbGVfaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxubGFiZWwucHJvZmlsZV9hbmRfY292ZXJfZWRpdCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNGO1xuICB6LWluZGV4OiAxMTE7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDEwMjNGO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnVzZWVfbmFtZV90ZXh0IHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBwYWRkaW5nOiA5cHg7XG59XG4uY2FyZCAudXNlcl9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZCAuc2luZ2xlX3VzZXJfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMTAyM0Y7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcmQgLnNpbmdsZV91c2VyX2VtYWlsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAxMDIzRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(route, modalController, _userService, _toastService, events1) {
        this.route = route;
        this.modalController = modalController;
        this._userService = _userService;
        this._toastService = _toastService;
        this.events1 = events1;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.currentUserRole = localStorage.getItem('designation');
        this.token = JSON.parse(localStorage.getItem('accessToken'));
        this.loading = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getUserDetail();
        console.log("current user role login", this.token);
    };
    ProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        this.loading = true;
        this._userService.getUserDetail().subscribe(function (res) {
            // this.UserDetail = res.data[0];
            console.log("login user details===", res);
            _this.userDetail = res.data;
            _this.loading = false;
            console.log("this.userDetails login", _this.userDetail);
            _this.route.navigate(['login']);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    /**
     * Select file
     * @param {object} file
     */
    ProfilePage.prototype.fileSelected = function (event) {
        var _this = this;
        console.log("===============", event.target.files);
        this.urls = "";
        this.files = event.target.files[0];
        // if (this.files) {
        //   // console.log("in if")
        //   let reader = new FileReader();
        //   reader.onload = (e: any) => {
        //     this.urls = e.target.result;
        //   }
        //   reader.readAsDataURL(this.files);
        // }
        // console.log("url=>",this.urls)
        this._userService.updateProfile(this.files).subscribe(function (res) {
            console.log("res=======>", res);
            _this._toastService.presentToast(res.message);
            _this.urls = "";
            _this.userDetail.profilePhoto = res.data.profilePhoto;
            _this.events1.publish('profile', res.data.profilePhoto);
        }, function (err) {
            console.log("err=>>>>>>>>>>>>", err);
            _this._toastService.presentToast("There are some error....");
            _this.urls = "";
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/services/leave.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/leave.service.ts ***!
  \*******************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




var LeaveService = /** @class */ (function () {
    function LeaveService(http) {
        this.http = http;
    }
    /**
     * Apply leave
     * @param {Object} data
     */
    LeaveService.prototype.applyLeave = function (data) {
        console.log("leave application form details ", data);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/add-leave", data);
    };
    /**
     * Get monthly leave history of user
     * @param {object} data
     */
    LeaveService.prototype.getMounthlyLeaveByUser = function (data) {
        console.log(data);
        var detail = data.month.split("-");
        var obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-month", obj);
    };
    /**
     * Get yearly leave history of user
     * @param {object} data
     */
    LeaveService.prototype.getYearlyLeaveByUser = function (data) {
        console.log(data.year.split("-")[0]);
        var obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-year", obj);
    };
    /**
     * Get Todat not present user
     */
    LeaveService.prototype.todayNotPresentUser = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-today-not-present-users");
    };
    /**
     * Get Approved Leaves
     */
    LeaveService.prototype.getApprovedLeaves = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-approved-leaves");
    };
    /**
     * Get Pending Leaves
     */
    LeaveService.prototype.getPendingLeaves = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-pending-leaves");
    };
    /**
     * Get leaves by userId
     * @param {String} userId
     */
    LeaveService.prototype.getLeaveByUserId = function (userId) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-userId/" + userId);
    };
    /**
     * Get Month leave report
     * @param {Object} data
     */
    LeaveService.prototype.getMonthLeaveReport = function (data) {
        var detail = data.month.split("-");
        var obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-monthly-report", obj);
    };
    /**
     * Get Year leave report
     * @param  { object} data
     */
    LeaveService.prototype.getYearLeaveReport = function (data) {
        console.log(data.year.split("-")[0]);
        var obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-yearly-report", obj);
    };
    /**
     * Leave Approval
     * @param {object} data
     */
    LeaveService.prototype.leaveApproval = function (data) {
        console.log(data);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/leave-update-by-status", data);
    };
    LeaveService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeaveService);
    return LeaveService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map