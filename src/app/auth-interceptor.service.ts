import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token')
    if (token) {
      const headers = new HttpHeaders()
        .set('X-Token', token)
      const request = req.clone({headers});
      return next.handle(request);
    }
    return next.handle(req);
  }
}

