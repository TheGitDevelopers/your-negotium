import { Validators } from "@angular/forms";
import regexExpression from "src/app/constants/regexExpression";

const usernameValidators = [
  Validators.required,
  Validators.minLength(6),
  Validators.pattern(regexExpression.username)
];

const emailValidators = [Validators.required, , Validators.email];

const passwordValidators = [
  Validators.required,
  Validators.minLength(6),
  Validators.pattern(regexExpression.password)
];

export { usernameValidators, emailValidators, passwordValidators };
