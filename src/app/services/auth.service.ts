import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IAuth } from "../store/interfaces";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  authRequest(email: string, password: string):Observable<IAuth> {
    return this.http.post<IAuth>('https://ds-test-api.herokuapp.com/api/login', {email, password}).pipe(
      tap((data) => {
        localStorage.setItem('token', data.token)
        this.router.navigate(['/main'])
      })
    )
  }

}
