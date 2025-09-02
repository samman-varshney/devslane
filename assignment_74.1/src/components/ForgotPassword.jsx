  import React, {useEffect} from 'react'
  import { Formik, Form } from 'formik'
  import { LiaCartArrowDownSolid } from 'react-icons/lia';
  import * as Yup from 'yup'
  import {FormikInput} from './Input';
  import { MdEmail } from 'react-icons/md';
  import { RiLockPasswordLine } from 'react-icons/ri';
  import { Link } from 'react-router-dom';


  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required.')
  })
  const onSubmit = (values) => {
    console.log(values);
    alert("your form have been submitted");
  }

  function ForgotPassword({ updateBgColor }) {
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
                initialValues={{ email: '' }}
                validationSchema={validateSchema}
                onSubmit={onSubmit}
            >
            <Form noValidate>
              <FormikInput type="email" Component={MdEmail} label="Email" id="email" name="email" />
              <button type="submit" className='bg-white text-[#264eca] rounded-md px-4 py-2 w-full active:scale-99 mt-2'>Send Reset Link</button>
            </Form>
          </Formik>
          <div className='text-white'>Back to Sign In? <Link to="/signIn" className='text-white hover:underline hover:text-gray-300'>Sign In</Link></div>
        </div>


    )
  }

  export default ForgotPassword