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

  register = async ({ username, email, password }) => {
    try {
      const response = await fetch(`${environment.mainAPIUrl}create-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      });
      const responseJSON = await response.json();
      if (responseJSON.token) {
        this.setToken(responseJSON.token);
        this.router.navigate(["/dashboard"]);
        return { success: true };
      }
      throw { mess: "Something went wrong", error: responseJSON };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  login = async ({ username, password }) => {
    try {
      const response = await fetch(`${environment.mainAPIUrl}token-auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const responseJSON = await response.json();
      // .then(response => response.json())
      if (responseJSON.token) {
        this.setToken(responseJSON.token);
        this.router.navigate(["/dashboard"]);
        return { success: true };
      }
      throw { mess: "Something went wrong", error: response };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  logout() {
    this.setToken("");
    this.router.navigate(["/login"]);
  }
}
