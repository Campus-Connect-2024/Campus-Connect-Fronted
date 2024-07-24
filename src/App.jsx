import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-auto text-center mt-60'>
      <h1 className='text-red-700 text-4xl font-bold'>Campus Connect</h1>
      {/* <h1 className='text-3xl font-bold'>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='border-2 border-red-600 rounded-xl px-2 py-1 bg-sky-400 font-semibold text-xl'>Increment</button> */}
    </div>
  )
}

export default App
