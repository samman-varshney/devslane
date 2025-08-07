import React from 'react'

function NextButton(props) {
  return (
    <button className='border border-2 rounded-lg bg-indigo-700 text-white px-4 py-2 mb-3' onClick={props.onClick}>Next</button>
  )
}

export default NextButton