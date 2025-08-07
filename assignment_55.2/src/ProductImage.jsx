import React from 'react'

function ProductImage({src, alt}) {
  return (
    <img src={src} alt={alt} className="w-full max-w-md object-contain mx-auto" />
  )
}

export default ProductImage