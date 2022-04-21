import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {EmployeeForm} from "./Pages/EmployeeForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <EmployeeForm/>
    </div>
  )
}

export default App
