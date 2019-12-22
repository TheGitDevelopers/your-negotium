import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

declare let FB: any;

@Injectable({
  providedIn: "root"
})
export class FacebookAuthService {
  constructor() {
    this.initClient();
  }

  initClient() {
    FB.init(environment.facebook);

    FB.AppEvents.logPageView(); // TODO nie wiem co robi XD
  }

  async login() {
    return new Promise<any>(function(resolve, reject) {
      try {
        FB.login(
          res => {
            console.log(res);
            resolve(res);
          },
          { scope: "email,public_profile" } // TODO scope
        );
      } catch (error) {
        console.log(error);
        reject({ status: "Unknown error", message: "Something went wrong" });
      }
    });
  }

  async logout() {
    const response = await FB.logout();
    console.log(response);
  }

  userInfo() {
    let fbUser;
    FB.api("/me?fields=email,name", res => (fbUser = res));
    return fbUser;
  }

  checkLogin() {
    let status;
    FB.getLoginStatus(res => (status = res));
    return status;
  }
}
