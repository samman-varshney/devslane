import React, { memo} from 'react'
import {Link} from 'react-router-dom';

function CartTotal({subtotal, total, length}) {


  return (
       <div className='w-full sm:grid sm:grid-cols-2 gap-5 transition-all '>
                <div className='col-start-2 flex flex-col border-1 border-gray-200'>

                    <div className='text-xl text-gray-400 font-bold border-b border-gray-200 p-2 bg-gray-50'>Cart Totals</div>
                    <div className='grid grid-cols-2  p-2  border-b border-gray-200'>
                        <span className='font-semibold text-gray-700 pl-5'>Subtotal</span>
                        <span>${subtotal}</span>
                    </div>
                    <div className='grid grid-cols-2  p-2  border-b border-gray-200'>
                        <span className='font-semibold text-gray-700 pl-5'>Total</span>
                        <span>${total}</span>
                    </div>
                    <div className='px-2 py-5 w-full'>
                        <Link to={length <= 0 ? "#" : "/checkout"} className={`font-semibold block w-full text-white text-center px-4 py-2 rounded  ${length <= 0
                            ? "bg-red-200 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-300"} `}>Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
  )
}

export default memo(CartTotal)