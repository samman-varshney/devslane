import React from 'react'
import Item from './Item'

function ProductList({data}) {

    return (
       <>
        <div className="flex flex-wrap gap-5 justify-start items-start ">
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

