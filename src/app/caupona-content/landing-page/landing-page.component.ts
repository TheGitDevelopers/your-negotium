import { Component } from "@angular/core";
import { Translations } from "src/app/constants/texts";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent extends Translations {
  mode = "register";

  constructor() {
    super();
  }

  changeMode() {
    this.mode = this.mode === "login" ? "register" : "login";
  }
}
