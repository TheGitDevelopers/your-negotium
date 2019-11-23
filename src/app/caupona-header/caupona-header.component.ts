import { Component, OnInit } from "@angular/core";
import { angularMath } from "angular-ts-math";
import { LoginAuthService } from "../services/login-auth.service";

@Component({
  selector: "app-caupona-header",
  templateUrl: "./caupona-header.component.html",
  styleUrls: ["./caupona-header.component.scss"]
})
export class CauponaHeaderComponent implements OnInit {
  hint = "";
  private hintsList = [
    "no guts, no story.",
    "screw it, let’s do it.",
    "my life is my argument."
  ];
  constructor(private loginAuth: LoginAuthService) {}

  ngOnInit() {
    this.hint = this.hintsList[angularMath.getIntegerRandomRange(0, 2)];
  }

  handleLogout() {
    this.loginAuth.logout();
  }
}
