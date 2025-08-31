import { useField } from 'formik'
import React from 'react'

function Input({ Component, type, label, id, name }) {
    const [data, meta] = useField(name);
    const { touched, error } = meta;
    const {value, onChange, onBlur} = data;
    let borderClass = 'border-blue-400';
    if(touched && error) {
      borderClass = 'border-red-500';
    }
  return (
    <div className='flex flex-col gap-1 mb-3 max-w-[225.5px]'>
        <div className={`flex items-center border-1 ${borderClass} rounded-md gap-2 p-2 focus-within:border-blue-400`}>

        {Component && <Component className='w-5 h-5 text-white' />}
        <label htmlFor={id} className='sr-only'>{label}</label>
        <input className='focus:outline-none text-white' type={type} id={id} name={name} placeholder={`Enter ${label}`} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
       {touched && error && <div className='text-left text-red-500 text-sm font-semibold breaks-words pl-1'>{error}</div>}
</div>
  )
}

export default Input