import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    // this.http.post('API', token);
    console.log(token);

    // const credential = auth.GoogleAuthProvider.credential(token);
  }
  checkLogin() {
    return gapi.auth2
      .getAuthInstance()
      .isSignedIn()
      .get();
  }
  async getCalendar() {
    const events = await gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 100,
      orderBy: "startTime"
    });
    console.log(events);

    // SEND EVENTS
    // this.http.post('api', events);
    this.http
      .get("http://localhost:9000/api/events")
      .subscribe(e => console.log(e));

    return events;
  }
  sendEvents() {}
}
