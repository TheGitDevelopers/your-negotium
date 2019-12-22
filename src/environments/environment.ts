// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC7PyZSFVCqaTLdwbJhfMLeLMQssNwwZtA",
    authDomain: "caupona.firebaseapp.com",
    databaseURL: "https://caupona.firebaseio.com",
    projectId: "caupona",
    storageBucket: "caupona.appspot.com",
    messagingSenderId: "248599801913"
  },

  google: {
    apiKey: "AIzaSyD3qpODUvKs-enaIFtUI_utPG7odT_Fa6Q",
    clientId:
      "860001357683-jp11qsi0d9id3re62dmo5ac2ju9fen1i.apps.googleusercontent.com",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ],
    scope: "https://www.googleapis.com/auth/calendar"
  },

  facebook: {
    appId: "2527277050721991",
    cookie: true,
    xfbml: true,
    version: "v5.0"
  },

  calendarAPIUrl: "http://localhost:9000/api",

  mainAPIUrl: "http://localhost:8000/api/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
