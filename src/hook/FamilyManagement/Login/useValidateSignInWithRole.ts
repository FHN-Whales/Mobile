import * as Yup from 'yup';
const SigninWithRoleSchema = Yup.object().shape({
    role: Yup.string()
      .min( 1, 'The Role must be at least 1 characters long!')
      .max(50, 'Please do not leave the Role blank!')
      .required('Required'),
      password: Yup.string()
      .min( 8, 'The password must be at least 8 characters long!')
      .max(50, 'Please do not leave the Role’s password blank')
      .required('Required'),
  });
  export default SigninWithRoleSchema;
