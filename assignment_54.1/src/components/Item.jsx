import React from 'react'
import '../index.css' // Ensure your CSS file is imported
export default function Item({url, category, title, price}) {
  return (
    <div className="flex flex-col items-start justify-center flex-wrap min-w-[250px] max-w-[250px]">
      <img className="w-full h-70 object-cover" src={url} alt={category} />
      <div className='flex flex-col items-start justify-center gap-1 p-2'>
      <div className="text-zinc-700 text-sm font-medium" >{category}</div>
      <div className="text-black text-lg font-bold" >{title}</div>
      <div className="text-yellow-600 font-bold text-xl">☆☆☆☆☆</div>
      <div className="text-black" >${price}</div>
      </div>
    </div>
  )
}
