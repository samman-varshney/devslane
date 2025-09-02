
import './App.css'
import Todo from './components/Todo'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col '>
              <Navbar />
              <main className='flex-grow'>
                <Todo />
              </main>
            </div>
    </>
  )
}

export default App
