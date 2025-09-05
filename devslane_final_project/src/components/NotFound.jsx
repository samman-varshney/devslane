import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductNotFound({ search, onHome}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4">
      <FaBoxOpen className="text-purple-500 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        No Products Found
      </h2>
      <p className="text-gray-500 mb-4">
        We couldn’t find any results for {" "}
        <span className="font-medium text-gray-700">"{search}"</span>.
      </p>
      {!onHome && 
      <Link to='/'>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition"
      >
        Go Back
      </button></Link>
}
    </div>
  );
}
