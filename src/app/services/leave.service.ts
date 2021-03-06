import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }
  /**
   * Apply leave
   * @param {Object} data 
   */
  applyLeave(data) {
    console.log("leave application form details ",data);
    return this.http.post(config.baseApiUrl + "api/leave/add-leave", data);
  }
  /**
   * Get leave history of user
   */
  leaveHistoryByUser() {
    return this.http.get(config.baseApiUrl + "api/leave/get-leave-by-user");   
  }

  /**
   * Get Todat not present user
   */
  todayNotPresentUser() {
    return this.http.get(config.baseApiUrl + "api/leave/get-today-not-present-users");
  }

  /**
   * Get Approved Leaves
   */
  getApprovedLeaves() {
    return this.http.get(config.baseApiUrl + "api/leave/get-approved-leaves");
  }

  /**
   * Get Pending Leaves
   */
  getPendingLeaves() {
    return this.http.get(config.baseApiUrl + "api/leave/get-pending-leaves");
  }

  /**
   * Get leaves by userId
   * @param {String} userId 
   */
  getLeaveByUserId(userId) {
    return this.http.get(config.baseApiUrl + "api/leave/get-leave-by-userId/" + userId)
  }

  /**
   * Get Month leave report
   * @param {Object} data 
   */
  getMonthLeaveReport(data) {
    return this.http.post(config.baseApiUrl + "api/leave/get-monthly-report", data)
  }

  /**
   * Get Year leave report
   * @param  { object} data 
   */
  getYearLeaveReport(data) {
    return this.http.post(config.baseApiUrl + "api/leave/get-yearly-report", data);
  }
  /**
   * Leave Approval
   * @param {object} data 
   */
  leaveApproval(data) {
    console.log(data);
    return this.http.put(config.baseApiUrl + "api/leave/leave-update-by-status", data);
  }
}
