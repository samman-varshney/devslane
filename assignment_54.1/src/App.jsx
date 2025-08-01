import React from 'react'
import Item from './components/Item'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'


const products = [
  {
  id: 1,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
}
, {
  id: 2,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 3,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 4,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 5,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 6,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 7,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 8,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
},
{
  id: 9,
  url: 'https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cHxlbnwwfHwwfHx8MA%3D%3D',
  category: 'Electronics',
  title: 'Smartphone',
  price: 299.99
}
]

function App() {
  return (
    <div className="h-full w-full bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className='flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-lg my-10 px-12 py-12'>
      <div className='flex justify-end mb-10'>
        <select className='border-2 border-gray-400 rounded-sm text-gray-600 w-[120px]' name="sort" id="sort">
          <option value="" selected disabled>Default Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-start ">
        {products.map(product => (
          <Item
            key={product.id}
            { ...product }
          />
        ))}
      </div>
      <div className='flex justify-start gap-1 mt-10'>
        <div className='w-[50px] text-white  py-2 text-sm font-bold bg-red-600 flex items-center justify-center'>1</div>
        <div className='w-[50px] border-2 border-red-600 text-red-600 py-2 font-bold text-sm flex items-center justify-center'>2</div>
        <div className='w-[50px] border-2 border-red-600 text-red-600  py-2 font-bold text-lg flex items-center justify-center'>&rarr;</div>
      </div>
        

      </div>
      <Footer />
    </div>
  )
}

export default App