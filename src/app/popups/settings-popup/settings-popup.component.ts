import { Component, OnInit } from "@angular/core";
import { GoogleAuthService } from "src/app/services/auth/google-auth.service";

@Component({
  selector: "app-settings-popup",
  templateUrl: "./settings-popup.component.html",
  styleUrls: ["./settings-popup.component.scss"]
})
export class SettingsPopupComponent implements OnInit {
  googleintegration: boolean;

  constructor(public auth: GoogleAuthService) {
    this.auth.initClient();
  }

  ngOnInit() {
    this.googleintegration = JSON.parse(
      sessionStorage.getItem("turnGoogleIntegration")
    );
    if (this.googleintegration === null) {
      this.googleintegration = false;
      sessionStorage.setItem("turnGoogleIntegration", "false");
    }
  }
  activateApi(event) {
    console.log(event.value["api-key"]);
  }
  setGoogleIntegration() {
    if (this.googleintegration)
      sessionStorage.setItem("turnGoogleIntegration", "true");
    else sessionStorage.setItem("turnGoogleIntegration", "false");
  }
}
