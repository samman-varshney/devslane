import React, { memo } from 'react'
import { MdOutlineCancel } from 'react-icons/md';

function Cartproduct({ product }) {
  return (
    <div className='w-full grid grid-cols-14 h-20 bg-white border-b border-gray-200 items-center'>
        <div className="col-span-1"><MdOutlineCancel className='mx-auto text-3xl text-gray-200 hover:text-red-500 cursor-pointer' /></div>
        <div className="col-span-2 ">{product.thumbnail && <img src={product.thumbnail} alt={product.title} className="w-12 h-12 object-cover" />}</div>
        <div className="col-start-4 col-end-9 text-red-400 font-semibold">{product.title}</div>
        <div className="col-start-9 col-end-11 text-gray-400 font-semibold">${product.price}</div>
        <div className="col-start-11 col-end-13"><input type="number" className='w-12 border border-gray-300 rounded-md p-1' value={product.quantity} /></div>
        <div className="col-start-13 col-end-15 text-gray-400 font-semibold">${product.subtotal}</div>
    </div>
  )
}

export default memo(Cartproduct)