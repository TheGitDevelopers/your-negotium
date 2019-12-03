import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Translations } from "src/app/constants/texts";

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

  constructor() {
    super();
  }

  changeMode() {
    this.modeOutput.emit();
  }
}
