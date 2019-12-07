const regexExpression = {
  usernameRegex: new RegExp("^[a-z0-9_-]{6,16}"),
  // Source https://www.regextester.com/104030 TODO
  passwordRegex: new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  )
  // Source https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/ TODO
};

export default regexExpression;
