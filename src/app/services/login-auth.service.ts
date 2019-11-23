import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  token: boolean;
  tokenSubject = new BehaviorSubject(this.token);
  constructor(private router: Router) {
    this.checkToken();
  }

  checkToken() {
    // TODO validate token with backend
    this.token = JSON.parse(localStorage.getItem("token"));
    this.tokenSubject.next(this.token);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event["url"] === "/login" && this.token) {
          this.router.navigate(["/dashboard"]);
        }
        if (event["url"] !== "/login" && !this.token) {
          this.router.navigate(["/login"]);
        }
      }
    });
  }

  getToken() {
    return this.tokenSubject;
  }

  login(token) {
    localStorage.setItem("token", token);
    this.token = token;
    this.tokenSubject.next(this.token);
    this.router.navigate(["/dashboard"]);
  }

  logout() {
    localStorage.setItem("token", "false");
    this.token = false;
    this.tokenSubject.next(this.token);
    this.router.navigate(["/login"]);
  }
}
