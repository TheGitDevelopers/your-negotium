import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginAuthService } from "src/app/services/login-auth.service";
import regexExpression from "src/app/helpers/regexExpression";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private loginAuth: LoginAuthService) {
    this.loginForm = fb.group({
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regexExpression.username)
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regexExpression.password)
        ]
      ]
    });
  }

  onSubmit(event) {
    console.log(event, this.loginForm.value);
    if (this.loginForm.valid) this.loginAuth.login(this.loginForm.value);
  }
}
