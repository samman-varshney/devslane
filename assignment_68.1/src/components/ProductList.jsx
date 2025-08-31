import React from 'react'
import Item from './Item'

function ProductList({data}) {
    
    return (
       <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {data.map(product => (
            <Item
                key={product.id}
                { ...product }
            />
            ))}
        </div>
      </>
    )
}

export default ProductList

