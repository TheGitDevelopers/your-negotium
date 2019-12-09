import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginAuthService } from "src/app/services/login-auth.service";
import { Translations } from "src/app/constants/texts";
import {
  usernameValidators,
  passwordValidators
} from "src/app/helpers/validators";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent extends Translations {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private loginAuth: LoginAuthService) {
    super();
    this.loginForm = fb.group({
      username: ["", usernameValidators],
      password: ["", passwordValidators]
    });
  }

  getControlError(control) {
    return this.loginForm.controls[control].errors;
  }

  onSubmit(event) {
    console.log(event, this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginAuth.login(this.loginForm.value).then(res => {
        if (res.error) {
          this.loginForm.controls["username"].setErrors({
            incorrectInputs: true
          });
        }
      });
    }
  }
}
