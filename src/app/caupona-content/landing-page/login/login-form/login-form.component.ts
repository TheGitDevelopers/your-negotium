import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginAuthService } from "src/app/services/login-auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private loginAuth: LoginAuthService) {
    this.loginForm = fb.group({
      login: "",
      password: ""
    });
  }

  onSubmit(event) {
    console.log(event, this.loginForm);
    // TODO
    this.loginAuth.login("true");
  }
}
