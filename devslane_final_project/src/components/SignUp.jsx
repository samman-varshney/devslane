import React, { useEffect } from 'react'
import { withFormik } from 'formik'
import { LiaCartArrowDownSolid } from 'react-icons/lia';
import * as Yup from 'yup'
import Input from './Input';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { getUserDetails, signUp } from '../api';
import { withAlert, withBgColor, withUser } from './withProvider';

const validateSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Username must be at least 3 characters long').required('Username is required.'),
  email: Yup.string().email('Invalid email format').required('Email is required.'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required.')
})
const onSubmit = async (values, bag) => {
    try{
      const data = await signUp(values);
      localStorage.setItem('token',data.token);
      const userDetails = await getUserDetails(data.token);
      bag.props.setUser(userDetails);
      bag.props.setAlert({type: 'success', message: `Welcome to AwesomeBuy ${userDetails.full_name}`});

    }catch(err){
      console.error(err);
      bag.props.setAlert({type: 'error', message: 'Sign Up failed'});
    }
}
const initialValues = { fullName: "", email: "", password: "" };

function SignUpPage({ updateBgColor,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  submitCount }) {
  useEffect(() => {

    updateBgColor("bg-[#264eca]");

    return () => {
      updateBgColor("bg-gray-100");
    };
  }, []);

  return (

    <div className='flex flex-col gap-4 justify-center items-center'>
      <LiaCartArrowDownSolid className='text-white w-40 h-40 ' />
      <form onSubmit={handleSubmit} noValidate

      >

        <Input
          type="text"
          Component={CgProfile}
          label="fullname"
          id="fullName"
          name="fullName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          border={errors.fullName && (touched.fullName || submitCount > 0) ? 'border border-red-500' : "border border-blue-500"}

        />
        {errors.fullName && (touched.fullName || submitCount > 0) && (
          <div className="text-red-500 max-w-[225.5px]">{errors.fullName}</div>
        )}
        <Input
          type="email"
          Component={MdEmail}
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          border={errors.email && (touched.email || submitCount > 0) ? 'border border-red-500' : "border border-blue-500"}

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
          border={errors.password && (touched.password || submitCount > 0) ? 'border border-red-500' : "border border-blue-500"}

        />
        {errors.password && (touched.password || submitCount > 0) && (
          <div className="text-red-500 max-w-[225.5px] ">{errors.password}</div>
        )}
        <button type="submit" className='bg-white text-[#264eca] rounded-md px-4 py-2 w-full active:scale-99 mt-2'>Sign Up</button>


      </form>
      <div className='text-white'>Already have an account? <Link to="/signIn" className='text-white hover:underline hover:text-gray-300'>Sign In</Link></div>
    </div>


  )
}
const FormikSignUp = withFormik({
  mapPropsToValues: () => (initialValues),
  validationSchema: validateSchema,
  handleSubmit: onSubmit
})(SignUpPage);

export default withAlert(withUser(withBgColor(FormikSignUp)))