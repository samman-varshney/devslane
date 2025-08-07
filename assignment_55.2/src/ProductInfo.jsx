import React from 'react';

function ProductInfo({ title, price, description }) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-2xl font-bold text-gray-800 mb-4">${price}</p>
      <p className="text-gray-600 mb-6 text-start">{description}</p>
    </>
  );
}

export default ProductInfo;
