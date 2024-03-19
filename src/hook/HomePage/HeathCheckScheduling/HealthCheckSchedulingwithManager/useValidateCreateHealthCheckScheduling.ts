import * as Yup from 'yup';
const CreateHealthCheckSchema = Yup.object().shape({
    reExaminationTime: Yup.string()
    .trim()
    .min(2, 'Re Examination Time should not be less than 2 characters!')
    .max(50, 'Re Examination Time  should not exceed 100 characters!')
    .matches(/^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/, 'Invalid format for Re Examination Time. Please use the format hh:mm in 24-hour notation.')
    .required('Re Examination Time cannot be left blank.'),
    reExaminationDate: Yup.string()
    .trim()
    .min(2, 'Re Examination Date should not be less than 2 characters long!')
    .max(200, 'ReExamination should not exceed 20 characters!')
    .required('Re Examination Date cannot be left blank.'),
    reExaminationLocation: Yup.string()
    .trim()
    .min(2, 'Re Examination Location not be less than 2 characters long!')
    .max(50, 'Re Examination Location should not exceed 50 characters!')
    .required('Re Examination Location cannot be left blank.'),
    nameHospital: Yup.string()
    .trim()
    .min(2, 'Name Hospital not be less than 2 characters long!')
    .max(50, 'Name Hospital should not exceed 50 characters!')
    .required("Hospital's name cannot be left blank."),
    // userNote: Yup.string()
    // .trim()
    // .min(2, 'User Note not be less than 2 characters long!')
    // .max(50, 'User Note should not exceed 50 characters!')
    // .required('User Note cannot be left blank.'),
});
export default CreateHealthCheckSchema;
