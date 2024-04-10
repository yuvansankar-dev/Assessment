import React from 'react'
import queData from '../../../questions'
import "./ButtonPart.css"

export default function ButtonPart({count,setCount,data}) {
    const buttonClick=(state)=>{
if(state==="Previous"){
    setCount(pre=>pre-1);
}
else {
    setCount(pre=>pre+1);
}
    }
  return (
    <div className='button'>
      {Boolean(count)&&<button onClick={()=>buttonClick("Previous")}>Previous</button>}
      {count<queData.length-2 &&<button disabled ={!data.selectedAns.length} onClick={()=>buttonClick("Next")}>Next</button>}
      {count===queData.length-2 &&<button disabled ={!data.selectedAns.length} onClick={()=>buttonClick("Submit")}>Submit</button>}
    </div>
  )
}
