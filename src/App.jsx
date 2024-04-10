import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import queData from './questions.js'
import Content from './Components/Content/Content.jsx'
import Header from './Components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)
const [data,setData]=useState(queData)
  return (
    <>
      <Header completed={count===queData.length} data={data}/>
      {count<queData.length &&<Content data={data[count]} setData={setData} count={count} setCount={setCount}/>}
    </>
  )
}

export default App
