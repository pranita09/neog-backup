import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
      <h1>E commerce</h1>
    </div>
  )
}

export default App
