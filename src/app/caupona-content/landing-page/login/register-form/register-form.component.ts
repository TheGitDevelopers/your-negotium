import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      login: "",
      email: "",
      password: "",
      cpassword: ""
    });
  }

  onSubmit(event) {
    console.log(event, this.registerForm);
  }
}
