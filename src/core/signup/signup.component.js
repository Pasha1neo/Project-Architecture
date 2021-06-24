import { SignupFormContainer } from './frame/signup-form';
import { SignupFormHeader } from './frame/signup-form-header';
import { SignupFormFooter } from './frame/signup-form-footer';

export function SignupComponent(props) {
  return (
    <>
      <SignupFormHeader />
      <SignupFormContainer {...props} />
      <SignupFormFooter />
    </>
  );
}
