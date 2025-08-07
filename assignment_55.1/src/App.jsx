import { useState } from 'react'
import './App.css'
import Table from './Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-5">
     <Table />
     <Table />
    </div>
  )
}

export default App
