import { Injectable, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { mainAPIPost } from "src/app/helpers/http/mainAPI";
import { GoogleAuthService } from "./google-auth.service";
import { FacebookAuthService } from "./facebook-auth.service";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService implements OnInit {
  token: string;
  tokenSubject = new BehaviorSubject(this.token);
  constructor(
    private router: Router,
    private googleAuth: GoogleAuthService,
    private facebookAuth: FacebookAuthService
  ) {
    this.checkToken();
  }

  ngOnInit() {}

  async checkToken() {
    this.token = localStorage.getItem("token");
    this.setToken(this.token);
    // TODO validate token with backend
    // if (this.token) await this.verifyToken();
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

  getSavedToken() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo.token;
  }

  setUserInfo(username, token) {
    const userInfo = { username, token };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    this.token = userInfo.token;
    this.tokenSubject.next(userInfo.token);
  }

  async verifyToken() {
    try {
      const response = await mainAPIPost("verify-token", { token: this.token });
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
      const response = await mainAPIPost("create-user", {
        username,
        email,
        password
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
      const response = await mainAPIPost("token-auth", { username, password });
      const responseJSON = await response.json();
      if (responseJSON.token) {
        this.loginSuccess(responseJSON.token);
        return { success: true };
      }
      throw { mess: "Something went wrong", error: response };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  loginWithGoogle = async () => {
    const response = await this.googleAuth.login();
    if (!response.error) {
      const tokenID = response.getAuthResponse().id_token;
      this.loginSuccess(tokenID);
      return;
    }
    console.log(response, response.message);
  };

  loginWithFacebook = async () => {
    const response = await this.facebookAuth.login();
    if (response.status === "connected") {
      const tokenID = response.authResponse.signedRequest;
      this.loginSuccess(tokenID);
      return;
    }
    console.log(response, response.message);
  };

  loginSuccess = token => {
    this.setToken(token);
    this.router.navigate(["/dashboard"]);
  };

  logout() {
    this.googleAuth.logout();
    this.facebookAuth.logout();
    this.setToken("");
    this.router.navigate(["/login"]);
  }
}
