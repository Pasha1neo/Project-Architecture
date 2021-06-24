export function signupFormValidation(values) {
  const errors = {};
  if (!values.login) {
    errors.login = 'SIGNUP.SIGNUP_FORM.ERROR.REQUIRED_LOGIN';
  }
  if (!values.password) {
    errors.password = 'SIGNUP.SIGNUP_FORM.ERROR.REQUIRED_PASSWORD';
  }
  return errors;
}
