import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginAuthService } from "src/app/services/auth/login-auth.service";
import { MustMatch } from "src/app/helpers/validators/MustMatch";
import { Translations } from "src/app/constants/texts";
import {
  usernameValidators,
  emailValidators,
  passwordValidators
} from "src/app/helpers/validators";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent extends Translations {
  registerForm: FormGroup;

  constructor(fb: FormBuilder, private loginAuth: LoginAuthService) {
    super();
    this.registerForm = fb.group(
      {
        username: ["", usernameValidators],
        email: ["", emailValidators],
        password: ["", passwordValidators],
        cpassword: ["", passwordValidators]
      },
      {
        validator: MustMatch("password", "cpassword")
      }
    );
  }

  getControlError(control) {
    return this.registerForm.controls[control].errors;
  }

  onSubmit(event) {
    console.log(event, this.registerForm);
    if (this.registerForm.valid) {
      this.loginAuth.register(this.registerForm.value).then(res => {
        if (res.error) {
          this.registerForm.controls["username"].setErrors({
            userExist: true
          });
        }
      });
    }
  }
}
