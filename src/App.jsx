import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Name></Name>
      <Student name = "sobuj" age = "26" category="science"></Student>
    </>
  )
}
function Name (){
  const name = 'sobuj';
  const age = 26;
  return <h2>My name is {name}.my age is {age}</h2>
}
function Student ({name ,age, category}){
  // console.log(name,age);
  return (
    <div className='student'>
      <h2>Name: {name}</h2>
      <p>Age: {age} </p>
      <p>Group: {category} </p>
    </div>
  )
}
export default App
