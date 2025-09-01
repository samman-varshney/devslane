import FormikHOC from './FormikHOC';
import React from 'react'

function Input({ Component, label, borderClass, id, ...props }) {

    const border = borderClass || 'border border-blue-400';

    return (

        <div className={`flex items-center  ${border} rounded-md gap-2 p-2 focus-within:border-blue-400`}>

            {Component && <Component className='w-5 h-5 text-white' />}
            <label htmlFor={id} className='sr-only'>{label}</label>
            <input className='focus:outline-none text-white'  placeholder={`Enter ${label}`} {...props} />
        </div>

    )
}
export const FormikInput = FormikHOC({InputComponent: Input});

export default Input