import * as Yup from 'yup';

const SigninWithRoleSchema = Yup.object().shape({
  role: Yup.string()
    .min(1, 'The Role must be at least 1 character long!')
    .max(50, 'Please enter the correct role for your account')
    .required('Please enter your Role User'),
  password: Yup.string()
    .min(8, 'The password must be at least 8 characters long!')
    .max(50, 'Please do not leave the Role’s password blank')
    .required('Please enter your password'),
});

export default SigninWithRoleSchema;
