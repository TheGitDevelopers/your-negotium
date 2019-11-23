import { Component } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent {
  mode = "register";

  constructor() {}

  changeMode() {
    this.mode = this.mode === "login" ? "register" : "login";
  }
}
