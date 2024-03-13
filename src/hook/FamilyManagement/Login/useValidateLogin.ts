import * as Yup from 'yup';
import validator from 'email-validator';
const SigninSchema = Yup.object().shape({
      email: Yup.string()
    .test('email', 'Please enter a valid email format', function (value) {
      return validator.validate(value);
    })
      .max(100, 'The email should not be exceeded 100 characters!')
      .required('Please enter your email '),
      password: Yup.string()
      .min( 8, 'The password must be at least 8 characters long!')
      .max(50, 'Password must not exceed 50 characters!')
      .required('Please enter your password'),
  });
  export default SigninSchema;
