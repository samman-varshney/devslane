import React from 'react'
import '../index.css' // Ensure your CSS file is imported
import { Link } from 'react-router-dom';
export default function Item({id, url, category, title, rating, price}) {

  let stars='';
  for(let i=0; i<Math.floor(rating); i++){
    stars += '★';
  }
  if(rating > Math.floor(rating)){
    stars += '⯪'
  }
  return (
    <div className="flex flex-col items-start justify-center flex-wrap min-w-[250px] max-w-[250px]">
      <Link to={`products/${id}`} ><img src={url} alt={title} className="w-70 h-70 object-cover" /></Link>
      <div className='flex flex-col items-start justify-center gap-1 p-2'>
      <div className="text-zinc-700 text-sm font-medium" >{category}</div>
      <Link to={`products/${id}`} className="text-black text-lg font-bold" >{title}</Link>
      <div className="text-yellow-600 font-bold text-xl">{stars}</div>
      <div className="text-black" >${price}</div>
      </div>
    </div>
  )
}
