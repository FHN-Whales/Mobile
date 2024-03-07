import * as Yup from 'yup';
import validator from 'email-validator';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .test('email', 'Please enter a valid email format', function (value) {
      return validator.validate(value);
    })
    .max(100, 'The email should not exceed 100 characters!')
    .required('Please enter your email'),
  password: Yup.string()
    .trim() // Trim whitespace
    .min(8, 'The password must be at least 8 characters long!')
    .max(50, 'Password must not exceed 50 characters!')
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .trim() // Trim whitespace
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(8, 'The password must be at least 8 characters long!')
    .max(50, 'Password must not exceed 50 characters!')
    .required('Please enter your confirm password'),
});

export default SignupSchema;


