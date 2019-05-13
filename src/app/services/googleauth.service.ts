import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { switchMap } from "rxjs/operators";

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
        console.log("loaded client");

        // It's OK to expose these credentials, they are client safe.
        gapi.client
          .init({
            apiKey: "AIzaSyD3qpODUvKs-enaIFtUI_utPG7odT_Fa6Q",
            clientId:
              "860001357683-jp11qsi0d9id3re62dmo5ac2ju9fen1i.apps.googleusercontent.com",
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
            ],
            scope: "https://www.googleapis.com/auth/calendar"
          })
          .then(function() {
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
      .post("http://localhost:9000/api/token", { tokenID: token })
      .subscribe(e => console.log(e), e => console.log(e));
    console.log(token);

    // const credential = auth.GoogleAuthProvider.credential(token);
  }
  checkLogin() {
    return gapi.auth2
      .getAuthInstance()
      .isSignedIn()
      .get();
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
    return this.http.post("http://localhost:9000/api/events", events);
  }

  async modifyEvents() {
    const events = await this.fetchEvents();
    const data = await this.postEvents(events);
    data.subscribe(console.log);
    console.log(events);
  }

  // async getCalendar() {
  //   // const events = await gapi.client.calendar.events.list({
  //   //   calendarId: "primary",
  //   //   timeMin: new Date().toISOString(),
  //   //   showDeleted: false,
  //   //   singleEvents: true,
  //   //   maxResults: 100,
  //   //   orderBy: "startTime"
  //   // });

  //   //
  //   // SEND&GET EVENTS
  //   //

  //   this.http
  //     .post("http://localhost:9000/api/events", events)
  //     .pipe(switchMap(() => this.http.get("http://localhost:9000/api/events")))
  //     .subscribe(console.log);
  //   return events;
  // }
}
