import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const access_token= JSON.parse(localStorage.getItem('access_token') || '{}');
    // const isPublicUrl = ( request.url.includes('login') || request.url.includes('profile')  || request.url.includes('timeline') || request.url.includes('photos') || request.url.includes('about')  );
    const isPublicUrl  = (request.url.includes('login'));
    // console.log(isPublicUrl);

    if(  !  isPublicUrl  ){ 
      const authorizedRequest = request.clone({setHeaders:{Authorization:access_token}});
      return next.handle(authorizedRequest).pipe(catchError(this.handleErrors));
    }
    return next.handle(request);
  }
  public handleErrors(error:HttpErrorResponse){
    switch(error.status){
        case 401:
          return throwError(()=> new Error ('Not Authorized'));
        default:
          return throwError(()=> new Error('Token Error'));
    }
  }
}
