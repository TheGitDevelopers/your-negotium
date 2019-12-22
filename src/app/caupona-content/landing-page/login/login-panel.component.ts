import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Translations } from "src/app/constants/texts";
import { GoogleAuthService } from "src/app/services/auth/google-auth.service";
import { LoginAuthService } from "src/app/services/auth/login-auth.service";

@Component({
  selector: "app-login-panel",
  templateUrl: "./login-panel.component.html",
  styleUrls: ["./login-panel.component.scss"]
})
export class LoginPanelComponent extends Translations {
  @Input() welcomeText;
  @Input() subWelcomeText;
  @Input() asideButton;
  @Input() heading;
  @Input() mode;
  @Output() modeOutput: EventEmitter<any> = new EventEmitter();

  constructor(
    protected googleAuth: GoogleAuthService,
    protected loginAuth: LoginAuthService
  ) {
    super();
  }

  changeMode() {
    this.modeOutput.emit();
  }
}
