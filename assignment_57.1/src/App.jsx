import React, { useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Sort from './components/Sort';
import Search from './components/Search'
import ProductList from "./components/ProductList";

const products = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothes',
    title: 'Black tshirt for men',
    price: 699.99,
    rating: 5
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    title: 'Laptop',
    price: 1299.99,
    rating: 4.8
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home & Kitchen',
    title: 'White coffee cup',
    price: 199.99,
    rating: 3.3
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    title: 'Smartwatch',
    price: 249.99,
    rating: 4.1
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60',
    category: 'Electronics',
    title: 'Bluetooth Speaker',
    price: 149.99,
    rating: 3.9
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600&auto=format&fit=crop&q=60',
    category: 'Fashion',
    title: 'Leather Jacket',
    price: 89.99,
    rating: 2.6
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Fashion',
    title: 'Sneakers',
    price: 119.99,
    rating: 1.2
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1686961767668-391378d0a33b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home & Kitchen',
    title: 'Coffee Maker',
    price: 79.99,
    rating: 4.4
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60',
    category: 'Home & Kitchen',
    title: 'Table Lamp',
    price: 39.99,
    rating: 3.7
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1534150034764-046bf225d3fa?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Sports',
    title: 'Mountain Bike',
    price: 899.99,
    rating: 4.9
  }
];


function App() {
  const [sort, setSort] = useState('default');
  const [data, setData] = useState(products);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let filteredData = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );

    if (sort === "price-asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      filteredData.sort((a, b) => b.rating - a.rating); // higher rating first
    } else if (sort == 'title') {
      filteredData.sort((a, b) => a.title - b.title)
    }

    setData(filteredData);
  }, [sort, query]);


  return (

      <div className="h-full w-full bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className='flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-lg my-10 px-12 py-12'>
      <div className='flex justify-between mb-10'>
        <Search query={query} setQuery={setQuery}/>
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <ProductList data={data}/>
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
