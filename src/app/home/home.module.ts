import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomePage } from './home.page';
import { ProfilePage } from '../profile/profile.page';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
import { LeaveHistoryComponent } from '../leave-history/leave-history.component';
import { DashboardComponent } from '../Admin/dashboard/dashboard.component';
import { AllUserComponent } from '../Admin/all-user/all-user.component';
import { SingleUsreComponent } from '../Admin/single-usre/single-usre.component';
import { ReportsComponent } from '../Admin/reports/reports.component';
import { LeaveApplicationComponent } from '../Admin/leave-application/leave-application.component';
import { NotificationComponent } from '../Admin/notification/notification.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { EditInfoComponent } from '../edit-info/edit-info.component';
import { from } from 'rxjs';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'leave-form',
            component: LeaveFormComponent
          },
          {
            path: 'profile',
            component: ProfilePage
          },
          {
            path: 'leave-history',
            component: LeaveHistoryComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'all-user',
            component: AllUserComponent
          },
          {
            path: 'single-user/:userId',
            component: SingleUsreComponent
          },
          {
            path: 'report',
            component: ReportsComponent
          },
          {
            path: 'leave-application',
            component: LeaveApplicationComponent
          },
          {
            path: 'notification',
            component: NotificationComponent
          },
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
          },
          {
            path: 'edit-info',
            component: EditInfoComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    HomePage,
    ProfilePage,
    LeaveFormComponent,
    LeaveHistoryComponent,
    DashboardComponent,
    AllUserComponent,
    SingleUsreComponent,
    ReportsComponent,
    LeaveApplicationComponent,
    NotificationComponent,
    EditInfoComponent
  ],
  providers: [
    File,
    FileTransfer,
    LocalNotifications,
  ]
})
export class HomePageModule { }
