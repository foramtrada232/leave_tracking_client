import { Injectable } from "@angular/core";
import { tap, map, catchError } from "rxjs/operators";
import { ToastService } from './services/toast.service';
import {UserService} from './services/user.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    key = "tripion@raoinfor";

    constructor(public route: Router, public _toastService: ToastService,public _userService:UserService) {
    }
    //function which will be called for all http calls
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        console.log("token=================>", accessToken)
        //how to update the request Parameters
        if (accessToken) {
            const cloned = request.clone({
                headers: request.headers.set("token",
                    accessToken)
            });
            //logging the updated Parameters to browser's console
            // console.log("Before making api call : ", cloned);
            return next.handle(cloned).pipe(
                map((event: HttpResponse<any>) => {
                    console.log("in response= with token==========>", event);
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    console.log("interceptorsssssssss error by meeeeeeeeeee", error);
                    const errorMessage = error.error;
                    // console.log("error in interceptor", errorMessage);
                    if (error.status === 401) {
                        localStorage.removeItem('accessToken');
                        this.route.navigate(['/login']);
                        this._toastService.presentToast(errorMessage.message)
                    }
                    return throwError(error);
                })
            );
        } else {
            return next.handle(request).pipe(
                map((event: HttpResponse<any>) => {
                    console.log("in response===========>", event);
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    console.log("interceptorsssssssss without token error by meeeeeeeeeee", error);
                    const errorMessage = error.error;
                    console.log("error in interceptor", errorMessage);
                    if (error.status === 401) {
                        this._toastService.presentToast(errorMessage.message);
                        this.route.navigate(['/login']);
                    }
                    return throwError(error);
                })
            );
        }
    }
}


