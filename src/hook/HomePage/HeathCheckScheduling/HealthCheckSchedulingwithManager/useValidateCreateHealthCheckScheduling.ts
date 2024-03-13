import * as Yup from 'yup';
const CreateHealthCheckSchema = Yup.object().shape({
    nameDoctor: Yup.string()
    .min(2, 'Name Doctor should not be less than 2 characters!')
    .max(100, 'Name Doctor  should not exceed 100 characters!')
    .required('Please enter your Name Doctor'),
    reExaminationTime: Yup.string()
    .trim()
    .min(2, 'Re Examination Time should not be less than 2 characters!')
    .max(50, 'Re Examination Time  should not exceed 100 characters!')
    .required('Please enter your Re Examination Time'),
    reExaminationDate: Yup.string()
    .trim()
    .min(2, 'Re Examination Date should not be less than 2 characters long!')
    .max(200, 'ReExamination should not exceed 20 characters!')
    .required('Please enter your Re Examination Date'),
    reExaminationLocation: Yup.string()
    .trim()
    .min(2, 'Re Examination Location not be less than 2 characters long!')
    .max(50, 'Re Examination Location should not exceed 50 characters!')
    .required('Please enter your confirm Re Examination Location'),
    nameHospital: Yup.string()
    .trim()
    .min(2, 'Name Hospital not be less than 2 characters long!')
    .max(50, 'Name Hospital should not exceed 50 characters!')
    .required('Please enter your Name Hospital'),
    userNote: Yup.string()
    .trim()
    .min(2, 'User Note not be less than 2 characters long!')
    .max(50, 'User Note should not exceed 50 characters!')
    .required('Please enter your User Note'),
});
export default CreateHealthCheckSchema;
