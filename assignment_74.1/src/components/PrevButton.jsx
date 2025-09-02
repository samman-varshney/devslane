import React from 'react' 
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
function PrevButton({id, lowerBound}) {
    return (
        <Link
            to={id > lowerBound ? `/products/${id - 1}` : "#"}
            onClick={(e) => id <= lowerBound && e.preventDefault()}
            className={`flex flex-row justify-center items-center active:scale-98 gap-1 rounded-sm text-md px-2 py-1 ${id <= lowerBound
                    ? "bg-purple-200 cursor-not-allowed opacity-70"
                    : "bg-purple-500 text-white"
                }`}
        >
            <FaArrowAltCircleLeft />
            Prev
        </Link>
    )
}

export default PrevButton