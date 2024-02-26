import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
      email: Yup.string()
      .email('Please enter the correct email format')
      .max(100, 'The email should not be exceeded 100 characters!')
      .required('Required'),
      password: Yup.string()
      .min( 8, 'The password must be at least 8 characters long!')
      .max(50, 'Password must not exceed 50 characters!')
      .required('Required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .min( 8, 'The password must be at least 8 characters long!')
      .max(50, 'Password must not exceed 50 characters!')
      .required('Required'),
  });
  export default SignupSchema;