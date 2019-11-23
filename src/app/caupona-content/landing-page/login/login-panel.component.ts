import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login-panel",
  templateUrl: "./login-panel.component.html",
  styleUrls: ["./login-panel.component.scss"]
})
export class LoginPanelComponent {
  @Input() welcomeText;
  @Input() welcomeTextSmall;
  @Input() asideButton;
  @Input() heading;
  @Input() mode;
  @Output() modeOutput: EventEmitter<any> = new EventEmitter();

  constructor() {}

  changeMode() {
    this.modeOutput.emit();
  }
}
