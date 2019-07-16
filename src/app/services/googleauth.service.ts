import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { switchMap } from "rxjs/operators";
import { environment } from "../../environments/environment";

declare let gapi: any;

@Injectable({
  providedIn: "root"
})
export class GoogleAuthService {
  calendarItems: any[];
  constructor(private http: HttpClient) {
    this.initClient();
  }

  // Initialize the Google API client with desired scopes
  initClient() {
    return new Promise(function(resolve, reject) {
      gapi.load("client", () => {
        // It's OK to expose these credentials, they are client safe.
        gapi.client.init(environment.google).then(function() {
          // Listen for sign-in state changes.
          resolve();
          gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(item => console.log(item));
        });
      });
    });
  }
  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;

    // SEND TOKEN

    this.http
      .post(`${environment.calendarAPIUrl}/token`, { tokenID: token })
      .subscribe(e => console.log(e), e => console.log(e));
  }

  async logout() {
    const auth2 = gapi.auth2.getAuthInstance();
    await auth2.signOut().then(function() {
      auth2.disconnect();
    });
  }

  userInfo() {
    const gapiUser = gapi.auth2.getAuthInstance();
    if (gapiUser.isSignedIn.get()) {
      return {
        name: gapiUser.currentUser
          .get()
          .getBasicProfile()
          .getName()
      };
    } else {
      return false;
    }
  }

  userEmail() {
    const gapiUser = gapi.auth2.getAuthInstance();
    if (gapiUser.isSignedIn.get()) {
      return gapiUser.currentUser
        .get()
        .getBasicProfile()
        .getEmail();
    } else {
      return false;
    }
  }

  checkLogin() {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  fetchEvents() {
    return gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 100,
      orderBy: "startTime"
    });
  }

  postEvents(events) {
    return this.http.post(
      `${environment.calendarAPIUrl}/events/create`,
      events
    );
  }

  async modifyEvents(dateFrom, dateTo) {
    if (sessionStorage.getItem("turnGoogleIntegration")) {
      const initClient = await this.initClient();
      if (this.checkLogin()) {
        const events = await this.fetchEvents();
        const data = await this.postEvents(events);
        data.subscribe(console.log);
      }
    }
    return this.http.post(`${environment.calendarAPIUrl}/events`, {
      event: {
        dateFrom,
        dateTo
      }
    });
  }
}
