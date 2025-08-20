import React, {useState, useEffect} from 'react'
import Search from './Search';
import Sort from './Sort';
import ProductList from './ProductList';
import products from '../assets/products'

function Home() {
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
        
        <div className="flex flex-col w-full min-h-[450px] max-w-4xl bg-white rounded-lg shadow-lg my-10 px-12 py-12">
            <div className='flex justify-between mb-10'>
                <Search query={query} setQuery={setQuery} />
                <Sort sort={sort} setSort={setSort} />
            </div>
            <ProductList data={data} />
            <div className='flex justify-start gap-1 mt-10'>
                <div className='w-[50px] text-white  py-2 text-sm font-bold bg-red-600 flex items-center justify-center'>1</div>
                <div className='w-[50px] border-2 border-red-600 text-red-600 py-2 font-bold text-sm flex items-center justify-center'>2</div>
                <div className='w-[50px] border-2 border-red-600 text-red-600  py-2 font-bold text-lg flex items-center justify-center'>&rarr;</div>
            </div>
</div>
        
    )
}

export default Home