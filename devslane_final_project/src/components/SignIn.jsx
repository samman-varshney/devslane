import  { useEffect } from 'react'
import { withFormik } from 'formik'
import { LiaCartArrowDownSolid } from 'react-icons/lia';
import * as Yup from 'yup'
import Input from './Input';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


import { getUserDetails, signIn } from '../api';
import { withAlert, withBgColor, withUser } from './withProvider';

const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required.'),
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required.')
});

const onSubmit = async (values, bag) => {
    try{
        const response = await signIn(values);
        localStorage.setItem('token', response.token);
        const userDetails = await getUserDetails(response.token);
        bag.props.setUser(userDetails);
        bag.props.setAlert({type: 'success', message: `Welcome back ${userDetails.full_name}`});
    }catch(err){
        console.error(err);
        bag.props.setAlert({type: 'error', message: 'Oops! Sign In failed'});
    }
}

const initialValues = { email: "", password: "" };

function SignInPage({
    updateBgColor,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    submitCount  
     }) {

    useEffect(() => {
        updateBgColor("bg-[#264eca]");
        return () => {
            updateBgColor("bg-gray-100");
        };
    }, [updateBgColor]);

    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <LiaCartArrowDownSolid className='text-white w-40 h-40 ' />
            <form noValidate onSubmit={handleSubmit}>
                <Input
                    type="email"
                    Component={MdEmail}
                    label="Email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    border={errors.email && (touched.email || submitCount > 0)? 'border border-red-500':"border border-blue-500"}
                    
                />
                {errors.email && (touched.email || submitCount > 0) && (
                    <div className="text-red-500 max-w-[225.5px]">{errors.email}</div>
                )}

                <Input
                    type="password"
                    Component={RiLockPasswordLine}
                    label="Password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    border={errors.password && (touched.password || submitCount > 0)? 'border border-red-500':"border border-blue-500"}
                    
                />
                {errors.password && (touched.password || submitCount > 0) && (
                    <div className="text-red-500 max-w-[225.5px] ">{errors.password}</div>
                )}

                <button
                    type="submit"
                    className='bg-white mt-2 text-[#264eca] rounded-md px-4 py-2 w-full active:scale-99'
                >
                    Sign In
                </button>
                <Link to="/forgotpassword" className='block text-white text-right w-full hover:underline hover:text-gray-300'>
                    Forgot Password?
                </Link>
            </form>
            <div className='text-white'>
                Don't have an account? <Link to="/signUp" className='text-white hover:underline hover:text-gray-300'>Sign Up</Link>
            </div>
        </div>
    )
}

const FormikSignIn = withFormik({
    mapPropsToValues: () => (initialValues),
    validationSchema: validateSchema,
    handleSubmit: onSubmit
})(SignInPage);

export default withUser(withAlert(withBgColor(FormikSignIn)));
