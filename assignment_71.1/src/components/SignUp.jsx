import React, {useEffect} from 'react'
import { Formik, Form } from 'formik'
import { LiaCartArrowDownSolid } from 'react-icons/lia';
import * as Yup from 'yup'
import Input from './Input';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

const validateSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Username must be at least 3 characters long').required('Username is required.'),
  email: Yup.string().email('Invalid email format').required('Email is required.'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required.')
})
const onSubmit = (values) => {
  console.log(values);
  alert("your form have been submitted");
}

function SignUpPage({updateBgColor}) {
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
              initialValues={{ username: "", email: '', password: '' }}
              validationSchema={validateSchema}
              onSubmit={onSubmit}
          >
          <Form noValidate>
            <Input type="text" Component={CgProfile} label="Username" id="username" name="username" />
            <Input type="email" Component={MdEmail} label="Email" id="email" name="email" />
            <Input type="password" Component={RiLockPasswordLine} label="Password" id="password" name="password" />
            <button type="submit" className='bg-white text-[#264eca] rounded-md px-4 py-2 w-full active:scale-99'>Sign Up</button>

          </Form>
        </Formik>
        <div className='text-white'>Already have an account? <Link to="/signIn" className='text-white hover:underline hover:text-gray-300'>Sign In</Link></div>
      </div>
    

  )
}

export default SignUpPage