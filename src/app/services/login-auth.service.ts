import { Injectable, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { userAPIPost } from "src/app/helpers/http/mainAPI";

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

  register = async ({ username, email, password }) => {
    try {
      const response = await userAPIPost("register", {
        username,
        email,
        password
      });
      const responseJSON = await response.json();
      if (response.status) {
        return this.login({ username, password });
      }
      throw { mess: "Something went wrong", error: responseJSON };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  login = async ({ username, password }) => {
    try {
      const response = await userAPIPost("authenticate", {
        username,
        password
      });
      const responseJSON = await response.json();
      if (responseJSON.jwtToken) {
        this.setToken(responseJSON.jwtToken);
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
