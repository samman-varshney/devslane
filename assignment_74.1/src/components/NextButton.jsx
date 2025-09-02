import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa';
function NextButton({id, upperBound}) {
    return (
        <Link
            to={id < upperBound ? `/products/${+id + 1}` : "#"}
            onClick={(e) => id >= upperBound && e.preventDefault()}
            className={`flex flex-row justify-center items-center gap-1 active:scale-98 rounded-sm text-md px-2 py-1 ${id >= upperBound
                    ? "bg-purple-200 cursor-not-allowed opacity-70"
                    : "bg-purple-500 text-white"
                }`}>
            Next
            <FaArrowAltCircleRight />
        </Link>
    )
}

export default NextButton