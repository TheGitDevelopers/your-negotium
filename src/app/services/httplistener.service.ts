import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";

import { HttpStatusService } from "./httpstatus.service";
import { catchError, finalize, map } from "rxjs/operators";

@Injectable()
export class HttpListenerService implements HttpInterceptor {
  constructor(private status: HttpStatusService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        return Observable.throw(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    );
  }
}
