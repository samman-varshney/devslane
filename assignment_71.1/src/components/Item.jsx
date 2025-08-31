import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function Item({ id, thumbnail, category, title, rating, price }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating > fullStars;

  return (
    <div className="min-w-[200px] w-full">
      <Link to={`/products/${id}`} className="block w-full">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-square object-cover rounded"
        />
      </Link>
      <div className="flex flex-col items-start justify-center gap-1 p-3">
        <div className="text-zinc-700 text-sm font-medium">{category}</div>
        <Link to={`/products/${id}`} className="text-black text-lg font-bold">
          {title}
        </Link>
        <div className="flex items-center text-yellow-600 text-xl">
          {Array.from({ length: fullStars }, (_, i) => (
            <FaStar key={i} />
          ))}
          {hasHalfStar && <FaStarHalfAlt />}
        </div>
        <div className="text-black font-semibold">${price}</div>
      </div>
    </div>
  );
}
