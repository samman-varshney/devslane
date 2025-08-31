import React, {use, useEffect} from 'react'
import { Formik, Form } from 'formik'
import { LiaCartArrowDownSolid } from 'react-icons/lia';
import * as Yup from 'yup'
import Input from './Input';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required.'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required.')
})
const onSubmit = (values) => {
  console.log(values);
  alert("your form have been submitted");
}

function SignInPage({ updateBgColor }) {

   useEffect(() => {

  updateBgColor("bg-[#264eca]");

  return () => {
    updateBgColor("bg-gray-100");
  };
}, [updateBgColor]); 
  return (
   
      <div className='flex flex-col gap-4 justify-center items-center'>
        <LiaCartArrowDownSolid className='text-white w-40 h-40 ' />
       <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validateSchema}
              onSubmit={onSubmit}
          >
          <Form noValidate>
            <Input type="email" Component={MdEmail} label="Email" id="email" name="email" />
            <Input type="password" Component={RiLockPasswordLine} label="Password" id="password" name="password" />
            <button type="submit" className='bg-white text-[#264eca] rounded-md px-4 py-2 w-full active:scale-99'>Sign In</button>
            <Link to="/forgotpassword" className='block text-white text-right w-full hover:underline hover:text-gray-300'>Forgot Password?</Link>
          </Form>
        </Formik>
        <div className='text-white'>Don't have an account? <Link to="/signUp" className='text-white hover:underline hover:text-gray-300'>Sign Up</Link></div>
      </div>
    

  )
}

export default SignInPage