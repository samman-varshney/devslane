import React, { useState } from 'react'
import './style.css'
import TableRow from './TableRow'
import NextButton from './NextButton'

function Table() {
  const [num, setNum] = useState(2);
  function nextNum(){
    setNum(num+1);
  }
  return (
    <div>

      <NextButton onClick={nextNum} />
      <TableRow number={num} index={1}/>
      <TableRow number={num} index={2}/>
      <TableRow number={num} index={3}/>
      <TableRow number={num} index={4}/>
      <TableRow number={num} index={5}/>
    </div>
  )
}

export default Table