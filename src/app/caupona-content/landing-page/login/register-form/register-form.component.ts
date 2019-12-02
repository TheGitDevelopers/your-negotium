import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginAuthService } from "src/app/services/login-auth.service";
import { MustMatch } from "src/app/helpers/validators/MustMatch";
import regexExpression from "src/app/helpers/regexExpression";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(fb: FormBuilder, private loginAuth: LoginAuthService) {
    this.registerForm = fb.group(
      {
        username: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(regexExpression.username)
          ]
        ],
        email: ["", [Validators.required, , Validators.email]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(regexExpression.password)
          ]
        ],
        cpassword: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(regexExpression.password)
          ]
        ]
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
    if (this.registerForm.valid)
      this.loginAuth.register(this.registerForm.value);
  }
}
