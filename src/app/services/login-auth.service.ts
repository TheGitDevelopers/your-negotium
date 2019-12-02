import { Injectable, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService implements OnInit {
  token: string;
  tokenSubject = new BehaviorSubject(this.token);
  constructor(private router: Router) {
    this.checkToken();
  }

  ngOnInit() {}

  async checkToken() {
    this.token = localStorage.getItem("token");
    this.setToken(this.token);
    // TODO validate token with backend
    if (this.token) await this.verifyToken();
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

  setToken(token) {
    localStorage.setItem("token", token);
    this.token = token;
    this.tokenSubject.next(token);
  }

  async verifyToken() {
    try {
      const response = await fetch(`${environment.mainAPIUrl}verify-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: this.token })
      });
      const responseJSON = await response.json();
      const { token } = responseJSON;
      this.setToken(token);
      return true;
    } catch (Exception) {
      this.setToken("");
      console.log(Exception);
    }
  }

  register({ username, email, password }) {
    fetch(`${environment.mainAPIUrl}create-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          this.setToken(res.token);
          this.router.navigate(["/dashboard"]);
          return true;
        }
        throw { mess: "Something went wrong", error: res };
      })
      .catch(console.log);
  }

  login({ username, password }) {
    fetch(`${environment.mainAPIUrl}token-auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(res => {
        if (res.token) {
          this.setToken(res.token);
          this.router.navigate(["/dashboard"]);
          return true;
        }
        throw { mess: "Something went wrong", error: res };
      })
      .catch(console.log);
  }

  logout() {
    this.setToken("");
    this.router.navigate(["/login"]);
  }
}
