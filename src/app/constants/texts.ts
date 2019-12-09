/* tslint:disable */

class Translations {
  /* GLOBAL */
  BRAND = "NEGOTIUM";
  SIGN_IN = "SIGN IN";
  SIGN_UP = "SIGN UP";

  /* LADNING PAGE */
  LP_HEADING_LOGIN = "LOGIN";
  LP_WELCOME_TEXT_LOGIN = "Haven't account?";
  LP_SUB_WELCOME_TEXT_LOGIN = "Create one below";
  LP_HEADING_REGISTER = "CREATE ACCOUNT";
  LP_WELCOME_TEXT_REGISTER = "Welcome back";
  LP_SUB_WELCOME_TEXT_REGISTER = "Stay connected with us";

  /* FORMS */
  LOGIN_INPUT_PLACEHOLDER = "Login";
  EMAIL_INPUT_PLACEHOLDER = "Email";
  PASSWORD_INPUT_PLACEHOLDER = "Password";
  CONFIRM_PASSWORD_INPUT_PLACEHOLDER = "Confirm password";

  /* FORMS error */
  IS_REQUIRED_ERROR = type => `${type} is required`;
  USERNAME_REQUIRED_ERR = this.IS_REQUIRED_ERROR("Username");
  EMAIL_REQUIRED_ERR = this.IS_REQUIRED_ERROR("Email");
  PASSWORD_REQUIRED_ERR = this.IS_REQUIRED_ERROR("Password");
  CPASSWORD_REQUIRED_ERR = this.IS_REQUIRED_ERROR("Confirm password");
  MIN_LENGTH_ERROR = (type, length) =>
    `${type} must be at least ${length} letters`;
  USERNAME_MIN_LENGTH_ERR = this.MIN_LENGTH_ERROR("Username", 6);
  PASSWORD_MIN_LENGTH_ERR = this.MIN_LENGTH_ERROR("Password", 6);
  USERNAME_PATTERN_ERR = "Username can't have any special characters";
  PASSWORD_PATTERN_ERR = "Password must contain 1 uppercase, 1 lowercase";
  USERNAME_USER_EXIST_ERR = "User with this name already exist";
  EMAIL_PATTERN_ERR = "Input must contain email";
  CPASSWORD_MUST_MATCH_ERR = "Confirm password must match password";
  LOGIN_INCORRECT_ERR = "You have entered an invalid username or password";
}

export { Translations };
