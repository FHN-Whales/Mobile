import * as Yup from 'yup';

const AddNewMemberSchema = Yup.object().shape({
    username: Yup.string()
    .min(1,'The name must be at least 1 characters long')
    .max(100, 'The name should not exceed 100 characters')
    .required('Required'),
     password: Yup.string()
    .trim() // Trim whitespace
    .min(8, 'The Role’s password field must be at least 8 characters long')
    .max(50, 'The Role’s password field should not exceed 50 characters')
    .required('Required'),
    dateOfBirth: Yup.string()
    .trim() // Trim whitespace
    .max(50, 'Please select a valid gender option" if not one of the specified options.'),
    gender: Yup.string()
    .trim() // Trim whitespace
    .max(50, 'Please enter a valid gender" if not one of the options specified.')
    .required('Required'),
});

export default AddNewMemberSchema;
