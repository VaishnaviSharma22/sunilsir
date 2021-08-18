import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    // const token = this.getToken();/* need to data from store */
    let token ;
    if (token) {
      if (request.url.includes('SingleUpload')) {
        request = request.clone({
          setHeaders: {
            "Authorization": `Bearer ${token}`
          }
        });
      }
      else {
        request = request.clone({
          setHeaders: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': "application/json"
          }
        });
      }
    }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type': "application/json"
        }
      });
    }
    return next.handle(request);
 }

}