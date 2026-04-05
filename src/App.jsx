
import { useState } from 'react'
import './App.css'
import Pageitem from './companet/Pageitem'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [click, setClick] = useState("")
  const [date, setDate] = useState("")

  const binDelet  = () => {
    setClick("")
    setDate("")
  }

  // const handelonChange = (e) => {
  //   setClick(e.target.value);
  // }


  const handelSubmit = (e) => {
    e.preventDefault()
    const event = {
      title:click,
      date:date,
      id:uuidv4()
    }
    console.log(event);
    binDelet()
  }

  return (
    <>
      <div className='modal' onSubmit={handelSubmit}>
        <Pageitem ism="Asadbekk" />
        <br />
        <input className='input' type="text" onChange={(e) => setClick(e.target.value)} value={click} />
        <input className='input' type="date" onChange={(e) => setDate(e.target.value)} value={date} />
        {/* <h1 className='input'>Title:{click}</h1>
        <h1 className='input'>Date:{date}</h1>
        <button className='input' onClick={binDelet}>BIN</button> */}
        <button onClick={handelSubmit} className='input'>Submit</button>
      </div>
    </>
  )
}

export default App
